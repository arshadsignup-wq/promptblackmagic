#!/usr/bin/env node

/**
 * build.js — Static site generator for Prompt Black Magic
 *
 * Generates:
 *   - /prompts/<slug>/index.html  (306 pre-rendered prompt pages)
 *   - sitemap.xml                  (clean URLs)
 *   - 404.html                     (branded error page)
 *   - Injects <noscript> block into index.html
 *
 * Zero npm dependencies — uses only Node.js built-ins.
 *
 * Usage:  node build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SITE_URL = 'https://www.promptblackmagic.com';
const TODAY = new Date().toISOString().split('T')[0];

// ── Load prompts data ──────────────────────────────────────────────

const promptsSrc = fs.readFileSync(path.join(ROOT, 'prompts.js'), 'utf-8');
// Replace const with globalThis assignment so we can eval it in Node
const evalSrc = promptsSrc.replace('const PROMPTS_DATA', 'globalThis.PROMPTS_DATA');
eval(evalSrc);

const PROMPTS = globalThis.PROMPTS_DATA;
const SLUG_INDEX = globalThis.PROMPTS_SLUG_INDEX;

console.log(`Loaded ${PROMPTS.length} prompts`);

// ── Helpers ────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJsonLd(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '');
}

function truncate(str, len) {
  if (str.length <= len) return str;
  return str.slice(0, len - 3) + '...';
}

function categorySlug(cat) {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// SVG icons (reused across pages)
const ICONS = {
  copy: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  method: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  code: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  prev: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  next: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>',
  share: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
};

// ── Get related prompts (same category, excluding self) ────────────

function getRelatedPrompts(idx, count) {
  const p = PROMPTS[idx];
  const related = [];
  for (let i = 0; i < PROMPTS.length && related.length < count; i++) {
    if (i !== idx && PROMPTS[i].category === p.category) {
      related.push(i);
    }
  }
  return related;
}

// ── Generate prompt page HTML ──────────────────────────────────────

function generatePromptPage(idx) {
  const p = PROMPTS[idx];
  const slug = p._slug;
  const canonicalUrl = `${SITE_URL}/prompts/${slug}/`;
  const pageTitle = `${p.title} | Prompt Black Magic`;
  const metaDesc = truncate(p.description, 160);

  // Navigation
  const prevIdx = idx > 0 ? idx - 1 : null;
  const nextIdx = idx < PROMPTS.length - 1 ? idx + 1 : null;

  const prevLink = prevIdx !== null
    ? `<a href="/prompts/${PROMPTS[prevIdx]._slug}/" class="detail-nav-btn">${ICONS.prev}<span>${escapeHtml(PROMPTS[prevIdx].title)}</span></a>`
    : '<span></span>';
  const nextLink = nextIdx !== null
    ? `<a href="/prompts/${PROMPTS[nextIdx]._slug}/" class="detail-nav-btn detail-nav-next"><span>${escapeHtml(PROMPTS[nextIdx].title)}</span>${ICONS.next}</a>`
    : '<span></span>';

  // Related prompts
  const relatedIdxs = getRelatedPrompts(idx, 4);
  let relatedHtml = '';
  if (relatedIdxs.length > 0) {
    const cards = relatedIdxs.map(ri => {
      const rp = PROMPTS[ri];
      return `
        <a class="related-card" href="/prompts/${rp._slug}/">
          <h3 class="related-card-title">${escapeHtml(rp.title)}</h3>
          <p class="related-card-desc">${escapeHtml(truncate(rp.description, 120))}</p>
          <span class="related-card-cta">View Prompt ${ICONS.arrow}</span>
        </a>`;
    }).join('');

    relatedHtml = `
      <section class="related-prompts">
        <h2 class="related-heading">More ${escapeHtml(p.category)} Prompts</h2>
        <div class="related-grid">${cards}</div>
      </section>`;
  }

  // JSON-LD: Article
  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": p.title,
    "description": p.description,
    "url": canonicalUrl,
    "image": `${SITE_URL}/og-image.png`,
    "author": { "@type": "Organization", "name": "Prompt Black Magic", "url": SITE_URL },
    "publisher": { "@type": "Organization", "name": "Prompt Black Magic", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/og-image.png` } },
    "datePublished": "2026-02-24",
    "dateModified": TODAY,
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    "articleSection": p.category
  });

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + "/" },
      { "@type": "ListItem", "position": 2, "name": p.category, "item": `${SITE_URL}/#${categorySlug(p.category)}` },
      { "@type": "ListItem", "position": 3, "name": p.title, "item": canonicalUrl }
    ]
  });

  // Method content (newlines to <br>)
  const methodHtml = escapeHtml(p.method).replace(/\n/g, '<br>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5784937598297489"
     crossorigin="anonymous"></script>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-J49B7Y5X7E"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J49B7Y5X7E');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(metaDesc)}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#08060f">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph -->
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(metaDesc)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Prompt Black Magic">
  <meta property="og:image" content="${SITE_URL}/og-image.png">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
  <meta name="twitter:description" content="${escapeHtml(metaDesc)}">
  <meta name="twitter:image" content="${SITE_URL}/og-image.png">

  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#10038;</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Inter:ital,wght@0,300;1,400&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <link rel="stylesheet" href="/styles.css">

  <!-- Structured Data -->
  <script type="application/ld+json">${articleJsonLd}</script>
  <script type="application/ld+json">${breadcrumbJsonLd}</script>
</head>
<body>

  <!-- Ambient floating orbs -->
  <div class="ambient-bg" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <!-- ─── DETAIL PAGE ─── -->
  <div class="detail-page" id="detail-page">

    <!-- Top bar -->
    <nav class="detail-topbar">
      <a href="/" class="back-link">${ICONS.back} All Prompts</a>
      <span class="detail-prompt-number">${idx + 1} / ${PROMPTS.length}</span>
    </nav>

    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="breadcrumb-sep">/</span>
      <a href="/#${categorySlug(p.category)}">${escapeHtml(p.category)}</a>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">${escapeHtml(p.title)}</span>
    </nav>

    <!-- Hero banner -->
    <div class="detail-hero">
      <div class="detail-hero-glow"></div>
      <span class="detail-category">${escapeHtml(p.category)}</span>
      <h1 class="detail-title">${escapeHtml(p.title)}</h1>
      <p class="detail-description">${escapeHtml(p.description)}</p>
    </div>

    <!-- How to use -->
    <div class="detail-section detail-section-method">
      <div class="detail-section-label">
        <span class="detail-section-icon">${ICONS.method}</span>
        <h2>How to Use</h2>
      </div>
      <div class="detail-method-content">
        <p>${methodHtml}</p>
      </div>
    </div>

    <!-- The Prompt -->
    <div class="detail-section detail-section-prompt">
      <div class="detail-section-label">
        <span class="detail-section-icon">${ICONS.code}</span>
        <h2>The Prompt</h2>
        <button class="copy-btn detail-copy-inline" id="copy-inline">
          <span class="btn-text"><span class="icon">${ICONS.copy}</span> Copy</span>
        </button>
      </div>
      <div class="detail-prompt-wrapper">
        <pre class="detail-prompt">${escapeHtml(p.prompt)}</pre>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="detail-actions">
      <button class="copy-btn detail-copy-cta" id="copy-cta">
        <span class="btn-text"><span class="icon">${ICONS.copy}</span> Copy This Prompt</span>
      </button>
      <button class="copy-btn detail-share-btn" id="share-btn">
        <span class="btn-text"><span class="icon">${ICONS.share}</span> Copy Link</span>
      </button>
    </div>

    <!-- Prompt navigation -->
    <div class="detail-nav-footer">
      ${prevLink}
      ${nextLink}
    </div>

    <!-- Related prompts -->
    ${relatedHtml}

    <noscript>
      <p style="text-align:center; color:#a9a3b8; margin-top:24px;">Copy buttons require JavaScript. You can manually select and copy the prompt text above.</p>
    </noscript>
  </div>

  <!-- ─── FOOTER ─── -->
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="footer-sigil" aria-hidden="true">&#10038;</span>
          <span class="footer-name">Prompt Black Magic</span>
        </div>
        <p class="footer-tagline">Battle-tested prompts for every AI model. No fluff. Just results.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h2 class="footer-heading">Stay Updated</h2>
          <p class="footer-note">New prompts added regularly.<br>Bookmark this page to stay ahead.</p>
        </div>
        <div class="footer-col">
          <h2 class="footer-heading">Get in Touch</h2>
          <a href="mailto:promptblackmagic@gmail.com" class="footer-email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            promptblackmagic@gmail.com
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">Prompt Black Magic &copy; 2026. All rights reserved.</p>
    </div>
  </footer>

  <!-- Copy/Share JS (minimal — no content rendering) -->
  <script>
  (function() {
    var promptText = ${JSON.stringify(p.prompt)};
    var copyIcon = '${ICONS.copy.replace(/'/g, "\\'")}';
    var checkIcon = '${ICONS.check.replace(/'/g, "\\'")}';
    var shareIcon = '${ICONS.share.replace(/'/g, "\\'")}';
    var timeout;

    function handleCopy(btn, label) {
      navigator.clipboard.writeText(promptText).then(function() {
        btn.classList.add('copied');
        btn.querySelector('.btn-text').innerHTML = '<span class="icon">' + checkIcon + '</span> Copied!';
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          btn.classList.remove('copied');
          btn.querySelector('.btn-text').innerHTML = '<span class="icon">' + copyIcon + '</span> ' + label;
        }, 2500);
      });
    }

    document.getElementById('copy-inline').addEventListener('click', function() { handleCopy(this, 'Copy'); });
    document.getElementById('copy-cta').addEventListener('click', function() { handleCopy(this, 'Copy This Prompt'); });

    var shareTimeout;
    var shareBtn = document.getElementById('share-btn');
    shareBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(window.location.href).then(function() {
        shareBtn.classList.add('copied');
        shareBtn.querySelector('.btn-text').innerHTML = '<span class="icon">' + checkIcon + '</span> Link Copied!';
        clearTimeout(shareTimeout);
        shareTimeout = setTimeout(function() {
          shareBtn.classList.remove('copied');
          shareBtn.querySelector('.btn-text').innerHTML = '<span class="icon">' + shareIcon + '</span> Copy Link';
        }, 2500);
      });
    });
  })();
  </script>

</body>
</html>`;
}

// ── Generate 404 page ──────────────────────────────────────────────

function generate404() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found | Prompt Black Magic</title>
  <meta name="robots" content="noindex, follow">
  <meta name="theme-color" content="#08060f">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#10038;</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="ambient-bg" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <div class="detail-page" style="text-align:center;padding-top:120px">
    <div class="sigil" aria-hidden="true" style="font-size:4rem;margin-bottom:24px">&#10038;</div>
    <h1 style="font-family:var(--font-display);font-size:3rem;color:var(--text);margin-bottom:16px">404</h1>
    <p style="font-family:var(--font-body);font-size:1.25rem;color:var(--text-secondary);margin-bottom:32px">This prompt doesn't exist... yet.</p>
    <a href="/" style="display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:var(--purple);color:#fff;border-radius:var(--radius);text-decoration:none;font-family:var(--font-body);font-weight:600;transition:var(--transition)">
      ${ICONS.back} Browse All Prompts
    </a>
  </div>

  <footer style="margin-top:120px">
    <div class="footer-bottom">
      <p class="copyright">Prompt Black Magic &copy; 2026. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;
}

// ── Generate sitemap ───────────────────────────────────────────────

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;
  for (let i = 0; i < PROMPTS.length; i++) {
    xml += `  <url>
    <loc>${SITE_URL}/prompts/${PROMPTS[i]._slug}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }
  xml += `</urlset>`;
  return xml;
}

// ── Generate noscript block for index.html ─────────────────────────

function generateNoscriptBlock() {
  const links = PROMPTS.map(p =>
    `      <li><a href="/prompts/${p._slug}/">${escapeHtml(p.title)}</a></li>`
  ).join('\n');

  return `\n    <noscript>\n      <div class="noscript-prompts">\n        <h2>All Prompts</h2>\n        <ul>\n${links}\n        </ul>\n      </div>\n    </noscript>`;
}

// ── Main build ─────────────────────────────────────────────────────

function build() {
  const startTime = Date.now();

  // 1. Generate prompt pages
  console.log('Generating prompt pages...');
  let count = 0;
  for (let i = 0; i < PROMPTS.length; i++) {
    const slug = PROMPTS[i]._slug;
    const dir = path.join(ROOT, 'prompts', slug);
    mkdirp(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), generatePromptPage(i), 'utf-8');
    count++;
  }
  console.log(`  -> ${count} prompt pages generated`);

  // 2. Generate sitemap
  console.log('Generating sitemap.xml...');
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), generateSitemap(), 'utf-8');
  console.log('  -> sitemap.xml written');

  // 3. Generate 404
  console.log('Generating 404.html...');
  fs.writeFileSync(path.join(ROOT, '404.html'), generate404(), 'utf-8');
  console.log('  -> 404.html written');

  // 4. Inject noscript into index.html
  console.log('Injecting noscript block into index.html...');
  let indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
  // Remove any existing noscript block
  indexHtml = indexHtml.replace(/\n\s*<noscript>[\s\S]*?<\/noscript>/g, '');
  // Inject before closing </main>
  const noscriptBlock = generateNoscriptBlock();
  // Escape $ in replacement string to prevent regex backreference interpretation
  const safeNoscript = noscriptBlock.replace(/\$/g, '$$$$');
  indexHtml = indexHtml.replace(
    /(<main class="prompts-grid"[^>]*>[\s\S]*?)(<!-- Rendered by app\.js -->)?\s*(<\/main>)/,
    `$1$2${safeNoscript}\n  $3`
  );
  fs.writeFileSync(path.join(ROOT, 'index.html'), indexHtml, 'utf-8');
  console.log('  -> index.html updated with noscript block');

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\nBuild complete in ${elapsed}s`);
}

build();
