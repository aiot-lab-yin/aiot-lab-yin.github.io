# AIoT Lab, Reitaku University — Website

**Stack:** GitHub Pages + Jekyll 4.4.1 + local templates adapted from Beautiful Jekyll.
Shared styling lives in `assets/css/custom.scss` and compiles to `/assets/css/custom.css`.
The site uses Bootstrap 5.3.3 for both CSS and JavaScript.

## Local preview

```bash
bundle install
bundle exec jekyll serve --future
```

Open http://localhost:4000/. Restart the server after changing `_config.yml`.

For a production build and local link checks:

```bash
JEKYLL_ENV=production bundle exec jekyll build --future --strict_front_matter
python3 scripts/check_site.py _site
node scripts/test_search.cjs
```

## Publishing

The canonical website is https://www.aiotlabs.org, matching `CNAME` and `_config.yml`.
In GitHub repository **Settings → Pages**, select **GitHub Actions** as the source
and set the custom domain to `www.aiotlabs.org`.
The workflow checks pull requests; pushes to `main` build, check, and deploy the
site. Manual runs on `main` also deploy. The `github-pages` environment must allow
`main` to deploy. This workflow does not change DNS or repository settings.

## Edit content
- `_config.yml` — site title, nav, socials, logo
- `index.html` — homepage intro
- `aboutme.md`, `projects.md`, `publications.html`, `contact.md` — pages
- `_posts/` — news posts (Markdown), with a default `post` layout
- `_data/lab_info.yml` — shared contact details and map
- `kg.html`, `_data/kg.yml` — research group directory and its active/past lists
- `_data/publications.yml` — publications; omit unavailable resource links
- `assets/data/search.json` — generated local search index
- `assets/js/search.js` — search dialog and matching logic
- `projects/example-project.md` — reusable template, excluded from publishing
- `tutorials.html` — tutorial overview, automatically populated from tutorial pages
- `tutorials/` — individual tutorial pages (Markdown)

## Research groups (kg)

The **Research Group(kg)** navigation item opens `/kg/`. Edit `_data/kg.yml`
to add groups under `active` or `past`. Each entry requires a `name` and can
include `japanese_name`, `description`, `website`, `period`, `members`, and
`topics`. The last two fields are lists. See the commented examples in the file.

Set `website` to the group's external URL or an existing local page path.
Omit it until the group website is ready; no placeholder link will appear.
To archive a group, move its entire entry from `active` to `past` and update
its `period`. The directory and local search index update during the next build.

## Add a tutorial

Create `tutorials/<venue><year>-<topic>-tutorial.md`, following the existing
`tutorials/ubicomp2026-rff-tutorial.md` naming convention. Keep related slides,
PDFs, and images in `assets/<venue><year>-<topic>-tutorial/`.

Add the following front matter to include the page in the Tutorials overview:

```yaml
---
layout: page
title: "Tutorial title"
subtitle: "Optional subtitle"
permalink: /venue2027-topic-tutorial/
tutorial: true
tutorial_date: 2027-01-01
first_presented_at: "Conference or event name"
first_presented_location: "City, Country"
summary: "A short English overview of the topic, activities, and learning outcomes."
preview_image: /assets/venue2027-topic-tutorial/slide-01.webp
preview_alt: "Description of the representative slide or image"
---
```

The overview lists tutorials by their first presentation date, newest first.
Keep each page's permalink stable when moving its source file so existing links
continue to work.

The publishing workflow follows the [GitHub Pages custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Logo
A placeholder SVG logo is in `assets/img/lab-logo.svg`. Replace it with your own when ready.

## Homepage publications

Set `featured: true` and a unique integer `featured_order` on the publications
that should appear on the homepage. The two lowest orders appear first. This
keeps the homepage order explicit when full publication dates are unknown.
New publications should still be inserted under their year in the data file.

## Search and sharing

`post_search: true` enables the navigation search dialog. The local JSON index
contains news, publications, and pages marked `searchable: true`. Search works
with English and Japanese text and does not use a third-party search service.

`share-links-active` controls individual sharing services. News posts enable
sharing by default; set `social-share: false` on a post to hide its buttons.

## Dependencies and news

Commit `Gemfile.lock` alongside changes to `Gemfile` so local builds and CI use
the same dependency versions. The lockfile includes macOS and Linux platforms.
Run `bundle install` after pulling dependency changes. News content lives in
`_posts/`; `_data/news.yml` is an empty legacy data file, not a second news source.
