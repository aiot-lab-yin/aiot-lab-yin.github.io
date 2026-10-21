// Exercise the actual search controller without external packages or network calls.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

class Element {
  constructor() { this.listeners = {}; this.children = []; this.value = ''; }
  addEventListener(name, callback) { this.listeners[name] = callback; }
  replaceChildren(...children) { this.children = children; }
  append(...children) { this.children.push(...children); }
  focus() { this.focused = true; }
  showModal() { this.open = true; }
  close() { this.open = false; this.listeners.close(); }
}

async function main() {
  const nodes = Object.fromEntries([
    'site-search-dialog', 'nav-search-link', 'site-search-input',
    'site-search-results', 'site-search-status', 'site-search-close'
  ].map(id => [id, new Element()]));
  nodes['site-search-dialog'].dataset = { indexUrl: '/assets/data/search.json' };
  const records = [
    { title: 'RF Fingerprinting', summary: 'Reproducible device identification', type: 'Tutorial', url: '/tutorial/', text: 'Wi-Fi pipeline' },
    { title: 'Wireless Security', summary: 'RF fingerprinting research', type: 'Page', url: '/research/', text: '' },
    { title: 'ゼミ募集', summary: '日本語の検索', type: 'News', url: '/news/', text: '' },
    { title: '<img src=x onerror=alert(1)>', summary: 'Markup is text', type: 'Page', url: '/text/', text: '' },
    { title: 'Unsafe target', summary: '', type: 'Page', url: 'javascript:alert(1)', text: '' }
  ];
  let calls = 0;
  vm.runInNewContext(fs.readFileSync('assets/js/search.js', 'utf8'), {
    document: { getElementById: id => nodes[id], createElement: () => new Element() },
    window: { location: { href: 'http://localhost:4000/', origin: 'http://localhost:4000' } },
    URL,
    fetch: async () => { calls++; return { ok: true, json: async () => records }; }
  });
  const query = text => {
    nodes['site-search-input'].value = text;
    nodes['site-search-input'].listeners.input();
    return nodes['site-search-results'].children;
  };
  nodes['nav-search-link'].listeners.click();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(nodes['site-search-dialog'].open, true);
  assert.equal(query('RF').length, 2);
  assert.equal(query('ｒｆ')[0].children[1].textContent, 'RF Fingerprinting');
  assert.equal(query('RF PIPELINE').length, 1);
  assert.equal(query('日本語').length, 1);
  assert.equal(query('unmatched').length, 0);
  assert.match(nodes['site-search-status'].textContent, /No results/);
  assert.equal(query('   ').length, 0);
  assert.match(nodes['site-search-status'].textContent, /Enter/);
  assert.equal(query('<img')[0].children[1].textContent, records[3].title);
  assert.equal(query('Unsafe target').length, 0);
  nodes['site-search-close'].listeners.click();
  assert.equal(nodes['nav-search-link'].focused, true);
  nodes['nav-search-link'].listeners.click();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(calls, 1, 'Reopening search should reuse the index');

  // Failed fetches must display a useful message and permit another attempt.
  const retryNodes = Object.fromEntries(Object.keys(nodes).map(id => [id, new Element()]));
  retryNodes['site-search-dialog'].dataset = { indexUrl: '/assets/data/search.json' };
  let attempts = 0;
  vm.runInNewContext(fs.readFileSync('assets/js/search.js', 'utf8'), {
    document: { getElementById: id => retryNodes[id], createElement: () => new Element() },
    window: { location: { href: 'http://localhost:4000/', origin: 'http://localhost:4000' } },
    URL,
    fetch: async () => {
      if (++attempts === 1) throw new Error('Offline');
      return { ok: true, json: async () => records };
    }
  });
  retryNodes['nav-search-link'].listeners.click();
  await new Promise(resolve => setImmediate(resolve));
  assert.match(retryNodes['site-search-status'].textContent, /could not be loaded/);
  retryNodes['site-search-close'].listeners.click();
  retryNodes['nav-search-link'].listeners.click();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(attempts, 2);
  assert.match(retryNodes['site-search-status'].textContent, /Enter/);
  console.log('Search checks passed: matching, ranking, Unicode, empty state, safe output, dialog lifecycle, caching, and retry.');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
