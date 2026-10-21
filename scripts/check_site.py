"""Check generated HTML, local assets, navigation targets, and metadata."""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import sys
import json
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.refs = []
        self.ids = []
        self.has_html = False
        self.title = ""
        self.in_title = False
        self.descriptions = []
        self.canonicals = []
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.has_html = True
        if tag == "title":
            self.in_title = True
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if tag == "meta" and attrs.get("name") == "description":
            self.descriptions.append(attrs.get("content", ""))
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href", ""))
        for attr in ("src", "href", "data-index-url"):
            if attrs.get(attr):
                self.refs.append(attrs[attr])

    def handle_data(self, data):
        if self.in_title:
            self.title += data

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False


def check(root):
    root = root.resolve()
    pages = {path: Page(path) for path in root.rglob("*.html")}
    errors = []
    if not pages:
        return ["No generated HTML pages found."], 0
    for path, page in pages.items():
        label = str(path.relative_to(root))
        if not page.has_html or not page.title.strip():
            errors.append(f"{label}: missing HTML document or title")
        if not page.descriptions or not page.descriptions[0].strip():
            errors.append(f"{label}: missing description")
        for description in page.descriptions:
            if "{%" in description or "{{" in description:
                errors.append(f"{label}: template code in description")
        if len(page.canonicals) != 1:
            errors.append(f"{label}: expected one canonical URL")
        for element_id, count in Counter(page.ids).items():
            if count > 1:
                errors.append(f"{label}: duplicate ID {element_id!r}")
        for ref in page.refs:
            url = urlsplit(ref)
            # External resources are outside the scope of this local check.
            if url.scheme or url.netloc or not url.path and not url.fragment:
                continue
            if not url.path:
                target = path
            elif url.path.startswith("/"):
                target = root / unquote(url.path).lstrip("/")
            else:
                target = path.parent / unquote(url.path)
            target = target.resolve()
            if not target.is_relative_to(root):
                errors.append(f"{label}: target outside site: {ref}")
                continue
            if target.is_dir():
                target /= "index.html"
            if not target.exists() and not target.suffix:
                target = target.with_suffix(".html")
            if not target.exists():
                errors.append(f"{label}: missing target {ref}")
            elif url.fragment and target in pages:
                if unquote(url.fragment) not in pages[target].ids:
                    errors.append(f"{label}: missing anchor {ref}")
    index_path = root / "assets/data/search.json"
    if index_path.exists():
        try:
            entries = json.loads(index_path.read_text(encoding="utf-8"))
            if not isinstance(entries, list) or not entries:
                raise ValueError("expected a nonempty array")
            for entry in entries:
                if not isinstance(entry, dict) or not entry.get("title") or not entry.get("url"):
                    raise ValueError("each entry needs a title and URL")
                url = urlsplit(entry["url"])
                if url.scheme or url.netloc or not url.path.startswith("/"):
                    raise ValueError(f"expected a local search URL: {entry['url']}")
                target = (root / unquote(url.path).lstrip("/")).resolve()
                if not target.is_relative_to(root):
                    raise ValueError("search target outside site")
                if target.is_dir():
                    target /= "index.html"
                if target not in pages:
                    raise ValueError(f"missing search page: {entry['url']}")
                if url.fragment and unquote(url.fragment) not in pages[target].ids:
                    raise ValueError(f"missing search anchor: {entry['url']}")
                if any(token in entry.get("text", "") for token in ("{%", "{{", "<script", "<style")):
                    raise ValueError(f"template or script code in search text: {entry['title']}")
        except (ValueError, TypeError) as error:
            errors.append(f"assets/data/search.json: {error}")
    return sorted(set(errors)), len(pages)


if __name__ == "__main__":
    errors, count = check(Path(sys.argv[1] if len(sys.argv) > 1 else "_site"))
    for error in errors:
        print(error, file=sys.stderr)
    print(f"Checked {count} HTML pages; {len(errors)} errors.")
    sys.exit(bool(errors))
