document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');
  const small = window.matchMedia('(max-width: 700px)');
  if (toggle && nav) {
    const reset = () => { toggle.hidden = !small.matches; nav.hidden = small.matches; toggle.setAttribute('aria-expanded', 'false'); };
    reset();
    small.addEventListener('change', reset);
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open)); nav.hidden = !open;
    });
    nav.addEventListener('keydown', e => { if(e.key === 'Escape' && small.matches) { nav.hidden = true; toggle.setAttribute('aria-expanded','false'); toggle.focus(); }});
  }
  const group = document.querySelector('[data-filter-group]');
  const items = [...document.querySelectorAll('[data-filter-items] [data-category]')];
  if (group && items.length) {
    group.hidden = false;
    group.addEventListener('click', e => {
      const button = e.target.closest('button[data-filter]');
      if (!button) return;
      const filter = button.dataset.filter;
      group.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      items.forEach(item => item.hidden = filter !== 'All' && item.dataset.category !== filter);
      const status = document.querySelector('[data-filter-status]');
      if (status) status.textContent = items.filter(item => !item.hidden).length + ' entries shown';
    });
  }
});