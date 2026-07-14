#!/usr/bin/env node
const fs = require('fs');
const METHOD = "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.";
const prompts = [];
function add(t, d, p, c) { prompts.push({ title: t, description: d, method: METHOD, prompt: p, category: c }); }

// ── PRODUCTIVITY (8) ──
add("Morning Routine Architect",
"Design a personalized morning routine based on your goals, energy patterns, and schedule constraints.",
`You are a peak-performance coach specializing in morning routines used by top performers. Design a complete morning routine for me.

My details:
- Wake-up time: [TIME]
- Must leave for work by: [TIME]
- Energy type: [MORNING PERSON / SLOW STARTER / NIGHT OWL TRYING TO CHANGE]
- Primary goals: [PRODUCTIVITY / FITNESS / MINDFULNESS / CREATIVITY / ALL]
- Current morning: [DESCRIBE WHAT YOU DO NOW]
- Constraints: [KIDS, SHARED BATHROOM, NOISE RESTRICTIONS, etc.]

Deliver:
1. A minute-by-minute morning schedule from alarm to door
2. The science behind each activity's placement (why this order matters)
3. A "bare minimum" 15-minute version for days when time is short
4. First-week transition plan if this is a major change from current habits
5. Environment setup checklist (what to prepare the night before)
6. Common failure points and how to prevent them
7. How to adapt on weekends without losing momentum

Design for consistency, not perfection. The best routine is one I'll actually do every day.`, "Productivity");

add("Time Blocking Schedule Builder",
"Create a time-blocked daily schedule that protects deep work, handles meetings, and prevents burnout.",
`You are a time management strategist who has helped executives and creators reclaim 10+ hours per week through strategic time blocking.

My work details:
- Role: [YOUR JOB TITLE / ROLE]
- Work hours: [START TIME to END TIME]
- Biggest time wasters: [MEETINGS / EMAIL / CONTEXT SWITCHING / SOCIAL MEDIA / OTHER]
- Peak focus hours: [WHEN ARE YOU SHARPEST?]
- Recurring meetings: [LIST FIXED COMMITMENTS]
- Top 3 priorities this week: [LIST THEM]
- Tools I use: [GOOGLE CALENDAR / OUTLOOK / NOTION / OTHER]

Build me a complete time-blocking system:

1. **Daily Template:** A blocked schedule with specific time slots for:
   - Deep work blocks (90-minute focused sessions)
   - Shallow work blocks (email, admin, messages)
   - Meeting windows (when you accept meetings)
   - Buffer blocks (transition time between contexts)
   - Recovery blocks (breaks that actually recharge)

2. **Weekly Architecture:** How to theme days or half-days for different work types

3. **Defense Strategies:**
   - Scripts for declining meetings that fall in deep work blocks
   - How to batch similar tasks together
   - Emergency override rules (what justifies breaking a block)

4. **Energy Management:** Map block types to your natural energy curve

5. **Implementation:** Step-by-step setup in your calendar tool with color coding

Make this practical, not theoretical. I need a system I can start tomorrow.`, "Productivity");

add("Deep Work Session Planner",
"Plan focused deep work sessions with pre-work rituals, distraction elimination, and recovery protocols.",
`You are a cognitive performance specialist who studies how knowledge workers achieve flow states. Help me design a deep work practice.

My context:
- Type of deep work: [WRITING / CODING / DESIGNING / ANALYZING / STRATEGIZING / OTHER]
- Current ability to focus: [CAN'T DO 20 MINUTES / OK FOR 30-45 MIN / CAN DO 60+ MIN]
- Biggest distractions: [PHONE / SLACK / EMAIL / COWORKERS / OWN THOUGHTS]
- Environment: [HOME OFFICE / OPEN OFFICE / COFFEE SHOP / VARIES]
- Available tools: [APPS, HEADPHONES, SEPARATE ROOM, etc.]

Deliver a complete deep work protocol:

1. **Pre-Session Ritual** (5 minutes): Exact steps to transition into focus mode — what to do with phone, which tabs to close, physical setup, mental priming
2. **Session Structure:** Optimal work/break ratio for my current focus level with a 12-week progression plan to build up to 3-4 hour sessions
3. **Distraction Defense System:** Specific tool settings, browser extensions, and physical environment changes. Include what to do when an "urgent" thought pops up mid-session
4. **Recovery Protocol:** What to do in breaks that actually restores cognitive energy (not checking social media)
5. **Tracking System:** Simple daily log to measure deep work hours and quality
6. **Escalation Plan:** How to gradually increase deep work capacity each week
7. **Accountability Mechanism:** How to hold yourself to the practice when motivation fades

Focus on neuroscience-backed techniques, not productivity theater.`, "Productivity");

add("Email Inbox Zero System",
"Build a complete email management system that keeps your inbox at zero without spending all day on email.",
`You are an email productivity expert. Design a complete Inbox Zero system for me.

My email situation:
- Emails received per day: [NUMBER]
- Email client: [GMAIL / OUTLOOK / APPLE MAIL / OTHER]
- Types of email: [WORK, NEWSLETTERS, CLIENT COMMS, INTERNAL, etc.]
- Current inbox count: [HOW MANY UNREAD/TOTAL]
- Time spent on email daily: [HOURS]
- Biggest email pain: [VOLUME / RESPONSE EXPECTATIONS / FINDING OLD EMAILS / OTHER]

Deliver:
1. **The Initial Purge:** Step-by-step plan to get from [CURRENT COUNT] to zero in one session — what to archive, delete, and action
2. **Folder/Label System:** Exact folders to create (keep it under 10) with rules for what goes where
3. **Processing Rules:** The 2-minute rule, defer/delegate/delete framework, and when to batch vs. respond immediately
4. **Daily Email Schedule:** Specific times to check email and for how long. Scripts for setting expectations with colleagues
5. **Automation Setup:** Filters, templates, and canned responses to set up. Auto-sorting rules for newsletters and notifications
6. **Weekly Review:** 15-minute weekly email maintenance routine
7. **Emergency Protocol:** How to handle email when returning from vacation or sick leave

The goal is spending under 45 minutes total per day on email.`, "Productivity");

add("Goal Setting with OKRs",
"Set personal or professional objectives and key results with tracking systems and accountability mechanisms.",
`You are a goal-setting coach who combines OKR methodology with behavioral psychology. Help me set goals that I'll actually achieve.

My context:
- Time horizon: [THIS QUARTER / THIS YEAR / NEXT 90 DAYS]
- Life areas to focus on: [CAREER / HEALTH / FINANCES / RELATIONSHIPS / LEARNING / SIDE PROJECT]
- Biggest goal I keep failing at: [DESCRIBE]
- What's worked before: [DESCRIBE PAST SUCCESSES]
- Accountability style: [SELF-MOTIVATED / NEED EXTERNAL PRESSURE / NEED A SYSTEM]

Deliver:
1. Help me define 2-3 Objectives (qualitative, inspiring) with 3-4 Key Results each (quantitative, measurable)
2. For each Key Result: current baseline, target, measurement method, and weekly lead indicators
3. A weekly check-in template (5 minutes) to score progress
4. Monthly review framework to adjust without abandoning
5. The "minimum viable progress" for each goal — what counts on the worst days
6. Pre-mortem: predict the top 3 reasons each goal might fail and build prevention into the system
7. Reward system tied to milestones (not just the end goal)
8. One-page goal dashboard I can print or save as my phone wallscreen

Make goals stretchy but not delusional. 70% achievement of an ambitious goal beats 100% of a safe one.`, "Productivity");

add("Second Brain Organization System",
"Build a personal knowledge management system to capture, organize, and retrieve ideas using the PARA method or Zettelkasten.",
`You are a knowledge management expert specializing in personal knowledge systems (PKM). Design a Second Brain system for me.

My situation:
- Tool I want to use: [NOTION / OBSIDIAN / ROAM / LOGSEQ / APPLE NOTES / OTHER]
- Types of information I collect: [ARTICLES / BOOK NOTES / MEETING NOTES / IDEAS / RESEARCH / RECIPES / etc.]
- Current state: [NOTES EVERYWHERE / ONE BIG MESS / NOTHING SAVED / PARTIAL SYSTEM]
- Primary use case: [WRITING / WORK PROJECTS / LEARNING / CREATIVE PROJECTS / GENERAL REFERENCE]
- Volume: [A FEW NOTES PER WEEK / DAILY NOTES / HEAVY RESEARCHER]

Build my system:
1. **Architecture:** Folder/database structure using PARA (Projects, Areas, Resources, Archive) adapted for my use case
2. **Capture Workflow:** How to quickly capture from phone, browser, books, conversations, and meetings — specific tools and shortcuts
3. **Processing Routine:** Weekly 30-minute review to process inbox, link ideas, and surface relevant notes
4. **Retrieval System:** Tagging strategy, search techniques, and how to find anything in under 30 seconds
5. **Templates:** Ready-to-use templates for meeting notes, book summaries, project briefs, and daily journals
6. **Progressive Summarization:** How to distill notes over time so the best ideas rise to the top
7. **Setup Guide:** Step-by-step instructions to build this in [YOUR TOOL] today

Keep it simple enough that I'll maintain it. The best PKM system is one you actually use.`, "Productivity");

add("Habit Tracker and Builder",
"Design a habit-building system using proven behavioral science to stack, track, and sustain new habits.",
`You are a behavioral psychologist specializing in habit formation. Help me build lasting habits using evidence-based techniques.

My goals:
- Habits I want to build: [LIST 2-5 HABITS]
- Habits I want to break: [LIST ANY BAD HABITS]
- Past attempts and why they failed: [DESCRIBE]
- My daily routine: [BRIEF OVERVIEW OF YOUR TYPICAL DAY]
- Motivation style: [STREAKS / REWARDS / ACCOUNTABILITY PARTNER / DATA TRACKING]

Design my habit system:
1. **Habit Audit:** Analyze each desired habit through the Habit Loop (Cue → Craving → Response → Reward)
2. **Habit Stacking Plan:** Attach each new habit to an existing behavior ("After I [CURRENT HABIT], I will [NEW HABIT]")
3. **Environment Design:** Specific changes to my physical space that make good habits obvious and bad habits invisible
4. **Two-Minute Versions:** Scale each habit down to a 2-minute starter version for days when motivation is zero
5. **Tracking System:** Simple tracker design (paper or digital) with the minimum viable tracking to maintain consistency
6. **Failure Protocol:** What to do when you miss a day — the "never miss twice" rule and how to restart without guilt
7. **Progression Plan:** Weeks 1-2 (foundation), weeks 3-4 (consistency), months 2-3 (expansion), months 4-6 (identity shift)
8. **Identity Reframe:** Reframe each habit as an identity statement ("I am a person who...")

Focus on systems, not willpower. Make the right thing the easy thing.`, "Productivity");

add("Decision Journal Template",
"Track and improve your decision-making with a structured journal that captures context, reasoning, and outcomes for learning from every major decision.",
`You are a decision science expert. Create a decision journaling system that helps me make better decisions over time.

My context:
- Types of decisions I make: [BUSINESS / CAREER / FINANCIAL / PERSONAL / TECHNICAL / ALL]
- Decision I'm facing now (optional): [DESCRIBE A CURRENT DECISION]
- Past decision I regret: [DESCRIBE ONE, SO THE SYSTEM CAN ADDRESS THAT PATTERN]
- How I usually decide: [GUT FEEL / ANALYSIS PARALYSIS / ASK EVERYONE / FLIP A COIN]

Build my decision journal system:
1. **Pre-Decision Entry Template:**
   - Decision statement (what exactly am I deciding?)
   - Options on the table (at least 3, including "do nothing")
   - Key factors and how I'm weighting them
   - What I expect to happen with each option
   - My confidence level (percentage)
   - Emotions I'm feeling right now (to track emotional bias)
   - Who have I consulted and what did they say?
   - What would I advise a friend in this situation?

2. **Decision Frameworks Library:** Quick-reference frameworks: 10/10/10, Regret Minimization, Reversibility Test, Eisenhower Matrix, Pre-Mortem

3. **Post-Decision Review Template** (fill out 30-90 days later):
   - What actually happened vs. what I predicted?
   - Was my confidence level calibrated?
   - What did I miss?
   - What would I do differently with this information?

4. **Quarterly Decision Review:** Process for reviewing all logged decisions to identify patterns in your thinking
5. **Decision Speed Guide:** Which decisions deserve 5 minutes vs. 5 days of analysis

Help me learn from decisions, not just make them.`, "Productivity");

// ── WRITING (7) ──
add("Persuasive Copywriting Framework",
"Write persuasive copy for any medium using proven frameworks like PAS, AIDA, and Before-After-Bridge.",
`You are a world-class copywriter who has written for brands generating millions in revenue. Help me write persuasive copy.

My project:
- What I'm writing: [LANDING PAGE / EMAIL / AD / SALES PAGE / PRODUCT DESCRIPTION / PITCH / OTHER]
- Product/Service: [WHAT AM I SELLING OR PROMOTING?]
- Target audience: [WHO IS THIS FOR?]
- Main benefit: [THE #1 THING THE READER GETS]
- Biggest objection: [WHAT STOPS PEOPLE FROM BUYING/ACTING?]
- Desired action: [WHAT SHOULD THE READER DO AFTER READING?]
- Tone: [PROFESSIONAL / CASUAL / URGENT / LUXURIOUS / PLAYFUL / AUTHORITATIVE]
- Word count target: [LENGTH]

Deliver:
1. **3 Headlines** using different frameworks (curiosity, benefit-driven, problem-aware) with A/B test reasoning
2. **Full Copy** in the requested format using PAS (Problem-Agitate-Solve):
   - Problem: Name the reader's pain so specifically they feel seen
   - Agitate: Show the consequences of not solving it
   - Solve: Present the solution with proof and specifics
3. **Alternative Version** using AIDA (Attention-Interest-Desire-Action)
4. **Power Elements:** Social proof placement, urgency triggers, risk reversals, and CTA variations
5. **Cut List:** Words and phrases to remove that weaken copy (just, really, very, I think, etc.)
6. **Readability Check:** Ensure copy is at an 8th-grade reading level for maximum comprehension
7. **Swipe File Notes:** Which specific copywriting techniques were used and why, so I can learn from this

Write copy that sells without being sleazy. Every sentence should earn the next sentence.`, "Writing");

add("Technical Documentation Writer",
"Create clear, structured technical documentation for APIs, libraries, tools, or internal systems.",
`You are a technical writing expert who has documented systems at companies like Stripe, Twilio, and AWS. Help me write documentation that developers actually want to read.

What I'm documenting:
- System/Tool/API: [NAME AND BRIEF DESCRIPTION]
- Audience: [BEGINNER DEVS / EXPERIENCED DEVS / NON-TECHNICAL USERS / MIXED]
- Doc type: [API REFERENCE / GETTING STARTED GUIDE / TUTORIAL / ARCHITECTURE OVERVIEW / README / RUNBOOK]
- Technical details: [PASTE CODE, API ENDPOINTS, CONFIG OPTIONS, OR DESCRIBE THE SYSTEM]
- Existing docs: [LINK OR "STARTING FROM SCRATCH"]

Deliver:
1. **Document Structure:** Recommended outline with section headings and logical flow
2. **The Documentation:** Complete, well-formatted docs including:
   - Overview/Introduction (what this is and who it's for)
   - Prerequisites and setup
   - Quick start (get something working in under 5 minutes)
   - Core concepts explained with analogies
   - Step-by-step instructions with code examples
   - Configuration reference (table format)
   - Troubleshooting/FAQ section
   - API reference (if applicable) with request/response examples
3. **Code Examples:** Working, copy-pasteable code snippets with comments
4. **Diagrams:** ASCII or Mermaid diagram suggestions for architecture/flow
5. **Style Guide Notes:** Consistent terminology, voice (active, present tense), and formatting conventions used

Good docs = fewer support tickets. Write for the developer at 11pm trying to ship a feature.`, "Writing");

add("Press Release Generator",
"Write a professional press release for product launches, company news, partnerships, or milestones.",
`You are a PR strategist and press release specialist. Write a compelling press release that journalists will actually cover.

Announcement details:
- Company name: [NAME]
- What's being announced: [PRODUCT LAUNCH / PARTNERSHIP / FUNDING / MILESTONE / HIRE / EVENT / OTHER]
- Key details: [THE ESSENTIAL FACTS — who, what, when, where, why]
- Why this matters: [WHY SHOULD ANYONE CARE? WHAT'S THE BIGGER STORY?]
- Target publications: [WHICH MEDIA OUTLETS DO YOU WANT TO COVER THIS?]
- Spokesperson: [NAME AND TITLE FOR QUOTES]
- Company boilerplate: [BRIEF COMPANY DESCRIPTION, OR "WRITE ONE FOR ME"]

Deliver:
1. **The Press Release** in AP style format:
   - Headline (under 10 words, newsworthy, not salesy)
   - Subheadline (adds context)
   - Dateline (city, date)
   - Opening paragraph (the entire story in one paragraph — who, what, when, where, why)
   - Body paragraphs with supporting details, data, and context
   - 2 spokesperson quotes (one from your company, one from a partner/customer if applicable)
   - Company boilerplate paragraph
   - Media contact information
2. **3 Headline Variations** — factual, benefit-angle, trend-angle
3. **Email Pitch Template** for sending to journalists (subject line + 3-sentence pitch)
4. **Social Media Versions:** LinkedIn post, tweet thread (3 tweets), and Instagram caption
5. **Journalist Target List Criteria:** What type of reporters to target and what beat they cover
6. **Timing Advice:** Best day/time to send and embargo considerations

Write news, not marketing. Journalists delete anything that reads like an ad.`, "Writing");

add("Newsletter Content Creator",
"Write engaging newsletter content with compelling subject lines, structured sections, and strong calls to action.",
`You are a newsletter strategist who has grown email lists from hundreds to hundreds of thousands. Help me write a newsletter people actually open and read.

Newsletter details:
- Newsletter name: [NAME]
- Niche/topic: [WHAT IS IT ABOUT?]
- Audience: [WHO READS IT?]
- Frequency: [DAILY / WEEKLY / BIWEEKLY / MONTHLY]
- Style: [CURATED LINKS / ORIGINAL ANALYSIS / STORYTELLING / HOW-TO / MIX]
- This issue's topic: [WHAT DO YOU WANT TO WRITE ABOUT?]
- Key points to cover: [LIST 3-5 POINTS OR LINKS]
- CTA goal: [WHAT ACTION DO YOU WANT READERS TO TAKE?]

Deliver:
1. **5 Subject Lines** ranked by predicted open rate, with reasoning for each
2. **Preview Text** (the text that shows after the subject line in inbox) — 3 options
3. **The Newsletter:** Complete issue with:
   - Opening hook (first 2 sentences that earn the scroll)
   - Structured sections with clear headers
   - Personality and voice throughout (not corporate-speak)
   - Data points or examples that add credibility
   - One actionable takeaway per section
   - Closing CTA that feels natural, not pushy
4. **Engagement Boosters:** Where to add a poll, question, or reply prompt
5. **Format Notes:** Ideal length, image placement, and mobile readability tips
6. **Next Issue Teaser:** A one-line preview that creates anticipation for the next send

Write like you're emailing a smart friend, not broadcasting to a list.`, "Writing");

add("Blog Post Hook Generator",
"Write 10+ compelling opening hooks for any blog post that stop the scroll and make readers want to keep reading.",
`You are a content strategist who specializes in the first 3 sentences of articles — the make-or-break moment where readers decide to stay or bounce.

Blog post details:
- Topic: [WHAT IS THE ARTICLE ABOUT?]
- Target reader: [WHO IS THIS FOR?]
- Main takeaway: [WHAT WILL THEY LEARN OR GAIN?]
- Tone: [CONVERSATIONAL / AUTHORITATIVE / PROVOCATIVE / EMPATHETIC / HUMOROUS]
- Article type: [HOW-TO / LISTICLE / OPINION / CASE STUDY / GUIDE / STORY]

Generate 10 opening hooks using these proven frameworks:

1. **The Contrarian:** Open with a statement that challenges conventional wisdom
2. **The Statistic:** Lead with a surprising data point that demands attention
3. **The Story:** Start with a micro-story (2-3 sentences) that illustrates the problem
4. **The Question:** Ask a question the reader desperately wants answered
5. **The Bold Claim:** Make a promise so specific the reader has to verify it
6. **The Pain Point:** Name the reader's frustration more accurately than they can
7. **The Before/After:** Paint the contrast between their current state and where they could be
8. **The Confession:** Start with a vulnerable admission that builds trust
9. **The Cliffhanger:** Set up a mystery in the first sentence that the article resolves
10. **The Direct:** Skip the preamble and deliver value in sentence one

For each hook, provide:
- The complete opening paragraph (3-5 sentences)
- Why this hook works for this specific topic and audience
- What to write immediately after the hook to maintain momentum

Then rank the top 3 for this specific article with your reasoning.`, "Writing");

add("Speech Writer",
"Write speeches for any occasion — business presentations, weddings, conferences, or team rallies — with delivery notes.",
`You are a speechwriter who has written for CEOs, keynote speakers, and TED presenters. Craft a speech that moves people.

Speech details:
- Occasion: [CONFERENCE KEYNOTE / WEDDING TOAST / TEAM MEETING / GRADUATION / PITCH / EULOGY / AWARD ACCEPTANCE / OTHER]
- Audience: [WHO WILL BE LISTENING? SIZE?]
- Duration: [2 MIN / 5 MIN / 10 MIN / 20 MIN / 30+ MIN]
- Core message: [THE ONE THING YOU WANT PEOPLE TO REMEMBER]
- Key points to include: [LIST THEM]
- Personal stories available: [ANY ANECDOTES OR EXPERIENCES TO WEAVE IN?]
- Tone: [INSPIRING / HUMOROUS / HEARTFELT / AUTHORITATIVE / CASUAL]
- Your speaking experience: [NERVOUS BEGINNER / COMFORTABLE / EXPERIENCED]

Deliver:
1. **The Speech:** Complete text with:
   - A hook that grabs attention in the first 10 seconds (no "thank you for having me")
   - Clear structure with transitions between sections
   - One powerful story that illustrates your core message
   - A memorable closing line that people will repeat
   - Applause points and natural pause markers
2. **Delivery Notes:** [Inline annotations] for pace, emphasis, pauses, and gestures
3. **3 Opening Options:** Safe, bold, and funny — pick the one that matches your comfort level
4. **Audience Connection Points:** Moments to make eye contact, ask a rhetorical question, or acknowledge the audience
5. **Practice Guide:** How many times to rehearse, what to memorize vs. read, and how to handle nerves
6. **One-Page Cue Card:** Bullet-point version you can glance at while speaking

Great speeches feel like conversations, not performances. Write for the ear, not the eye.`, "Writing");

add("Editing and Proofreading Assistant",
"Get detailed feedback on your writing with line-level edits, structural suggestions, and style improvements.",
`You are a senior editor at a top publishing house. Review my writing with the precision of a copy editor and the vision of a developmental editor.

My writing:
- Text to edit: [PASTE YOUR WRITING HERE]
- Type: [BLOG POST / ESSAY / EMAIL / REPORT / STORY / ACADEMIC PAPER / MARKETING COPY / OTHER]
- Target audience: [WHO WILL READ THIS?]
- Goal: [INFORM / PERSUADE / ENTERTAIN / INSTRUCT / SELL]
- Tone I'm going for: [DESCRIBE DESIRED TONE]
- Specific concerns: [ANYTHING YOU'RE UNSURE ABOUT?]
- Edit level wanted: [LIGHT PROOFREAD / MODERATE EDIT / HEAVY RESTRUCTURE]

Deliver a three-layer edit:

1. **Structural Edit:**
   - Is the overall structure logical? Does it flow?
   - Are there sections that should be reordered, expanded, or cut?
   - Is the opening strong enough? Does the ending land?
   - Are transitions smooth between paragraphs?

2. **Line Edit:**
   - Flag awkward sentences and rewrite them
   - Cut unnecessary words (aim for 20% shorter)
   - Replace weak verbs with strong ones
   - Fix passive voice where active is better
   - Eliminate clichés and suggest fresh alternatives
   - Improve rhythm and readability

3. **Copy Edit:**
   - Grammar, spelling, and punctuation corrections
   - Consistency checks (tense, style, terminology)
   - Fact-check any claims that seem questionable

Provide the fully edited version AND a summary of the 5 most important changes with explanations of why each makes the writing stronger.

Be honest. I want to improve, not feel good.`, "Writing");

// ── CODING (8) ──
add("Full Stack App Scaffolder",
"Get a complete project structure, file layout, and boilerplate code for a full stack web application.",
`You are a senior full-stack developer. Help me scaffold a new application from scratch.

Project details:
- App description: [WHAT DOES IT DO? 2-3 SENTENCES]
- Frontend: [REACT / NEXT.JS / VUE / SVELTE / VANILLA / OTHER]
- Backend: [NODE+EXPRESS / PYTHON+FASTAPI / DJANGO / RAILS / GO / OTHER]
- Database: [POSTGRESQL / MONGODB / MYSQL / SQLITE / SUPABASE / OTHER]
- Auth: [JWT / SESSION / OAUTH / CLERK / AUTH0 / NONE YET]
- Deployment target: [VERCEL / AWS / RAILWAY / DOCKER / OTHER]

Deliver:
1. **Project Structure:** Complete directory tree with every file that needs to exist
2. **Setup Commands:** Exact terminal commands to initialize the project, install dependencies, and run locally
3. **Core Files:** Write the actual code for:
   - Package.json / requirements.txt with all dependencies
   - Server entry point with middleware setup
   - Database connection and initial schema/models
   - Auth boilerplate (signup/login/logout)
   - Frontend routing setup
   - API route structure with one complete CRUD example
   - Environment variables template (.env.example)
4. **Development Workflow:** Hot reload setup, linting, formatting config
5. **Database Schema:** Initial migration file for core models
6. **.gitignore** tailored to this stack
7. **README** with setup instructions another developer can follow

Make opinionated choices. I want to start coding features today, not debating config.`, "Coding");

add("Regex Pattern Builder",
"Build, test, and understand regular expressions with plain-English explanations for any pattern matching need.",
`You are a regex expert. Help me build a regular expression pattern.

What I need to match:
- Description: [DESCRIBE IN PLAIN ENGLISH WHAT YOU WANT TO MATCH]
- Example inputs that SHOULD match: [LIST 3-5 EXAMPLES]
- Example inputs that should NOT match: [LIST 3-5 EXAMPLES]
- Language/tool: [JAVASCRIPT / PYTHON / JAVA / PHP / GREP / OTHER]
- Flavor: [PCRE / POSIX / ECMAScript / RE2 / OTHER / NOT SURE]

Deliver:
1. **The Regex Pattern** — clean and optimized
2. **Character-by-Character Breakdown:** Explain every single character and group in the pattern
3. **Visual Diagram:** ASCII representation of how the pattern matches
4. **Test Results:** Show the pattern matching against all my example inputs with highlighted matches
5. **Edge Cases:** 5 tricky inputs that might break the pattern, and whether they match or not
6. **Variations:**
   - Strict version (exact matches only)
   - Lenient version (allows minor variations)
   - Named capture groups version (for extracting data)
7. **Code Snippet:** Ready-to-use code in my language showing the regex in action (match, find all, replace, validate)
8. **Common Mistakes:** What could go wrong with this pattern and how to avoid it
9. **Performance Note:** Is this pattern at risk of catastrophic backtracking? If so, how to fix it.

No regex is self-documenting. Always explain what it does.`, "Coding");

add("Docker Compose Generator",
"Generate production-ready Docker Compose configurations for multi-service applications.",
`You are a DevOps engineer specializing in containerization. Create a Docker Compose setup for my application.

My stack:
- Application: [DESCRIBE YOUR APP AND ITS SERVICES]
- Services needed: [WEB SERVER / DATABASE / CACHE / QUEUE / REVERSE PROXY / OTHER]
- Specific technologies: [e.g., NODE, POSTGRES, REDIS, NGINX, RABBITMQ]
- Environment: [LOCAL DEV / STAGING / PRODUCTION / ALL THREE]
- Persistent data: [WHAT NEEDS TO SURVIVE CONTAINER RESTARTS?]
- Port requirements: [ANY SPECIFIC PORT MAPPINGS?]

Deliver:
1. **docker-compose.yml** — Complete, production-quality configuration with:
   - All services properly defined
   - Health checks for each service
   - Restart policies
   - Volume mounts for data persistence
   - Network configuration
   - Resource limits (memory, CPU)
   - Dependency ordering (depends_on with conditions)
2. **Dockerfile** for each custom service (not just off-the-shelf images)
3. **.dockerignore** file
4. **Environment Files:** .env.example with all variables documented
5. **Makefile or Scripts:** Common commands (up, down, rebuild, logs, shell into container, db backup)
6. **Development vs Production:** Separate override files for dev (hot reload, debug ports) vs prod (optimized builds, SSL)
7. **Troubleshooting Guide:** Common Docker Compose issues and solutions for this specific stack

Include comments explaining non-obvious configuration choices.`, "Coding");

add("API Documentation Generator",
"Generate comprehensive API documentation from endpoint descriptions or code with examples and error handling.",
`You are a technical writer specializing in API documentation. Create clear, developer-friendly API docs.

API details:
- API name: [NAME]
- Base URL: [BASE URL]
- Auth method: [API KEY / BEARER TOKEN / OAUTH2 / BASIC / NONE]
- Endpoints to document: [LIST ENDPOINTS, OR PASTE ROUTE HANDLER CODE]
- Response format: [JSON / XML / OTHER]

For each endpoint, generate:
1. **Endpoint Header:** Method, path, and one-line description
2. **Authentication:** Required headers/tokens
3. **Parameters:** Table with name, type, required/optional, description, and example value for path params, query params, and request body
4. **Request Example:** Complete cURL command AND code examples in JavaScript (fetch) and Python (requests)
5. **Response Examples:** Success response (with realistic data, not "string"), common error responses (400, 401, 403, 404, 500) with error message format
6. **Rate Limits:** If applicable
7. **Pagination:** Format and parameters if applicable

Also provide:
- **Getting Started Guide:** From zero to first API call in under 2 minutes
- **Authentication Setup:** Step-by-step token/key acquisition
- **Error Code Reference:** Table of all possible error codes and meanings
- **Changelog Template:** For documenting API version changes
- **Postman/Insomnia Collection:** JSON export format for easy importing

Write docs that a developer can use without asking you questions.`, "Coding");

add("Git Commit Message Writer",
"Write clear, conventional commit messages that follow best practices and make git history useful.",
`You are a senior developer who is meticulous about git history. Help me write proper commit messages.

Changes I made:
- Files changed: [LIST FILES OR DESCRIBE CHANGES]
- What I did: [DESCRIBE THE CHANGES IN PLAIN ENGLISH]
- Why I did it: [THE REASON — BUG FIX, NEW FEATURE, REFACTOR, PERFORMANCE, etc.]
- Related issue/ticket: [ISSUE NUMBER OR "NONE"]
- Breaking changes: [YES/NO — IF YES, DESCRIBE]

Deliver:
1. **Conventional Commit Message** following the format: type(scope): description
   - Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore
   - Scope: the area of code affected
   - Subject line: imperative mood, under 72 characters, no period
   - Body: what and why (not how), wrapped at 72 characters
   - Footer: breaking changes, issue references

2. **3 Versions:**
   - Concise (subject line only — for small changes)
   - Standard (subject + body — for most changes)
   - Detailed (subject + body + footer — for significant changes)

3. **Git Commands:** The exact commands to stage and commit these changes
4. **PR Description Draft:** If this commit will be part of a pull request, draft the PR description
5. **Commit Split Suggestion:** Should this be one commit or multiple? If multiple, suggest how to split them logically.

Good commits tell a story. Six months from now, someone reading git log should understand what happened and why.`, "Coding");

add("Code Explainer",
"Paste any code snippet and get a clear, line-by-line explanation of what it does, how it works, and why it's written that way.",
`You are a patient senior developer and coding mentor. Explain this code so I truly understand it.

Code to explain:
\`\`\`
[PASTE YOUR CODE HERE]
\`\`\`

Language: [LANGUAGE, OR "IDENTIFY IT FOR ME"]
My level: [BEGINNER / INTERMEDIATE / ADVANCED]
Specific confusion: [WHAT PART DON'T YOU UNDERSTAND? OR "EXPLAIN EVERYTHING"]

Deliver:
1. **One-Paragraph Summary:** What this code does in plain English, as if explaining to a non-programmer
2. **Line-by-Line Breakdown:** For each significant line or block:
   - What it does
   - Why it's needed
   - Any non-obvious behavior or side effects
3. **Concepts Used:** List every programming concept this code uses (closures, recursion, async/await, etc.) with a brief explanation of each
4. **Data Flow:** Trace how data moves through the code from input to output
5. **Edge Cases:** What happens with unexpected inputs? What could break?
6. **Improvements:** 2-3 ways this code could be made cleaner, faster, or more robust — with the improved code
7. **Analogies:** Explain the trickiest parts using real-world analogies
8. **Related Patterns:** What design patterns or idioms does this code use? Where would I see similar patterns?

Adjust your explanation depth to my level. Don't over-explain obvious things or under-explain complex ones.`, "Coding");

add("Migration Script Generator",
"Generate database migration scripts for schema changes with rollback support and data preservation strategies.",
`You are a database architect. Generate safe, tested migration scripts for my schema change.

Migration details:
- Database: [POSTGRESQL / MYSQL / SQLITE / MONGODB / OTHER]
- ORM/Framework: [PRISMA / SEQUELIZE / TYPEORM / DJANGO / RAILS / KNEX / RAW SQL / OTHER]
- Current schema: [DESCRIBE CURRENT TABLE STRUCTURE OR PASTE SCHEMA]
- Desired change: [WHAT DO YOU WANT TO CHANGE? ADD TABLE, ADD COLUMN, RENAME, MODIFY TYPE, etc.]
- Data in table: [EMPTY / SMALL / LARGE (MILLIONS OF ROWS) / PRODUCTION DATA]
- Downtime tolerance: [ZERO DOWNTIME / SHORT MAINTENANCE WINDOW / FLEXIBLE]

Deliver:
1. **Up Migration:** The complete migration script to apply the change
2. **Down Migration:** The complete rollback script to undo the change
3. **Data Migration:** If existing data needs transformation, include the data migration step
4. **Safety Checks:**
   - Pre-migration validation queries (verify assumptions about current state)
   - Post-migration verification queries (confirm the migration worked)
   - Row count checks before and after
5. **Zero-Downtime Strategy:** If this involves a large table, provide the multi-step approach (add column → backfill → add constraints → drop old)
6. **Testing Plan:** How to test this migration on a copy of production data
7. **Backup Command:** The exact command to backup the affected table(s) before migrating
8. **Estimated Impact:** Lock duration, table size impact, index rebuild time for large tables
9. **Edge Cases:** What happens if the migration fails halfway? How to recover?

Never migrate without a rollback plan. Never run on production without testing on a copy first.`, "Coding");

add("Architecture Decision Record Writer",
"Document technical architecture decisions with context, alternatives considered, consequences, and team alignment.",
`You are a software architect. Help me write an Architecture Decision Record (ADR) for a technical decision.

Decision context:
- Decision title: [WHAT ARE YOU DECIDING? e.g., "Use PostgreSQL for primary database"]
- Context: [WHY IS THIS DECISION NEEDED? WHAT PROBLEM ARE WE SOLVING?]
- Options considered: [LIST THE ALTERNATIVES YOU'RE EVALUATING]
- Team size: [HOW MANY PEOPLE ARE AFFECTED?]
- Constraints: [BUDGET / TIMELINE / EXISTING TECH / TEAM SKILLS / COMPLIANCE]
- Current leaning: [WHICH OPTION AND WHY, OR "HELP ME DECIDE"]

Write the ADR:

1. **Title:** ADR-[NUMBER]: [Decision Title]
2. **Status:** [Proposed / Accepted / Deprecated / Superseded]
3. **Date:** [TODAY'S DATE]
4. **Context:** The forces at play — business requirements, technical constraints, team capabilities, timeline pressures. What makes this decision necessary now?
5. **Decision Drivers:** Ranked list of what matters most (performance, cost, developer experience, scalability, maintainability, time to market)
6. **Options Considered:** For each option:
   - Description
   - Pros (with specifics, not generic "it's scalable")
   - Cons (with specifics)
   - Cost estimate (money, time, complexity)
   - Risk assessment
7. **Decision:** The chosen option with clear rationale tied to the decision drivers
8. **Consequences:**
   - Positive (what becomes easier or better)
   - Negative (what becomes harder, what trade-offs we accept)
   - Neutral (what changes but isn't clearly better or worse)
9. **Compliance:** How we'll verify this decision is followed
10. **Review Date:** When to revisit this decision

An ADR is not about being right. It's about being transparent about why we chose this path.`, "Coding");

// ── BUSINESS (6) ──
add("Elevator Pitch Generator",
"Create a compelling 30-second elevator pitch with multiple versions for different audiences and contexts.",
`You are a pitch coach who has prepared founders for Y Combinator, Shark Tank, and Fortune 500 boardrooms. Create a pitch system for me.

My details:
- What I do/sell/build: [DESCRIBE YOUR BUSINESS OR IDEA]
- Who it's for: [TARGET AUDIENCE]
- The problem it solves: [PAIN POINT]
- How it's different: [UNIQUE DIFFERENTIATOR]
- Traction/proof: [ANY NUMBERS OR MILESTONES?]
- Pitch context: [NETWORKING / INVESTOR / JOB INTERVIEW / CONFERENCE]
- Time limit: [30 SECONDS / 60 SECONDS / 2 MINUTES]

Deliver:
1. **The Core Pitch:** Polished, conversational pitch for my time limit. Open with a hook (not "Hi, my name is..."), state the problem, present the solution, include one proof point, close with a specific ask
2. **3 Versions:** Provocative open, story open, question open
3. **Pitch Breakdown:** Annotate why each sentence works (hook, problem, solution, proof, ask)
4. **Objection Prep:** 5 most likely follow-up questions with confident responses
5. **Delivery Notes:** Where to pause, which words to stress, body language tips
6. **Audience Adaptation:** How to modify for investors, customers, partners, and casual networking
7. **The One-Liner:** Single sentence for "So, what do you do?" at a dinner party

Write pitches that sound human, not like a brochure. No buzzwords.`, "Business");

add("Customer Persona Builder",
"Build detailed, research-backed buyer personas with demographics, psychographics, buying behavior, and messaging strategies.",
`You are a market research strategist who builds buyer personas grounded in behavioral psychology. Build personas for my business.

My business:
- Product/Service: [WHAT DO YOU SELL?]
- Industry: [YOUR INDUSTRY]
- Price point: [PRICE RANGE]
- Current customers: [DESCRIBE YOUR BEST CUSTOMERS, OR "NONE YET"]
- B2B or B2C: [WHICH?]
- Geographic market: [LOCAL / NATIONAL / GLOBAL]

Build 3 detailed buyer personas with:
1. **Identity:** Name, age range, job title, income, lifestyle. A day-in-the-life paragraph
2. **Psychographics:** Core values, fears, aspirations, information diet, decision-making style
3. **Buying Behavior:** How they discover products, purchase triggers, who influences their decisions, objections, competitor alternatives
4. **Messaging Strategy:** The one sentence that stops their scroll, the headline for their #1 pain, proof that overcomes their biggest objection, CTA language for their decision style, words to use and avoid
5. **Content Mapping:** What content attracts them at awareness, consideration, decision, and post-purchase stages
6. **Anti-Persona:** One type of person who is NOT your customer and why

Cite reasoning behind choices. Flag assumptions clearly so I can validate with real research.`, "Business");

add("Revenue Model Analyzer",
"Analyze your business revenue model for scalability, predictability, and margin health with optimization strategies.",
`You are a revenue strategy consultant. Analyze my revenue model and find hidden growth opportunities.

My business:
- Description: [WHAT DOES YOUR COMPANY DO?]
- Revenue model: [SUBSCRIPTIONS / ONE-TIME / FREEMIUM / ADS / MARKETPLACE / OTHER]
- Monthly/Annual revenue: [AMOUNT OR "PRE-REVENUE"]
- Pricing: [CURRENT STRUCTURE AND TIERS]
- Customer segments: [WHO PAYS YOU?]
- Competitors: [TOP 3 AND THEIR PRICING]
- Biggest revenue challenge: [WHAT'S HOLDING GROWTH BACK?]

Deliver:
1. **Revenue Model Assessment:** Grade scalability, predictability, defensibility, and margin health (1-10 each) with justification
2. **Pricing Analysis:** Underpriced, overpriced, or correct? Value metric analysis. Competitive position map
3. **Revenue Optimization:** 5-7 ways to increase revenue from existing customers (upsell, cross-sell, pricing restructure, churn reduction)
4. **New Revenue Streams:** 3-5 additional streams ranked by potential, difficulty, and strategic fit
5. **Unit Economics:** CAC, LTV, LTV:CAC ratio, payback period analysis with improvement levers
6. **12-Month Forecast:** Conservative, moderate, and aggressive scenarios with assumptions
7. **Action Plan:** Top 5 revenue actions for the next 90 days with expected impact

Be specific with numbers. Challenge my assumptions about pricing.`, "Business");

add("OKR Framework for Teams",
"Set team OKRs with cascading objectives, alignment maps, scoring rubrics, and quarterly review templates.",
`You are an organizational effectiveness consultant. Build a complete OKR system for my team.

My team:
- Function: [ENGINEERING / MARKETING / PRODUCT / SALES / CUSTOMER SUCCESS / OTHER]
- Size: [NUMBER OF PEOPLE]
- Company objectives: [WHAT IS THE COMPANY TRYING TO ACHIEVE?]
- Team challenges: [WHAT'S NOT WORKING?]
- Quarter: [Q1/Q2/Q3/Q4 AND YEAR]
- Previous OKR experience: [FIRST TIME / SOME / SEASONED]

Deliver:
1. **Team Mission Alignment:** How the team connects to company objectives
2. **Team-Level OKRs:** 2-3 Objectives with 3-4 Key Results each. Objectives are qualitative and inspiring. Key Results are quantitative with baseline, target, and measurement method. Include one "health metric" OKR
3. **Cascading Framework:** How team OKRs map upward to company, downward to individuals, and sideways to cross-functional teams
4. **Scoring Rubric:** For each KR, define what 0.0, 0.3, 0.5, 0.7, and 1.0 look like
5. **Weekly Check-In Template:** 15-minute format with confidence ratings, progress, blockers
6. **Mid-Quarter Review:** 1-hour structured review process
7. **End-of-Quarter Retrospective:** Scoring and reflection template
8. **Common Pitfalls:** 5 OKR mistakes for your team type and how to avoid them

OKRs should be a focus tool, not a compliance exercise.`, "Business");

add("One-Page Business Summary",
"Create a Lean Canvas-style one-page business summary covering problem, solution, metrics, and competitive advantage.",
`You are a startup advisor. Help me create a one-page business summary using the Lean Canvas framework.

My idea:
- Business concept: [DESCRIBE YOUR BUSINESS IDEA]
- Target customer: [WHO IS IT FOR?]
- Problem it solves: [WHAT PAIN POINT?]
- How it makes money: [REVENUE MODEL]
- Stage: [IDEA / MVP / LAUNCHED / GROWING]
- Competition: [WHO ELSE IS DOING THIS?]

Fill out a complete Lean Canvas:
1. **Problem:** Top 3 problems for your target customer. Existing alternatives they use today
2. **Customer Segments:** Primary and secondary segments. Early adopters (who will use this first?)
3. **Unique Value Proposition:** Single, clear, compelling message that turns a visitor into a customer. High-level concept (X for Y analogy)
4. **Solution:** Top 3 features that solve the top 3 problems. Keep it minimal
5. **Channels:** How you will reach your customers (free and paid)
6. **Revenue Streams:** How you make money, pricing model, lifetime value
7. **Cost Structure:** Fixed and variable costs, burn rate estimation
8. **Key Metrics:** The 5 numbers that tell you if the business is healthy (pirate metrics: AARRR)
9. **Unfair Advantage:** Something that cannot be easily copied or bought

Then provide:
- **One-Paragraph Summary:** The business in 100 words
- **3 Biggest Risks** and how to test each one cheaply
- **First 3 Experiments** to validate the riskiest assumptions`, "Business");

add("Competitive Pricing Analyzer",
"Analyze competitor pricing strategies and develop an optimal pricing model for your product or service.",
`You are a pricing strategist. Analyze my competitive landscape and recommend optimal pricing.

My business:
- Product/Service: [WHAT DO YOU SELL?]
- Current price: [YOUR CURRENT PRICING, OR "NOT SET YET"]
- Competitors and their prices: [LIST COMPETITOR: PRICE for 3-5 competitors]
- Target market: [WHO BUYS THIS?]
- Cost to deliver: [YOUR COST PER UNIT/CUSTOMER]
- Value delivered: [QUANTIFIABLE OUTCOMES YOUR CUSTOMERS GET]
- Positioning: [BUDGET / MID-MARKET / PREMIUM]

Deliver:
1. **Competitor Price Map:** Visual comparison table with features vs. price for each competitor
2. **Pricing Model Options:** Evaluate 3-4 models (per seat, usage-based, tiered, flat rate, freemium) with pros and cons for your specific business
3. **Price Sensitivity Analysis:** Where the sweet spot is between conversion rate and revenue per customer
4. **Recommended Price Structure:** Specific tiers with names, prices, features, and target persona for each tier
5. **Psychological Pricing Tactics:** Anchoring, decoy pricing, charm pricing — which ones apply
6. **Launch Pricing Strategy:** Introductory pricing, grandfather clauses, annual vs. monthly discount
7. **Price Increase Roadmap:** When and how to raise prices as you add value
8. **Revenue Impact Model:** Project monthly revenue at different price points and conversion rate assumptions

Price is the single strongest lever for profitability. Get it right.`, "Business");

// ── CONTENT & SEO (5) ──
add("Content Brief Generator",
"Create comprehensive content briefs with outlines, SEO requirements, competitive analysis, and writing guidelines.",
`You are a content strategist and SEO specialist. Create a brief so thorough that writers never need clarifying questions.

Content details:
- Target keyword: [PRIMARY KEYWORD]
- Secondary keywords: [2-5 RELATED KEYWORDS]
- Target audience: [WHO IS THE READER?]
- Content type: [BLOG POST / PILLAR PAGE / HOW-TO / LISTICLE / COMPARISON]
- Business goal: [TRAFFIC / LEADS / SALES / AWARENESS]
- Brand voice: [DESCRIBE TONE]

Generate:
1. **Search Intent Analysis:** What the searcher wants, content type Google rewards, buyer journey stage
2. **Competitive Analysis:** What top 5 results cover (table stakes), what they miss (your opportunity), average word count
3. **Content Outline:** 5 title options, meta title (<60 chars), meta description (<155 chars), complete H2/H3 outline with key points per section, word count per section
4. **SEO Requirements:** Target word count, keyword placement, internal/external linking suggestions, image requirements, schema markup, featured snippet formatting
5. **Content Differentiation:** Unique angle, original data/frameworks to include, visual content ideas
6. **Writing Guidelines:** Tone instructions, reading level, formatting rules, CTA placement
7. **Distribution Plan:** Social media snippets, email subject lines, repurposing ideas

Format as a shareable document a freelance writer can follow without additional context.`, "Content & SEO");

add("Topical Authority Map Builder",
"Map out a complete topic cluster strategy with pillar pages, supporting content, and internal linking architecture.",
`You are an SEO content architect specializing in topical authority. Build a content map that dominates search.

My website:
- Niche: [YOUR NICHE OR WEBSITE]
- Current content: [HOW MANY ARTICLES?]
- Primary topic to own: [BROAD TOPIC AREA]
- Competitors: [2-3 COMPETING WEBSITES]
- Publishing capacity: [ARTICLES PER MONTH]
- Monetization: [ADS / AFFILIATE / PRODUCTS / SERVICES / LEADS]

Build:
1. **Topic Universe:** 5-7 pillar topics that constitute authority in your niche. For each pillar, 10-15 subtopics needing individual articles
2. **Pillar Page Architecture:** For each pillar — title, target keyword, content format, H2/H3 outline, word count, linking targets
3. **Cluster Content Map:** For each pillar, 10-15 cluster articles with title, keyword, search intent, content type, word count, and linking relationships
4. **Internal Linking Blueprint:** Hub-and-spoke model, cross-cluster links, anchor text strategy
5. **Content Gap Analysis:** Topics competitors cover that you don't, blue ocean opportunities, long-tail keywords with low competition
6. **Publishing Roadmap:** Month-by-month calendar — which pillars first, quick wins, long-term plays
7. **Authority Signals:** E-E-A-T strategy, author credentials, external link building priorities
8. **Measurement Framework:** KPIs for topical authority growth, realistic timeline, decision triggers for strategy adjustments

Present in spreadsheet-importable format. Prioritize by search volume, business value, and ranking difficulty.`, "Content & SEO");

add("Featured Snippet Optimizer",
"Optimize your content to win Google's featured snippet (Position Zero) with specific formatting and structure changes.",
`You are an SEO specialist who reverse-engineers featured snippets. Help me win Position Zero.

My target:
- Target keyword: [QUERY YOU WANT THE SNIPPET FOR]
- Current ranking: [YOUR POSITION, OR "NOT RANKING YET"]
- Your page URL: [URL OR DESCRIBE THE PAGE]
- Current snippet holder: [WHO HAS IT NOW?]

Deliver:
1. **Snippet Type Analysis:** What type Google shows (paragraph, list, table, video) and why the current holder was chosen
2. **Content Formatting:** Based on snippet type:
   - Paragraph: Write the exact 40-60 word answer, place after matching H2/H3, provide 3 variations
   - List: Structure as numbered/bulleted list with 5-8 items under query-matching H2
   - Table: Create HTML table with clear headers, 3-6 rows
3. **On-Page Structure:** Heading hierarchy, snippet-bait placement, schema markup (JSON-LD code)
4. **Content Enhancement:** Additional sections, People Also Ask targets with snippet-optimized answers
5. **Technical Checks:** Page speed, mobile formatting, canonical URL, nosnippet tag verification
6. **Rewritten Content:** Optimized version with HTML markup
7. **Monitoring:** How to check snippet status, when to iterate, defense strategies if you already hold a snippet

The difference between winning and losing a snippet is often formatting, not content quality.`, "Content & SEO");

add("Content Calendar Generator",
"Create a strategic content calendar with topics, publish dates, formats, and promotion plans for any time period.",
`You are a content marketing strategist. Build a content calendar that drives consistent traffic and engagement.

My details:
- Business/niche: [WHAT DO YOU DO?]
- Content channels: [BLOG / YOUTUBE / PODCAST / NEWSLETTER / SOCIAL / MIX]
- Publishing frequency: [POSTS PER WEEK/MONTH PER CHANNEL]
- Team size: [SOLO / SMALL TEAM / CONTENT TEAM]
- Goals: [TRAFFIC / LEADS / BRAND AWARENESS / COMMUNITY / SEO]
- Upcoming events/launches: [ANY TIME-SENSITIVE CONTENT NEEDS?]
- Time period: [NEXT MONTH / QUARTER / 6 MONTHS]
- Content pillars: [LIST MAIN TOPICS, OR "HELP ME DEFINE THEM"]

Deliver:
1. **Content Pillars:** 4-5 core themes with rationale and audience alignment
2. **Calendar Grid:** Week-by-week plan with:
   - Publish date
   - Content title
   - Content type/format
   - Primary keyword (for SEO content)
   - Content pillar it belongs to
   - Funnel stage (awareness / consideration / decision)
   - Distribution channels
   - Responsible person (if team)
3. **Content Mix:** Balance of evergreen vs. timely, educational vs. entertaining, long-form vs. short-form
4. **Seasonal Hooks:** Industry events, holidays, and trending moments to capitalize on
5. **Repurposing Map:** How each piece can be repurposed across channels (blog → social → email → video)
6. **Promotion Checklist:** Per-post promotion steps for the first 48 hours after publishing
7. **Performance Tracking:** Which metrics to track for each content type

Consistency beats perfection. Plan for sustainable output, not burnout.`, "Content & SEO");

add("SEO Title Tag Optimizer",
"Write click-worthy, SEO-optimized title tags that improve rankings and click-through rates from search results.",
`You are an SEO copywriter who specializes in title tags — the single most impactful on-page SEO element.

My pages:
- Page URL or topic: [URL OR TOPIC]
- Target keyword: [PRIMARY KEYWORD]
- Current title tag: [CURRENT TITLE, OR "NONE"]
- Current ranking position: [POSITION, OR "NOT RANKING"]
- Current CTR: [IF KNOWN FROM SEARCH CONSOLE]
- Brand name: [YOUR BRAND]
- Page type: [HOMEPAGE / BLOG / PRODUCT / CATEGORY / LANDING PAGE]

For each page, deliver:
1. **10 Title Tag Options** using different frameworks:
   - Keyword-first (SEO priority)
   - Benefit-driven (CTR priority)
   - Number/listicle format
   - How-to format
   - Question format
   - Emotional trigger
   - Bracket/parenthetical [2026 Guide]
   - Comparison (X vs Y)
   - Power word enhanced
   - Brand-forward

2. **For Each Title:**
   - Character count (aim for 50-60)
   - Pixel width estimate (Google truncates at ~580px)
   - Keyword placement analysis
   - Emotional appeal score

3. **Top 3 Recommendation** with reasoning
4. **A/B Testing Plan:** How to test titles using Search Console data
5. **Meta Description** paired with each top title recommendation
6. **Common Mistakes:** Title tag errors that hurt rankings or CTR

A 30% CTR improvement from a better title tag doubles your traffic without creating new content.`, "Content & SEO");

// ── CREATIVE (5) ──
add("Character Development Workshop",
"Build deep, complex fictional characters with backstory, motivations, flaws, voice, and character arcs for any story.",
`You are a fiction writing coach and character development expert. Help me build a character that feels real.

Character basics:
- Story genre: [FANTASY / SCI-FI / LITERARY / THRILLER / ROMANCE / HISTORICAL / OTHER]
- Character role: [PROTAGONIST / ANTAGONIST / SUPPORTING / MENTOR / LOVE INTEREST]
- Basic concept: [ONE SENTENCE ABOUT WHO THIS CHARACTER IS]
- Story setting: [WHEN AND WHERE]

Build a complete character profile:
1. **External Identity:** Name, age, appearance (specific details, not generic), occupation, social status, how others perceive them, first impression they give
2. **Internal World:** Core belief about the world, deepest fear, secret desire, the lie they tell themselves, what they'd die for
3. **Backstory:** The wound — the defining past event that shaped who they are. Key relationships that formed them. The moment they became who they are today
4. **Voice:** How they speak — vocabulary level, verbal tics, what they talk about vs. avoid. Write 5 sample dialogue lines showing their unique voice
5. **Character Arc:** Where they start emotionally → the catalyst for change → the midpoint shift → the crisis → where they end. Map the internal journey alongside the external plot
6. **Contradictions:** Every real person contains contradictions. Define 3 ways this character contradicts themselves (brave but afraid of intimacy, generous but jealous, etc.)
7. **Relationships:** How they interact differently with 3-4 other character types
8. **The Test:** Write a 200-word scene putting this character under pressure to reveal who they really are`, "Creative");

add("World Building Framework",
"Create a detailed fictional world with geography, politics, culture, magic systems, and history for stories or games.",
`You are a world-building expert who has designed settings for bestselling novels and RPG campaigns. Build a world.

World concept:
- Genre: [FANTASY / SCI-FI / DYSTOPIAN / STEAMPUNK / URBAN FANTASY / POST-APOCALYPTIC / OTHER]
- Scale: [SINGLE CITY / COUNTRY / CONTINENT / PLANET / GALAXY]
- Tone: [DARK AND GRITTY / WHIMSICAL / REALISTIC / EPIC / HORROR]
- Core concept: [THE ONE THING THAT MAKES THIS WORLD UNIQUE]
- Story needs: [WHAT KIND OF STORIES WILL BE SET HERE?]

Build the world:
1. **Geography & Environment:** Map description, key locations, climate, natural resources, how geography shapes culture and conflict
2. **History:** Timeline of 5-7 defining events. Current era and why it matters. What everyone knows vs. what's been forgotten or hidden
3. **Political Structure:** Who holds power? How is it maintained? What are the tensions? Factions and their agendas
4. **Culture & Society:** Daily life for common people. Social classes. Customs, taboos, celebrations. What do people believe about death, honor, love?
5. **Magic/Technology System:** If applicable — clear rules, costs, limitations, who can use it, how it shapes society and warfare
6. **Economy:** What's valuable? How do people trade? What drives conflict over resources?
7. **Conflicts:** 3 simmering tensions that could erupt into stories. At least one personal-scale, one political-scale, one existential-scale
8. **Sensory Details:** What does this world smell, sound, taste, and feel like? 10 specific details that make it visceral

A great world feels lived-in, not designed. Include the mundane alongside the extraordinary.`, "Creative");

add("Plot Twist Generator",
"Generate unexpected, satisfying plot twists for your story that are surprising yet feel inevitable in hindsight.",
`You are a master storyteller who specializes in plot twists — the kind that make readers gasp then immediately flip back to see the clues they missed.

Story details:
- Genre: [YOUR GENRE]
- Story premise: [BRIEF SUMMARY OF YOUR STORY SO FAR]
- Main characters: [LIST KEY CHARACTERS AND THEIR ROLES]
- Current plot trajectory: [WHERE THE STORY SEEMS TO BE HEADING]
- Tone: [DARK / FUNNY / DRAMATIC / SUSPENSEFUL / BITTERSWEET]
- Twists to avoid: [ANY CLICHÉS OR TYPES YOU DON'T WANT]

Generate 7 plot twist options across these categories:
1. **Identity Twist:** Someone isn't who they seem
2. **Betrayal Twist:** An ally switches sides (with real, understandable motivation)
3. **Perspective Twist:** The reader's understanding of events is fundamentally wrong
4. **Reversal Twist:** The goal was the wrong goal all along
5. **Hidden Connection:** Two seemingly unrelated elements are deeply connected
6. **Moral Twist:** The "right" choice turns out to have terrible consequences
7. **Timeline Twist:** Events aren't happening in the order we assumed

For each twist:
- The reveal moment (when and how the reader learns the truth)
- 3 clues to plant earlier in the story (foreshadowing that seems innocent until the reveal)
- How it changes the meaning of previous scenes
- Emotional impact on the reader and characters
- Why it's satisfying, not cheap (the difference between a twist and a trick)

Then recommend the TOP 2 twists for my specific story with reasoning.`, "Creative");

add("Songwriting Assistant",
"Help write song lyrics with verse structure, rhyme schemes, melodic rhythm, and emotional progression.",
`You are a professional songwriter and lyricist. Help me write a song.

Song concept:
- Theme/emotion: [WHAT IS THE SONG ABOUT? WHAT FEELING?]
- Genre: [POP / ROCK / HIP-HOP / COUNTRY / R&B / FOLK / INDIE / EDM / OTHER]
- Mood: [UPBEAT / MELANCHOLIC / ANGRY / ROMANTIC / NOSTALGIC / EMPOWERING]
- Inspiration: [ARTISTS OR SONGS WITH A SIMILAR VIBE]
- Personal story (optional): [ANY REAL EXPERIENCE TO DRAW FROM?]
- Audience: [WHO IS THIS FOR?]

Deliver:
1. **Song Structure:** Recommended structure (e.g., Verse-Chorus-Verse-Chorus-Bridge-Chorus) with reasoning
2. **Complete Lyrics:** Full song with:
   - Verses that tell the story or set the scene
   - A chorus that's catchy, repeatable, and captures the core emotion in one phrase
   - A bridge that shifts perspective or raises the emotional stakes
   - A title/hook that people will remember
3. **Rhyme Scheme Map:** Show the rhyme pattern and highlight internal rhymes, slant rhymes, and perfect rhymes
4. **Syllable Count:** Match syllable patterns for singability
5. **Imagery Notes:** Where the lyrics use concrete images vs. abstract statements (concrete is almost always better)
6. **Melody Suggestions:** Rhythmic feel, where to place emphasis, where the melody might rise or fall emotionally
7. **Alternative Hooks:** 5 different chorus hook options to choose from
8. **Edit Notes:** Which lines are strongest and which could be improved, with rewrites

Great lyrics are specific, not generic. "Tuesday morning coffee stain" beats "my daily routine" every time.`, "Creative");

add("Poetry Workshop Coach",
"Get guided poetry writing with form explanations, feedback on drafts, and techniques for rhythm, imagery, and voice.",
`You are a poetry professor and published poet. Guide me through writing a poem.

My poem:
- Topic/Theme: [WHAT IS THE POEM ABOUT?]
- Form: [FREE VERSE / SONNET / HAIKU / VILLANELLE / LIMERICK / SPOKEN WORD / "HELP ME CHOOSE"]
- Tone: [CONTEMPLATIVE / PASSIONATE / HUMOROUS / DARK / TENDER / ANGRY]
- Draft (if you have one): [PASTE YOUR DRAFT, OR "STARTING FROM SCRATCH"]
- Experience level: [FIRST POEM / OCCASIONAL WRITER / EXPERIENCED POET]
- Poets I admire: [LIST POETS OR "NO PREFERENCE"]

Deliver:
1. **If starting from scratch:**
   - 5 opening line options that immediately create tension or beauty
   - A structure recommendation based on your theme and experience level
   - Guided prompts: sensory details (what does this theme look, sound, feel, smell, taste like?)
   - A complete draft with annotations explaining craft choices

2. **If editing a draft:**
   - Line-by-line analysis: what works, what doesn't, and why
   - Identify the poem's strongest moment and build toward it
   - Replace abstract language with concrete imagery
   - Improve sound quality: alliteration, assonance, consonance opportunities
   - Cut unnecessary words (poetry is about precision)
   - Suggest line break alternatives that change meaning or emphasis
   - Provide an edited version alongside the original

3. **Craft Lessons:** Based on your poem, teach 3 specific techniques with examples
4. **Reading Recommendations:** 3 poems by other poets that explore similar themes brilliantly
5. **Workshop Questions:** 5 questions a workshop group would ask about this poem

Poetry isn't about being clever. It's about seeing the world so clearly you make others see it too.`, "Creative");

// ── CUSTOMER SERVICE (4) ──
add("Escalation Response Handler",
"Create templates and scripts for handling escalated customer issues with empathy, resolution frameworks, and follow-up protocols.",
`You are a customer service director. Build an escalation handling system for my team.

My business:
- Industry: [YOUR INDUSTRY]
- Product/Service: [WHAT YOU SELL]
- Common escalation types: [BILLING DISPUTES / PRODUCT DEFECTS / SERVICE DELAYS / RUDE INTERACTIONS / OTHER]
- Support channels: [EMAIL / PHONE / CHAT / SOCIAL MEDIA]
- Escalation volume: [PER WEEK/MONTH]

Deliver:
1. **Escalation Tiers:** Define Tier 1 (frontline), Tier 2 (supervisor), Tier 3 (management) with clear criteria for when to escalate
2. **Response Templates** for the 5 most common escalation scenarios — empathetic, professional, solution-focused. Include opening statement, acknowledgment, investigation promise, resolution offer, and follow-up commitment
3. **De-escalation Scripts:** Word-for-word phrases for calming angry customers. What to say and what NEVER to say
4. **Resolution Authority Matrix:** What each tier can offer (refund limits, credits, replacements, exceptions)
5. **Follow-Up Protocol:** Timeline and templates for post-resolution check-ins
6. **Documentation Template:** What to record for each escalation (for pattern analysis)
7. **Metrics:** KPIs to track escalation health (resolution time, escalation rate, CSAT post-resolution)
8. **Training Scenarios:** 5 roleplay scenarios for team practice

The goal of escalation handling is not just to solve the problem — it's to make the customer feel heard.`, "Customer Service");

add("Live Chat Response Script Builder",
"Create efficient, empathetic live chat scripts that resolve issues quickly while maintaining a human touch.",
`You are a live chat optimization expert. Build a complete chat script library for my support team.

My business:
- Product/Service: [WHAT YOU SELL]
- Common chat topics: [LIST TOP 5-10 REASONS CUSTOMERS CHAT]
- Average handle time goal: [MINUTES]
- Tone: [PROFESSIONAL / FRIENDLY / CASUAL / FORMAL]
- Tools used: [INTERCOM / ZENDESK / FRESHDESK / DRIFT / OTHER]

Deliver:
1. **Opening Scripts:** 5 variations for greeting customers (avoid robotic "How may I assist you today?")
2. **Quick Reply Library:** Canned responses for the 15 most common questions — warm, helpful, and not obviously copy-pasted
3. **Troubleshooting Flows:** Decision-tree scripts for the top 5 issues (if X → ask Y → if Z → resolution A)
4. **Transfer Scripts:** How to hand off to another agent or channel without making the customer repeat everything
5. **Closing Scripts:** 5 ways to end a conversation that invite future contact without being needy
6. **Difficult Situation Scripts:** Angry customer, wrong department, feature request, bug report, refund request
7. **Multitasking Templates:** Efficient responses for when an agent handles 3+ chats simultaneously
8. **Chat Etiquette Guide:** Emoji usage rules, typing indicators, response time expectations, when to use bullet points vs. paragraphs
9. **Quality Rubric:** Scorecard for reviewing chat transcripts

Chat support should feel like texting a knowledgeable friend, not interacting with a bot.`, "Customer Service");

add("Customer Success Playbook",
"Build a complete customer success strategy with onboarding flows, health scoring, expansion playbooks, and churn prevention.",
`You are a VP of Customer Success. Build a CS playbook for my company.

My business:
- Product/Service: [WHAT YOU SELL]
- Customer type: [B2B / B2C / BOTH]
- Average contract value: [ACV]
- Customer lifecycle: [MONTHLY / ANNUAL / MULTI-YEAR]
- Current churn rate: [PERCENTAGE, OR "UNKNOWN"]
- Team size: [NUMBER OF CS REPS]
- Current CS process: [DESCRIBE, OR "NONE — STARTING FROM SCRATCH"]

Deliver:
1. **Onboarding Playbook:** First 30/60/90 day milestones, kickoff meeting agenda, implementation checklist, success criteria definition, "aha moment" identification
2. **Health Score Model:** 8-10 signals to track (login frequency, feature adoption, support tickets, NPS, engagement, etc.) with weighted scoring and red/yellow/green thresholds
3. **Engagement Cadence:** Touch-point schedule by customer tier (high-touch, mid-touch, tech-touch) with email templates and call agendas
4. **QBR Template:** Quarterly business review agenda, deck outline, and metrics dashboard
5. **Churn Prevention:** Early warning signals, intervention playbooks for at-risk accounts, save scripts for cancellation conversations
6. **Expansion Playbook:** When and how to introduce upsell/cross-sell, conversation frameworks, timing triggers
7. **Renewal Process:** 90-day pre-renewal workflow, pricing conversation scripts, multi-year incentive structures
8. **Metrics Dashboard:** KPIs to track (GRR, NRR, NPS, time-to-value, adoption rate) with benchmarks

Retain more, expand more, and turn customers into advocates.`, "Customer Service");

add("Return and Refund Policy Writer",
"Create clear, fair return and refund policies that protect your business while building customer trust.",
`You are a business operations and customer experience specialist. Write a return and refund policy for my business.

My business:
- Business type: [ECOMMERCE / SAAS / SERVICE / DIGITAL PRODUCTS / PHYSICAL PRODUCTS]
- Products: [DESCRIBE WHAT YOU SELL]
- Current policy: [DESCRIBE EXISTING POLICY, OR "NONE"]
- Customer expectations: [WHAT DO CUSTOMERS TYPICALLY EXPECT IN YOUR INDUSTRY?]
- Business constraints: [MARGINS, PERISHABILITY, CUSTOMIZATION, DIGITAL DELIVERY]
- Competitor policies: [WHAT DO COMPETITORS OFFER?]

Deliver:
1. **The Policy Document:** Clear, customer-friendly policy covering:
   - Eligibility (what can be returned, what can't, and why)
   - Timeframe (return window with specific day counts)
   - Condition requirements (original packaging, unused, etc.)
   - Process (step-by-step how to initiate a return)
   - Refund method and timeline (original payment, store credit, exchange)
   - Shipping costs (who pays for return shipping?)
   - Exceptions clearly listed (sale items, custom orders, digital products)
2. **FAQ Section:** 10 common questions customers ask about returns, with clear answers
3. **Email Templates:** Approval, denial (with empathy), refund processed, exchange confirmation
4. **Internal Team Guide:** Decision tree for edge cases, authority levels, documentation requirements
5. **Legal Considerations:** Disclaimer language, consumer protection law notes by region
6. **Policy Page Design:** How to display this on your website for maximum clarity and trust

A generous, clear return policy increases sales more than it increases returns.`, "Customer Service");

// ── EMAIL MARKETING (4) ──
add("Welcome Email Series Builder",
"Create a high-converting welcome email sequence that onboards new subscribers and drives first purchases or engagement.",
`You are an email marketing strategist. Build a welcome sequence that turns new subscribers into engaged customers.

My business:
- Business/Product: [WHAT DO YOU SELL?]
- Lead magnet used: [WHAT DID THEY SIGN UP FOR? FREEBIE, NEWSLETTER, DISCOUNT, etc.]
- Primary goal: [FIRST PURCHASE / ENGAGEMENT / TRUST BUILDING / PRODUCT ADOPTION]
- Audience: [WHO ARE THESE SUBSCRIBERS?]
- Brand voice: [PROFESSIONAL / CASUAL / WITTY / WARM / AUTHORITATIVE]
- Email platform: [MAILCHIMP / CONVERTKIT / KLAVIYO / ACTIVECAMPAIGN / OTHER]

Deliver a 5-7 email sequence:
For each email:
1. **Timing:** When to send (immediately, Day 1, Day 3, Day 5, Day 7, etc.)
2. **Subject Line:** 3 options per email with open rate predictions
3. **Preview Text:** Compelling preview that complements the subject line
4. **Full Email Copy:** Complete email with:
   - Hook (first sentence that earns the scroll)
   - Value delivery (teach, entertain, or inspire)
   - One clear CTA (not three competing CTAs)
   - P.S. line (the most-read line in any email)
5. **Goal for this email:** What action or mindset shift should happen
6. **Segmentation trigger:** What the subscriber's behavior on this email tells you (opened, clicked, ignored → what to do next)

Also provide:
- **Automation Logic:** Flowchart of the sequence with branching based on engagement
- **A/B Tests:** What to test first and what metrics to watch
- **Benchmarks:** Expected open rates, click rates, and conversion rates by email number

The welcome sequence is your highest-leverage email asset. These subscribers are never more engaged than right now.`, "Email Marketing");

add("Product Launch Email Campaign",
"Create a complete email sequence for launching a product or feature, from teaser to announcement to follow-up.",
`You are a product launch email strategist. Build a launch email campaign that maximizes day-one sales and sustained momentum.

Launch details:
- Product: [WHAT ARE YOU LAUNCHING?]
- Price: [PRICE POINT]
- Launch date: [DATE]
- Audience size: [EMAIL LIST SIZE]
- Pre-launch runway: [HOW MANY DAYS/WEEKS BEFORE LAUNCH?]
- Special offer: [EARLY BIRD DISCOUNT / BONUS / LIMITED QUANTITY / NONE]
- Target: [SALES NUMBER / SIGNUPS / DOWNLOADS]

Build a complete launch email sequence:

**Pre-Launch Phase (1-2 weeks before):**
1. The Teaser: Build curiosity without revealing everything
2. The Problem: Agitate the pain point this product solves
3. The Social Proof: Share beta results, testimonials, or behind-the-scenes

**Launch Phase (launch day + 2 days):**
4. The Announcement: "It's here" — clear, exciting, with all details and primary CTA
5. The Deep Dive: Feature breakdown, use cases, FAQ
6. The Urgency: Early bird deadline, limited availability, or bonus expiration

**Post-Launch Phase (3-7 days after):**
7. The Case Study: Customer success story or detailed walkthrough
8. The Final Call: Last chance to get launch pricing/bonuses

For each email: subject line (3 options), full copy, CTA, and timing.

Also provide:
- **Non-Opener Strategy:** Re-send to non-openers with different subject lines
- **Segmentation:** Different messaging for warm leads vs. cold subscribers
- **SMS Companion Messages:** If applicable, 3-4 SMS messages to complement the email sequence`, "Email Marketing");

add("Win-Back Email Campaign Builder",
"Re-engage lapsed subscribers or customers with a strategic email sequence designed to bring them back.",
`You are an email retention specialist. Build a win-back campaign for lapsed subscribers/customers.

My situation:
- Business: [WHAT DO YOU SELL?]
- Definition of "lapsed": [NO OPENS IN X DAYS / NO PURCHASE IN X DAYS / CANCELLED SUBSCRIPTION]
- Segment size: [HOW MANY LAPSED CONTACTS?]
- Last interaction: [WHAT WAS THEIR LAST ENGAGEMENT?]
- Known reasons for leaving: [PRICE / COMPETITION / NOT USING / UNKNOWN]
- Special offer available: [DISCOUNT / EXTENDED TRIAL / FREE UPGRADE / NONE]

Build a 4-6 email win-back sequence:
1. **"We miss you"** — Acknowledge the gap without guilt-tripping. Show what they've missed
2. **Value Reminder** — Remind them WHY they signed up. Share best content or product updates since they left
3. **The Offer** — Incentive to come back (if available). Make it time-limited
4. **Social Proof** — Show what others are getting from staying engaged/subscribed
5. **Feedback Request** — Ask why they disengaged. Use a simple 1-click survey
6. **The Breakup** — "Should we stop emailing you?" — This often gets the highest response rate

For each email: subject line (3 options), full copy, CTA, and optimal timing.

Also provide:
- **Re-engagement Criteria:** What counts as "won back" (open, click, purchase?)
- **List Hygiene:** When to remove truly dead contacts to protect deliverability
- **Segment Strategy:** Different messaging for recent vs. long-gone contacts
- **Automation Setup:** Trigger conditions and sequence logic`, "Email Marketing");

add("Email A/B Testing Strategy",
"Design systematic A/B tests for email campaigns that improve open rates, click rates, and conversions over time.",
`You are an email optimization expert specializing in A/B testing. Build a testing framework for my email program.

My email program:
- List size: [NUMBER OF SUBSCRIBERS]
- Send frequency: [DAILY / WEEKLY / BIWEEKLY / MONTHLY]
- Current open rate: [PERCENTAGE]
- Current click rate: [PERCENTAGE]
- Platform: [MAILCHIMP / KLAVIYO / CONVERTKIT / HUBSPOT / OTHER]
- Biggest challenge: [LOW OPENS / LOW CLICKS / LOW CONVERSIONS / HIGH UNSUBSCRIBES]

Deliver:
1. **Testing Priority Matrix:** Rank these elements by expected impact: subject lines, send time, from name, preview text, email length, CTA placement, CTA copy, design vs. plain text, personalization, segmentation — with reasoning
2. **12-Week Testing Calendar:** One test per send, building on previous learnings. Each test includes: hypothesis, variable A vs. B, sample size, success metric, minimum detectable effect
3. **Subject Line Test Framework:** 10 specific A/B tests for subject lines (length, emoji, personalization, question vs. statement, number vs. no number, etc.)
4. **Content Tests:** 5 tests for email body (long vs. short, image vs. no image, single CTA vs. multiple, story vs. direct, etc.)
5. **Statistical Significance Guide:** How to know when a test is conclusive. Minimum sample size calculator. When to call a test and when to keep running it
6. **Results Tracking Template:** Spreadsheet layout for logging tests, results, and learnings
7. **Compound Gains Model:** Show how incremental improvements compound over 12 months
8. **Common Testing Mistakes:** 7 errors that invalidate test results and how to avoid them

Test one variable at a time. Document everything. Let data override opinions.`, "Email Marketing");

// ── REMAINING CATEGORIES ──

add("Freelance Case Study Writer",
"Write compelling portfolio case studies that showcase your work, process, and results to attract premium clients.",
`You are a content strategist who helps freelancers win high-value clients through powerful case studies. Write a case study for my portfolio.

Project details:
- Client (or type): [CLIENT NAME OR "CONFIDENTIAL — DESCRIBE THE TYPE"]
- Project: [WHAT DID YOU DO?]
- Your role: [YOUR SPECIFIC CONTRIBUTION]
- Timeline: [HOW LONG DID IT TAKE?]
- Challenge: [WHAT PROBLEM DID THE CLIENT HAVE?]
- Results: [MEASURABLE OUTCOMES — NUMBERS, PERCENTAGES, METRICS]
- Testimonial: [CLIENT QUOTE IF AVAILABLE, OR "NONE"]

Write:
1. **Headline:** Results-focused, specific, attention-grabbing
2. **The Story:** Problem → Approach → Solution → Results narrative (500-800 words) using the STAR format but written as compelling storytelling, not a resume
3. **Key Metrics Callout:** 3-4 big numbers in a visual-friendly format
4. **Process Breakdown:** What you did step-by-step (shows expertise, not just results)
5. **Client Perspective:** Testimonial integration or hypothetical client voice
6. **Lessons Learned:** What you'd do differently (shows maturity and honesty)
7. **Visual Suggestions:** What screenshots, before/afters, or graphics to include
8. **CTA:** How to end the case study to drive inquiries from similar prospects

Write for the prospect reading this thinking "Can this person solve MY problem?"`, "Freelancing");

add("Scope of Work Generator",
"Create detailed, legally-sound scope of work documents that prevent scope creep and set clear project expectations.",
`You are a freelance business consultant. Create a comprehensive Scope of Work document for my project.

Project details:
- Service type: [WEB DESIGN / DEVELOPMENT / WRITING / MARKETING / CONSULTING / OTHER]
- Client: [CLIENT TYPE OR INDUSTRY]
- Project description: [WHAT WILL YOU DELIVER?]
- Timeline: [EXPECTED DURATION]
- Budget: [PROJECT FEE OR RATE]
- Revisions: [HOW MANY ROUNDS INCLUDED?]

Generate a complete SOW:
1. **Project Overview:** Objective, background, scope summary
2. **Deliverables:** Itemized list with specifications for each
3. **Timeline & Milestones:** Phase breakdown with dates and dependencies
4. **Process:** Your workflow, what you need from the client, review cycles
5. **Out of Scope:** Explicitly list what is NOT included (this prevents scope creep)
6. **Revision Policy:** Number of revisions per deliverable, what constitutes a revision vs. new work
7. **Payment Terms:** Schedule, methods, late payment policy, kill fee
8. **Acceptance Criteria:** How the client formally approves deliverables
9. **Change Order Process:** How to handle requests beyond the original scope (with pricing)
10. **Communication:** Preferred channels, response times, meeting cadence
11. **Ownership & Rights:** IP transfer, licensing, portfolio usage rights

The SOW protects both you and the client. Be specific enough that there's no room for "I thought that was included."`, "Freelancing");

add("Client Discovery Questionnaire",
"Create a professional client intake questionnaire that uncovers project needs, expectations, and potential red flags before starting work.",
`You are a freelance business consultant. Build a client discovery questionnaire for my service.

My service:
- What I do: [YOUR SERVICE — DESIGN / DEV / WRITING / MARKETING / CONSULTING / OTHER]
- Typical project size: [SMALL / MEDIUM / LARGE — DOLLAR RANGE]
- Typical client: [WHO HIRES YOU?]
- Common problems: [ISSUES THAT ARISE WHEN DISCOVERY IS POOR]

Build:
1. **Pre-Call Questionnaire** (send before the first meeting): 10-15 questions covering business overview, project goals, timeline, budget range, decision-makers, and past experiences with similar services
2. **Discovery Call Script:** Structured 30-45 minute conversation guide with:
   - Rapport-building opener
   - Deep-dive questions about goals (not just deliverables)
   - Budget qualification questions (asked naturally)
   - Timeline and urgency assessment
   - Decision-making process mapping
   - Red flag detection questions (unrealistic expectations, price shopping, unclear vision)
3. **Post-Call Summary Template:** Standardized format to document findings
4. **Go/No-Go Checklist:** 10 criteria to evaluate whether this is a good-fit client
5. **Proposal Transition:** How to move from discovery to a proposal that references their exact answers
6. **Red Flag Guide:** 10 warning signs during discovery that predict difficult projects, with how to handle each

Good discovery prevents bad projects. Ask the hard questions now or deal with the consequences later.`, "Freelancing");

add("Freelance Retainer Agreement Drafter",
"Draft a professional retainer agreement that secures recurring revenue with clear terms, deliverables, and boundaries.",
`You are a freelance business advisor. Help me create a retainer agreement for ongoing client work.

My setup:
- Service: [WHAT ONGOING WORK DO YOU PROVIDE?]
- Retainer structure: [MONTHLY HOURS / MONTHLY DELIVERABLES / MONTHLY FEE FOR ACCESS]
- Retainer fee: [MONTHLY AMOUNT]
- Hours/deliverables included: [WHAT'S COVERED?]
- Overage rate: [RATE FOR WORK BEYOND THE RETAINER]
- Minimum commitment: [3 MONTHS / 6 MONTHS / MONTH-TO-MONTH]

Draft a retainer agreement covering:
1. **Scope of Retainer:** Exactly what's included and what falls outside the retainer
2. **Hours/Deliverables Allocation:** Monthly allotment, rollover policy, tracking method
3. **Priority & Response Time:** SLA — guaranteed response times, priority over non-retainer clients
4. **Communication Expectations:** Meeting cadence, preferred channels, availability hours
5. **Payment Terms:** Due date, auto-billing, late payment consequences, pause/resume policy
6. **Overage Handling:** Rate, approval process, billing
7. **Termination Clause:** Notice period, final deliverables, transition support
8. **Monthly Reporting:** What you'll report to show value (hours used, work completed, results)
9. **Rate Review:** Annual increase terms, market rate adjustment clause
10. **Unused Hours Policy:** Rollover, cap, or use-it-or-lose-it

Also provide:
- **Retainer Pitch Script:** How to propose a retainer to an existing project-based client
- **Value Justification:** How to frame the retainer as an investment, not an expense

Retainers are the best business model for freelancers. Make the terms fair but protect your time.`, "Freelancing");

// ── RESUME & CAREER (4) ──
add("Salary Negotiation Script",
"Get a complete salary negotiation playbook with scripts, counteroffers, and tactics for any career stage.",
`You are a career coach and negotiation expert. Help me negotiate my salary with confidence.

My situation:
- Position: [JOB TITLE]
- Company: [COMPANY NAME OR TYPE]
- Scenario: [NEW JOB OFFER / ANNUAL RAISE / PROMOTION / COUNTER-OFFER]
- Their offer: [SALARY OFFERED, OR "HAVEN'T RECEIVED YET"]
- My target: [WHAT I WANT]
- Market rate: [WHAT SIMILAR ROLES PAY, OR "I DON'T KNOW"]
- My leverage: [OTHER OFFERS / UNIQUE SKILLS / CRITICAL ROLE / etc.]
- Negotiation experience: [FIRST TIME / SOME / EXPERIENCED]

Deliver:
1. **Market Research Framework:** How to determine your true market value using 4-5 specific data sources
2. **Negotiation Strategy:** Timing, channel (email vs. call), who to negotiate with
3. **Opening Script:** Exact words to use when making your ask. Multiple options: confident, diplomatic, and collaborative tones
4. **Counteroffer Responses:** Scripts for "We can't go higher," "That's above our range," "We can offer X instead," and "Take it or leave it"
5. **Beyond Salary:** 15 non-salary items to negotiate (bonus, equity, PTO, remote work, title, signing bonus, review timeline, professional development)
6. **Email Templates:** Written negotiation for each scenario (initial ask, counteroffer, acceptance, decline)
7. **Walk-Away Framework:** How to know when to hold firm vs. accept vs. walk away
8. **Practice Scenarios:** 3 roleplay conversations to rehearse

You lose more money by not negotiating than you'll ever lose by asking. The worst they can say is no.`, "Resume & Career");

add("Career Path Mapping Advisor",
"Map your career trajectory with skills gap analysis, milestone planning, and strategic moves for the next 5-10 years.",
`You are a career strategist. Help me map out my career path with actionable steps.

My situation:
- Current role: [JOB TITLE, COMPANY TYPE, YEARS IN ROLE]
- Industry: [YOUR INDUSTRY]
- Career goal: [WHERE DO YOU WANT TO BE IN 5-10 YEARS?]
- Skills: [YOUR TOP SKILLS]
- Gaps: [SKILLS OR EXPERIENCE YOU LACK]
- Constraints: [LOCATION, FAMILY, FINANCES, EDUCATION LEVEL, etc.]
- What you enjoy: [WHAT ENERGIZES YOU AT WORK?]
- What you dislike: [WHAT DRAINS YOU?]

Deliver:
1. **Career Map:** 3 possible paths from current role to target role, with intermediate positions and typical timelines. Include the "conventional," "accelerated," and "unconventional" paths
2. **Skills Gap Analysis:** What you have vs. what you need — prioritized by impact. For each gap, recommend how to close it (course, project, certification, lateral move, mentor)
3. **Next Move Analysis:** Your optimal next role — what title, what company type, what to optimize for (learning vs. money vs. title vs. network)
4. **90-Day Action Plan:** Specific steps for the next 3 months — skills to develop, people to connect with, content to consume, projects to take on
5. **Network Strategy:** Who to build relationships with and how (not just "network more" — specific types of people and specific approaches)
6. **Risk Assessment:** Career risks in your field and how to hedge against them
7. **Financial Impact Model:** Salary trajectory for each path over 5-10 years
8. **Decision Framework:** Criteria for evaluating future opportunities (not just salary)

A career ladder is a myth. Careers are a jungle gym — the most interesting paths include lateral moves and unconventional jumps.`, "Resume & Career");

add("LinkedIn Recommendation Writer",
"Write compelling LinkedIn recommendations for colleagues, managers, or direct reports that sound genuine and specific.",
`You are a professional branding expert. Help me write a LinkedIn recommendation.

Details:
- Who I'm recommending: [NAME AND TITLE]
- Our relationship: [I WAS THEIR MANAGER / THEY WERE MY MANAGER / WE WERE PEERS / THEY WERE MY CLIENT / OTHER]
- How long we worked together: [DURATION]
- What they did: [THEIR ROLE AND KEY CONTRIBUTIONS]
- Their standout qualities: [2-3 THINGS THAT MAKE THEM EXCEPTIONAL]
- A specific example: [ONE CONCRETE STORY THAT SHOWS THEIR VALUE]
- Tone: [PROFESSIONAL / WARM / ENTHUSIASTIC]
- Length: [SHORT (3-4 SENTENCES) / MEDIUM (1 PARAGRAPH) / LONG (2 PARAGRAPHS)]

Write 3 versions:
1. **Concise (3-4 sentences):** Punchy, memorable, highlights one standout quality
2. **Standard (1 paragraph):** Covers 2-3 qualities with a specific example
3. **Detailed (2 paragraphs):** Full narrative with context, specific achievements, and strong endorsement

For each version:
- Open with impact (not "I had the pleasure of working with...")
- Include at least one specific, quantifiable result or story
- End with a strong endorsement statement
- Sound like a real human, not a template

Also provide 5 opening line alternatives that are better than the generic "I'm pleased to recommend..."`, "Resume & Career");

add("Portfolio Project Curator",
"Select, organize, and present your best work in a portfolio that demonstrates expertise and wins clients or job offers.",
`You are a portfolio strategist. Help me curate a portfolio that gets me hired or wins clients.

My background:
- Field: [DESIGN / DEVELOPMENT / WRITING / MARKETING / DATA / OTHER]
- Target role or client: [WHAT JOB OR CLIENT TYPE AM I PURSUING?]
- Projects available: [LIST ALL PROJECTS YOU COULD INCLUDE — EVEN ROUGH DESCRIPTIONS]
- Current portfolio: [URL, OR "BUILDING FROM SCRATCH"]
- Format: [WEBSITE / PDF / BEHANCE / GITHUB / DRIBBBLE / OTHER]

Deliver:
1. **Project Selection:** From my list, select the 6-8 strongest projects. Explain why each was chosen and what it demonstrates. Explain why others were cut
2. **Project Ordering:** Strategic sequence — which project goes first (strongest or most relevant) through last
3. **For Each Selected Project:**
   - Title (compelling, not just "Client Website Redesign")
   - One-line description that makes someone click
   - 100-word project summary covering challenge, approach, and results
   - 3-4 key visuals or artifacts to include
   - Metrics or outcomes to highlight
   - Skills demonstrated
4. **About Page Copy:** Professional bio that positions you for your target audience (3 versions: 50 words, 100 words, 200 words)
5. **Portfolio Flow:** How the overall collection tells a story about your expertise and progression
6. **Gap Analysis:** What's missing that would make this portfolio stronger. Suggest personal projects to fill gaps
7. **Platform Recommendation:** Best portfolio platform for your field with setup guide
8. **SEO Basics:** Title tags, meta descriptions, and alt text for portfolio pages

Your portfolio is not a gallery of everything you've done. It's a curated argument for why someone should hire you.`, "Resume & Career");

// ── PROJECT MANAGEMENT (3) ──
add("Project Status Report Generator",
"Generate clear, stakeholder-ready project status reports with progress tracking, risk flags, and next steps.",
`You are a PMO director. Generate a professional project status report.

Project details:
- Project name: [NAME]
- Current phase: [PLANNING / EXECUTION / TESTING / CLOSING]
- Overall status: [GREEN / YELLOW / RED]
- Time period: [THIS WEEK / SPRINT / MONTH]
- Key accomplishments: [WHAT WAS COMPLETED?]
- In progress: [WHAT'S BEING WORKED ON?]
- Blockers: [WHAT'S STUCK?]
- Risks: [WHAT MIGHT GO WRONG?]
- Budget status: [ON TRACK / OVER / UNDER — BY HOW MUCH?]
- Timeline status: [ON SCHEDULE / BEHIND / AHEAD — BY HOW MUCH?]
- Upcoming milestones: [NEXT 2-4 MILESTONES WITH DATES]

Generate:
1. **Executive Summary:** 3-sentence overview for leadership (status, key highlight, key concern)
2. **Status Dashboard:** RAG (Red/Amber/Green) status for scope, schedule, budget, quality, and resources with one-line justification each
3. **Accomplishments:** Bullet list of completed items with impact
4. **In Progress:** Active work with % complete and owner
5. **Risks & Issues Table:** Risk description, likelihood, impact, mitigation plan, owner
6. **Blockers:** What needs to be resolved, who can unblock it, escalation path
7. **Next Period Plan:** Top 5 priorities with owners and deadlines
8. **Metrics:** Key project metrics with trend indicators (improving, stable, declining)
9. **Decisions Needed:** Any decisions required from stakeholders with recommendation and deadline
10. **Change Log:** Any scope, timeline, or budget changes this period

Keep it scannable. Executives read the summary. Managers read the details. Nobody reads walls of text.`, "Project Management");

add("Work Breakdown Structure Builder",
"Create a complete Work Breakdown Structure (WBS) that decomposes complex projects into manageable, trackable work packages.",
`You are a project management professional (PMP). Build a WBS for my project.

Project:
- Project name: [NAME]
- Description: [WHAT IS BEING DELIVERED?]
- Duration: [EXPECTED TIMELINE]
- Team size: [NUMBER OF PEOPLE]
- Methodology: [AGILE / WATERFALL / HYBRID]
- Key deliverables: [LIST MAIN OUTPUTS]
- Constraints: [BUDGET / TIMELINE / RESOURCE LIMITATIONS]

Deliver:
1. **WBS Hierarchy:** Complete decomposition using the 100% Rule (all work is accounted for):
   - Level 1: Project
   - Level 2: Major phases or deliverables (5-8)
   - Level 3: Work packages (3-7 per phase)
   - Level 4: Tasks (where applicable)
   Each item gets a WBS code (1.0, 1.1, 1.1.1, etc.)
2. **Work Package Definitions:** For each Level 3 item: description, estimated effort (hours), duration, dependencies, responsible role, acceptance criteria
3. **WBS Dictionary:** Formal definition of scope for each work package (prevents scope ambiguity)
4. **Dependency Map:** Which work packages depend on others (finish-to-start, start-to-start, etc.)
5. **Critical Path Identification:** Which sequence of tasks determines the minimum project duration
6. **Resource Allocation:** Map team members to work packages, identify over-allocations
7. **Milestone Schedule:** Key milestones derived from the WBS with target dates
8. **Risk Mapping:** Identify which work packages carry the highest risk

A good WBS means nothing gets forgotten and nothing gets double-counted. If it's not in the WBS, it's not in the project.`, "Project Management");

add("Change Request Template Writer",
"Document project change requests with impact analysis, approval workflows, and implementation plans.",
`You are a project change management specialist. Create a change request document.

Change details:
- Project name: [PROJECT]
- Change requested by: [WHO WANTS THIS CHANGE?]
- Change description: [WHAT NEEDS TO CHANGE?]
- Reason: [WHY IS THIS CHANGE NEEDED?]
- Current baseline: [WHAT WAS THE ORIGINAL PLAN?]
- Priority: [CRITICAL / HIGH / MEDIUM / LOW]

Generate a complete Change Request document:
1. **Change Request ID and Header:** Formatted tracking number, date, requestor, project
2. **Change Description:** Clear, unambiguous description of what will change
3. **Business Justification:** Why this change is necessary, what happens if we don't make it
4. **Impact Analysis:**
   - Scope impact: What's added, removed, or modified
   - Schedule impact: Days/weeks of delay (or acceleration)
   - Budget impact: Additional cost (or savings)
   - Quality impact: Any changes to quality standards or testing
   - Resource impact: Additional people or skills needed
   - Risk impact: New risks introduced by this change
5. **Options Analysis:** 2-3 ways to address the need (including "do nothing") with pros and cons
6. **Recommendation:** The recommended option with rationale
7. **Approval Matrix:** Who needs to approve, by when
8. **Implementation Plan:** Steps to implement the change if approved
9. **Communication Plan:** Who needs to be informed and how
10. **Change Log Entry:** Summary for project records

Every undocumented change is a future dispute. Make changes formal and transparent.`, "Project Management");

// ── SALES (3) ──
add("Discovery Call Script Builder",
"Structure high-converting discovery calls that qualify prospects, uncover pain, and position your solution naturally.",
`You are a B2B sales strategist. Create a discovery call framework for my sales process.

My context:
- Product/Service: [WHAT YOU SELL]
- Target buyer: [TITLE, INDUSTRY, COMPANY SIZE]
- Average deal size: [AMOUNT]
- Sales cycle: [TYPICAL DURATION]
- Common pain points: [3-5 PAIN POINTS YOUR SOLUTION ADDRESSES]
- Main competitors: [2-3 COMPETITORS]

Build a discovery call script:
1. **Pre-Call Research Checklist:** 10 things to research before the call and where to find them
2. **Opening (3-5 min):** Pattern-interrupt opener, agenda setting, permission-based framework. 3 variations for warm, cold, and referral leads
3. **Situation Questions (5-7 min):** 8-10 questions mapping the prospect's current state
4. **Pain Discovery (8-12 min):** 10-12 probing questions that go 3 layers deep. Questions that quantify the cost of inaction and connect business pain to personal stakes
5. **Impact Assessment:** Budget, timeline, and decision-process questions asked naturally
6. **Solution Positioning (3-5 min):** How to position without doing a full demo. Tailored value propositions based on discovered pain
7. **Objection Handling:** Scripts for "We use competitor X," "No budget," "Need to talk to my team," "Just send info," and "Not a priority right now"
8. **Next Steps:** Securing the next meeting. Post-call follow-up email template
9. **Qualification Scorecard:** MEDDIC or BANT criteria checklist
10. **Practice Scenarios:** 3 roleplay situations

Discovery is not interrogation. It's a conversation where the prospect talks 70% and leaves feeling understood.`, "Sales");

add("Value Proposition Canvas",
"Define a customer-centric value proposition that clearly articulates why your audience should choose you over alternatives.",
`You are a brand strategist and value proposition expert. Build a Value Proposition Canvas for my business.

My business:
- Company/Product: [NAME]
- Industry: [INDUSTRY]
- B2B or B2C: [WHICH?]
- Primary offering: [WHAT DO YOU SELL?]
- Target segments: [1-3 CUSTOMER SEGMENTS]
- Price positioning: [BUDGET / MID / PREMIUM]
- Competitors: [3-5 COMPETITORS]
- Current value prop: [EXISTING ONE, OR "NONE YET"]

For each target segment, build:
1. **Customer Profile:**
   - Jobs to be done (functional, social, emotional) — 5-7 each
   - Pains (frustrations, obstacles, risks) — 5-7, ranked by severity
   - Gains (required, expected, desired, unexpected) — 5-7, ranked by relevance
2. **Value Map:**
   - Products & Services list
   - Pain Relievers: how each offering addresses specific pains
   - Gain Creators: how each offering produces specific gains
3. **Fit Analysis:** Strong fit areas, gaps, competitive advantages
4. **Value Proposition Statements:** One-liner, elevator pitch, full paragraph, website headline+subheadline, internal alignment statement
5. **Competitive Positioning:** Your unique value zone vs. each competitor. Parity features. Advantage areas
6. **Validation Framework:** 10 questions to test with real customers. A/B testing recommendations
7. **Messaging Hierarchy:** Primary message, 3 supporting messages, proof elements, channel-specific adaptations

A value proposition is not a tagline. It's the reason someone chooses you.`, "Sales");

add("Win-Loss Analysis Framework",
"Analyze won and lost deals systematically to uncover patterns, improve sales strategies, and increase win rates.",
`You are a sales operations expert. Build a win-loss analysis program for my sales team.

My context:
- Company: [NAME]
- Product/Service: [WHAT YOU SELL]
- Average deal size: [AMOUNT]
- Current win rate: [PERCENTAGE, OR "UNKNOWN"]
- Sales team size: [NUMBER]
- Primary competitors: [3-5 COMPETITORS]
- CRM: [SALESFORCE / HUBSPOT / PIPEDRIVE / OTHER]
- Current analysis: [NONE / INFORMAL / STRUCTURED]

Build:
1. **Data Collection:** 25 data points to capture for every closed deal. Rep self-assessment questionnaire. Manager debrief template
2. **Interview Guides:** 15 questions for win interviews, 15 for loss interviews, 10 for "no decision" interviews. Email templates for requesting interviews
3. **Analysis Dimensions:** Win/loss by competitor, by lead source, by deal size, by industry, by rep. Sales process analysis. Feature comparison gaps
4. **Dashboard Templates:** Monthly win-loss dashboard with key metrics. Quarterly deep-dive report template. Executive briefing format
5. **Insight-to-Action Process:** How findings become sales enablement improvements, product feedback, marketing messaging changes, and competitive battlecard updates
6. **Implementation:** 30-60-90 day rollout plan. How to get sales team buy-in. Technology requirements
7. **Benchmarks:** Industry benchmark win rates. Healthy vs. concerning patterns

You can't improve what you don't analyze. Every lost deal is a lesson; most companies just never learn it.`, "Sales");

// ── AGENTIC AI (3) ──
add("Custom GPT Builder Prompt",
"Design comprehensive custom GPT instructions that create focused, reliable AI assistants with clear boundaries and personality.",
`You are an expert AI prompt engineer and custom GPT architect. Help me design a custom GPT.

GPT details:
- Name: [GPT NAME]
- Purpose: [WHAT SHOULD IT DO?]
- Target users: [WHO WILL USE IT?]
- Tone: [PROFESSIONAL / FRIENDLY / WITTY / AUTHORITATIVE / CASUAL]
- Domain: [KNOWLEDGE AREA]
- Key tasks: [LIST 5-8 TASKS]
- Restrictions: [THINGS IT SHOULD NEVER DO]
- Knowledge files: [DOCUMENTS TO UPLOAD, OR "NONE"]

Generate:
1. **System Instructions:** Complete, production-ready instructions covering:
   - Identity & Role (persona, expertise, purpose)
   - Core Capabilities (what it can do, step-by-step processes)
   - Knowledge Boundaries (what it knows, doesn't, and how to handle gaps)
   - Interaction Style (format, length, when to ask clarifying questions)
   - Response Framework (templates for common response types)
   - Guardrails (what it must never do, disclaimers, ethical boundaries)
   - Error Handling (unclear requests, low confidence, out-of-scope)
2. **Conversation Starters:** 6 engaging examples
3. **Knowledge Base Strategy:** What to upload and how to format it
4. **Testing Protocol:** 15 test prompts covering capabilities, edge cases, and adversarial inputs
5. **Iteration Guide:** Common issues and how to fix them in instructions
6. **Deployment Checklist:** Pre-launch review, user onboarding, feedback collection

Paste-ready for GPT Builder. Use clear section headers and numbered rules.`, "Agentic AI");

add("AI Workflow Automation Planner",
"Plan AI-powered automation workflows that connect tools, eliminate repetitive tasks, and create intelligent business processes.",
`You are an AI automation architect. Design an intelligent automation workflow for my business process.

My process:
- Process name: [WHAT PROCESS TO AUTOMATE]
- Current steps: [DESCRIBE THE MANUAL PROCESS]
- Pain points: [WHAT'S SLOW, ERROR-PRONE, OR FRUSTRATING]
- Volume: [HOW OFTEN DOES THIS PROCESS RUN?]
- Time currently spent: [HOURS PER WEEK]
- Tools currently used: [LIST SOFTWARE]
- Technical capability: [NON-TECHNICAL / SOMEWHAT / HIGHLY TECHNICAL]
- Budget: [MONTHLY BUDGET FOR AUTOMATION TOOLS]

Design:
1. **Process Map:** Current state flowchart. Each step marked as fully automatable, AI-assisted, or human-required
2. **Automation Architecture:** Platform recommendation (Zapier, Make, n8n, custom). Complete workflow with triggers, actions, conditions, outputs. AI/LLM integration points
3. **AI Agent Design:** For intelligent steps — role, input, decision criteria, output format, confidence thresholds for human review, prompt templates
4. **Integration Map:** All tools, API connections, data formats, auth requirements
5. **Implementation Roadmap:** Phase 1 (quick wins), Phase 2 (core automation), Phase 3 (intelligence layer), Phase 4 (scale)
6. **ROI Analysis:** Time saved, cost comparison, error reduction, payback period
7. **Risk Mitigation:** Failure handling, human override procedures, data privacy, monitoring
8. **Measurement:** KPIs, before/after metrics, dashboard design

Automate the boring. Augment the complex. Keep humans where judgment matters.`, "Agentic AI");

add("Prompt Chain Architect",
"Design multi-step prompt chains that break complex tasks into sequential AI operations for superior results.",
`You are a senior prompt engineer. Design a prompt chain for my complex task.

Task details:
- Overall objective: [DESCRIBE THE END-TO-END TASK]
- Starting input: [WHAT DATA DO YOU BEGIN WITH?]
- Desired final output: [WHAT SHOULD THE END RESULT LOOK LIKE?]
- Quality requirements: [STANDARDS THE OUTPUT MUST MEET]
- AI model: [GPT-4 / CLAUDE / GEMINI / OTHER]
- Execution: [MANUAL COPY-PASTE / API / LANGCHAIN / ZAPIER / OTHER]

Design:
1. **Chain Architecture:** Break the task into optimal sequential steps. For each: name, purpose, input, processing logic, output, output format, quality gate
2. **Individual Step Prompts:** Complete prompt for each step with system instruction, context injection ({{VARIABLE}} placeholders), task instruction, output format spec, constraints, and examples
3. **Variable Management:** All variables passed between steps, data formats, transformation rules, token management
4. **Branching Logic:** Conditional branches, classification steps, parallel processing opportunities, merge points
5. **Quality Control:** Validation prompts, self-critique steps, human-in-the-loop checkpoints, confidence scoring, retry logic
6. **Optimization:** Temperature adjustments per step, few-shot examples, model selection per step, caching, cost estimation
7. **Testing:** 3 test scenarios with sample inputs and expected outputs per step
8. **Implementation Guide:** Setup instructions for your execution environment

A well-designed chain produces results that no single prompt can match.`, "Agentic AI");

// ── EDUCATION (4) ──
add("Lesson Plan Creator",
"Build structured, engaging lesson plans with learning objectives, activities, assessments, and differentiation strategies.",
`You are a curriculum design specialist. Create a comprehensive lesson plan.

Lesson details:
- Subject: [SUBJECT]
- Topic: [SPECIFIC TOPIC]
- Grade/Level: [ELEMENTARY / MIDDLE / HIGH / COLLEGE / ADULT]
- Duration: [CLASS LENGTH]
- Class size: [NUMBER OF STUDENTS]
- Prior knowledge: [WHAT DO STUDENTS ALREADY KNOW?]
- Learning standards: [SPECIFIC STANDARDS TO ADDRESS, OR "GENERAL"]
- Resources available: [TECHNOLOGY, TEXTBOOKS, LAB EQUIPMENT, etc.]

Create:
1. **Learning Objectives:** 3-4 measurable objectives using Bloom's Taxonomy (students will be able to...)
2. **Lesson Structure:**
   - Hook/Do Now (5 min): Engaging opener that activates prior knowledge
   - Direct Instruction (10-15 min): Core content delivery with visual aids
   - Guided Practice (10-15 min): Structured activity with teacher support
   - Independent Practice (10-15 min): Students apply learning autonomously
   - Closure (5 min): Summary, exit ticket, preview of next lesson
3. **Differentiation:** Modifications for advanced learners, struggling students, and English language learners
4. **Assessment:** Formative checks during lesson + summative assessment option
5. **Materials List:** Everything needed, including printables and tech setup
6. **Extension Activities:** For students who finish early or want deeper exploration
7. **Common Misconceptions:** What students typically get wrong and how to address it
8. **Reflection Questions:** For teacher self-assessment after the lesson

The best lessons make students think, not just listen.`, "Education");

add("Study Guide Generator",
"Create comprehensive study guides with key concepts, practice questions, memory aids, and self-assessment tools.",
`You are an education specialist. Create a study guide that makes learning efficient and effective.

Study details:
- Subject: [SUBJECT]
- Topic/Unit: [SPECIFIC TOPIC OR CHAPTER]
- Level: [HIGH SCHOOL / UNDERGRADUATE / GRADUATE / PROFESSIONAL CERTIFICATION]
- Exam format: [MULTIPLE CHOICE / ESSAY / PROBLEM-SOLVING / MIXED / PRACTICAL]
- Study time available: [HOURS/DAYS UNTIL EXAM]
- Weak areas: [WHAT DO YOU STRUGGLE WITH?]
- Textbook/Source: [WHAT MATERIAL ARE YOU STUDYING FROM?]

Generate:
1. **Concept Map:** Visual outline showing how all key concepts connect to each other
2. **Key Concepts Summary:** Each concept explained in 2-3 sentences with a real-world example. Highlight must-know vs. nice-to-know
3. **Memory Aids:** Mnemonics, acronyms, analogies, and visual associations for hard-to-remember facts
4. **Practice Questions:** 20 questions matching the exam format, ordered from basic recall to application to analysis. Include answer key with explanations for WHY each answer is correct
5. **Common Mistakes:** 10 frequent errors students make on this topic and how to avoid them
6. **Quick Reference Sheet:** One-page cheat sheet with formulas, dates, definitions — everything you'd want at a glance
7. **Study Schedule:** Hour-by-hour plan optimized for your available time using spaced repetition and active recall
8. **Self-Assessment:** 5-question quiz to take before studying (baseline) and after (progress check)

Study smarter: active recall beats re-reading, and testing yourself beats highlighting.`, "Education");

add("Flashcard Set Builder",
"Generate effective flashcard sets using active recall principles with front/back pairs, mnemonics, and spaced repetition guidance.",
`You are a learning science expert specializing in spaced repetition and active recall. Create an optimized flashcard set.

Study details:
- Subject: [SUBJECT]
- Topic: [SPECIFIC TOPIC]
- Number of cards needed: [APPROXIMATE NUMBER]
- Difficulty level: [BEGINNER / INTERMEDIATE / ADVANCED]
- Source material: [PASTE NOTES, LIST CONCEPTS, OR DESCRIBE WHAT TO COVER]
- Flashcard app: [ANKI / QUIZLET / BRAINSCAPE / PHYSICAL CARDS / OTHER]

Generate:
1. **Flashcard Set:** Complete front/back pairs following these principles:
   - One concept per card (no information overload)
   - Questions that require recall, not recognition
   - Multiple card types: definition, application, comparison, example-based
   - Cards that test understanding, not just memorization
   - Cloze deletion cards for key statements
   - Image occlusion suggestions where visual learning helps

2. **For Each Card:**
   - Front: Clear, specific question or prompt
   - Back: Concise answer with one elaboration point
   - Mnemonic hint: Memory aid if the concept is hard to remember
   - Tags: Category tags for filtered study sessions

3. **Study Strategy:**
   - Recommended spaced repetition schedule
   - How to handle cards you keep getting wrong
   - When to add new cards vs. review existing ones
   - Session length and frequency recommendations

4. **Anti-Pattern Warnings:** Common flashcard mistakes (too much text, yes/no questions, missing context) and how to fix them

5. **Import Format:** Cards formatted for direct import into your flashcard app

The goal is minimum cards for maximum retention. Every card should earn its place.`, "Education");

add("Socratic Teaching Method Guide",
"Design teaching sessions using guided questioning to develop critical thinking and student-led discovery.",
`You are a master educator trained in Socratic pedagogy. Design a Socratic teaching session.

Session details:
- Subject/Topic: [THE TOPIC TO TEACH]
- Learning Objective: [WHAT STUDENTS SHOULD UNDERSTAND BY THE END]
- Student Level: [ELEMENTARY / HIGH SCHOOL / UNDERGRADUATE / GRADUATE / ADULT]
- Class Size: [INDIVIDUAL / SMALL GROUP / MEDIUM / LARGE]
- Prior Knowledge: [WHAT STUDENTS ALREADY KNOW]
- Session Length: [30 / 45 / 60 / 90 MINUTES]

Deliver:
1. **Opening Provocation:** A scenario, paradox, or artifact that creates cognitive tension. Write the exact words. Include 2-3 alternatives
2. **Question Sequence:** 15-25 ordered questions in phases:
   - Clarification: "What do you mean by...?" "Can you give an example?"
   - Probing Assumptions: "Why do you believe that?" "Is that always true?"
   - Evidence: "What evidence supports that?" "How could we test it?"
   - Perspective: "How would someone who disagrees respond?"
   - Implications: "If that's true, what else must be true?"
   - Meta: "Why did I ask that question?" "How has your thinking changed?"
3. **Facilitation Guide:** Handling right answers given too quickly, wrong answers (guide without embarrassing), silence, dominant students, off-track discussions, student frustration
4. **Assessment:** How to gauge understanding through question quality, not just answers. Exit ticket questions
5. **Adaptation:** Modifications for visual/kinesthetic learners, virtual settings, large classes
6. **Teacher Prep:** How to anticipate responses, model intellectual humility, self-assess after sessions

The Socratic method is not interrogation. It's carefully crafted curiosity that guides discovery.`, "Education");

// ── HEALTH & FITNESS (4) ──
add("Macro Tracking Meal Planner",
"Create a meal plan based on specific macronutrient targets with grocery lists, recipes, and meal prep instructions.",
`You are a sports nutritionist. Create a meal plan based on my macro targets.

DISCLAIMER: Consult a healthcare professional before making significant dietary changes.

My details:
- Goal: [FAT LOSS / MUSCLE GAIN / MAINTENANCE / PERFORMANCE]
- Daily targets: Calories [CAL], Protein [G], Carbs [G], Fat [G] (or "calculate for me" based on my stats: [WEIGHT, HEIGHT, AGE, ACTIVITY LEVEL])
- Dietary restrictions: [NONE / VEGETARIAN / VEGAN / GLUTEN-FREE / DAIRY-FREE / KETO / OTHER]
- Meals per day: [3 / 4 / 5 / INTERMITTENT FASTING]
- Cooking skill: [MINIMAL / MODERATE / ADVANCED]
- Meal prep preference: [BATCH COOK SUNDAYS / COOK DAILY / MIX]
- Budget: [LOW / MODERATE / FLEXIBLE]
- Foods I dislike: [LIST ANY]

Deliver:
1. **7-Day Meal Plan:** Complete daily meal breakdown with exact portions and macros per meal. Each day hits the targets within +/- 5%
2. **Macro Breakdown Per Meal:** Table showing calories, protein, carbs, fat for every meal
3. **Recipes:** Simple recipes for each unique meal (not just "grilled chicken and rice" — actual flavor)
4. **Grocery List:** Organized by store section, with quantities for the full week
5. **Meal Prep Guide:** Sunday prep instructions — what to cook, what to portion, storage tips
6. **Swap Options:** 2-3 alternatives for each meal that maintain the same macro profile
7. **Eating Out Guide:** How to hit macros at common restaurants
8. **Tracking Tips:** Best apps, how to weigh food, when precision matters vs. estimation is fine

Hitting macros shouldn't mean eating boring food. Make it taste good.`, "Health & Fitness");

add("Home Workout Program Designer",
"Create effective workout programs that require no gym — just bodyweight, minimal equipment, and smart programming.",
`You are a certified personal trainer specializing in home and bodyweight training.

DISCLAIMER: Consult a healthcare professional before starting any new exercise program.

My details:
- Goal: [FAT LOSS / MUSCLE BUILDING / STRENGTH / ENDURANCE / GENERAL FITNESS]
- Current fitness level: [BEGINNER / INTERMEDIATE / ADVANCED]
- Available equipment: [NONE / RESISTANCE BANDS / DUMBBELLS / PULL-UP BAR / KETTLEBELL / LIST WHAT YOU HAVE]
- Available space: [SMALL ROOM / LIVING ROOM / GARAGE / BACKYARD]
- Time per workout: [15 / 20 / 30 / 45 / 60 MINUTES]
- Days per week: [3 / 4 / 5 / 6]
- Injuries or limitations: [LIST ANY, OR "NONE"]
- Experience with exercises: [KNOW BASICS / NEED FORM GUIDANCE / EXPERIENCED]

Deliver:
1. **Program Structure:** Training split (full body, upper/lower, push/pull/legs) with reasoning for your level
2. **Weekly Schedule:** Which workout on which day, including rest and active recovery days
3. **Complete Workouts:** For each training day:
   - Warm-up (5 min): Dynamic movements specific to that day's workout
   - Main workout: Exercise name, sets, reps, tempo, rest periods
   - Cool-down (5 min): Stretches for worked muscles
4. **Exercise Library:** For each exercise — description, muscles worked, form cues, common mistakes, regression (easier) and progression (harder) variations
5. **Progressive Overload Plan:** How to increase difficulty week over week without adding equipment (tempo, pauses, unilateral, volume, intensity techniques)
6. **4-Week Progression:** How the program evolves over a month
7. **Workout Log Template:** Simple tracking sheet
8. **No-Equipment Alternatives:** Bodyweight substitutes for every exercise in case equipment isn't available

Effective home training is about smart programming, not fancy equipment.`, "Health & Fitness");

add("Running Training Plan Builder",
"Build a progressive running plan for any goal — from Couch to 5K through marathon training — with pacing and recovery.",
`You are a certified running coach. Build a training plan for my running goal.

DISCLAIMER: Consult a healthcare professional before starting a running program, especially if you have heart, joint, or respiratory conditions.

My details:
- Goal: [COUCH TO 5K / 5K PR / 10K / HALF MARATHON / MARATHON / ULTRA / GENERAL FITNESS]
- Current level: [NON-RUNNER / CASUAL (1-2x WEEK) / REGULAR (3-4x WEEK) / SERIOUS (5+ RUNS)]
- Current weekly mileage: [MILES/KM PER WEEK]
- Recent race time (if any): [DISTANCE AND TIME]
- Target race date: [DATE, OR "NO SPECIFIC RACE"]
- Available days to run: [DAYS PER WEEK]
- Injury history: [RUNNER'S KNEE / SHIN SPLINTS / PLANTAR FASCIITIS / NONE / OTHER]
- Cross-training: [GYM / CYCLING / SWIMMING / YOGA / NONE]
- Terrain: [ROAD / TRAIL / TREADMILL / MIX]

Deliver:
1. **Training Plan:** Week-by-week schedule with:
   - Easy runs (with pace zones)
   - Long runs (with progression)
   - Speed work (intervals, tempo, fartlek — when appropriate for level)
   - Rest days and active recovery
   - Cross-training days
   - Total weekly mileage with % increase caps (no more than 10% per week)
2. **Pace Guide:** Training paces for each run type based on current fitness. How to determine your zones without a lab test
3. **The 80/20 Rule:** 80% easy, 20% hard — explain why most runners train too hard on easy days
4. **Strength Work:** 2 running-specific strength routines (15 min each) targeting common weak points
5. **Injury Prevention:** Pre-run dynamic warm-up, post-run stretching, foam rolling protocol, when to push through discomfort vs. stop
6. **Nutrition:** Pre-run, during-run, and post-run fueling guidelines. Race day nutrition plan for longer distances
7. **Taper Protocol:** How to reduce training before race day without losing fitness
8. **Race Day Plan:** Pacing strategy, warm-up routine, mental cues

The best training plan is one that gets you to the start line healthy and to the finish line happy.`, "Health & Fitness");

add("Mindfulness Meditation Guide",
"Get personalized guided meditation scripts with progressive techniques for stress reduction, focus, and emotional regulation.",
`You are a certified mindfulness instructor and meditation teacher. Create a personalized meditation practice.

My situation:
- Experience: [COMPLETE BEGINNER / TRIED A FEW TIMES / INCONSISTENT PRACTICE / REGULAR MEDITATOR]
- Goal: [STRESS REDUCTION / BETTER SLEEP / FOCUS / ANXIETY MANAGEMENT / EMOTIONAL REGULATION / SPIRITUAL GROWTH / GENERAL WELLBEING]
- Available time: [5 / 10 / 15 / 20 / 30 MINUTES]
- Preferred time of day: [MORNING / MIDDAY / EVENING / BEFORE BED]
- Challenges: [RACING THOUGHTS / CAN'T SIT STILL / FALL ASLEEP / GET FRUSTRATED / FORGET TO DO IT]
- Preferences: [GUIDED / SILENT / MUSIC / NATURE SOUNDS]

Deliver:
1. **Personalized 4-Week Program:**
   - Week 1: Foundation (breath awareness, body scan basics)
   - Week 2: Building (longer sits, introducing focus techniques)
   - Week 3: Deepening (loving-kindness, open awareness)
   - Week 4: Integration (bringing mindfulness into daily activities)

2. **Guided Scripts:** 4 complete meditation scripts (one per week) with:
   - Opening settling instructions
   - Main technique with moment-by-moment guidance
   - Handling distractions (specific phrases for returning attention)
   - Closing and transition back to activity

3. **Quick Practices:** 1-minute, 3-minute, and 5-minute micro-meditations for stressful moments
4. **Common Obstacles:** Solutions for racing thoughts, sleepiness, restlessness, boredom, and self-judgment
5. **Daily Mindfulness Exercises:** 5 ways to practice mindfulness during everyday activities (eating, walking, commuting, waiting, conversations)
6. **Progress Markers:** How to know your practice is working (it's not about feeling blissful)
7. **Habit Integration:** How to make meditation stick using cues, tiny habits, and tracking

Meditation is not about stopping thoughts. It's about changing your relationship with them.`, "Health & Fitness");

// ── DATA ANALYSIS (4) ──
add("Data Visualization Recommender",
"Choose the right chart type for your data and get specific design recommendations for clear, impactful visualizations.",
`You are a data visualization expert. Help me choose and design the right chart for my data.

My data:
- What am I showing: [DESCRIBE YOUR DATA AND THE STORY YOU WANT TO TELL]
- Data type: [TIME SERIES / COMPARISON / DISTRIBUTION / COMPOSITION / RELATIONSHIP / GEOGRAPHIC / FLOW]
- Number of variables: [HOW MANY DIMENSIONS?]
- Data points: [APPROXIMATE NUMBER OF ROWS/RECORDS]
- Audience: [EXECUTIVE / TECHNICAL / GENERAL PUBLIC / ACADEMIC]
- Tool: [EXCEL / GOOGLE SHEETS / TABLEAU / POWER BI / PYTHON / R / D3.JS / OTHER]
- Context: [PRESENTATION / REPORT / DASHBOARD / PUBLICATION / SOCIAL MEDIA]

Deliver:
1. **Chart Recommendation:** The best chart type with reasoning. Include 2 alternatives with pros and cons
2. **Design Specifications:**
   - Color palette (accessible, colorblind-friendly)
   - Axis labels and titles
   - Legend placement
   - Data label strategy (when to show values, when to omit)
   - Gridlines and reference lines
   - Annotations for key insights
3. **What to Avoid:** Chart junk, misleading scales, unnecessary 3D, pie charts for too many categories — specific to your data
4. **Implementation:** Step-by-step instructions to create this chart in your tool
5. **Dashboard Context:** If this is part of a dashboard, how it relates to companion charts
6. **The Insight Sentence:** The one sentence this chart should communicate. If someone glances at it for 5 seconds, this is what they should understand
7. **Accessibility:** Alt text for the chart, high-contrast version, data table fallback

A chart should make the data's story obvious, not require explanation.`, "Data Analysis");

add("Survey Design and Analysis Guide",
"Design effective surveys with proper question types, bias prevention, sampling strategies, and analysis frameworks.",
`You are a survey methodology expert. Help me design a survey that produces reliable, actionable data.

My survey:
- Purpose: [WHAT DO YOU WANT TO LEARN?]
- Target population: [WHO ARE YOU SURVEYING?]
- Sample size goal: [HOW MANY RESPONSES DO YOU WANT?]
- Distribution method: [EMAIL / IN-APP / SOCIAL MEDIA / IN-PERSON / PHONE]
- Incentive: [WHAT ARE YOU OFFERING FOR COMPLETION, IF ANYTHING?]
- Previous surveys: [HAVE YOU SURVEYED THIS GROUP BEFORE?]
- Decisions this will inform: [WHAT WILL YOU DO WITH THE RESULTS?]

Deliver:
1. **Survey Design:**
   - 15-25 questions covering your research objectives
   - Mix of question types (Likert scale, multiple choice, ranking, open-ended, matrix)
   - Logical flow from easy/engaging to complex to demographic
   - Skip logic recommendations (if X then show Y)
   - Estimated completion time (aim for under 10 minutes)
2. **Question Quality Checks:** For each question — is it double-barreled, leading, loaded, or ambiguous? Fix any issues
3. **Bias Prevention:** Response order effects, social desirability bias, acquiescence bias — and how each is mitigated in your design
4. **Sampling Strategy:** Who to survey, how to reach them, minimum sample size for statistical significance
5. **Pre-Launch Checklist:** Pilot testing, mobile responsiveness, accessibility, consent language
6. **Analysis Plan:** For each question — what analysis to run (frequencies, cross-tabs, correlation, regression) and what tools to use
7. **Reporting Template:** How to present survey findings with charts and narrative
8. **Common Mistakes:** 10 survey design errors that invalidate results

A bad survey gives you confident answers to the wrong questions. Design matters more than sample size.`, "Data Analysis");

add("A/B Test Results Analyzer",
"Analyze A/B test results with statistical significance, confidence intervals, practical significance, and recommended actions.",
`You are a data scientist specializing in experimentation and A/B testing. Help me analyze my test results.

My test:
- What was tested: [DESCRIBE THE A/B TEST — what changed between control and variant]
- Hypothesis: [WHAT YOU EXPECTED TO HAPPEN]
- Primary metric: [CONVERSION RATE / REVENUE / CLICK-THROUGH / ENGAGEMENT / OTHER]
- Control results: [SAMPLE SIZE AND METRIC VALUE]
- Variant results: [SAMPLE SIZE AND METRIC VALUE]
- Test duration: [HOW LONG DID IT RUN?]
- Traffic split: [50/50 / OTHER]
- Secondary metrics: [ANY OTHER METRICS TRACKED?]
- Segment data: [ANY BREAKDOWNS BY DEVICE, GEO, NEW VS. RETURNING, etc.?]

Deliver:
1. **Statistical Analysis:**
   - Relative lift (% change)
   - Absolute difference
   - Statistical significance (p-value)
   - Confidence interval (95%)
   - Statistical power assessment
   - Was the sample size sufficient?
2. **Practical Significance:** Is the observed difference meaningful for the business? Estimated annual impact in dollars/users
3. **Validity Checks:**
   - Sample Ratio Mismatch (was traffic split as intended?)
   - Novelty/Primacy effects
   - Simpson's Paradox check (does the result reverse in subgroups?)
   - Was the test run long enough (at least one full business cycle)?
4. **Segment Analysis:** If segment data provided — did the result differ for subgroups?
5. **Recommendation:** Ship variant / keep control / run a follow-up test. Clear rationale
6. **Next Test Suggestions:** Based on these results, what should you test next?
7. **Documentation:** Summary for the experimentation log with test ID, dates, results, and decision

Underpowered tests and premature conclusions waste more time than they save. Let the math decide.`, "Data Analysis");

add("KPI Framework Builder",
"Define and structure KPIs for any team or business with targets, tracking methods, and actionable dashboards.",
`You are a business intelligence consultant. Build a KPI framework for my team or business.

My context:
- Business/Team: [DESCRIBE YOUR BUSINESS OR TEAM FUNCTION]
- Industry: [YOUR INDUSTRY]
- Stage: [STARTUP / GROWTH / MATURE]
- Current metrics: [WHAT DO YOU TRACK NOW? OR "NOTHING FORMAL"]
- Pain point: [WHAT DON'T YOU HAVE VISIBILITY INTO?]
- Reporting audience: [CEO / BOARD / TEAM LEADS / INVESTORS / SELF]
- Tools: [GOOGLE SHEETS / LOOKER / TABLEAU / POWER BI / NOTION / OTHER]

Deliver:
1. **KPI Selection:** 8-12 KPIs for your business/team, organized as:
   - Leading indicators (predict future performance)
   - Lagging indicators (confirm past performance)
   - Health metrics (things that should stay stable)
   For each KPI: name, formula, data source, update frequency, owner
2. **Target Setting:** For each KPI — realistic target, stretch target, red flag threshold. Method for setting targets (benchmark, historical, aspirational)
3. **KPI Hierarchy:** How team KPIs ladder up to company KPIs. North Star metric identification
4. **Dashboard Design:** Layout recommendation with KPIs grouped logically. Suggested chart type for each metric. Color coding and alert rules
5. **Data Collection:** Where each data point comes from and how to automate collection
6. **Review Cadence:** Daily, weekly, monthly, and quarterly review frameworks. Meeting agenda template for KPI reviews
7. **Action Triggers:** For each KPI — what to do when it's red. Specific investigation steps and intervention playbooks
8. **Anti-Metrics:** What NOT to track (vanity metrics for your business) and why

Measure what matters. If a metric doesn't change behavior, stop tracking it.`, "Data Analysis");

// ── PERSONAL FINANCE (4) ──
add("Tax Optimization Strategy Guide",
"Get personalized tax reduction strategies using legal deductions, credits, retirement accounts, and timing tactics.",
`You are a tax strategist. Help me optimize my tax situation using legal strategies.

DISCLAIMER: This is educational guidance, not tax advice. Consult a qualified CPA or tax attorney for your specific situation.

My situation:
- Filing status: [SINGLE / MARRIED FILING JOINTLY / HEAD OF HOUSEHOLD / OTHER]
- Approximate gross income: [AMOUNT]
- Income sources: [W-2 / 1099 / BUSINESS / INVESTMENTS / RENTAL / OTHER]
- State: [YOUR STATE FOR STATE TAX CONSIDERATIONS]
- Current deductions: [STANDARD / ITEMIZED — WHAT DO YOU DEDUCT?]
- Retirement accounts: [401K / IRA / ROTH / SEP / NONE]
- Own a home: [YES / NO — MORTGAGE INTEREST?]
- Own a business: [YES / NO — ENTITY TYPE?]
- Investments: [STOCKS / REAL ESTATE / CRYPTO / NONE]
- Major life changes: [MARRIAGE / KIDS / HOME PURCHASE / JOB CHANGE / NONE]

Deliver:
1. **Quick Wins:** 5-7 immediate actions to reduce this year's tax bill
2. **Retirement Account Strategy:** Optimize 401k, IRA, and Roth contributions. Traditional vs. Roth decision framework based on current vs. future tax brackets
3. **Deduction Maximization:** Itemized vs. standard analysis. Commonly missed deductions for your situation. Bunching strategy for itemized deductions
4. **Income Timing:** Strategies for deferring income or accelerating deductions across tax years
5. **Investment Tax Efficiency:** Tax-loss harvesting, asset location (which investments in which account type), long-term vs. short-term gains management
6. **Business Deductions** (if applicable): Home office, vehicle, equipment, retirement plans for self-employed
7. **Credit Checklist:** All tax credits you might qualify for with eligibility criteria
8. **Year-Round Tax Calendar:** Key dates and actions throughout the year, not just at tax time

The goal isn't to pay zero taxes. It's to never pay more than you legally owe.`, "Personal Finance");

add("Emergency Fund Calculator",
"Calculate your ideal emergency fund size based on your personal risk factors, expenses, and financial situation.",
`You are a certified financial planner specializing in financial resilience. Help me calculate and build my emergency fund.

DISCLAIMER: This is educational guidance. Consult a financial advisor for personalized advice.

My situation:
- Monthly essential expenses: [AMOUNT — rent, utilities, food, insurance, minimum debt payments]
- Income stability: [VERY STABLE (government, tenured) / STABLE (corporate) / VARIABLE (commission, freelance) / UNSTABLE (contract, seasonal)]
- Number of income earners in household: [1 / 2]
- Dependents: [NUMBER OF PEOPLE DEPENDING ON YOUR INCOME]
- Insurance coverage: [HEALTH / DISABILITY / LIFE — WHICH DO YOU HAVE?]
- Current savings: [HOW MUCH IS IN YOUR EMERGENCY FUND NOW?]
- Monthly amount available to save: [WHAT CAN YOU SAVE PER MONTH?]
- Existing debt: [CREDIT CARDS / STUDENT LOANS / CAR / MORTGAGE — AMOUNTS AND RATES]
- Industry: [YOUR FIELD — AFFECTS JOB MARKET RISK]
- Health status: [GENERALLY HEALTHY / CHRONIC CONDITIONS / FAMILY HISTORY OF CONCERN]

Deliver:
1. **Risk Profile Assessment:** Score your vulnerability across 8 factors (income stability, dependents, health, debt, industry, housing, geographic, vehicle)
2. **Fund Calculation:** THREE tiers — Starter Fund (minimum), Core Fund (standard), Fortress Fund (maximum protection) — with dollar amounts for each
3. **Where to Keep It:** High-yield savings recommendations, why not to invest it, laddering strategy for larger funds
4. **Building Plan:** Monthly targets for 3 timelines (aggressive, moderate, comfortable). Specific strategies to free up savings. Automation setup
5. **Emergency Fund Rules:** What qualifies as an emergency (with examples), what does NOT, how to replenish after withdrawal
6. **Priority Balancing:** Emergency fund vs. debt payoff vs. retirement — the correct order for your situation
7. **Scenario Planning:** Model 3 emergency scenarios relevant to your life with estimated costs

Make the abstract feel urgent. An emergency fund isn't exciting until you need one.`, "Personal Finance");

add("Retirement Planning Roadmap",
"Create a personalized retirement plan with savings targets, investment allocation, and milestone checkpoints by decade.",
`You are a retirement planning specialist. Build a comprehensive retirement roadmap.

DISCLAIMER: Consult a qualified financial advisor for personalized investment decisions.

My profile:
- Current age: [AGE]
- Target retirement age: [AGE, OR "HELP ME FIGURE THIS OUT"]
- Current income: [GROSS ANNUAL]
- Current retirement savings: [TOTAL ACROSS ALL ACCOUNTS]
- Current monthly savings rate: [AMOUNT OR %]
- Employer match: [MATCH FORMULA]
- Desired retirement lifestyle: [MODEST / COMFORTABLE / AFFLUENT]
- Risk tolerance: [CONSERVATIVE / MODERATE / AGGRESSIVE]
- Planned retirement location: [STAY PUT / DOWNSIZE / RELOCATE]

Deliver:
1. **Retirement Number:** Annual retirement expenses estimate, total nest egg needed (4% rule + limitations), gap between current trajectory and target
2. **Savings Strategy by Decade:** Target savings rate, dollar amounts, which accounts to prioritize, catch-up strategies
3. **Investment Allocation:** Current recommendation, glide path by decade, asset location for tax efficiency, rebalancing guidelines
4. **Tax Optimization:** Traditional vs. Roth strategy, Roth conversion planning, RMD management, tax-efficient withdrawal ordering
5. **Social Security Strategy:** When to claim (62 vs. 67 vs. 70), spousal benefits, break-even analysis
6. **Healthcare Bridge:** Coverage between retirement and Medicare, estimated healthcare costs, HSA strategy
7. **Withdrawal Strategy:** Safe withdrawal rate, bucket strategy, handling market downturns, guardrails approach
8. **Milestone Checkpoints:** "Am I on track?" benchmarks by age, annual review checklist, course correction strategies

Show specific dollar amounts and action items. Not just advice — a plan I can execute.`, "Personal Finance");

add("Side Hustle Evaluator",
"Evaluate side business ideas for profitability, time investment, startup costs, scalability, and fit with your life.",
`You are a business analyst and entrepreneurship advisor. Help me objectively evaluate my side hustle ideas.

My situation:
- Current job: [JOB TITLE]
- Available hours/week: [HOURS FOR SIDE HUSTLE]
- Skills: [YOUR RELEVANT SKILLS]
- Starting budget: [UPFRONT INVESTMENT AVAILABLE]
- Income goal: [MONTHLY TARGET]
- Risk tolerance: [LOW / MEDIUM / HIGH]
- Non-compete restrictions: [ANY LIMITATIONS?]

Ideas to evaluate:
1. [IDEA 1]
2. [IDEA 2]
3. [IDEA 3]
(Or say "suggest ideas based on my profile")

For EACH idea:
1. **Viability Scorecard** (1-10): Market demand, competition, skill fit, time-to-revenue, startup cost, scalability, lifestyle fit, passion alignment — with overall weighted score
2. **Financial Projection:** Startup costs, monthly operating costs, revenue model, realistic income at 3/6/12 months, break-even timeline, hourly rate equivalent
3. **Time Analysis:** Hours to launch, hours to maintain, automation/outsourcing potential, energy impact on day job
4. **Competitive Landscape:** Who's doing this, what makes yours different, barriers to entry
5. **Risk Assessment:** Top 3 risks, mitigation strategies, worst-case scenario, impact on day job
6. **Launch Plan** (if viable): Week-by-week plan for first month, first customer acquisition strategy

Then: **Side-by-side comparison table** and clear recommendation of which ONE to start with and why.

Be honest. If an idea is bad, say so. Help me avoid common side hustle mistakes.`, "Personal Finance");

// ── RESEARCH (3) ──
add("Systematic Literature Review Guide",
"Conduct a rigorous systematic literature review with PRISMA methodology, search strategies, and synthesis frameworks.",
`You are a research methodology expert. Guide me through a systematic literature review.

Review parameters:
- Research topic: [YOUR TOPIC]
- Research question: [YOUR QUESTION, OR "HELP ME FORMULATE ONE"]
- Discipline: [YOUR FIELD]
- Review type: [SYSTEMATIC / META-ANALYSIS / SCOPING / RAPID]
- Purpose: [DISSERTATION / JOURNAL / GRANT / THESIS]
- Timeline: [HOW LONG DO YOU HAVE]
- Software available: [COVIDENCE / RAYYAN / ENDNOTE / ZOTERO / EXCEL]

Deliver:
1. **Research Question:** PICO/SPIDER framework, scope boundaries, primary and sub-questions
2. **Protocol:** PROSPERO registration guidance, PRISMA-P outline, amendment policy
3. **Search Strategy:** Database selection with rationale, complete search strings with Boolean operators and MeSH terms, grey literature sources, hand-searching strategy
4. **Eligibility Criteria:** Inclusion/exclusion with justification, decision rules for borderline cases, 5 sample screening exercises
5. **Screening Process:** Title/abstract and full-text protocols, inter-rater reliability, PRISMA flow diagram template
6. **Data Extraction:** Complete extraction form template (study ID, design, population, intervention, outcomes, quality)
7. **Quality Assessment:** Recommended appraisal tool for your study types (RoB 2, Newcastle-Ottawa, CASP, MMAT)
8. **Synthesis:** Narrative synthesis framework or meta-analysis considerations (effect sizes, heterogeneity, forest plots)
9. **Reporting:** PRISMA checklist walkthrough
10. **Common Mistakes:** Top 10 errors that lead to rejection at peer review

Enable a publishable systematic review from start to finish.`, "Research");

add("Research Methodology Selector",
"Choose the right research methodology by analyzing your question, constraints, and goals with implementation guidance.",
`You are a research methodology expert. Help me select the right methodology for my study.

My context:
- Research topic: [YOUR TOPIC]
- Research questions: [YOUR QUESTIONS, OR "HELP ME FORMULATE"]
- Discipline: [YOUR FIELD]
- Purpose: [THESIS / DISSERTATION / JOURNAL / REPORT / GRANT]
- Academic level: [UNDERGRADUATE / MASTER'S / DOCTORAL / PROFESSIONAL]
- What I want to understand: [CAUSES / EXPERIENCES / PATTERNS / RELATIONSHIPS / PROCESSES]
- Population: [WHO/WHAT ARE YOU STUDYING]
- Access to data/participants: [WHAT CAN YOU REALISTICALLY ACCESS?]
- Timeline: [HOW LONG DO YOU HAVE]
- Skills: [STATISTICS / INTERVIEW / SOFTWARE KNOWLEDGE]

Deliver:
1. **Question Analysis:** Classify your question type (exploratory, descriptive, explanatory). Identify paradigm (qualitative, quantitative, mixed) with epistemological rationale
2. **Top 3 Methodologies:** For each — description, why it fits, strengths, limitations, feasibility assessment, sample studies using it
3. **Deep Dive on Best Fit:** Research design, sampling strategy (method, size, criteria), data collection (instruments, procedures, pilot testing), data analysis (method, software, step-by-step), ethical considerations
4. **Instrument Development:** Survey design principles, interview guide structure, or observation protocol — depending on methodology
5. **Validity/Reliability Framework:** Threats specific to your design with mitigation strategies
6. **Methodology Section Draft:** Template for writing the methods chapter with key elements
7. **Decision Matrix:** Side-by-side comparison scored on alignment, feasibility, rigor, timeline, and skill requirements

Choose methodology that's rigorous enough to be credible but practical enough to complete.`, "Research");

add("Annotated Bibliography Builder",
"Create properly formatted annotated bibliographies with critical summaries and analysis of each source's contribution.",
`You are an academic research librarian. Help me create a thorough annotated bibliography.

Parameters:
- Research topic: [YOUR TOPIC]
- Research question: [YOUR QUESTION]
- Citation style: [APA 7th / MLA 9th / CHICAGO / HARVARD]
- Number of sources: [HOW MANY]
- Source types: [PEER-REVIEWED / BOOKS / REPORTS / MIX]
- Academic level: [UNDERGRADUATE / GRADUATE / DOCTORAL]
- Sources to annotate: [PASTE CITATIONS OR TITLES, OR "HELP ME IDENTIFY SOURCES"]

For each source:
1. **Citation:** Properly formatted in specified style with DOI/URL
2. **Summary:** Main argument, methodology, key findings, conclusion (4-5 sentences)
3. **Evaluation:** Author authority, currency, methodology quality, bias assessment, evidence strength, overall quality rating (strong/moderate/weak)
4. **Reflection:** How it relates to your research question, supports/challenges your argument, connects to other sources, what gap it fills

After all entries:
5. **Synthesis Overview:** Major themes, areas of consensus and debate, chronological trends, literature gaps
6. **Source Relationship Map:** Which sources agree/disagree, how to group by subtopic
7. **Gap Analysis:** Missing perspectives, suggested additional sources, search terms
8. **Writing Tips:** How to transition between sources in a narrative literature review, signal phrases, synthesis vs. summary

Each annotation should demonstrate critical engagement, not just description.`, "Research");

// ── SOCIAL MEDIA (5) ──
add("Thread Writer for X",
"Create viral Twitter/X threads with compelling hooks, structured narratives, and engagement-optimized formatting.",
`You are a Twitter/X content strategist who has written threads with millions of impressions. Write a viral thread.

Thread details:
- Topic: [WHAT IS THE THREAD ABOUT?]
- Angle: [EDUCATIONAL / STORYTELLING / CONTRARIAN / BEHIND-THE-SCENES / FRAMEWORK / LIST]
- Target audience: [WHO DO YOU WANT TO REACH?]
- Your expertise: [WHY SHOULD PEOPLE LISTEN TO YOU ON THIS?]
- Thread length: [5 / 7 / 10 / 15 TWEETS]
- Goal: [FOLLOWERS / ENGAGEMENT / TRAFFIC / AUTHORITY / SALES]

Deliver:
1. **The Thread:** Complete thread with:
   - Hook tweet: The first tweet that stops the scroll. 3 options (curiosity gap, bold claim, surprising stat)
   - Numbered tweets with clear, digestible points
   - Each tweet is standalone valuable AND advances the narrative
   - Strategic line breaks for mobile readability
   - Final tweet with clear CTA (follow, retweet, reply, link)
2. **Character Counts:** Each tweet verified under 280 characters
3. **Engagement Boosters:** Where to add a question, poll, or "reply with yours" prompt
4. **Quote Tweet Bait:** Which tweets are most likely to be screenshotted or quoted (make them extra polished)
5. **Repost Strategy:** Best time to post, how to self-reply vs. thread format, when to repost the hook tweet later
6. **3 Alternative Hooks:** Different angles for the opening tweet to A/B test
7. **Hashtag Strategy:** 0-2 relevant hashtags (more than 2 reduces engagement on X)

Great threads teach something valuable AND make people want to follow you for more.`, "Social Media");

add("YouTube Shorts Script Generator",
"Write scripts for YouTube Shorts that hook viewers in the first second and drive subscribers in under 60 seconds.",
`You are a short-form video strategist. Write YouTube Shorts scripts that get views and subscribers.

Video details:
- Niche: [YOUR CHANNEL NICHE]
- Topic: [SPECIFIC VIDEO TOPIC]
- Style: [TALKING HEAD / VOICEOVER / SCREEN RECORDING / DEMONSTRATION / SKIT]
- Target viewer: [WHO WATCHES YOUR CONTENT?]
- Duration: [15 / 30 / 45 / 60 SECONDS]
- Goal: [VIEWS / SUBSCRIBERS / TRAFFIC TO LONG-FORM / BRAND AWARENESS]

Deliver:
1. **3 Complete Scripts** using different hook styles:
   - Each script includes: Hook (first 1-3 seconds), content (value delivery), CTA (last 3-5 seconds)
   - Word count calibrated to duration (roughly 2 words per second for speaking)
   - Visual/action notes in [brackets] throughout
2. **Hook Options:** 5 opening hooks for this topic:
   - The Question ("Did you know...")
   - The Contradiction ("Everyone thinks X, but actually...")
   - The Promise ("In 30 seconds, you'll know how to...")
   - The Demo ("Watch what happens when...")
   - The Urgency ("Stop scrolling if you...")
3. **Retention Techniques:** Pattern interrupts, visual changes, and pacing notes to keep viewers past the 3-second mark
4. **CTA Scripts:** "Follow for part 2," "Subscribe for more," "Comment your answer" — 5 options
5. **Caption/Title:** 5 options for the video title/caption. Relevant hashtags (3-5)
6. **Thumbnail Text:** If applicable, the overlay text for the first frame
7. **Series Potential:** How to turn this into a recurring format for consistent posting

The first second determines if someone watches. The last second determines if they subscribe.`, "Social Media");

add("Community Management Playbook",
"Build a community management strategy with engagement tactics, moderation guidelines, and growth frameworks.",
`You are a community manager who has built thriving online communities from zero. Build a community playbook.

My community:
- Platform: [DISCORD / SLACK / FACEBOOK GROUP / REDDIT / CIRCLE / SKOOL / OTHER]
- Niche: [WHAT IS THE COMMUNITY ABOUT?]
- Current size: [NUMBER OF MEMBERS, OR "STARTING FROM SCRATCH"]
- Community type: [FREE / PAID / HYBRID]
- Goal: [ENGAGEMENT / SUPPORT / NETWORKING / LEARNING / LEAD GEN / PRODUCT FEEDBACK]
- Team: [SOLO / VOLUNTEER MODS / PAID TEAM]
- Content cadence: [HOW OFTEN DO YOU POST?]

Deliver:
1. **Community Architecture:** Channel/category structure with purpose for each. Role hierarchy. Onboarding flow for new members
2. **Content Calendar:** Weekly recurring events, discussion prompts, themed days. 30 engagement post ideas specific to your niche
3. **Engagement Playbook:** How to spark conversations, handle dead channels, encourage introductions, create traditions, recognize top contributors
4. **Moderation Guidelines:** Rules document, enforcement ladder (warning → timeout → ban), edge case examples, moderator training guide
5. **Growth Strategy:** How to attract new members without diluting quality. Referral mechanics. Cross-promotion tactics
6. **Metrics Framework:** What to track (DAU, MAU, messages per member, retention, sentiment). Healthy benchmarks
7. **Monetization** (if applicable): How to transition from free to paid, or add premium tiers. Value justification for paid communities
8. **Automation:** Bot setup, auto-welcome messages, scheduled posts, moderation tools
9. **Crisis Playbook:** How to handle trolls, drama, PR issues, and member conflicts

A community is not an audience. It's a group of people who belong to each other, not just to you.`, "Social Media");

add("Social Media Crisis Response Plan",
"Create a crisis communication plan for handling PR incidents, negative viral posts, and brand reputation threats on social media.",
`You are a crisis communications specialist. Build a social media crisis response plan for my brand.

My brand:
- Company/Brand: [NAME]
- Industry: [INDUSTRY]
- Social platforms: [LIST ACTIVE PLATFORMS]
- Team size: [SOCIAL/PR TEAM SIZE]
- Past crises: [ANY PREVIOUS INCIDENTS, OR "NONE YET"]
- Risk areas: [PRODUCT SAFETY / CUSTOMER SERVICE / EMPLOYEE BEHAVIOR / POLITICAL / DATA BREACH / OTHER]

Deliver:
1. **Crisis Classification:** 3-tier system (Level 1: minor complaint, Level 2: viral negative post, Level 3: full brand crisis) with criteria for each
2. **Response Protocols by Level:**
   - Who gets notified (escalation chain with contact info slots)
   - Response timeframe (Level 1: 1 hour, Level 2: 30 min, Level 3: 15 min)
   - Who approves the response
   - Who posts the response
   - Internal communication protocol
3. **Response Templates:** For each crisis type:
   - Initial acknowledgment (buy time without admitting fault)
   - Investigation update
   - Resolution statement
   - Apology (when warranted — with specific language)
   - "Not our fault" response (when accused unfairly)
4. **Channel-Specific Guidelines:** How responses differ on Twitter vs. Instagram vs. TikTok vs. LinkedIn
5. **Monitoring Setup:** Tools and alerts for early detection. Keywords and sentiment triggers
6. **Do's and Don'ts:** What to never do during a crisis (delete posts, argue with individuals, go silent for too long, use humor, blame the customer)
7. **Post-Crisis:** Review process, reputation recovery plan, what to document for next time
8. **Training:** Quarterly drill template for the team

In a crisis, speed and empathy matter more than perfection. Respond first, then refine.`, "Social Media");

add("Reddit Marketing Strategy",
"Develop an authentic Reddit marketing approach that builds authority, drives traffic, and generates leads without getting banned.",
`You are a Reddit marketing specialist who understands that Reddit is anti-marketing — and that's exactly why it works for the brands that get it right.

My business:
- Product/Service: [WHAT DO YOU SELL?]
- Target audience: [WHO ARE YOUR CUSTOMERS?]
- Relevant subreddits: [SUBREDDITS WHERE YOUR AUDIENCE HANGS OUT, OR "HELP ME FIND THEM"]
- Goal: [BRAND AWARENESS / TRAFFIC / LEADS / FEEDBACK / SEO / COMMUNITY BUILDING]
- Reddit experience: [NEVER USED IT / LURKER / CASUAL / ACTIVE USER]
- Content available: [BLOG POSTS / CASE STUDIES / TOOLS / EXPERTISE / OTHER]

Deliver:
1. **Subreddit Research:** 10-15 relevant subreddits with subscriber count, activity level, rules summary, and self-promotion policies. Ranked by opportunity
2. **Account Building Strategy:** How to build genuine karma and credibility before any promotional activity. Timeline from zero to trusted contributor
3. **Content Strategy:** Types of posts that succeed on Reddit (not what works on other platforms):
   - Value-first posts (tutorials, analyses, AMAs)
   - Discussion starters
   - Resource sharing
   - Genuine help in comment threads
4. **Promotion Rules:** The 90/10 rule (90% value, 10% promotion). How to mention your product without sounding promotional. What gets you banned vs. celebrated
5. **Comment Strategy:** How to add value in existing threads (this often drives more traffic than posts). How to position expertise naturally
6. **AMA Playbook:** How to run a successful AMA including preparation, promotion, and follow-up
7. **Content Repurposing:** How to turn Reddit engagement into blog content, social proof, and product feedback
8. **Measurement:** How to track Reddit-driven traffic and conversions. Attribution challenges and solutions
9. **Common Mistakes:** 10 things that get brands destroyed on Reddit and how to avoid each one

Reddit can send you thousands of your most qualified leads. Or it can destroy your brand reputation in an afternoon. The difference is authenticity.`, "Social Media");

console.log('Total prompts: ' + prompts.length);
module.exports = prompts;
