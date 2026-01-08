---
layout: default
title: Lab News
---

<!-- Tag filter UI (works for posts that have `tags:` in front matter) -->
<div class="news-filter" style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: .5rem; align-items: center;">
  <strong style="margin-right:.25rem;">Filter:</strong>
  <button type="button" class="tag-btn is-active" data-tag="all">All</button>
  {% assign tag_names = site.tags | map: 'first' | sort_natural %}
  {% for tag_name in tag_names %}
    <button type="button" class="tag-btn" data-tag="{{ tag_name | escape }}">{{ tag_name }}</button>
  {% endfor %}
</div>

<ul class="news-list" style="list-style: none; padding-left: 0;">
  {% for post in site.posts %}
    {% assign tags_str = post.tags | join: ',' %}
    <li class="news-item" data-tags="{{ tags_str | escape }}" style="margin: .5rem 0;">
      <span>📅 <strong>{{ post.date | date: "%Y-%m-%d" }}</strong> — <a href="{{ post.url }}">{{ post.title }}</a></span>
      {% if post.tags and post.tags.size > 0 %}
        <span class="news-tags" style="margin-left: .5rem; font-size: .9em; opacity: .85;">
          {% for t in post.tags %}
            <span class="news-tag" style="display:inline-block; padding:.05rem .4rem; border:1px solid rgba(0,0,0,.15); border-radius:999px; margin-left:.25rem;">{{ t }}</span>
          {% endfor %}
        </span>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<script>
(function () {
  const btns = Array.from(document.querySelectorAll('.tag-btn'));
  const items = Array.from(document.querySelectorAll('.news-item'));

  function setActive(btn) {
    btns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  }

  function filterBy(tag) {
    const selected = (tag || 'all').toLowerCase();
    items.forEach(li => {
      const tags = (li.getAttribute('data-tags') || '').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
      const show = selected === 'all' || tags.includes(selected);
      li.style.display = show ? '' : 'none';
    });
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag') || 'all';
      setActive(btn);
      filterBy(tag);
    });
  });

  // default
  filterBy('all');
})();
</script>

<style>
  .tag-btn{cursor:pointer; border:1px solid rgba(0,0,0,.2); background:transparent; padding:.25rem .6rem; border-radius:999px;}
  .tag-btn.is-active{background:rgba(0,0,0,.08);}
</style>
