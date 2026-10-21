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
- `_data/publications.yml` — publications; omit unavailable resource links
- `projects/example-project.md` — reusable template, excluded from publishing
- `tutorials.html` — tutorial overview, automatically populated from tutorial pages
- `tutorials/` — individual tutorial pages (Markdown)

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
