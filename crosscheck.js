const fs = require('fs');

// Load our prompts
const src = fs.readFileSync('prompts.js','utf8').replace('const PROMPTS_DATA','globalThis.PROMPTS_DATA');
eval(src);
const ours = globalThis.PROMPTS_DATA;

// Load their slugs
const theirs = fs.readFileSync('godofprompt_slugs.txt','utf8').trim().split('\n');

// Stopwords
const stopwords = ['the','a','an','to','for','and','or','of','in','on','with','your','my','our','by','from','is','are','was','that','this','it','get','use','how','create','generate','build','make','develop','design','write','craft','set','up'];

// Normalize function
function normalize(s) {
  return s.toLowerCase()
    .replace(/[-_]/g, ' ')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(w => !stopwords.includes(w) && w.length > 2)
    .sort()
    .join(' ');
}

function getKeywords(s) {
  return s.toLowerCase()
    .replace(/[-_]/g, ' ')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(w => !stopwords.includes(w) && w.length > 2);
}

// Build our keyword index
const ourNorms = ours.map(p => normalize(p.title));
const ourKeywords = ours.map(p => getKeywords(p.title));

// Check each of their slugs
const matched = [];
const unmatched = [];

theirs.forEach(slug => {
  const norm = normalize(slug);
  const words = getKeywords(slug);

  // Direct match
  if (ourNorms.includes(norm)) {
    matched.push(slug);
    return;
  }

  // Fuzzy match: check keyword overlap
  let bestOverlap = 0;
  for (const ourWords of ourKeywords) {
    const common = words.filter(w => ourWords.includes(w)).length;
    const overlap = common / Math.max(words.length, 1);
    const reverseOverlap = common / Math.max(ourWords.length, 1);
    const score = Math.max(overlap, reverseOverlap);
    if (score > bestOverlap) bestOverlap = score;
  }

  if (bestOverlap >= 0.65) {
    matched.push(slug);
  } else {
    unmatched.push(slug);
  }
});

console.log('Our prompts: ' + ours.length);
console.log('Their prompts: ' + theirs.length);
console.log('Matched/similar: ' + matched.length);
console.log('Unique to them: ' + unmatched.length);

// Save unmatched
fs.writeFileSync('godofprompt_unique.txt', unmatched.join('\n'));

// Categorize unmatched by topic
const cats = {};
unmatched.forEach(slug => {
  const s = slug.toLowerCase();
  let cat = 'Other';
  if (/photo|portrait|image|selfie|shot|picture|nebula|coloring|illustration|art|nft|pin|icon|render|visual|3d|isometric|mockup|artwork|cinema/i.test(s)) cat = 'Image Generation';
  else if (/hero.section|landing.page|ui|ux|checkout|cookie.banner|portfolio|website.design|app.design|dashboard|wireframe|prototype/i.test(s)) cat = 'UI/UX Design';
  else if (/seo|sitemap|keyword|schema|meta.desc|backlink|voice.seo|search.engine|rank|index|crawl/i.test(s)) cat = 'SEO';
  else if (/email|newsletter|drip|inbox|outreach/i.test(s)) cat = 'Email Marketing';
  else if (/social.media|instagram|twitter|linkedin|facebook|tiktok|hashtag|influencer|follower|engagement|community/i.test(s)) cat = 'Social Media';
  else if (/ad.cop|advertis|headline|urgency|cta|conversion|popup|pop.up|banner/i.test(s)) cat = 'Advertising';
  else if (/sales|lead|crm|funnel|pitch|prospect|deal|close|commission|quota/i.test(s)) cat = 'Sales';
  else if (/invest|financ|budget|tax|debt|fund|stock|forex|capital|insurance|estate.plan|retirement|savings|wealth|money|income|expense|portfolio|dividend|compound/i.test(s)) cat = 'Finance';
  else if (/property|real.estate|rent|home.inspection|tenant|landlord|mortgage|listing|apprais/i.test(s)) cat = 'Real Estate';
  else if (/legal|law|compliance|contract|settlement|patent|privacy.policy|regulat|litigation|court|attorney|clause|tort/i.test(s)) cat = 'Legal';
  else if (/hr|employee|onboard|offboard|hiring|interview|retention|turnover|performance.review|recruit|talent|compensation|benefit|payroll|workforce/i.test(s)) cat = 'HR';
  else if (/code|api|debug|test|script|database|deploy|kubernetes|rest|regex|encrypt|fullstack|git|docker|ci.cd|devops|backend|frontend|react|python|javascript/i.test(s)) cat = 'Coding';
  else if (/data|analys|regression|visualization|pandas|histogram|kpi|metric|report|spreadsheet|excel|tableau|statistics/i.test(s)) cat = 'Data Analysis';
  else if (/learn|study|course|education|teach|exam|mnemonic|curriculum|student|tutor|school|academ/i.test(s)) cat = 'Education';
  else if (/productiv|time.manag|gtd|pomodoro|workflow|delegation|priorit|distraction|habit|goal|focus|schedul|planner|organiz/i.test(s)) cat = 'Productivity';
  else if (/writ|book|chapter|fiction|novel|article|blog|story|manuscript|proofread|content|copywrite|edit|publish/i.test(s)) cat = 'Writing';
  else if (/health|fitness|wellness|workout|nutrition|meal|diet|yoga|exercise|weight|calor|protein|sleep|mindful|meditat/i.test(s)) cat = 'Health & Wellness';
  else if (/customer.service|support|complaint|chatbot|ivr|live.chat|help.desk|ticket|satisfaction/i.test(s)) cat = 'Customer Service';
  else if (/freelanc|virtual.assistant|ghostwrit|gig|contract|client.acqui|side.hustle/i.test(s)) cat = 'Freelancing';
  else if (/automat|zapier|machine.learn|gpt|llm|chatgpt|claude|gemini|prompt.engineer|neural|deep.learn/i.test(s)) cat = 'AI & Automation';
  else if (/brand|logo|identity|voice.guideline|positioning|mission.statement|rebrand|tagline/i.test(s)) cat = 'Branding';
  else if (/ecommerce|e.commerce|cart|shopify|product.desc|inventory|woocommerce|amazon|store/i.test(s)) cat = 'E-Commerce';
  else if (/video|youtube|podcast|reel|stream|webinar|tutorial.video|vlog/i.test(s)) cat = 'Video';
  else if (/personal|resilience|boundar|work.life|wellbeing|self.care|mentor|coach|growth|mindset|confidence|motivation/i.test(s)) cat = 'Personal Development';
  else if (/research|academic|journal|citation|paper|thesis|dissertation|peer.review|literature/i.test(s)) cat = 'Research';
  else if (/project.manag|agile|scrum|sprint|kanban|stakeholder|milestone|deliverable|gantt/i.test(s)) cat = 'Project Management';
  else if (/resume|career|job.desc|cv|cover.letter|linkedin.profile|job.search|salary.negot/i.test(s)) cat = 'Career';
  else if (/negotiat|conflict|mediati|dispute|arbitrat/i.test(s)) cat = 'Negotiation';
  else if (/speech|present|public.speak|communicat|pitch.deck|slide|keynote/i.test(s)) cat = 'Communication';
  else if (/business|strateg|market|startup|entrepreneur|revenue|profit|scale|growth|launch|innovation|competitive|swot|value.prop|mission/i.test(s)) cat = 'Business Strategy';
  else if (/network|partnership|collaborat|alliance|joint.venture|referral/i.test(s)) cat = 'Networking';
  else if (/track|pixel|analytic|ga4|gtm|attribution|conversion.track|utm/i.test(s)) cat = 'Tracking';

  if (!cats[cat]) cats[cat] = [];
  cats[cat].push(slug);
});

console.log('\nUnmatched by category:');
Object.entries(cats).sort((a,b) => b[1].length - a[1].length).forEach(([c, items]) => {
  console.log('  ' + c + ': ' + items.length);
});

// Save categorized data
fs.writeFileSync('godofprompt_unique_categorized.json', JSON.stringify(cats, null, 2));
console.log('\nSaved to godofprompt_unique_categorized.json');
