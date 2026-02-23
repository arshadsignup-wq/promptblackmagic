/* ========================================
   PROMPT BLACK MAGIC — Application Logic
   ======================================== */

(function () {
  'use strict';

  // ── State ──
  let activeCategory = 'All';
  let searchQuery = '';

  // ── DOM References ──
  const searchInput = document.getElementById('search');
  const categoriesContainer = document.getElementById('categories');
  const promptsGrid = document.getElementById('prompts-grid');
  const promptCount = document.getElementById('prompt-count');
  const backToTop = document.getElementById('back-to-top');

  // ── Initialize ──
  function init() {
    buildCategories();
    renderPrompts();
    bindEvents();
  }

  // ── Extract unique categories ──
  function getCategories() {
    const cats = new Set(PROMPTS_DATA.map(p => p.category));
    return ['All', ...Array.from(cats).sort()];
  }

  // ── Build category pills ──
  function buildCategories() {
    const categories = getCategories();
    categoriesContainer.innerHTML = categories.map(cat => {
      const count = cat === 'All'
        ? PROMPTS_DATA.length
        : PROMPTS_DATA.filter(p => p.category === cat).length;
      return `<button class="category-pill${cat === 'All' ? ' active' : ''}" data-category="${cat}">
        ${cat} <span style="opacity:0.5;margin-left:2px">${count}</span>
      </button>`;
    }).join('');
  }

  // ── Filter prompts ──
  function getFilteredPrompts() {
    return PROMPTS_DATA.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      if (!matchesCategory) return false;
      if (!searchQuery) return true;

      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }

  // ── Get the global index of a prompt ──
  function getGlobalIndex(prompt) {
    return PROMPTS_DATA.indexOf(prompt);
  }

  // ── Render prompt cards ──
  function renderPrompts() {
    const filtered = getFilteredPrompts();
    const total = PROMPTS_DATA.length;
    const shown = filtered.length;

    promptCount.innerHTML = shown === total
      ? `Showing all <span>${total}</span> prompts`
      : `Showing <span>${shown}</span> of <span>${total}</span> prompts`;

    if (filtered.length === 0) {
      promptsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-sigil">&#10033;</div>
          <p>No prompts found matching your search.</p>
        </div>
      `;
      return;
    }

    const arrowSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

    promptsGrid.innerHTML = filtered.map((p, i) => {
      const globalIdx = getGlobalIndex(p);
      return `
        <a class="prompt-card" href="prompt.html?id=${globalIdx}" target="_blank" rel="noopener" style="animation-delay: ${Math.min(i * 0.04, 0.5)}s">
          <div class="card-header">
            <h2 class="card-title">${escapeHtml(p.title)}</h2>
            <span class="card-category">${escapeHtml(p.category)}</span>
          </div>
          <p class="card-description">${escapeHtml(p.description)}</p>
          <div class="card-footer">
            <span class="card-cta">View Prompt</span>
            <span class="card-arrow">${arrowSvg}</span>
          </div>
        </a>
      `;
    }).join('');
  }

  // ── Event bindings ──
  function bindEvents() {
    // Search
    searchInput.addEventListener('input', debounce(function () {
      searchQuery = this.value.trim();
      renderPrompts();
    }, 200));

    // Category filter
    categoriesContainer.addEventListener('click', function (e) {
      const pill = e.target.closest('.category-pill');
      if (!pill) return;

      activeCategory = pill.dataset.category;
      categoriesContainer.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      renderPrompts();
    });

    // Back to top
    if (backToTop) {
      window.addEventListener('scroll', function () {
        backToTop.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });

      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Keyboard: / to focus search, Esc to clear
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.blur();
        searchInput.value = '';
        searchQuery = '';
        renderPrompts();
      }
    });
  }

  // ── Utilities ──
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // ── Launch ──
  document.addEventListener('DOMContentLoaded', init);
})();
