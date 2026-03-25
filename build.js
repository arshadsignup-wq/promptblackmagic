#!/usr/bin/env node

/**
 * build.js — Static site generator for Prompt Black Magic
 *
 * Generates:
 *   - /prompts/<slug>/index.html  (456 pre-rendered prompt pages)
 *   - /about/index.html           (About page)
 *   - /privacy/index.html         (Privacy Policy)
 *   - /terms/index.html           (Terms of Service)
 *   - /contact/index.html         (Contact page)
 *   - /blog/index.html            (Blog index)
 *   - /blog/<slug>/index.html     (Blog articles)
 *   - sitemap.xml                 (clean URLs)
 *   - 404.html                    (branded error page)
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
  arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  lightbulb: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>'
};

// ── Footer legal links (shared across all pages) ──────────────────

const FOOTER_LEGAL_LINKS = `
      <div class="footer-legal-links">
        <a href="/about/">About</a><span class="divider">|</span>
        <a href="/blog/">Blog</a><span class="divider">|</span>
        <a href="/privacy/">Privacy Policy</a><span class="divider">|</span>
        <a href="/terms/">Terms of Service</a><span class="divider">|</span>
        <a href="/contact/">Contact</a>
      </div>`;

// ── Category tips (used on detail pages) ──────────────────────────

const CATEGORY_TIPS = {
  'Facebook Ads': [
    'Always specify your target audience demographics — age, location, interests — in the prompt so the AI tailors copy that resonates with the right people.',
    'Ask the AI to generate multiple ad variations at once (3-5) so you can A/B test different hooks and angles without extra effort.',
    'Include your product\'s unique selling proposition in the prompt. Generic benefits produce generic ads — specificity wins clicks.',
    'Tell the AI what stage of the funnel the ad targets (awareness, consideration, conversion) to get copy that matches buyer intent.',
    'Request the AI to follow Facebook\'s ad policies — avoiding exaggerated claims and prohibited content saves your ad account from bans.'
  ],
  'Business': [
    'When prompting for business strategy, provide context about your industry, company size, and current challenges for actionable advice.',
    'Ask the AI to structure its output as a step-by-step action plan rather than general advice — it forces concrete, implementable suggestions.',
    'Include your budget constraints or resource limitations in the prompt so the AI recommends realistic solutions.',
    'Request SWOT analysis format when evaluating opportunities — it ensures the AI considers both advantages and risks.',
    'For competitive analysis prompts, name your top 2-3 competitors so the AI can tailor its recommendations to your specific market position.'
  ],
  'Google Ads': [
    'Always include your target keywords in the prompt so the AI generates ad copy that matches search intent and improves Quality Score.',
    'Specify character limits for headlines (30 chars) and descriptions (90 chars) in your prompt — Google Ads has strict formatting rules.',
    'Ask the AI to include a clear call-to-action in every ad variation. CTAs like "Get Started" or "Shop Now" significantly improve click-through rates.',
    'Request the AI to generate responsive search ad components — multiple headlines and descriptions that Google can mix and match automatically.',
    'Include your landing page URL context so the AI writes ad copy that aligns with the page content, improving relevance and conversions.'
  ],
  'Tracking & Pixels': [
    'Always specify which platform you\'re tracking for (Meta, Google, TikTok) — each has unique pixel implementation requirements.',
    'When asking about event tracking, describe your exact conversion funnel so the AI maps the right events to each step.',
    'Include your website platform (Shopify, WordPress, custom) in the prompt — implementation code differs significantly between platforms.',
    'Ask the AI to include data validation steps in tracking setups. Broken pixels waste ad spend without any feedback.',
    'Request server-side tracking guidance alongside client-side — browser privacy updates are making client-only tracking increasingly unreliable.'
  ],
  'Resume & Career': [
    'Always include the specific job title and key requirements from the job posting when prompting for resume help — ATS systems scan for exact keyword matches.',
    'Ask the AI to quantify achievements with numbers and percentages. "Increased revenue by 34%" beats "improved sales" every time.',
    'Specify your experience level (entry, mid, senior) so the AI adjusts the tone and depth of accomplishments appropriately.',
    'Request the AI to use strong action verbs at the start of each bullet point — words like "spearheaded," "optimized," and "launched" grab recruiter attention.',
    'Include the industry you\'re targeting so the AI uses relevant jargon and highlights transferable skills that matter in that field.'
  ],
  'Email Marketing': [
    'Always specify the type of email (welcome series, promotional, re-engagement, nurture) so the AI matches tone and structure to the purpose.',
    'Include your brand voice guidelines in the prompt — casual vs. professional tone makes a huge difference in email engagement.',
    'Ask the AI to write multiple subject line options. Subject lines determine open rates, so test at least 3-5 variations per campaign.',
    'Request mobile-friendly formatting — over 60% of emails are read on phones, so short paragraphs and clear CTAs are essential.',
    'Specify the audience segment receiving the email so the AI personalizes content based on where they are in the customer journey.'
  ],
  'Content & SEO': [
    'Always include your target keyword and search intent (informational, commercial, transactional) when prompting for SEO content.',
    'Ask the AI to structure content with proper H2/H3 headings that include semantic variations of your target keyword.',
    'Specify the content format you need — listicle, how-to guide, comparison, or pillar page — as each has different structural requirements.',
    'Request the AI to include internal linking suggestions that connect the content to related pages on your site.',
    'Include your target word count and competitor URLs so the AI creates content that can realistically compete in search results.'
  ],
  'Social Media': [
    'Specify the platform (Instagram, LinkedIn, TikTok, X) in every prompt — each platform has different character limits, tone expectations, and content formats.',
    'Ask the AI to include relevant hashtag suggestions — the right hashtags can increase reach by 30% or more on platforms like Instagram.',
    'Include your posting goal (engagement, reach, clicks, saves) so the AI optimizes the content structure for that specific metric.',
    'Request content calendar batches — asking for 5-7 posts at once creates thematic consistency across your feed.',
    'Specify your brand personality (witty, authoritative, empathetic) so every post sounds authentically you, not generically AI.'
  ],
  'Sales': [
    'Always include your prospect\'s industry and pain points in the prompt — generic sales messages get ignored, personalized ones get meetings.',
    'Ask the AI to use proven sales frameworks like SPIN, BANT, or Challenger Sale methodology in its suggestions.',
    'Specify whether you need cold outreach, follow-up, or closing copy — each stage requires fundamentally different messaging.',
    'Request objection-handling scripts alongside your main pitch. Being prepared for pushback dramatically improves close rates.',
    'Include your product pricing tier so the AI can calibrate value propositions appropriate to the deal size.'
  ],
  'Agentic AI': [
    'Break complex agent tasks into clear, sequential sub-tasks in your prompt — AI agents perform best with well-defined step-by-step workflows.',
    'Always include error-handling instructions in agent prompts. Tell the AI what to do when a step fails or produces unexpected results.',
    'Specify the tools and APIs the agent should use — ambiguity about available resources leads to hallucinated capabilities.',
    'Include success criteria so the agent knows when to stop iterating. Without clear goals, agents can loop indefinitely.',
    'Request the agent to log its reasoning at each step. Transparent decision-making makes debugging and optimization much easier.'
  ],
  'Coding': [
    'Always specify the programming language, framework version, and runtime environment — "write a function" without context produces unusable code.',
    'Ask the AI to include error handling and edge cases in generated code. Production code needs to handle failures gracefully.',
    'Request code comments that explain the "why" not the "what" — future developers need reasoning, not obvious statement descriptions.',
    'Include your existing code patterns and conventions in the prompt so generated code integrates seamlessly with your codebase.',
    'Ask for unit tests alongside the implementation. Writing tests after the fact is harder than generating them together.'
  ],
  'Productivity': [
    'Describe your specific bottleneck when prompting for productivity help — "I\'m overwhelmed" is less useful than "I have 50 emails daily and can\'t prioritize."',
    'Ask the AI to create time-blocked schedules rather than simple task lists. Allocating specific hours forces realistic planning.',
    'Include your tools and apps (Notion, Todoist, Google Calendar) so the AI recommends workflows that fit your existing setup.',
    'Request the AI to apply the 80/20 principle — identify which 20% of tasks drive 80% of your results and prioritize those.',
    'Specify your energy patterns (morning person vs. night owl) so the AI schedules deep work during your peak performance hours.'
  ],
  'Education': [
    'Specify the student level (elementary, high school, college, adult learner) so the AI adjusts complexity and vocabulary appropriately.',
    'Ask the AI to use the Socratic method — posing questions that guide students to discover answers rather than simply providing them.',
    'Include the learning objective and desired outcome in every education prompt. Clear goals produce focused, effective lesson plans.',
    'Request multiple explanation approaches for the same concept. Visual learners, auditory learners, and kinesthetic learners all process information differently.',
    'Ask the AI to include assessment questions or practice problems alongside explanations to reinforce understanding.'
  ],
  'Writing': [
    'Always specify your target audience and their reading level — writing for CEOs requires different language than writing for college students.',
    'Include your desired word count, tone (formal, conversational, persuasive), and format (essay, blog post, report) in every writing prompt.',
    'Ask the AI to start with a hook that creates curiosity or tension. Strong openings determine whether readers continue or bounce.',
    'Request the AI to vary sentence length and structure — monotonous rhythm puts readers to sleep, while varied pacing maintains engagement.',
    'Include examples of writing styles you admire so the AI can emulate specific qualities like wit, clarity, or emotional depth.'
  ],
  'Creative': [
    'Give the AI rich context — character backgrounds, settings, mood, and themes — before asking it to create. Creative output is only as good as the creative brief.',
    'Ask for unexpected combinations and novel angles. Prompt the AI to "surprise you" or "combine two unrelated concepts" for truly original ideas.',
    'Specify constraints to boost creativity — word limits, required elements, or format restrictions often produce more inventive results than total freedom.',
    'Request multiple creative options (5+) and then ask the AI to combine the best elements from each into a final version.',
    'Include emotional tone and sensory details in your prompts. "Write something sad" is weak; "write something that captures the quiet ache of watching someone leave" is strong.'
  ],
  'Personal Finance': [
    'Always include your income range, major expenses, and financial goals when prompting for personal finance advice.',
    'Ask the AI to prioritize recommendations by impact — paying off high-interest debt usually beats optimizing investment allocation.',
    'Specify your risk tolerance and time horizon for investment-related prompts. A 25-year-old and a retiree need fundamentally different strategies.',
    'Request step-by-step action plans with specific dollar amounts and timelines rather than general principles about saving and investing.',
    'Include your country and tax situation — financial advice varies dramatically based on local tax laws and available investment vehicles.'
  ],
  'Freelancing': [
    'Include your niche, experience level, and target client type when prompting for freelancing advice — a new copywriter and a senior developer face very different challenges.',
    'Ask the AI to help you quantify your value proposition with specific outcomes and metrics your past clients have achieved.',
    'Request proposal and pitch templates that emphasize results over process — clients care about what you deliver, not how you work.',
    'Include your hourly rate or project pricing so the AI can help you position, justify, and negotiate your fees effectively.',
    'Ask for scripts to handle common freelancer situations: scope creep, late payments, price objections, and project-ending conversations.'
  ],
  'Project Management': [
    'Always specify the project scope, team size, and timeline when prompting for project management guidance.',
    'Ask the AI to identify potential risks and blockers upfront. Proactive risk management prevents 80% of project delays.',
    'Include your methodology preference (Agile, Waterfall, Kanban) so the AI tailors frameworks and templates to your workflow.',
    'Request communication templates — status updates, stakeholder emails, and meeting agendas — that keep everyone aligned without excessive meetings.',
    'Ask the AI to create milestone-based project plans with clear deliverables and dependencies between tasks.'
  ],
  'Data Analysis': [
    'Always describe your dataset structure (columns, data types, size) and the business question you\'re trying to answer.',
    'Ask the AI to suggest which statistical methods or visualizations best suit your specific data and question — don\'t let it default to generic charts.',
    'Include your tool preferences (Excel, Python, SQL, Tableau) so the AI provides code or formulas you can actually use.',
    'Request the AI to explain its analytical reasoning, not just provide answers. Understanding the "why" lets you validate findings and apply the approach to future analyses.'
  ],
  'Customer Service': [
    'Include your company\'s tone of voice and escalation policies when prompting for customer service scripts and templates.',
    'Ask the AI to create response templates for your top 10 most common customer complaints — these handle 80% of support volume.',
    'Specify the communication channel (email, live chat, phone, social media) — each requires different response lengths and formality levels.',
    'Request the AI to include empathy statements and acknowledgment phrases. Customers who feel heard are 4x more likely to remain loyal.'
  ],
  'Health & Fitness': [
    'Always specify your current fitness level, any injuries or limitations, and specific goals (weight loss, muscle gain, endurance) in health prompts.',
    'Ask the AI to create progressive plans that build gradually — jumping into advanced routines causes injury and burnout.',
    'Include your available equipment and time constraints so the AI designs workouts you can actually complete consistently.',
    'Request nutrition guidance alongside workout plans. Exercise without proper nutrition produces minimal results.'
  ],
  'Research': [
    'Define your research question clearly and specify the scope (academic, market research, competitive analysis) for focused, useful results.',
    'Ask the AI to structure findings with methodology, key findings, limitations, and actionable recommendations — proper research format ensures completeness.',
    'Include your existing knowledge and hypotheses so the AI can build on what you know rather than starting from basics.',
    'Request the AI to identify gaps in available information and suggest primary research methods to fill them.'
  ]
};

// ── Blog articles ─────────────────────────────────────────────────

const BLOG_ARTICLES = [
  {
    title: 'How to Write Better AI Prompts: A Complete Guide',
    slug: 'how-to-write-better-ai-prompts',
    description: 'Master the art of prompt engineering with practical techniques, frameworks, and real-world examples that consistently produce better AI outputs.',
    date: '2026-03-10',
    readTime: '8 min read',
    content: `
<p>The difference between getting mediocre AI output and getting exceptional results almost always comes down to one thing: <strong>how you write your prompt</strong>. After curating hundreds of battle-tested prompts across 22 categories, we've identified the patterns that consistently produce superior results — and the mistakes that hold most people back.</p>

<p>This guide breaks down everything we've learned about writing effective AI prompts, from foundational principles to advanced techniques used by professional prompt engineers.</p>

<h2>Why Your Prompts Matter More Than the Model</h2>

<p>Many people blame the AI model when they get poor results. They upgrade to the latest version, switch providers, or give up entirely. But in our experience testing hundreds of prompts across ChatGPT, Claude, and Gemini, the prompt itself accounts for roughly 80% of output quality.</p>

<p>A well-crafted prompt on a basic model consistently outperforms a vague prompt on the most advanced model. This is because AI models are fundamentally pattern-matching engines — they need clear patterns in your input to produce clear patterns in their output.</p>

<h2>The Anatomy of an Effective Prompt</h2>

<p>Every high-performing prompt we've tested shares five core elements:</p>

<h3>1. Role Assignment</h3>
<p>Tell the AI who it should be. "You are a senior Facebook ads strategist with 10 years of experience managing million-dollar budgets" produces fundamentally different output than "help me with ads." The role establishes the expertise level, vocabulary, and perspective of the response. Check out our <a href="/prompts/facebook-ad-copy-that-converts/">Facebook Ad Copy That Converts</a> prompt for a perfect example of role assignment in action.</p>

<h3>2. Context and Background</h3>
<p>Provide the relevant situation. Include your industry, target audience, current challenges, budget constraints, or any other details that shape the recommendation. AI can't read your mind — the more relevant context you provide, the more tailored the output becomes.</p>

<h3>3. Specific Task Definition</h3>
<p>State exactly what you want the AI to produce. "Write a 300-word product description for a SaaS project management tool targeting remote teams of 10-50 people" is infinitely better than "write about my product." Specificity eliminates ambiguity and gives the AI clear constraints to work within.</p>

<h3>4. Output Format</h3>
<p>Define how you want the response structured. Do you want bullet points, numbered steps, a table, markdown formatting, or prose paragraphs? Do you want headers and sub-sections? Specifying format prevents the AI from making assumptions that don't match your needs.</p>

<h3>5. Quality Constraints</h3>
<p>Set the bar for what "good" looks like. Include requirements like "use data and statistics to support each point," "include real-world examples," "avoid jargon," or "write at an 8th-grade reading level." These constraints act as guardrails that prevent generic, low-effort output.</p>

<h2>Common Prompt Mistakes (and How to Fix Them)</h2>

<h3>Being Too Vague</h3>
<p><strong>Bad:</strong> "Help me with my resume."<br>
<strong>Good:</strong> "Rewrite the experience section of my resume for a Senior Product Manager role at a Series B SaaS startup. Focus on metrics-driven achievements in user growth and retention. Current experience: 5 years at a fintech company managing a team of 8."</p>

<p>Our <a href="/prompts/ats-optimized-resume-builder/">ATS-Optimized Resume Builder</a> prompt demonstrates this principle perfectly — it forces you to provide the specific details that produce a tailored, effective resume.</p>

<h3>Not Iterating</h3>
<p>Your first prompt rarely produces the best result. Treat prompt writing as a conversation. Start with your initial request, evaluate the output, then refine with follow-up prompts like "make the tone more conversational" or "add three more examples from the healthcare industry."</p>

<h3>Overloading a Single Prompt</h3>
<p>Trying to accomplish five different things in one prompt usually means none of them are done well. Break complex tasks into sequential prompts. First generate the outline, then expand each section, then refine the language, then format for your platform.</p>

<h3>Ignoring the Output Format</h3>
<p>If you need a spreadsheet-ready list and the AI gives you prose paragraphs, you've wasted time. Always specify your desired output format upfront. "Present this as a markdown table with columns for Task, Priority, Owner, and Deadline" removes all ambiguity.</p>

<h2>Advanced Techniques</h2>

<h3>Chain-of-Thought Prompting</h3>
<p>Ask the AI to show its reasoning step-by-step before reaching a conclusion. This technique dramatically improves accuracy for complex analytical tasks. Add "Think through this step-by-step, showing your reasoning at each stage" to the end of analytical prompts.</p>

<h3>Few-Shot Examples</h3>
<p>Include 2-3 examples of your desired output within the prompt. If you want the AI to write email subject lines in a specific style, show it three examples of subject lines you've written that performed well. The AI will pattern-match against your examples.</p>

<h3>Persona Stacking</h3>
<p>Combine multiple expert perspectives for richer output. "Analyze this business plan from the perspective of a venture capitalist, then from the perspective of a bootstrapped founder, then from the perspective of the target customer. Summarize where all three perspectives agree."</p>

<h3>Negative Prompting</h3>
<p>Tell the AI what NOT to do. "Do not use cliches like 'game-changer' or 'revolutionary.' Do not start any sentence with 'In today's fast-paced world.' Do not use passive voice." Constraints eliminate the generic filler that AI defaults to when given open-ended prompts.</p>

<h2>Framework: The CRISP Method</h2>

<p>We developed the CRISP method after analyzing our top-performing prompts:</p>

<ul>
<li><strong>C</strong>ontext — Provide background and situational details</li>
<li><strong>R</strong>ole — Assign an expert identity to the AI</li>
<li><strong>I</strong>nstruction — State the specific task clearly</li>
<li><strong>S</strong>pecifications — Define format, length, tone, and constraints</li>
<li><strong>P</strong>urpose — Explain the end goal so the AI can optimize for it</li>
</ul>

<p>Apply this framework to any prompt and you'll see immediate improvement in output quality. Browse our <a href="/">full prompt library</a> to see the CRISP method applied across every category, from <a href="/prompts/google-ads-keyword-research-prompt/">Google Ads keyword research</a> to <a href="/prompts/ai-powered-project-timeline-generator/">project timeline generation</a>.</p>

<h2>Start Prompting Better Today</h2>

<p>The best way to improve your prompt engineering skills is to practice with proven templates and modify them for your specific needs. Every prompt in our library has been tested and refined to follow these principles — use them as starting points and adapt them to your workflow.</p>

<p>Remember: a great prompt doesn't just get you a good answer. It gets you the <em>right</em> answer, formatted exactly how you need it, in a fraction of the time it would take to write from scratch.</p>`
  },
  {
    title: 'Top 10 Facebook Ads Prompts That Actually Convert',
    slug: 'facebook-ads-prompts-that-convert',
    description: 'Discover the most effective AI prompts for creating Facebook ad copy that drives clicks, conversions, and ROAS across every campaign type.',
    date: '2026-03-15',
    readTime: '6 min read',
    content: `
<p>Running Facebook ads without AI prompts is like writing ad copy with one hand tied behind your back. After testing over 80 Facebook Ads prompts with real campaigns and real budgets, we've identified the 10 that consistently produce ad copy worth running — the ones that generate clicks, reduce cost-per-acquisition, and actually move the needle on revenue.</p>

<p>This isn't theory. These are the prompts our community uses daily to create high-converting Facebook ad campaigns across ecommerce, SaaS, local business, and info-product niches.</p>

<h2>Why AI-Generated Ad Copy Outperforms Manual Writing</h2>

<p>The average marketer writes 3-5 ad variations per campaign. AI lets you generate 20-30 variations in minutes, dramatically increasing your chances of finding a winning hook. More importantly, AI excels at the structural elements that drive conversions — urgency triggers, social proof framing, benefit-first headlines, and clear calls to action.</p>

<p>The key is using the right prompt. A bad prompt produces generic, policy-violating, forgettable ad copy. A great prompt produces scroll-stopping copy that feels like it was written by a senior copywriter who knows your audience personally.</p>

<h2>The 10 Prompts That Convert</h2>

<h3>1. The Direct Response Ad Builder</h3>
<p>Our <a href="/prompts/facebook-ad-copy-that-converts/">Facebook Ad Copy That Converts</a> prompt is the most-copied prompt in our entire library. It forces you to define your target audience, unique value proposition, and desired action — then generates multiple ad variations with different hooks for A/B testing. The key is the structured output: primary text, headline, and description formatted exactly for Facebook Ads Manager.</p>

<h3>2. The Retargeting Sequence Writer</h3>
<p>Retargeting ads need different messaging than cold ads, yet most marketers use the same copy for both. Our <a href="/prompts/retargeting-ad-sequence-writer/">Retargeting Ad Sequence Writer</a> creates a 3-touch sequence that addresses awareness, objection-handling, and urgency in the correct order. Average engagement rates with this sequence are 2-3x higher than single-touch retargeting.</p>

<h3>3. The Lookalike Audience Ad Crafter</h3>
<p>When targeting lookalike audiences, your copy needs to educate and intrigue simultaneously — these people resemble your customers but don't know you yet. The <a href="/prompts/lookalike-audience-ad-strategy/">Lookalike Audience Ad Strategy</a> prompt creates copy that bridges the awareness gap while maintaining the specificity that keeps cost-per-click low.</p>

<h3>4. The UGC-Style Ad Script Generator</h3>
<p>User-generated content style ads currently have the highest conversion rates on Facebook. Our UGC prompt generates scripts that sound natural and authentic while hitting every persuasion trigger: problem identification, solution discovery, results demonstration, and social proof.</p>

<h3>5. The Seasonal Campaign Builder</h3>
<p>Black Friday, New Year, back-to-school — seasonal campaigns need urgency and relevance that generic prompts can't provide. Our seasonal prompt adapts your existing offer to the specific psychology of each buying season.</p>

<h3>6. The Lead Magnet Ad Writer</h3>
<p>Lead generation ads fail when the value proposition isn't immediately obvious. This prompt creates ad copy that clearly communicates what the prospect gets, why it matters to them specifically, and what they need to do next — all within Facebook's character limits.</p>

<h3>7. The Video Ad Script Architect</h3>
<p>Video ads dominate Facebook's algorithm, but most people don't know how to structure a video script for paid social. This prompt generates hook-first scripts with pattern interrupts every 3-5 seconds and a clear CTA placement that accounts for the average 6-second attention span.</p>

<h3>8. The Competitor Differentiation Ad</h3>
<p>When your audience is comparing options, you need ad copy that positions your product as the obvious choice without naming competitors directly. This prompt creates comparison-style messaging that highlights your unique advantages.</p>

<h3>9. The Social Proof Amplifier</h3>
<p>This prompt transforms your customer reviews, case studies, and testimonials into compelling ad copy that leverages social proof at every level — individual stories, aggregate data ("Join 10,000+ customers"), and authority signals.</p>

<h3>10. The Budget Optimizer Prompt</h3>
<p>This isn't a copy prompt — it's a strategy prompt. Feed it your current campaign data (CPA, ROAS, CTR, spend) and it provides specific recommendations for budget allocation, audience adjustments, and creative changes based on the numbers. Marketers using this prompt report an average 23% improvement in ROAS within two weeks.</p>

<h2>How to Get the Most From These Prompts</h2>

<p>Don't just copy and paste. The prompts in our <a href="/">Facebook Ads category</a> are designed as frameworks — you fill in your specific product details, audience demographics, and campaign objectives. The more specific your inputs, the more targeted (and effective) the output.</p>

<p>Start with 2-3 prompts that match your current campaign goals, generate multiple variations, and let Facebook's algorithm find the winners through proper A/B testing. The AI writes the copy; the data picks the winners.</p>

<p>Browse all <a href="/#facebook-ads">80 Facebook Ads prompts</a> in our library to find the perfect starting point for your next campaign.</p>`
  },
  {
    title: 'The Ultimate Guide to Using AI for Resume Writing',
    slug: 'ultimate-guide-ai-resume-writing',
    description: 'Learn how to use AI prompts to craft ATS-optimized resumes, compelling cover letters, and interview preparation materials that land interviews.',
    date: '2026-03-18',
    readTime: '6 min read',
    content: `
<p>Your resume has approximately 7 seconds to make an impression on a recruiter — and that's only after it survives the Applicant Tracking System (ATS) that automatically rejects 75% of applications before a human ever sees them. AI prompts can dramatically improve both your ATS pass rate and your human impression, but only if you use them correctly.</p>

<p>We've curated 36 Resume & Career prompts that cover every stage of the job search process. This guide shows you how to use them strategically for maximum impact.</p>

<h2>Understanding the ATS Challenge</h2>

<p>Applicant Tracking Systems scan resumes for specific keywords, phrases, and formatting patterns. They score each resume against the job description and only surface the highest-scoring candidates to recruiters. This means your resume isn't just a document — it's a keyword-optimization exercise.</p>

<p>The problem with writing resumes yourself is that you naturally use different words than the job posting. You might write "managed a team" when the ATS is scanning for "led cross-functional teams." You might say "improved processes" when the system wants "implemented operational efficiency improvements."</p>

<p>AI excels at this keyword-matching task because it can analyze a job description and generate resume language that mirrors the employer's exact terminology while still sounding natural and authentic.</p>

<h2>Step 1: ATS-Optimized Resume Content</h2>

<p>Start with our <a href="/prompts/ats-optimized-resume-builder/">ATS-Optimized Resume Builder</a> prompt. This is the most comprehensive resume prompt in our library — it takes your existing experience, the target job description, and your key achievements, then generates bullet points that are both ATS-friendly and compelling to human readers.</p>

<p>The key insight behind this prompt is that it doesn't just insert keywords randomly. It weaves them into achievement-focused bullet points that follow the CAR format: <strong>C</strong>hallenge (what you faced), <strong>A</strong>ction (what you did), <strong>R</strong>esult (the measurable outcome). This format satisfies both the ATS algorithm and the recruiter who wants to see impact.</p>

<h3>Quantifying Your Achievements</h3>

<p>The biggest mistake in resume writing is using vague descriptions. "Responsible for marketing campaigns" tells a recruiter nothing. "Launched 12 email campaigns generating $340K in attributed revenue with 28% average open rate" tells them everything.</p>

<p>Our prompts consistently push for quantification because numbers are what differentiate candidates. Even if you don't have exact figures, AI can help you estimate reasonable metrics: "How many people did your work impact? What percentage improvement did you drive? How much time or money did you save?"</p>

<h2>Step 2: Tailoring for Each Application</h2>

<p>Sending the same resume to every job is the single biggest mistake job seekers make. Our resume tailoring prompts help you quickly adjust your resume for each application by identifying which experiences to emphasize, which keywords to prioritize, and which achievements align most closely with the specific role.</p>

<p>This doesn't mean rewriting from scratch. It means strategically reordering bullet points, swapping in role-specific keywords, and adjusting your professional summary to match the job's core requirements. With AI, this customization takes 5 minutes instead of 45.</p>

<h2>Step 3: Cover Letters That Get Read</h2>

<p>Most cover letters are generic, forgettable, and add nothing beyond what's in the resume. Our cover letter prompts solve this by forcing a different structure: start with a specific connection to the company (recent news, product feature, company value), bridge to your relevant experience, and close with a concrete value proposition.</p>

<p>The <a href="/prompts/compelling-cover-letter-generator/">Compelling Cover Letter Generator</a> creates cover letters that read like they were written by someone who genuinely researched the company — because the prompt requires you to provide that research before generating the letter.</p>

<h2>Step 4: Interview Preparation</h2>

<p>Landing the interview is only half the battle. Our <a href="/prompts/behavioral-interview-prep-coach/">Behavioral Interview Prep Coach</a> helps you prepare STAR-format responses (Situation, Task, Action, Result) for the most common behavioral questions in your industry.</p>

<p>Feed it the job description and your resume, and it generates customized responses for questions like "Tell me about a time you handled conflict" or "Describe a situation where you had to meet a tight deadline." Each response is anchored to your actual experience, not generic templates.</p>

<h2>Step 5: Salary Negotiation</h2>

<p>Don't leave money on the table. Our salary negotiation prompts help you research competitive rates, prepare counter-offer scripts, and frame your value in terms that justify the compensation you deserve. The prompts even cover non-salary negotiation elements like remote work, equity, signing bonuses, and professional development budgets.</p>

<h2>The Complete Job Search System</h2>

<p>Used together, our <a href="/#resume-career">36 Resume & Career prompts</a> form a complete job search system: optimize your resume for ATS, tailor it for each application, write memorable cover letters, prepare for behavioral interviews, and negotiate the best possible offer.</p>

<p>The job market is competitive. Using AI strategically at every stage gives you a measurable advantage over candidates who are still writing generic resumes by hand.</p>`
  },
  {
    title: 'AI Prompt Engineering: From Beginner to Pro',
    slug: 'prompt-engineering-beginner-to-pro',
    description: 'A structured roadmap for developing prompt engineering skills, from basic techniques to advanced strategies used by AI professionals.',
    date: '2026-03-20',
    readTime: '9 min read',
    content: `
<p>Prompt engineering is the most valuable skill of 2026 — and it's entirely learnable. Whether you're using AI for the first time or you've been prompting daily for months, there's always a higher level of output quality waiting for you. This guide maps the complete journey from beginner to professional prompt engineer, with practical exercises at every stage.</p>

<h2>Beginner Level: The Fundamentals</h2>

<p>If you're new to AI prompting, start here. The beginner stage is about understanding <em>why</em> specificity matters and building the habit of structured prompts.</p>

<h3>Principle 1: Be Specific, Not General</h3>
<p>The most important lesson in prompt engineering is that specificity determines quality. Compare these two prompts:</p>
<ul>
<li><strong>Vague:</strong> "Write a blog post about marketing."</li>
<li><strong>Specific:</strong> "Write a 600-word blog post about email marketing best practices for small ecommerce businesses with less than $50K monthly revenue. Include 3 actionable tips with real-world examples. Write in a conversational, encouraging tone."</li>
</ul>
<p>The specific prompt will always produce better output because it eliminates the hundreds of assumptions the AI would otherwise make about what you want.</p>

<h3>Principle 2: Assign a Role</h3>
<p>Before giving the AI a task, tell it who to be. "You are a senior content strategist at a Fortune 500 company" sets a completely different baseline than "you are a helpful assistant." Role assignment is the single easiest technique that produces the biggest improvement in output quality.</p>

<p>Try it with our <a href="/prompts/ai-business-consultant/">AI Business Consultant</a> prompt — notice how the role definition shapes the entire response.</p>

<h3>Principle 3: Define the Output Format</h3>
<p>Don't let the AI decide how to present information. Tell it explicitly: "Format your response as a numbered list," "Use H2 headers for each section," "Present this as a comparison table with three columns." Format control prevents the most common frustration: getting good content in an unusable structure.</p>

<h3>Practice Exercise</h3>
<p>Take any task you'd normally ask AI to help with. Before submitting your prompt, add three things: a role, a specific audience, and an output format. Compare the results to your usual prompting style. The improvement is typically immediate and dramatic.</p>

<h2>Intermediate Level: Structure and Iteration</h2>

<p>Once you've mastered the basics, the intermediate level focuses on multi-step prompting and systematic refinement.</p>

<h3>Chain Prompting</h3>
<p>Complex tasks should be broken into sequential prompts. Instead of asking for a complete marketing plan in one shot, break it into steps: (1) analyze the target market, (2) define positioning, (3) outline channels and tactics, (4) create a timeline and budget, (5) define success metrics. Each step builds on the previous output, producing far more coherent and detailed results.</p>

<h3>Iterative Refinement</h3>
<p>Your first prompt output is a draft, not a final product. Develop the habit of follow-up prompts that refine specific aspects: "Make the tone more assertive," "Add statistics to support point #3," "Rewrite the introduction to lead with a surprising fact." Professional prompt engineers typically refine output across 3-5 iterations.</p>

<h3>Template Libraries</h3>
<p>Stop rewriting prompts from scratch every time. Build a library of your best-performing prompts (or use ours — we have <a href="/">hundreds ready to go</a>). Templates save time and ensure consistency. Customize the variables (audience, product, goal) while keeping the proven structure intact.</p>

<h3>Practice Exercise</h3>
<p>Choose a complex task (like creating a content calendar for next month). Break it into 4-5 sequential prompts, using each output as input for the next. Compare the final result to what you'd get from a single, comprehensive prompt.</p>

<h2>Advanced Level: Frameworks and Techniques</h2>

<p>Advanced prompt engineering involves specialized techniques that dramatically improve accuracy, creativity, and output sophistication.</p>

<h3>Few-Shot Learning</h3>
<p>Include examples of your desired output directly in the prompt. If you want the AI to write product descriptions in a specific style, include 2-3 examples. The AI will identify patterns in your examples and replicate them — tone, length, structure, and vocabulary. This technique is how professionals get AI output that matches their brand voice exactly.</p>

<h3>Chain-of-Thought Reasoning</h3>
<p>For analytical or problem-solving tasks, add "Think through this step by step, explaining your reasoning at each stage before reaching a conclusion." This technique forces the AI to show its work, which dramatically reduces errors in logic, math, and strategic reasoning. Our <a href="/prompts/data-analysis-insight-extractor/">Data Analysis Insight Extractor</a> uses this technique extensively.</p>

<h3>Constraint-Based Creativity</h3>
<p>Paradoxically, adding constraints improves creative output. "Write a LinkedIn post about leadership" produces generic content. "Write a LinkedIn post about leadership in exactly 150 words, using a personal story structure, without using the words 'leader,' 'leadership,' or 'team'" produces something genuinely original and engaging.</p>

<h3>Multi-Perspective Analysis</h3>
<p>Ask the AI to analyze the same problem from multiple viewpoints: "First, analyze this from the customer's perspective. Then from the competitor's perspective. Then from an investor's perspective. Finally, synthesize all three viewpoints into a unified recommendation." This technique is especially powerful for <a href="/prompts/competitive-analysis-framework/">competitive analysis</a> and strategic planning.</p>

<h3>Practice Exercise</h3>
<p>Take one of our prompts from any category and add a few-shot example. Include 2 examples of the output style you want before the main instruction. Measure how closely the AI matches your desired style compared to the base prompt alone.</p>

<h2>Expert Level: Systems and Automation</h2>

<p>Expert-level prompt engineering moves beyond individual prompts to creating systems — interconnected prompt workflows that produce complex deliverables with minimal human intervention.</p>

<h3>Prompt Pipelines</h3>
<p>Design sequences of prompts where each output feeds into the next, creating automated workflows. Example: (1) research prompt extracts market data, (2) analysis prompt identifies opportunities, (3) strategy prompt creates a plan, (4) content prompt generates deliverables, (5) review prompt checks quality. Our <a href="/#agentic-ai">Agentic AI prompts</a> are designed for exactly this type of pipeline thinking.</p>

<h3>Self-Evaluation Prompts</h3>
<p>Include evaluation criteria in your prompts: "After generating your response, rate it from 1-10 on specificity, actionability, and relevance to the stated goal. If any score is below 7, automatically revise and regenerate." This creates a built-in quality control loop that catches weak output before you need to intervene.</p>

<h3>Dynamic Context Windows</h3>
<p>For long-running projects, develop a "context document" that you update and include with each prompt. This document contains your project goals, previous decisions, constraints, and current status. It ensures every prompt in the series has full context, even if you're working across multiple sessions.</p>

<h2>Your Learning Path</h2>

<p>Prompt engineering isn't learned by reading — it's learned by doing. Start with our <a href="/">prompt library</a>, pick prompts from categories relevant to your work, and practice the techniques described at each level. Within a few weeks, you'll notice a fundamental shift in the quality and usefulness of every AI interaction.</p>

<p>The difference between someone who uses AI and someone who <em>wields</em> AI is prompt engineering skill. Invest in yours.</p>`
  },
  {
    title: 'How to Use AI Prompts for Google Ads Optimization',
    slug: 'ai-prompts-google-ads-optimization',
    description: 'Learn how AI prompts can improve every stage of your Google Ads workflow — from keyword research to ad copy to bid strategy optimization.',
    date: '2026-03-22',
    readTime: '7 min read',
    content: `
<p>Google Ads is one of the highest-ROI marketing channels available, but it's also one of the most complex. Between keyword research, match types, ad copy variations, Quality Score optimization, bid strategies, and landing page alignment, there are dozens of variables that determine whether your campaigns are profitable or burning money.</p>

<p>AI prompts can systematically improve every stage of your Google Ads workflow. We've curated 57 Google Ads-specific prompts that cover the complete campaign lifecycle, and this guide shows you how to deploy them strategically for maximum impact on your ROAS.</p>

<h2>Stage 1: Keyword Research and Strategy</h2>

<p>Keyword research is the foundation of every Google Ads campaign, and it's where most campaigns silently fail. Bidding on the wrong keywords — even with perfect ad copy — means paying for clicks that never convert.</p>

<p>Our <a href="/prompts/google-ads-keyword-research-prompt/">Google Ads Keyword Research</a> prompt doesn't just generate keyword lists. It organizes keywords by search intent (informational, navigational, commercial, transactional), estimates competition level, and suggests negative keywords to exclude from the start. This structured approach prevents the most expensive mistake in Google Ads: paying for clicks with the wrong intent.</p>

<h3>Long-Tail Keyword Mining</h3>
<p>Long-tail keywords (3-5 word phrases) typically have lower competition and higher conversion rates. Use our keyword expansion prompts to generate hundreds of long-tail variations from your core terms. For example, instead of just bidding on "project management software," the AI identifies specific intent phrases like "best project management tool for remote marketing teams under 20 people."</p>

<h3>Negative Keyword Strategy</h3>
<p>For every dollar you spend attracting the right clicks, you can save fifty cents by preventing the wrong ones. Our negative keyword prompt analyzes your target keywords and proactively identifies search terms that would trigger your ads but attract non-converting traffic. Adding these as negative keywords from day one dramatically improves campaign efficiency.</p>

<h2>Stage 2: Ad Copy That Earns Clicks</h2>

<p>Google Ads has some of the strictest copy constraints in advertising: 30-character headlines and 90-character descriptions. Every word has to earn its place. AI prompts excel here because they can generate dozens of variations within exact character limits — something that's tedious and error-prone when done manually.</p>

<h3>Responsive Search Ads</h3>
<p>Google's RSA format allows up to 15 headlines and 4 descriptions that the algorithm mixes and matches. Our RSA prompts generate the full complement of headlines and descriptions, each designed to work independently and in combination. The key is ensuring variety — each headline should test a different angle (benefit, feature, social proof, urgency, question) so Google's algorithm has meaningful options to optimize.</p>

<h3>Ad Extensions</h3>
<p>Extensions (sitelinks, callouts, structured snippets) increase ad real estate and click-through rates. Our prompts generate all extension types simultaneously, ensuring consistency between your main ad copy and extension messaging. Campaigns with full extensions typically see 20-30% higher CTR than ads alone.</p>

<h2>Stage 3: Landing Page Alignment</h2>

<p>Your Quality Score — which directly affects ad position and cost-per-click — depends heavily on landing page relevance. Our landing page analysis prompts review your page content against your target keywords and ad copy, identifying gaps in message match.</p>

<p>Message match means the language in your ad is echoed on your landing page. If your ad says "Free 14-day trial — no credit card required," your landing page headline should include those exact words. AI prompts can generate landing page copy that perfectly mirrors your ad messaging.</p>

<h2>Stage 4: Campaign Structure</h2>

<p>How you organize campaigns, ad groups, and keywords determines how precisely you can control messaging and budgets. Our campaign structure prompts help you design account architectures that balance granularity with manageability.</p>

<p>The general principle: one ad group per keyword theme, with ads tailored to that specific theme. Our prompts create this structure automatically, generating ad groups, keyword lists, and matching ad copy all at once. This systematic approach prevents the common "everything in one ad group" mistake that destroys Quality Scores.</p>

<h2>Stage 5: Bid Strategy and Budget Optimization</h2>

<p>Once your campaigns are running, AI prompts shift from creation to optimization. Feed your campaign data (CTR, CPA, ROAS, impression share, Quality Score) into our optimization prompts, and they'll identify specific actions: which keywords to increase bids on, which to pause, where to reallocate budget, and when to test new ad variations.</p>

<p>Our <a href="/prompts/google-ads-performance-analyzer/">Google Ads Performance Analyzer</a> prompt processes your data and outputs a prioritized action plan — the three highest-impact changes you can make right now to improve results.</p>

<h2>Stage 6: Scaling What Works</h2>

<p>Once you find winning keywords and ad copy, the challenge is scaling without inflating costs. Our scaling prompts help you identify expansion opportunities: similar keywords, adjacent audiences, new geographic markets, and day/time optimizations that extend your reach while maintaining efficiency.</p>

<h2>Putting It All Together</h2>

<p>The most successful Google Ads managers we've worked with use AI prompts at every stage of the workflow, not just for ad copy. Keyword research, negative keyword identification, ad copy generation, extension writing, landing page optimization, performance analysis, and scaling strategy — each stage benefits from a structured AI prompt.</p>

<p>Browse our complete library of <a href="/#google-ads">57 Google Ads prompts</a> and start with the stage where your current campaigns need the most improvement. Whether you're launching a new campaign or optimizing an existing one, there's a prompt designed for exactly where you are.</p>`
  }
];

// ── Shared HTML boilerplate ───────────────────────────────────────

function headBoilerplate({ title, description, canonicalUrl, ogType = 'website' }) {
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
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#08060f">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph -->
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="Prompt Black Magic">
  <meta property="og:image" content="${SITE_URL}/og-image.png">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${SITE_URL}/og-image.png">

  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#10038;</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">`;
}

function bodyOpen() {
  return `
</head>
<body>

  <!-- Ambient floating orbs -->
  <div class="ambient-bg" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>`;
}

function navBar() {
  return `
  <nav class="detail-topbar" style="max-width:760px;margin:0 auto;padding:24px 24px 0">
    <a href="/" class="back-link">${ICONS.back} All Prompts</a>
  </nav>`;
}

function footerHtml() {
  return `
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
    <div class="footer-bottom">${FOOTER_LEGAL_LINKS}
      <p class="copyright">Prompt Black Magic &copy; 2026. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>`;
}

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

  // Pro Tips
  const tips = CATEGORY_TIPS[p.category] || [];
  let tipsHtml = '';
  if (tips.length > 0) {
    // Pick 3 tips using index rotation for variety
    const tipCount = Math.min(3, tips.length);
    const startTip = idx % tips.length;
    const selectedTips = [];
    for (let t = 0; t < tipCount; t++) {
      selectedTips.push(tips[(startTip + t) % tips.length]);
    }
    const tipsLis = selectedTips.map(tip => `          <li>${escapeHtml(tip)}</li>`).join('\n');
    tipsHtml = `
    <!-- Pro Tips -->
    <div class="tips-section">
      <div class="detail-section-label">
        <span class="detail-section-icon">${ICONS.lightbulb}</span>
        <h2>Pro Tips for ${escapeHtml(p.category)}</h2>
      </div>
      <ul class="tips-list">
${tipsLis}
      </ul>
    </div>`;
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
      <p class="detail-author">By The Prompt Black Magic Team</p>
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
${tipsHtml}
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
    <div class="footer-bottom">${FOOTER_LEGAL_LINKS}
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
    <div class="footer-bottom">${FOOTER_LEGAL_LINKS}
      <p class="copyright">Prompt Black Magic &copy; 2026. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;
}

// ── Generate trust pages ──────────────────────────────────────────

function generateAboutPage() {
  const title = 'About Prompt Black Magic';
  const description = 'Learn about the Prompt Black Magic team, our mission to make AI accessible, and how we curate battle-tested prompts across 22 categories.';
  const canonicalUrl = `${SITE_URL}/about/`;

  return `${headBoilerplate({ title, description, canonicalUrl })}
${bodyOpen()}
${navBar()}

  <div class="content-page">
    <h1>About Prompt Black Magic</h1>
    <p class="last-updated">Last updated: March 2026</p>

    <p>Prompt Black Magic is a free, curated library of <strong>hundreds of battle-tested AI prompts</strong> spanning 22 categories. We exist because we believe the gap between "knowing AI exists" and "getting real value from AI" is almost entirely a prompt quality problem — and we're here to close it.</p>

    <h2>Our Mission</h2>
    <p>AI is the most powerful tool most people aren't using effectively. Not because the technology isn't ready, but because the interface — the prompt — is where most people get stuck. Vague prompts produce vague results, and vague results make people think AI "doesn't work for them."</p>
    <p>Our mission is simple: provide ready-to-use, expertly crafted prompts that produce genuinely useful output across every major use case — from writing Facebook ad copy to optimizing Google Ads campaigns, from building ATS-optimized resumes to managing complex projects with AI assistance.</p>

    <h2>What We Offer</h2>
    <ul>
      <li><strong>Hundreds of free prompts</strong> across 22 categories including Business, Marketing, Sales, Career, Coding, Productivity, and more</li>
      <li><strong>Detailed usage instructions</strong> with every prompt, so you know exactly how to customize it for your situation</li>
      <li><strong>No signup required</strong> — browse, copy, and use any prompt instantly</li>
      <li><strong>Regular updates</strong> — we continuously add new prompts and refine existing ones based on community feedback and AI model improvements</li>
    </ul>

    <h2>Our Curation Process</h2>
    <p>Every prompt in our library goes through a rigorous selection process:</p>
    <ol>
      <li><strong>Research:</strong> We identify the most common and high-value AI use cases across industries, interviewing practitioners and analyzing what professionals actually need.</li>
      <li><strong>Drafting:</strong> Each prompt is written using proven prompt engineering principles — clear role assignment, specific context, defined output formats, and quality constraints.</li>
      <li><strong>Testing:</strong> We test every prompt across multiple AI models (ChatGPT, Claude, Gemini) to ensure consistent quality regardless of which platform you use.</li>
      <li><strong>Refinement:</strong> Based on testing results, we iterate on wording, structure, and instructions until the prompt reliably produces high-quality output.</li>
      <li><strong>Documentation:</strong> Each prompt is published with a clear description, "How to Use" instructions, and categorized for easy discovery.</li>
    </ol>

    <h2>The Prompt Black Magic Team</h2>
    <p>We're a small, focused team of prompt engineers, marketers, and developers who use AI daily in our own work. We built Prompt Black Magic because we were tired of spending 20 minutes crafting the perfect prompt every time we needed AI help — and we knew others were struggling with the same problem.</p>
    <p>Our diverse backgrounds (advertising, software engineering, content strategy, data analysis) ensure our prompts cover real-world use cases, not theoretical exercises. Every prompt exists because someone on our team — or in our community — actually needed it.</p>

    <h2>Contact Us</h2>
    <p>We'd love to hear from you. Whether you have prompt suggestions, feedback on existing prompts, or partnership inquiries, reach out at:</p>
    <a href="mailto:promptblackmagic@gmail.com" class="contact-email">promptblackmagic@gmail.com</a>
  </div>
${footerHtml()}`;
}

function generatePrivacyPage() {
  const title = 'Privacy Policy | Prompt Black Magic';
  const description = 'Privacy policy for Prompt Black Magic. Learn how we handle your data, cookies, analytics, and advertising on our website.';
  const canonicalUrl = `${SITE_URL}/privacy/`;

  return `${headBoilerplate({ title, description, canonicalUrl })}
${bodyOpen()}
${navBar()}

  <div class="content-page">
    <h1>Privacy Policy</h1>
    <p class="last-updated">Effective date: March 1, 2026 | Last updated: March 25, 2026</p>

    <p>Prompt Black Magic ("we," "our," or "us") operates the website <a href="${SITE_URL}">www.promptblackmagic.com</a>. This Privacy Policy explains how we collect, use, and protect information when you visit our website.</p>

    <h2>Information We Collect</h2>

    <h3>Automatically Collected Information</h3>
    <p>When you visit our website, certain information is collected automatically through cookies and similar technologies:</p>
    <ul>
      <li><strong>Usage data:</strong> Pages visited, time spent on pages, referring URLs, browser type, device type, operating system, and screen resolution</li>
      <li><strong>IP address:</strong> Your IP address may be collected by our analytics and advertising partners (see below)</li>
      <li><strong>Cookies:</strong> Small text files stored on your device that help us understand how visitors use our site</li>
    </ul>

    <h3>Information You Provide</h3>
    <p>If you contact us via email at <a href="mailto:promptblackmagic@gmail.com">promptblackmagic@gmail.com</a>, we collect the information you include in your message (name, email address, message content). We use this solely to respond to your inquiry.</p>

    <h2>How We Use Your Information</h2>
    <p>We use collected information to:</p>
    <ul>
      <li>Understand how visitors use our website so we can improve content and user experience</li>
      <li>Measure website traffic and performance</li>
      <li>Display relevant advertisements through Google AdSense</li>
      <li>Respond to your inquiries when you contact us</li>
    </ul>

    <h2>Third-Party Services</h2>

    <h3>Google Analytics</h3>
    <p>We use Google Analytics (measurement ID: G-J49B7Y5X7E) to understand website traffic and user behavior. Google Analytics uses cookies to collect anonymous usage data. Google may use this data as described in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

    <h3>Google AdSense</h3>
    <p>We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your browsing history. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>

    <h3>Google Fonts</h3>
    <p>We use Google Fonts to display typography on our website. When you visit our pages, your browser loads the required fonts from Google's servers. This may transmit your IP address and browser data to Google. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> for more information.</p>

    <h2>Cookies</h2>
    <p>Our website uses the following types of cookies:</p>
    <ul>
      <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
      <li><strong>Analytics cookies:</strong> Used by Google Analytics to track page views and user behavior (anonymous)</li>
      <li><strong>Advertising cookies:</strong> Used by Google AdSense to serve and measure ad performance</li>
    </ul>
    <p>You can control cookies through your browser settings. Disabling cookies may affect your experience on our website.</p>

    <h2>Data Retention</h2>
    <p>We do not maintain a user database. Analytics data is retained according to Google Analytics' default retention settings (14 months). Email correspondence is retained only as long as needed to address your inquiry.</p>

    <h2>Your Rights</h2>
    <p>Depending on your jurisdiction, you may have the right to:</p>
    <ul>
      <li>Access the personal data we hold about you</li>
      <li>Request correction of inaccurate data</li>
      <li>Request deletion of your data</li>
      <li>Opt out of personalized advertising</li>
      <li>Withdraw consent for data processing</li>
    </ul>
    <p>To exercise any of these rights, please contact us at <a href="mailto:promptblackmagic@gmail.com">promptblackmagic@gmail.com</a>.</p>

    <h2>Children's Privacy</h2>
    <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>

    <h2>Contact Us</h2>
    <p>If you have questions about this Privacy Policy, contact us at:</p>
    <a href="mailto:promptblackmagic@gmail.com" class="contact-email">promptblackmagic@gmail.com</a>
  </div>
${footerHtml()}`;
}

function generateTermsPage() {
  const title = 'Terms of Service | Prompt Black Magic';
  const description = 'Terms of service for Prompt Black Magic. Understand the rules for using our free AI prompt library, copyright, and disclaimers.';
  const canonicalUrl = `${SITE_URL}/terms/`;

  return `${headBoilerplate({ title, description, canonicalUrl })}
${bodyOpen()}
${navBar()}

  <div class="content-page">
    <h1>Terms of Service</h1>
    <p class="last-updated">Effective date: March 1, 2026 | Last updated: March 25, 2026</p>

    <p>Welcome to Prompt Black Magic. By accessing or using our website at <a href="${SITE_URL}">www.promptblackmagic.com</a>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing and using Prompt Black Magic, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <a href="/privacy/">Privacy Policy</a>. These terms apply to all visitors, users, and others who access the website.</p>

    <h2>2. Description of Service</h2>
    <p>Prompt Black Magic provides a free, curated library of AI prompts across multiple categories. Our service includes prompt text, usage instructions, and related blog content. All content is provided for informational and educational purposes.</p>

    <h2>3. Use of Prompts</h2>
    <p>You are free to use the prompts on our website for your personal and commercial projects. You may:</p>
    <ul>
      <li>Copy and use prompts with any AI model or platform</li>
      <li>Modify prompts to suit your specific needs</li>
      <li>Use AI-generated outputs from our prompts in your work</li>
    </ul>
    <p>You may <strong>not</strong>:</p>
    <ul>
      <li>Republish, redistribute, or sell our prompts as your own collection or product</li>
      <li>Scrape or bulk-download our website content for redistribution</li>
      <li>Use our prompts to generate content that is illegal, harmful, or violates third-party rights</li>
    </ul>

    <h2>4. Intellectual Property</h2>
    <p>The website design, branding, logo, original written content (blog articles, descriptions, usage instructions), and the curated collection of prompts as a whole are the intellectual property of Prompt Black Magic. Individual prompt texts may be used freely as described in Section 3.</p>

    <h2>5. Disclaimer of Warranties</h2>
    <p>Our website and content are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:</p>
    <ul>
      <li>Our prompts will produce specific results with any particular AI model</li>
      <li>The website will be available without interruption</li>
      <li>All information on the website is accurate, complete, or current</li>
    </ul>
    <p>AI models produce different outputs based on many factors including model version, temperature settings, and context. We cannot guarantee specific outcomes from using our prompts.</p>

    <h2>6. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, Prompt Black Magic shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website or content. This includes, without limitation, damages for loss of profits, data, or other intangible losses.</p>

    <h2>7. Third-Party Services</h2>
    <p>Our website contains links to third-party websites and uses third-party services (Google Analytics, Google AdSense, Google Fonts). We are not responsible for the content, privacy practices, or availability of these third-party services. Your use of third-party services is governed by their respective terms and policies.</p>

    <h2>8. User Conduct</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use our website for any unlawful purpose</li>
      <li>Attempt to gain unauthorized access to our systems or servers</li>
      <li>Interfere with or disrupt the website or its infrastructure</li>
      <li>Use automated tools to scrape or download content in bulk</li>
    </ul>

    <h2>9. Changes to Terms</h2>
    <p>We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.</p>

    <h2>10. Governing Law</h2>
    <p>These Terms of Service are governed by and construed in accordance with applicable law, without regard to conflict of law principles.</p>

    <h2>Contact</h2>
    <p>If you have questions about these Terms of Service, contact us at:</p>
    <a href="mailto:promptblackmagic@gmail.com" class="contact-email">promptblackmagic@gmail.com</a>
  </div>
${footerHtml()}`;
}

function generateContactPage() {
  const title = 'Contact Us | Prompt Black Magic';
  const description = 'Get in touch with the Prompt Black Magic team. Send us prompt suggestions, feedback, bug reports, or partnership inquiries.';
  const canonicalUrl = `${SITE_URL}/contact/`;

  return `${headBoilerplate({ title, description, canonicalUrl })}
${bodyOpen()}
${navBar()}

  <div class="content-page">
    <h1>Contact Us</h1>
    <p class="last-updated">We'd love to hear from you</p>

    <p>Whether you have a prompt suggestion, found a bug, want to give feedback, or have a partnership inquiry — we read every message and do our best to respond promptly.</p>

    <h2>Email Us</h2>
    <a href="mailto:promptblackmagic@gmail.com" class="contact-email">promptblackmagic@gmail.com</a>

    <h2>What to Reach Out About</h2>
    <ul>
      <li><strong>Prompt suggestions:</strong> Have an idea for a prompt we should add? Tell us the category, use case, and any specific details that would make it useful.</li>
      <li><strong>Feedback:</strong> Found a prompt that could be improved? Let us know what you'd change and why.</li>
      <li><strong>Bug reports:</strong> If something on the website isn't working correctly — broken links, display issues, copy button problems — please let us know with details about your browser and device.</li>
      <li><strong>Partnership inquiries:</strong> Interested in collaborating, guest posting, or featuring our prompts? We're open to conversations.</li>
      <li><strong>General questions:</strong> Anything else related to AI prompting, our website, or how to get the most out of our prompt library.</li>
    </ul>

    <h2>Response Time</h2>
    <p>We typically respond to emails within 1-2 business days. For urgent matters, please include "URGENT" in your subject line.</p>
  </div>
${footerHtml()}`;
}

// ── Generate blog pages ───────────────────────────────────────────

function generateBlogIndex() {
  const title = 'Blog | Prompt Black Magic';
  const description = 'Guides, tutorials, and insights on AI prompt engineering, Facebook Ads, Google Ads optimization, resume writing, and more.';
  const canonicalUrl = `${SITE_URL}/blog/`;

  const cards = BLOG_ARTICLES.map(article => `
    <a class="blog-card" href="/blog/${article.slug}/">
      <div class="blog-card-meta">
        <span>${article.date}</span>
        <span>${article.readTime}</span>
      </div>
      <h2 class="blog-card-title">${escapeHtml(article.title)}</h2>
      <p class="blog-card-desc">${escapeHtml(article.description)}</p>
      <span class="blog-card-cta">Read Article ${ICONS.arrow}</span>
    </a>`).join('');

  return `${headBoilerplate({ title, description, canonicalUrl })}
${bodyOpen()}
${navBar()}

  <div class="content-page">
    <h1>Blog</h1>
    <p>Guides, tutorials, and insights on getting more from AI prompts.</p>

    <div class="blog-grid">${cards}
    </div>
  </div>
${footerHtml()}`;
}

function generateBlogArticle(article) {
  const title = `${article.title} | Prompt Black Magic`;
  const description = article.description;
  const canonicalUrl = `${SITE_URL}/blog/${article.slug}/`;

  // JSON-LD: Article
  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "url": canonicalUrl,
    "image": `${SITE_URL}/og-image.png`,
    "author": { "@type": "Organization", "name": "Prompt Black Magic", "url": SITE_URL },
    "publisher": { "@type": "Organization", "name": "Prompt Black Magic", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/og-image.png` } },
    "datePublished": article.date,
    "dateModified": TODAY,
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
  });

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + "/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog/` },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": canonicalUrl }
    ]
  });

  // Related articles (all others)
  const relatedArticles = BLOG_ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3);
  const relatedHtml = relatedArticles.map(a => `
      <a class="blog-card" href="/blog/${a.slug}/">
        <div class="blog-card-meta">
          <span>${a.date}</span>
          <span>${a.readTime}</span>
        </div>
        <h3 class="blog-card-title">${escapeHtml(a.title)}</h3>
        <p class="blog-card-desc">${escapeHtml(a.description)}</p>
        <span class="blog-card-cta">Read Article ${ICONS.arrow}</span>
      </a>`).join('');

  return `${headBoilerplate({ title, description, canonicalUrl, ogType: 'article' })}

  <!-- Structured Data -->
  <script type="application/ld+json">${articleJsonLd}</script>
  <script type="application/ld+json">${breadcrumbJsonLd}</script>
${bodyOpen()}
${navBar()}

  <div class="content-page">
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="padding:0;margin-bottom:24px;max-width:100%">
      <a href="/">Home</a>
      <span class="breadcrumb-sep">/</span>
      <a href="/blog/">Blog</a>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">${escapeHtml(article.title)}</span>
    </nav>

    <div class="article-hero">
      <div class="article-meta">
        <span>${article.date}</span>
        <span>${article.readTime}</span>
        <span>By The Prompt Black Magic Team</span>
      </div>
      <h1>${escapeHtml(article.title)}</h1>
    </div>

    ${article.content}

    <a href="/" class="article-cta">${ICONS.arrow} Browse All Prompts</a>

    <h2 style="margin-top:56px">More from the Blog</h2>
    <div class="blog-grid">${relatedHtml}
    </div>
  </div>
${footerHtml()}`;
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

  // Trust pages
  const trustPages = ['about', 'privacy', 'terms', 'contact'];
  for (const page of trustPages) {
    xml += `  <url>
    <loc>${SITE_URL}/${page}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
`;
  }

  // Blog index
  xml += `  <url>
    <loc>${SITE_URL}/blog/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;

  // Blog articles
  for (const article of BLOG_ARTICLES) {
    xml += `  <url>
    <loc>${SITE_URL}/blog/${article.slug}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  // Prompt pages
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

  // 2. Generate trust pages
  console.log('Generating trust pages...');
  const trustPages = [
    { dir: 'about', fn: generateAboutPage },
    { dir: 'privacy', fn: generatePrivacyPage },
    { dir: 'terms', fn: generateTermsPage },
    { dir: 'contact', fn: generateContactPage }
  ];
  for (const { dir, fn } of trustPages) {
    const pageDir = path.join(ROOT, dir);
    mkdirp(pageDir);
    fs.writeFileSync(path.join(pageDir, 'index.html'), fn(), 'utf-8');
    console.log(`  -> /${dir}/index.html written`);
  }

  // 3. Generate blog pages
  console.log('Generating blog pages...');
  const blogDir = path.join(ROOT, 'blog');
  mkdirp(blogDir);
  fs.writeFileSync(path.join(blogDir, 'index.html'), generateBlogIndex(), 'utf-8');
  console.log('  -> /blog/index.html written');
  for (const article of BLOG_ARTICLES) {
    const articleDir = path.join(blogDir, article.slug);
    mkdirp(articleDir);
    fs.writeFileSync(path.join(articleDir, 'index.html'), generateBlogArticle(article), 'utf-8');
    console.log(`  -> /blog/${article.slug}/index.html written`);
  }

  // 4. Generate sitemap
  console.log('Generating sitemap.xml...');
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), generateSitemap(), 'utf-8');
  console.log('  -> sitemap.xml written');

  // 5. Generate 404
  console.log('Generating 404.html...');
  fs.writeFileSync(path.join(ROOT, '404.html'), generate404(), 'utf-8');
  console.log('  -> 404.html written');

  // 6. Inject noscript into index.html
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

  // Summary
  const sitemapContent = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf-8');
  const urlCount = (sitemapContent.match(/<url>/g) || []).length;
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\nBuild complete in ${elapsed}s`);
  console.log(`  ${count} prompt pages + 4 trust pages + ${BLOG_ARTICLES.length + 1} blog pages + sitemap (${urlCount} URLs) + 404`);
}

build();
