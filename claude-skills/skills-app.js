/* ========================================
   CLAUDE SKILLS — Application Logic
   ======================================== */

(function () {
  'use strict';

  var activeCategory = 'All';
  var activeTier = 'All';
  var searchQuery = '';

  var searchInput = document.getElementById('skills-search');
  var categoriesContainer = document.getElementById('skills-categories');
  var tierButtons = document.querySelectorAll('.tier-btn');
  var skillsGrid = document.getElementById('skills-grid');
  var skillsCount = document.getElementById('skills-count');
  var heroCount = document.getElementById('skills-hero-total');

  function init() {
    if (heroCount) heroCount.textContent = SKILLS_DATA.length;
    buildCategories();
    renderSkills();
    bindEvents();
  }

  function getCategories() {
    var cats = {};
    for (var i = 0; i < SKILLS_DATA.length; i++) {
      cats[SKILLS_DATA[i].category] = (cats[SKILLS_DATA[i].category] || 0) + 1;
    }
    var sorted = Object.keys(cats).sort();
    sorted.unshift('All');
    return sorted.map(function (c) { return { name: c, count: c === 'All' ? SKILLS_DATA.length : cats[c] }; });
  }

  function buildCategories() {
    var cats = getCategories();
    categoriesContainer.innerHTML = cats.map(function (c) {
      return '<button class="category-pill' + (c.name === 'All' ? ' active' : '') + '" data-category="' + c.name + '">' +
        c.name + ' <span style="opacity:0.5;margin-left:2px">' + c.count + '</span></button>';
    }).join('');
  }

  function getFilteredSkills() {
    return SKILLS_DATA.filter(function (s) {
      if (activeCategory !== 'All' && s.category !== activeCategory) return false;
      if (activeTier !== 'All' && s.tier !== activeTier) return false;
      if (!searchQuery) return true;

      var q = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().indexOf(q) !== -1 ||
        s.oneLiner.toLowerCase().indexOf(q) !== -1 ||
        s.category.toLowerCase().indexOf(q) !== -1 ||
        s.author.toLowerCase().indexOf(q) !== -1
      );
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function formatStars(s) {
    if (!s || s === 'N/A') return '';
    var n = parseFloat(s);
    if (isNaN(n)) return s;
    if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'K';
    return String(n);
  }

  function tierLabel(tier) {
    switch (tier) {
      case 'essential': return 'Essential';
      case 'popular': return 'Popular';
      case 'rising': return 'Rising';
      default: return 'Community';
    }
  }

  function tierClass(tier) {
    switch (tier) {
      case 'essential': return ' skill-card-featured';
      case 'popular': return ' skill-card-popular';
      default: return '';
    }
  }

  var starSvg = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  var arrowSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';

  function renderSkills() {
    var filtered = getFilteredSkills();
    var total = SKILLS_DATA.length;

    skillsCount.innerHTML = filtered.length === total
      ? 'Showing all <span>' + total + '</span> skills'
      : 'Showing <span>' + filtered.length + '</span> of <span>' + total + '</span> skills';

    if (filtered.length === 0) {
      skillsGrid.innerHTML = '<div class="empty-state"><div class="empty-sigil">&#10033;</div><p>No skills found matching your search.</p></div>';
      return;
    }

    skillsGrid.innerHTML = filtered.map(function (s, i) {
      var starsHtml = s.stars && s.stars !== 'N/A'
        ? '<div class="skill-card-stars">' + starSvg + ' ' + formatStars(s.stars) + '</div>'
        : '';

      return '<a class="skill-card' + tierClass(s.tier) + '" href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener" style="animation-delay:' + Math.min(i * 0.03, 0.4) + 's">' +
        '<div class="skill-card-top">' +
          '<span class="skill-tier-badge skill-tier-' + s.tier + '">' + tierLabel(s.tier) + '</span>' +
          starsHtml +
        '</div>' +
        '<h3 class="skill-card-title">' + escapeHtml(s.name) + '</h3>' +
        '<p class="skill-card-author">by ' + escapeHtml(s.author) + '</p>' +
        '<p class="skill-card-what">' + escapeHtml(s.oneLiner) + '</p>' +
        '<div class="skill-card-bottom">' +
          '<span class="skill-card-cat">' + escapeHtml(s.category) + '</span>' +
          '<span class="skill-card-cta">GitHub ' + arrowSvg + '</span>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  function debounce(fn, delay) {
    var timer;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
    };
  }

  function bindEvents() {
    searchInput.addEventListener('input', debounce(function () {
      searchQuery = this.value.trim();
      renderSkills();
    }, 200));

    categoriesContainer.addEventListener('click', function (e) {
      var pill = e.target.closest('.category-pill');
      if (!pill) return;
      activeCategory = pill.dataset.category;
      categoriesContainer.querySelectorAll('.category-pill').forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      renderSkills();
    });

    for (var i = 0; i < tierButtons.length; i++) {
      tierButtons[i].addEventListener('click', function () {
        activeTier = this.dataset.tier;
        for (var j = 0; j < tierButtons.length; j++) tierButtons[j].classList.remove('active');
        this.classList.add('active');
        renderSkills();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.blur();
        searchInput.value = '';
        searchQuery = '';
        renderSkills();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
