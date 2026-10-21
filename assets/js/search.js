(function () {
  'use strict';

  const dialog = document.getElementById('site-search-dialog');
  const trigger = document.getElementById('nav-search-link');
  if (!dialog || !trigger) return;

  const input = document.getElementById('site-search-input');
  const results = document.getElementById('site-search-results');
  const status = document.getElementById('site-search-status');
  const close = document.getElementById('site-search-close');
  let entries = null;
  let pending = null;

  function normalize(value) {
    return String(value || '').normalize('NFKC').toLowerCase();
  }

  function render() {
    results.replaceChildren();
    const terms = normalize(input.value).trim().split(/\s+/u).filter(Boolean);
    if (!terms.length) {
      status.textContent = 'Enter a search term to begin.';
      return;
    }
    if (!entries) return;

    const matches = entries.map(entry => {
      const title = normalize(entry.title);
      const text = normalize([entry.title, entry.summary, entry.text].join(' '));
      const score = terms.every(term => text.includes(term))
        ? terms.reduce((sum, term) => sum + (title.includes(term) ? 3 : 1), 0)
        : 0;
      return { entry, score };
    }).filter(hit => hit.score > 0).sort((a, b) => b.score - a.score);

    status.textContent = matches.length
      ? matches.length + ' result' + (matches.length === 1 ? '' : 's') + (matches.length > 30 ? ' (showing the first 30).' : '.')
      : 'No results. Try a different name or keyword.';

    matches.slice(0, 30).forEach(({ entry }) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const type = document.createElement('span');
      const summary = document.createElement('p');
      // Search data is rendered as text; only same-origin HTTP(S) destinations are allowed.
      let destination;
      try { destination = new URL(entry.url, window.location.href); } catch (_) { return; }
      if (!['http:', 'https:'].includes(destination.protocol) || destination.origin !== window.location.origin) return;
      link.href = destination.href;
      link.textContent = entry.title;
      type.textContent = entry.type;
      type.className = 'search-result-type';
      summary.textContent = String(entry.summary || '').slice(0, 240);
      item.append(type, link, summary);
      results.append(item);
    });
  }

  async function load() {
    if (entries) { render(); return; }
    status.textContent = 'Loading search index…';
    if (!pending) {
      pending = fetch(dialog.dataset.indexUrl, { credentials: 'same-origin' })
        .then(response => {
          if (!response.ok) throw new Error('Search index unavailable');
          return response.json();
        })
        .then(data => {
          if (!Array.isArray(data)) throw new Error('Invalid search index');
          entries = data;
        });
    }
    try {
      await pending;
      render();
    } catch (_) {
      pending = null;
      status.textContent = 'Search could not be loaded. Close and reopen search to try again.';
    }
  }

  trigger.addEventListener('click', () => {
    if (!dialog.open) dialog.showModal();
    input.focus();
    load();
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => trigger.focus());
  input.addEventListener('input', render);
})();
