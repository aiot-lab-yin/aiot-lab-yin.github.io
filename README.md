# AIoT Lab, Reitaku University — Website

**Stack:** GitHub Pages + Jekyll + Beautiful Jekyll (remote_theme).

## Quick start
1. Upload all files to your `aiot-lab-yin.github.io` repository (root).
2. In GitHub → Settings → Pages: Source = GitHub Actions (or Deploy from a branch), Branch = `main`, Folder = `/ (root)`.
3. Visit https://aiot-lab-yin.github.io

## Edit content
- `_config.yml` — site title, nav, socials, logo
- `index.html` — homepage intro
- `aboutme.md`, `projects.md`, `publications.md`, `contact.md` — pages
- `_posts/` — news posts (Markdown)
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

## Logo
A placeholder SVG logo is in `assets/img/lab-logo.svg`. Replace it with your own when ready.
