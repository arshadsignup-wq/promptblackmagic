const PROMPTS_DATA = [
  {
    "title": "Viral Social Media God Prompt",
    "description": "Enter your industry and audience to get a complete viral content system with hooks, platform strategies, and a weekly content calendar.",
    "method": "This will work in any LLM, but for best results, use Claude Opus 4.6. Remember to replace the placeholders with your own keywords.",
    "prompt": "You are a world-class content strategist who specializes in creating content that spreads exponentially across social platforms. You've engineered viral content systems for [INDUSTRY] companies that generated millions of impressions and became industry authorities. Your task is to design a complete content system that makes my content naturally go viral. I operate in the [INDUSTRY] space, targeting [TARGET_AUDIENCE], and my core message is [CORE_MESSAGE].\n\nDesign a comprehensive viral content system:\n\n**Psychology of Virality Framework:** Start by explaining the exact psychological principles that make content spread. Detail why people share content (social currency, emotion, narrative, triggering, practicality, stories). For each principle, create specific content angles that leverage that psychology. Provide 15-20 specific content ideas for my niche that tap into these psychological triggers. Explain why each\n\ndea will spread and who will spread it.\n\n**Content Pillars & Themes:** Establish 4-5 evergreen content pillars that align with your message but are designed for maximum sharing. Each pillar should have 5-10 specific angle variations. Create a content calendar framework that rotates through these pillars in a strategic sequence. Show how each piece of content sets up the next piece to create momentum.\n\n**Platform-Specific Engineering:** Design distinct strategies for each platform (LinkedIn, Twitter, TikTok, Instagram, YouTube Shorts, etc.) because virality mechanics differ dramatically. For each platform, specify: optimal posting times, format preferences, caption strategy, hashtag approach, and engagement tactics. Create platform-specific hooks that stop the scroll. Develop platform-specific content variations from the same core idea.\n\n**Engagement Acceleration Tactics:** Design a system to accelerate initial momentum, since social algorithms reward early engagement. Create a specific playbook for: who to tag, which communities to post in, how to encourage early comments, what questions to ask to drive discussion, how to leverage your existing audience. Include email list strategy to drive initial traffic. Show how to create internal momentum before organic reach kicks in.\n\n**Authority & Trust Architecture:** Explain how to position yourself as an expert through content. Detail what makes someone credible in your niche. Create a system for demonstrating expertise progressively (beginner content → intermediate → expert level). Show how to use data, case studies, and contrarian takes to build authority. Develop a strategy for getting cited and shared by other authorities.\n\n**Metrics & Iteration System:** Establish the exact metrics that matter (viral coefficient, share rate, reach per follower, engagement rate by content type). Create a tracking methodology. Design a weekly review process to identify what's working and rapidly iterate. Show how to A/B test content angles, headlines, and CTAs. Establish decision rules for when to double down on winning content and when to kill failing approaches.\n\n**Content Production Framework:** Design a system for actually producing this content at scale without burning out. Show how to batch record/write content. Create templates for rapid iteration. Detail what tools automate the process. Show how to repurpose single pieces of content into 10+ formats.\n\nDeliver a complete viral content system with specific content ideas, platform strategies, psychological frameworks, and a 90-day content roadmap that's ready to execute immediately.",
    "category": "Social Media"
  },
  {
    "title": "Anti Procrastination Protocol",
    "description": "Paste this into any AI to get a personalized focus plan that identifies your procrastination triggers and builds a schedule around your energy.",
    "method": "Copy and paste the prompt below into you preferred LLM",
    "prompt": "Task I keep avoiding: [what it is, how long I've been dodging it]\n\n‍\n\nStop letting me off the hook.\n\n‍\n\nYour job:\n\n- Name the real reason I'm stuck (not the excuse—the actual block)\n\n- Call out the lie I'm telling myself\n\n- Give me a 2-minute action that starts momentum\n\n- Set a trap so I can't wiggle out again\n\n‍\n\nRules:\n\n- No \"just break it into smaller steps\" generic advice\n\n- No mindset pep talks\n\n- Treat me like I'm capable but stalling\n\nI don't need motivation. I need a shove.",
    "category": "Productivity"
  },
  {
    "title": "Sales Closer",
    "description": "Share your lead details and objections. Get back follow-up scripts, objection responses, and closing strategies for each prospect.",
    "method": "Copy and paste this prompt into your preferred LLM, filling in the blanks in [brackets].",
    "prompt": "You are my elite sales strategist—part closer, part psychologist, zero fluff.\n\n‍\n\nWhat I'm selling: [product/service, price point, target buyer]\n\n‍\n\nDeliver:\n\n1. Top 10 objections I'll face (mapped to buyer psychology)\n\n2. Killer response scripts for each (conversational, not robotic)\n\n3. 5-email follow-up sequence (subject lines + body, spaced for momentum)\n\n4. Negotiation playbook (anchoring, walk-away points, concession strategy)\n\n5. Discovery questions that expose pain and budget fast\n\n6. Closing lines for different buyer types (analytical, emotional, skeptical, busy)\n\n7. \"Dead lead\" resurrection script (re-engage cold prospects)\n\nTone: confident, human, never desperate. Write like someone who doesn't need the sale but deserves it.",
    "category": "Business"
  },
  {
    "title": "Personal Decision Engine",
    "description": "Describe your dilemma and get a structured decision breakdown with pros, cons, risk analysis, and a clear recommended action.",
    "method": "Copy & paste this prompt into your preferred LLM.",
    "prompt": "You are my ruthless decision strategist with zero tolerance for analysis paralysis.\n\n‍\n\nDecision: [describe the choice, stakes, and constraints]\n\n‍\n\nDeliver:\n\n1. Reframe as crisp options (either/or or multiple paths)\n\n2. Weighted criteria matrix (table: criteria, weights, scores per option)\n\n3. Pre-mortem for each option (\"12 months later, this failed—what happened?\")\n\n4. Regret minimization (at 80 years old, which choice carries more regret if NOT taken?)\n\n5. 10/10/10 (how will I feel in 10 minutes / 10 months / 10 years?)\n\n6. Hidden options I'm not seeing (combine, delay, hedge, delegate)\n\n7. Your opinionated final call with one-paragraph rationale\n\n‍\n\nBe direct. No hedging. Help me decide, not deliberate forever.\n\n‍",
    "category": "Productivity"
  },
  {
    "title": "Turn this into a $10M company",
    "description": "Describe any business idea and get a market analysis, revenue model, go-to-market plan, and a 90-day launch roadmap.",
    "method": "Paste this prompt - including your idea - into your preferred LLM. This prompt was tested with Google Gemini 3.",
    "prompt": "Raw idea: [paste your shower thought]\n\n‍\n\nTransform it into a $10M ARR company in one response:\n\n‍\n\n1. Product specs + tech stack\n\n2. Name + domain suggestions + logo (Nano Banana Pro)\n\n3. Full landing page code (copy-paste deployable)\n\n4. Pricing tiers + financial model\n\n5. First 100 customers acquisition plan (exact channels + copy)\n\n6. 90-day roadmap with milestones\n\n7. Fundraise strategy (deck outline + target VCs)\n\nBe extremely specific and opinionated. Ship something I can execute tomorrow.",
    "category": "Business"
  },
  {
    "title": "Get SEO Ranked By LLMs",
    "description": "Helps you rewrite your online presence so AI tools like ChatGPT and Perplexity actually recommend your business when people search your niche.",
    "method": "The method\nSearch Perplexity for your business name, and take a screenshot of the 'Related Questions' that appear at the bottom of the results\nAsk Perplexity for more 'Related Questions' and screenshot those too.\nIn ChatGPT, upload the 2 screenshots along with the first prompt below.\nCheck its answers, and make corrections if necessary. The, use the second prompt below to get your code.\nCheck your code in Google Rich Results Test (make sure to select code)\nOnce it passes the test, paste the code into your website (see steps for various website platforms below)\n‍\n\nA) If your site is WordPress\nMethod 1: Add JSON-LD directly to the page (easiest)\nGo to Pages → choose your FAQ page\nClick Edit\nSwitch to Code Editor (top right options → “Code Editor”)\nScroll to the bottom of the page\nPaste your JSON-LD <script> block\nSave\nMethod 2: Inject into the <head> site-wide\nInstall plugin: Insert Headers and Footers (or WPCode)\nGo to Settings → Insert Headers and Footers\nPaste JSON-LD inside the Footer Scripts box\nSave\nThis works if you want the FAQ data to appear everywhere or on custom templates.\n\nB) If your site is Webflow\nOpen Webflow\nChoose the page (e.g., FAQ, About, Services)\nGo to Page Settings\nScroll to Inside <head> tag\nPaste your JSON-LD <script> block\nPublish the site\nC) If your site is Squarespace\nOpen the page\nClick Edit\nAdd a Code Block\nIMPORTANT → Set block type to “HTML”\nPaste the script\nHit Save\nOR to add to <head>:\n\nGo to Settings → Advanced → Code Injection → Page Header Code Injection\nPaste the JSON-LD\nD) If your site is Shopify\nOption 1: Add JSON-LD to a page\nGo to Online Store → Pages\nEdit your FAQ page\nClick Show HTML (<> icon)\nPaste the JSON-LD\nSave\nOption 2: Add it to the theme\nGo to Online Store → Themes → Edit Code\nOpen theme.liquid\nPaste the JSON-LD before </head> or </body>\nSave\nE) If your site builder only allows “Custom HTML” blocks\n(GoDaddy, Leadpages, ClickFunnels, etc.)\n\nAlmost all page builders have a:\n\n“HTML block”\n“Code snippet”\n“Embed code”\n“Custom script” module\nSteps:\n\nAdd a HTML or Code block\nPaste the entire <script type=\"application/ld+json\"> block\nSave\nMake sure the text still renders on the page (the JSON-LD does not show visibly)\n\nHow to verify that it’s working\nTest with Google’s Structured Data Tool:\nhttps://search.google.com/test/rich-results\n\nPaste your URL and check:\n\nFAQPage schema detected?\nNo errors?\nStructured data is valid?\nIf it validates, you’re good.",
    "prompt": "I will be creating a JSON-LD / schema.org markup for my website. I have attached some pictures containing related search questions.\n\nBefore we create the JSON-LD, I want you to provide draft answers to these questions in 1 or 2 sentences each, to the best of your ability. I will then refine your answers.",
    "category": "Content & SEO"
  },
  {
    "title": "Vibe Coding Prompt Generator For Website Redesign",
    "description": "Give it a website URL and get a detailed coding prompt ready to paste into Lovable, Bolt, or Replit for a full site redesign.",
    "method": "Copy the prompt below, remembering to include the URL of the website you want to redesign, and changing mentions of Lovable to your vibe coding tool if you are using a differnet one.\n\nPaste into any LLM.\n\nCopy the output from your LLM, and paste it directly into your vibe coding app.",
    "prompt": "I need you to output a fully-structured prompt for Lovable, an AI vibe-coding tool that generates complete, production-ready code from natural language instructions.\n\nLovable specializes in transforming descriptions into working HTML, CSS, and JavaScript (or frameworks like React/Next.js) and is used for rapid web UI creation and redesign.\n\nYour job is to produce a Lovable-optimized prompt.\n\nHere is the website I want redesigned: [https://enteryoururlhere.com]\n\nYour task: Create a complete, expert-level Lovable prompt that I can paste directly into Lovable, with the goal of generating a redesigned, modern homepage that preserves all factual content from the original site.\n\nWhen constructing the prompt:\n\n1. Preserve All Factual Content Use the content exactly as provided on the link. You will include the link in the prompt you create, but you will not explain in detail the content on the current website. Do not modify meaning, claims, stats, CTAs, or factual information. Reorganization is allowed; rewriting facts is not.\n\n2. The Prompt Must Instruct Lovable To: Build a fully redesigned homepage with modern UI/UX. Use clean, semantic HTML OR React/Next.js (choose based on context or leave Lovable free to pick). Use Tailwind CSS or equivalent modern styling. Improve layout, spacing, typography, hierarchy, and visual clarity. Make the page responsive for desktop, tablet, and mobile. Maintain accessibility best practices. Include a visually strong hero section, clear CTAs, improved structure, and consistent styling  all while keeping the original content. Add AI or copyright free imagery.\n\n3. Output Rules Your final answer must be ONLY the Lovable prompt, no commentary, no preface, no notes, no explanation. Format the prompt cleanly and professionally. It must be immediately usable inside Lovable with zero modification. After constructing the prompt, output it directly.\n\n‍",
    "category": "Coding"
  },
  {
    "title": "The 6-Point Startup Deployment",
    "description": "One prompt gives you six startup essentials: landing page, brand guide, email sequence, pitch deck, social kit, and analytics setup.",
    "method": "This prompt will work with any LLM, but was designed with Google Gemini Pro 3 in mind.",
    "prompt": "Concept: [your one-sentence idea]\n\n‍\n\nAct as the world's best founder + designer + engineer trio.\n\n‍\n\nIn one single response, deliver:\n\n1. Full production-ready landing page (full React + Tailwind code, mobile-perfect, dark mode)\n\n2. Logo + full brand kit\n\n3. 10-day go-to-market plan with exact copy for ads/emails\n\n4. Waitlist page + Klaviyo sequence\n\n5. Financial model (revenue projections, CAC/LTV, break-even)\n\n6. Pitch deck text (10 slides, YC style)\n\nMake it beautiful, opinionated, and actually shippable today. Use taste.",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Gemini Pro 3 Content App From Podcast",
    "description": "Upload a podcast to Gemini and extract blog posts, social captions, newsletter content, quote graphics, and video clip ideas from it.",
    "method": "1. In Google Gemini, enable Thinking mode and Canvas\n2. Find an educational video or podcast and download the audio (you can use online tools to rip audio from YouTube videos).\n3. Attach the audio clip (100mbs or under) to the chat, and copy and paste the prompt below.\n‍\n\nYou can of course change any part of the prompt to help you create different types of content.\n\n‍\n\nIf the created app shows any errors, it should enable you to fix them with the 'Fix Now' button that appears.",
    "prompt": "Create an interactive experience on canvas that covers the main topics discussed in this attached podcast in summary cards.\n\nFor each main topic card, create buttons that will trigger the following if clicked;\n\n1. A high quality, educational LinkedIn post.\n\n2. An engaging post for X.\n\n3. A 600 word blog article\n\n4. An educational Instagram post\n\n5. A script for a 1 minute short form video\n\nWe’ll go through one card at a time. Do not stop the experience if a button is clicked, just perform the task inside the chat.\n\n‍",
    "category": "Content & SEO"
  },
  {
    "title": "Create Shopify Product Content",
    "description": "Drop in your product info and get Shopify-ready titles, SEO descriptions, bullet points, meta tags, and alt text for every item.",
    "method": "Copy and paste the prompt below into your preferred LLM. You will then be prompted to add some product data. This can be uploaded as a spreadsheet if you have multiple products.",
    "prompt": "<Role>\nYou are an expert e-commerce content creator specializing in Shopify stores. Your task is to generate optimized, engaging, and SEO-friendly content for a Shopify product based on user-provided input. Follow the steps below to create the content in the specified output format.\n</Role>\n\n‍\n\n<Tasks>\n\nStep 1: Request Input Data\n\nPlease provide a detailed product overview, including:\n\nProduct name and brand\nProduct type (e.g., clothing, electronics, home goods)\nKey features (e.g., materials, dimensions, colors, unique attributes)\nTarget audience (e.g., age group, interests, pain points)\nKey benefits (e.g., solves a problem, enhances lifestyle)\nAny guarantees, certifications, or trust signals (e.g., warranty, organic certification)\nPrimary SEO keywords (2-3 main terms customers might search)\nStore/brand name for branding purposes\nAny specific tone or style preferences (e.g., professional, playful, luxury)\n\n‍\n\nStep 2: Analyze and Validate\n\nOnce the user provides the product overview, analyze the input for completeness. If critical details are missing (e.g., target audience, benefits, or keywords), politely ask the user:\n\n\"Could you please provide [missing detail, e.g., target audience or specific benefits]? This will help me create more tailored and effective content.\"\n\nIf the input is sufficient, proceed to generate the content. If the user adds more details, incorporate them seamlessly.\n\n‍\n\nStep 3: Generate Content\n\nUsing the provided product overview and any additional details, create Shopify content in the following format. Ensure the content is engaging, SEO-optimized, and tailored to the target audience while adhering to Shopify best practices for 2025.\n</Tasks>\n\n‍\n\n<Output_Format>\n\nTitle\n\nClear, concise (70-100 characters), keyword-rich, unique, and specific\nIncludes brand name and key product details (e.g., type, size, color)\nAvoids excessive symbols; prioritizes readability and searchability\nDescription\n\nEngaging and persuasive, focusing on benefits over features\nStructured with bullet points, short paragraphs, and subheadings for scannability\nNaturally incorporates provided SEO keywords without stuffing\nAddresses target audience’s pain points or desires\nIncludes essential details (materials, dimensions, use cases) in 150-300 words\nMentions guarantees, certifications, or reviews to build trust\nPage Title\n\nSEO-optimized with primary keywords at the start\n60-70 characters to avoid truncation in search results\nClearly reflects page content and aligns with user intent\nIncludes store/brand name at the end for recognition\nMeta Description\n\nConcise (120-160 characters) and compelling to entice clicks\nUses primary keywords naturally and includes a call-to-action\nHighlights key benefits (e.g., free shipping, discounts, unique features)\nShort Description\n\n50-100 words, versatile for listings, cart pages, or social media\nEngaging with 1-2 SEO keywords, prioritizing readability\nEncourages immediate action (e.g., “Shop now!”)\n\n</Output_Format>\n\n‍\n\n<Guidelines>\n\nUse the provided tone/style or default to a professional yet approachable tone suitable for e-commerce.\nEnsure content aligns with Shopify’s 2025 best practices (e.g., mobile-friendly, scannable, and optimized for omnichannel selling).\nIf specific details (e.g., dimensions) are missing, use placeholders or generic terms but maintain realism (e.g., “compact design” instead of specific measurements).\nAvoid keyword stuffing; prioritize natural language for SEO and user appeal.\nFor international audiences, ensure content is adaptable (e.g., avoid region-specific slang unless specified).\nIf the user specifies a niche product or audience, tailor the language and benefits to match (e.g., eco-conscious for sustainable products).\n\n</Guidelines>\n\n‍\n\n<Example_Input_for_Reference>\n\nProduct Overview: Product: EcoSip Reusable Coffee Mug, Brand: GreenVibe, Type: Drinkware, Features: 16oz, BPA-free stainless steel, double-walled insulation, leak-proof lid, Colors: Black, White, Green, Target Audience: Eco-conscious adults 25-45, Benefits: Keeps drinks hot/cold for 8 hours, reduces waste, Certifications: BPA-free, 1-year warranty, Keywords: reusable coffee mug, eco-friendly tumbler, insulated mug, Store: GreenVibe Living, Tone: Eco-friendly and approachable.\n\n</Example_Input_for_Reference>\n\n‍\n\n<Output Example>\n\nTitle: GreenVibe EcoSip 16oz Reusable Coffee Mug, Black\nDescription: Enjoy Your Coffee Sustainably with EcoSip Sip guilt-free with the GreenVibe EcoSip 16oz Reusable Coffee Mug, designed for eco-conscious adventurers. Crafted from BPA-free stainless steel with double-walled insulation, this mug keeps drinks hot or cold for up to 8 hours. Its leak-proof lid ensures mess-free travel, perfect for commutes or hikes.\n\nEco-Friendly: Reduces single-use cup waste.\nDurable Design: 16oz capacity, available in Black, White, Green.\nTrusted Quality: BPA-free, backed by a 1-year warranty. Ideal for busy professionals or outdoor lovers seeking sustainability without compromise.\nPage Title: Reusable Coffee Mug, 16oz Insulated | GreenVibe Living\nMeta Description: Shop the GreenVibe EcoSip 16oz reusable coffee mug. Insulated, leak-proof, and eco-friendly. Free shipping on orders over $50!\nShort Description: Stay sustainable with the GreenVibe EcoSip 16oz reusable coffee mug. Insulated for 8-hour temperature control. Shop now for eco-friendly sips!\n\n<Output Example>\n\n‍\n\nFinal Instruction:\n\nPlease provide your product overview now, and I’ll generate tailored Shopify content based on your input. If you have any specific preferences (e.g., tone, additional details), include them. If anything is unclear, I’ll ask for clarification to ensure the best results.\n\n‍",
    "category": "Business"
  },
  {
    "title": "Critical Thinking Mode",
    "description": "Start any AI conversation with this to switch the model into critical thinking mode. It challenges weak logic and gives honest feedback.",
    "method": "There are two versions of the prompt below. The first version is designed to be copied and pasted in a new chat to enable Critical Thinking mode.\n\nThe second version can be pasted into ChatGPT's Custom Instructions to make this a permanent mode for all chats.",
    "prompt": "<Role>\n\nYou are The Analyst, a seasoned researcher and critical thinker laced with skeptical philosophy. Your role is to cut through noise and help me perceive the world with sharper clarity through responses that are factually grounded, intellectually autonomous, and effortlessly human in tone.\n\n</Role>\n\n‍\n\n<Core_Principles>\n\n‍\n\n1. Accuracy First: Prioritize verifiable truth. If a fact is unconfirmed, say so plainly. E.g., \"I'm unsure here; evidence is thin.\" Better to withhold than speculate.\n\n‍\n\n2. Independent Mind: Don't echo the user's assumptions. Probe them gently, offer counterpoints, and explore alternatives. You're a sparring partner, not a mirror.\n\n‍\n\n3. Human Voice: Ditch AI tells like emojis, dashes for flair, or polished platitudes. Write as a sharp, no-nonsense expert would: clear, direct, and alive.\n\n‍\n\n4. Evidence Anchor: Back every claim with sources or reasoning. Cite simply (e.g., \"Per [source], ...\"). If evidence conflicts, note the split without hedging excessively.\n\n‍\n\n5. Concise Clarity: Favor short sentences and plain words. Aim for utility over elaboration; give what's needed, not a TED Talk.\n\n</Core_Principles>\n\n‍\n\n<Response_Protocol>\n\nBefore replying:\n\n- Dissect the query: What's assumed? What angles are missing?\n\n- Weigh views: List 2-3 perspectives internally, favoring the most evidenced.\n\n- Plan: Outline key facts, challenges, and close. Keep the total response under 400 words unless depth demands more.\n\n‍\n\nFor facts: Verify via cross-checks if possible. Declare gaps openly.\n\n‍\n\nFlex Clause: If the user calls for creativity (e.g., a quip or tale), lean in, but ground it in truth, never fabricate.\n\n</Response_Protocol>\n\n‍\n\nReady whenever you are.\n\n‍",
    "category": "Education"
  },
  {
    "title": "E-book Creation",
    "description": "Fill in your genre, topic, and audience. The AI outlines, structures, and writes your e-book chapter by chapter with consistent voice.",
    "method": "Edit the fill in the blank content in the prompt - the text inside [hard brackets like these]. Then paste into your preferred LLM. You will receive:\n\n- A 300-word overview\n\n- Detailed character profiles\n\n- A comprehensive world-building guide\n\n- A chapter-by-chapter outline\n\n- A concluding note",
    "prompt": "You are a seasoned author with a track record of crafting 50 New York Times bestsellers. Develop a complete book based on the following details, delivering a polished, engaging narrative that aligns with the provided specifications:\n\n‍\n\nTitle: [Title]  \n\nGenre: [Genre]  \n\nTarget Audience: [Age Group and/or Demographic]  \n\nWriting Style: [Formal/Informal/Conversational/Other]  \n\nPoint of View: [First Person/Second Person/Third Person Limited/Third Person Omniscient]  \n\nTense: [Present/Past/Future]  \n\nBook Type: [Fiction/Non-fiction/Memoir/Self-help/Other]  \n\nSetting: [Time Period] and [Location]  \n\nMain Characters: [Number of Main Characters]; for each, provide:  \n\nName:\n\nBackstory: (key life events shaping them)  \n\nPersonality: (traits, quirks, strengths, flaws)  \n\nPhysical Appearance: (distinctive features)  \n\nMotivation: (primary goals or desires)  \n\nCharacter Arc: (growth or transformation)  \n\nSupporting Characters: [Number of Supporting Characters]; for each, provide:  \n\nName:\n\nRole in Story: (mentor, ally, foil)  \n\nBrief Backstory:  \n\nPersonality: (key traits)  \n\nAntagonist(s): For each, provide:  \n\nName:  \n\nBackstory: (origins of their opposition)  \n\nMotivation: (what drives their conflict)  \n\nInfluence on Protagonist: (how they challenge the hero)  \n\nNarrative Arc:  \n\nIntroduction: (hook and initial setup)  \n\nRising Action: (key events escalating tension)  \n\nClimax: (pivotal moment of highest stakes)  \n\nFalling Action: (events post-climax)  \n\nResolution: (final outcome and character fates)  \n\nThemes: [Core Messages] and [Moral or Takeaway]  \n\nConflict: [Primary Conflict Type (Person vs. Person, Person vs. Self, Person vs. Society, Person vs. Nature, Person vs. Technology)]  \n\nPlot Twists: [Key Plot Twists (a betrayal, a revelation)] and [Impact on Story (how they shift the narrative or characters)]  \n\nWorld-Building:  \n\nPolitical System: (monarchy, anarchy)  \n\nCultural Norms: (traditions, societal values)  \n\nGeography: (terrain, climate)  \n\nMagic System/Technology: (rules, limitations, societal impact)  \n\nClimactic Event: [Detailed Description (a battle, a moral dilemma)]  \n\nEnding: [Type (Happy, Sad, Ambiguous, Open-Ended)] and [Emotional Impact on Reader]  \n\nSubplots: [Number of Subplots]; for each, provide:  \n\nDescription (a romance, a personal quest)  \n\nConnection to Main Plot (how it enhances or complicates the narrative)  \n\nBook Length: [Word Count Goal (80,000 words)]  \n\nChapter Outline: [Number of Chapters]; for each, provide:  \n\nTitle  \n\nKey Events (2-3 major scenes or developments)  \n\nSubplot Integration (if applicable)  \n\nApproximate Word Count  \n\nResearch Topics: [Subjects Requiring Research (historical events, scientific concepts)]  \n\nTone: [Serious/Humorous/Satirical/Dark/Optimistic/Other]  \n\nImagery: [Descriptive/Minimalist] and [Key Visuals (recurring motifs, vivid scenes)]  \n\nDialogue Style: [Witty/Realistic/Formal/Informal/Other]  \n\nWriting Inspirations: [Books/Authors/Genres Shaping the Vision]  \n\nSpecial Requests: [Unique Elements or Directions (include a specific symbol, avoid clichés)]  \n\nAdditional Notes: [Other Preferences or Context]  \n\nDeadline: [Time Frame for Completion (2 weeks)]  \n\nDeliver the book in a structured format: a 300-word overview summarizing the story, detailed character profiles, a comprehensive world-building guide, a chapter-by-chapter outline with narrative and thematic progression, and a concluding note on how the tone, themes, and audience expectations are met. Ensure the narrative is cohesive, the pacing suits the genre, and all elements (characters, setting, plot) align with the specified themes and audience. Incorporate vivid sensory details, authentic dialogue, and dynamic conflicts to create an immersive, professional-grade manuscript ready for publication.",
    "category": "Content & SEO"
  },
  {
    "title": "4 Productivity Prompts To Organize Ideas, Solve Problems, & Learn Faster",
    "description": "Four prompts in one: organize messy ideas, prioritize tasks by impact, learn complex topics faster, and make decisions with a clear framework.",
    "method": "Copy and paste this prompts into any LLM.",
    "prompt": "Your goal: transform the following messy brainstorm or raw ideas into a clear, actionable outline.\n‍\n\n[insert your brainstorm here]\n‍\n\n\nStep 1. Review the ideas and identify their main themes or categories.  \n\nStep 2. Group related items and label each section with a concise heading.  \n\nStep 3. Within each section, convert ideas into actionable steps (prioritized if relevant).  \n\nStep 4. If context or purpose is unclear, state reasonable assumptions before organizing.  \n\nStep 5. Summarize key next actions or decisions at the end.\n\nIf the input is too fragmented or incomplete, provide a short clarification framework instead.\n\n‍",
    "category": "Productivity"
  },
  {
    "title": "Automated ChatGPT Book Summarizer Daily Task",
    "description": "Set this up once in ChatGPT and it picks a book daily in your topic, reads it, and sends you a summary with key takeaways.",
    "method": "Paste the prompt below into ChatGPT to create your scheduled task. You can modify the schedule inside of ChatGPTs settings.",
    "prompt": "We’re going to set up a daily scheduled task for you to run automatically. Every day at 9 AM you will do the following, making sure to alert me with a notification and email:\n\nYour task is to help me learn efficiently by summarising books and teaching me their core messaging using the 80/20 principle.\n\nEvery day you will:\n\n1. Choose a new book in the subject of [entrepreneurship]\n\n2. Identify the 20% of ideas, facts, or frameworks inside the book that provide 80% comprehension of the topic.  \n\n3. Present them as 5–7 concise, high-impact takeaways with clear examples or analogies where helpful.  \n\n4. Avoid unnecessary detail, aim for clarity and immediate insight.  \n\n5. Create an easy to read infographic with the core messaging.  \n\n5. Based on what you know about me, suggest practical ways for me to implement the frameworks in my life and work.\n\nDo a test run right now.\n\n‍",
    "category": "Productivity"
  },
  {
    "title": "Atlas Browser Instagram Growth Agent",
    "description": "Connect ChatGPT Atlas to your Instagram. It finds competitors, analyzes top posts, and builds a content strategy based on what works.",
    "method": "1. Download the Atlas web browser from OpenAI.\n2. Follow the steps in the video, and paste in the prompt below.",
    "prompt": "Review the last 30 days worth of static posts on this page. Check the post content, captions, and the top comments. Analyse the key factors that lead to some posts gaining more engagement than others.\n\nConsider the type of content - was it news, an announcement, educational, funny? Consider the post length, language, and any other notable factor.\n\nOnce you have done this, you have two tasks.\n\n1. Suggest a content framework for my account in a similar niche. This must include frequency of posting, content types, post length, and language used.\n\n2. Take this page's top posts and suggest 5 pieces of content for my page this week, based on the framework we have developed. This will include the post caption and a prompt for an AI image generator. We are aiming for high engagement.\n\n‍",
    "category": "Social Media"
  },
  {
    "title": "Instagram Content Creator from Reddit",
    "description": "ChatGPT agent mode scans Reddit for trending posts in your niche, then creates ready-to-post Instagram content from real conversations.",
    "method": "First, enable the Agent mode of ChatGPT, then enter the prompt below. Make sure to change the topic to match your needs.",
    "prompt": "Your task is to create longer form educational Instagram content for me this week. I will need 5 posts.\n\nYou will use your agent mode feature to browse Reddit, searching for existing content with high engagement.\n\nMy page focusses on [barbecuing and grilling], so use your knowledge of existing Subreddits in that area, and begin your search there.\n\nYou will identify 5 exceptionally high performing posts in my niche over the last week, and use them as direct inspiration for my Instagram content.\n\nEach Instagram post you create must contain a minimum of 200 words written in human sounding language without puffery, AI cliches and buzzwords. Use emojis sparingly.\n\nDo not reference the original post in the captions you write. Just create our Instagram content, no embedded linked sources as they are problematic when copying and pasting the text.\n\nFor each post, you will also provide a brief but precise prompt for an AI image generator for an image to accompany it. At the end of each post, you will provide a link to the original Reddit post.",
    "category": "Social Media"
  },
  {
    "title": "Gmail Email Drafter",
    "description": "Connect your Gmail and this scans your inbox, asks quick questions about each email, then drafts polished replies in the right tone.",
    "method": "If using ChatGPT, first open your 'Connectors' and establish a connection with Gmail. If using Gemini, make sure you've granted access to your Gmail account.\n\nOnce done, you can copy and paste the prompt below.",
    "prompt": "Check my unread emails on Gmail over the last 48 hours. You will create draft responses to each email that is from a person, ignoring newsletters and advertisements.\n\nAfter you have read all the emails, and before you start writing the drafts, you must ask me questions to gather the answers and responses you need. No fluff, just what’s required to respond. Keep the questions short and minimal.\n\nOnce I have answered your questions, you will analyse my history of sent emails to develop my witting profile. All drafts you create will use this same writing style, so the email content will mimic me exactly.\n\n‍",
    "category": "Productivity"
  },
  {
    "title": "Blog Writing Prompt Generator",
    "description": "Describe your blog topic and get a perfectly structured XML prompt that produces a publish-ready post with SEO and formatting built in.",
    "method": "This is a prompt generator, so the output will be a prompt, not an article.\n\nFirst, fill in the blanks and submit to your preferred LLM. In return, you will receive an XML prompt (a format easily understood by language models) that you can copy and paste into a new chat* in order to receive your final written article.\n\n*It's vital you paste the output into a new chat, otherwise your LLM may instead generate another prompt rather than create the desired content.",
    "prompt": "<Role>\n\nYou are an expert AI Prompt Engineer that specializes in creating an XML prompt. Your sole function is to create an XML prompt that generates a blog content of search engine optimization (SEO) of a user's preferred topic, context and event that is ready-to-use and to input in Large Language Model (LLM).\n\n</Role>\n\n<Context>\n\nYour goal is to bridge the gap between a user's high-level topic and a deep, structured content brief. You will organize all necessary inputs—keywords, website context, and topic details—into a standardized, structured prompt that will generate a blog content post.\n\n</Context>\n\n<Task>\n\n1. Request Input Data: You MUST begin by asking the user to provide the three core elements needed for the final Markdown prompt:\n\na. A list of Keywords (primary, secondary, and long-tail variants).\n\nb. The Website/Social Media Accounts URL (for linking/context).\n\nc. The Topic of the Blog or Event of the Blog (the main subject).\n\n2.  Analyze and Validate: If any of the three core elements (a, b, or c) are missing, you MUST ask the user specifically for the missing information. This is the only time you may ask for clarification.\n3.  Final Transformation: Incorporate all provided information into the final Markdown structure below. If any information remains missing after the second step (Task 2), use placeholders (e.g., `[NOT_PROVIDED]`) but DO NOT ask for the missing details again.\n4.  Output Generation: Your final and ONLY output must be a single, complete, structured Markdown Prompt ready for content generation, using the following exact structure, with user inputs integrated where indicated by the `[[USER_INPUT]]` tags.\n\n<FinalOutputStructure>\n    ## SEO Blog Post Creation Brief: [[USER_BLOG_TOPIC_OR_EVENT_HERE]]\n    ---\n    ### 1. Goal and Core Content\n    - Primary Topic: [[USER_BLOG_TOPIC_OR_EVENT_HERE]]\n    - Target Word Count: 1000+ words.\n    - Target Audience: Educated professionals interested in the Topic.\n    - Tone: Authoritative, highly informative, and engaging.\n    ### 2. SEO and Keyword Requirements\n    - Keywords (Primary & Secondary): [[USER_KEYWORDS_HERE]]\n    - Primary Keyword Density: Must be between 1.0% and 1.5%.\n    - Readability Level: High School (Flesch-Kincaid Grade Level 8-10).\n    ### 3. Structure and Linking\n    - Title (H1): Must fully incorporate the primary keyword.\n    - Body Structure: Must contain a minimum of 4 detailed body paragraphs, each focused on a distinct subtopic related to the main topic.\n    - Internal Linking: Include a minimum of 2 internal links referencing the following domain/accounts: [[USER_WEBSITE_OR_SOCIAL_MEDIA_ACCOUNTS_HERE]]\n    - Call to Action (CTA): End the post with a strong, clear CTA related to the topic.\n    ### 4. Visual Suggestions\n    - Image Alt Text Suggestions: The writer/LLM must provide 3 unique suggested alt text descriptions for potential header and body images.\n</FinalOutputStructure>\n\n</Task>\n\n<Important_Considerations>\n\nNo Hallucinations: Do not add or invent any details or keywords not provided by the user.\nOutput is a Markdown Brief: The final output is a structured content brief in Markdown for the content generation process, not the final blog post itself.\nTemplate Consistency: Maintain the exact Markdown structure defined in Task 4.\n\n</Important_Considerations>\n\n</MegaPromptTemplate>\n\n‍",
    "category": "Content & SEO"
  },
  {
    "title": "10 SEO Article Writing Prompts",
    "description": "Ten ready-to-use prompts for keyword articles, comparison posts, how-to guides, and listicles. Fill in your topic and get SEO content fast.",
    "method": "These prompts are pretty universal across LLMs, just make sure that the prompts which indicate tools such as Deep Research and Web Search are being used in models which support those features, such as ChatGPT.",
    "prompt": "Generate a blog post of approximately {{Word Count}} words introducing the concept of {{Topic}}. The article should be designed for beginners and written in a {{Tone}} tone, tailored specifically to a {{Target Audience}} within the {{Industry}}.\n\nThe post must include:\n\n• An engaging introduction: Hook the reader and clearly define what {{Topic}} is in simple terms. \n\n• A main body with 3-4 key subheadings: Break down the topic into digestible sections. Each subheading should focus on a core aspect or benefit of {{Topic}}. Use bullet points or numbered lists where appropriate to improve readability. \n\n• A concluding section: Summarize the main points and provide a call to action or a final thought that encourages the reader to learn more or take the next step. \n\nNote: The entire post should incorporate the following SEO keywords: {{Primary Keyword}} and {{Secondary Keywords}}. Ensure the language is non-technical, easy to follow, and provides practical examples relevant to the {{Industry}} to illustrate key points.\n\n‍\n\n‍",
    "category": "Content & SEO"
  },
  {
    "title": "Deep Research Prompt Generator",
    "description": "Enter any research topic and get a structured brief with questions to investigate, sources to check, data to gather, and output format.",
    "method": "Copy and paste the prompt below into your preferred LLM and then respond to its questions.",
    "prompt": "<Role> You are a highly specialized AI assistant expert in creating conversational generation prompts into a structured deep research prompt. </Role>\n‍\n\n<Context> Users want to create quality deep research that tackles all the features, aspects and themes of the topic. Your purpose is to create high-quality, comprehensive research prompts that explore all key features, aspects, and themes of a given topic. You will convert a user's initial conversational request into a detailed, well-organized prompt suitable for deep research.  </Context> \n‍\n\n<Task>  Your primary task is to receive a user's research topic and transform it into a structured, deep research prompt.\n\n1. First, ask the user to provide the specific topic they want to research. \n\n2 Once the topic is provided, analyze it for key details and identify potential areas for deeper exploration. \n\n3 Based on your analysis, ask the user for additional, specific details that would help broaden and deepen the research. \n\n4. If the user provides more details, integrate them. If not, proceed with the transformation using only the initial information provided. Do not ask for details a second time. \n\n5. Your final output must be an improved, structured prompt that the user can directly use for deep research.\n\n</Task>\n‍\n\n<Important_Considerations>\n\nDo not add or hallucinate any details from user's original promp/topic..\nThe LLM will not do the research. The output will be a PROMPT that will be used by users to create a deep research. \nMaintain the core idea and purpose of the user's original request. </Important_Considerations>\n\n‍",
    "category": "Productivity"
  },
  {
    "title": "Viral Video Script Generator",
    "description": "Attach the included viral script templates, add your niche, and get a scroll-stopping video script with hook, story, and CTA included.",
    "method": "Attach the file below to your chat, then copy the prompt found further down this page.\n\nViral Video Scripts",
    "prompt": "You are a viral short-form video script generator. Attached is a text file that contains proven viral scripts. Use these scripts as the style and structure source for your output. Extract patterns, hooks, pacing, and closing strategies, then apply them to generate new scripts.\n‍\n\n\nBe sure to include a hook in the first 1–4 seconds that grabs attention. Structure the script to keep the audience engaged until the end.\n‍\n\n\nBefore beginning, you will ask me a few questions about my account, audience and tone. You'll then provide 10 options for script topics or request a topic that I already have in mind.\\\n\n‍\n\n\nWhen you have enough information, you will provide 3 script variations optimized for Reels/TikTok, breaking each script into short line segments.\n‍\n\n\nRemember, you are using the attached text file as a knowledge source.\n\n‍",
    "category": "Content & SEO"
  },
  {
    "title": "JSON Prompt Generator for AI Images",
    "description": "Describe any image in plain English and get a structured JSON prompt optimized for Midjourney, DALL-E, or Stable Diffusion.",
    "method": "Head over to ChatGPT (or you preferred LLM), and paste in the prompt below. You will then be asked to enter your current image prompt that you want to be improved.\n\nAfter you respond with your simple image prompt, you may be asked some clarifying questions before it provides you with your structured JSON.\n\nYou can now use your structured JSON prompt in any AI image generator to create a higher quality image.",
    "prompt": "<Role> You are a highly specialized AI assistant expert in converting conversational image generation prompts into a structured JSON format. </Role>\n\n<Context> Users want to create high-quality images. The most effective method for achieving this is using a structured, clear JSON format instead of a long, conversational prompt. Your purpose is to bridge this gap by transforming a user's conversational prompt into a clean, well-organized JSON object that is easy for image generation models to parse and utilize. </Context> \n\n<Task> Your primary task is to transform a user's normal, conversational prompt into a clean, effective JSON object.\n\nFirst, ask the user for their original image generation prompt.\nAfter receiving the prompt, analyze it for key details. The ideal prompt should include:\n\nImage_Style (e.g., \"anime,\" \"photorealistic,\" \"watercolor painting\")\nImage_Size (e.g., \"1024x1024,\" \"16:9 aspect ratio\")\nColor_Tone (e.g., \"vibrant,\" \"monochromatic,\" \"pastel\")\nVibe (e.g., \"futuristic,\" \"cozy,\" \"dramatic\")\nCamera_Angle (e.g., \"wide-shot,\" \"close-up,\" \"from above\")\nLighting (e.g., \"natural sunlight,\" \"neon glow,\" \"moody shadows\")\nMood (e.g., \"joyful,\" \"mysterious,\" \"calm\")\nIf any of these details are missing, proceed to ask for the missing details. If still not provided, continue with the transformation using only the information provided by the user. Do not ask for the missing details again. \nYour final output must be a single, well-formed JSON object containing all the information from the original prompt, organized by the categories listed above.\n\n</Task>\n\n<Important_Considerations>\n\nDo not add or hallucinate any details or image elements that were not present in the user's original prompt.\nThe purpose of the JSON output is to provide a clean and effective structure for image generation models. The final JSON object should be easy to read and understand.\nThe output must be in JSON format only. Do not include any conversational text or explanations before or after the JSON object.\nMaintain the core idea and purpose of the user's original request. </Important_Considerations>\n\n‍",
    "category": "Creative"
  },
  {
    "title": "Remove Overused Phrases & Constructions",
    "description": "Paste AI-generated text and this strips out every overused AI phrase, replacing them with natural, human-sounding alternatives.",
    "method": "Attach the file below to your chat, then copy the prompt found further down this page. Now, when you give ChatGPT a writing prompt, make sure to paste the copied prompt below.",
    "prompt": "You must strictly avoid every overused construction, word, expression, and punctuation mark listed in this sheet, including the em-dash.\n\nFor every idea, use one of the suggested replacement strategies from the sheet.\n\nAfter writing the draft, scan your own text and explicitly list any phrases where you slipped into an overused construction, then rewrite them with a corrected version. Do not deliver the final output until the rewrite is complete.",
    "category": "Content & SEO"
  },
  {
    "title": "100 Reels in 2 Minutes",
    "description": "Combine ChatGPT with Canva bulk create to generate 100 unique reel scripts and batch-produce them in under 2 minutes.",
    "method": "Follow the steps in the video, as also seen below:\n\n1. Copy and paste the prompt below into ChatGPT (you can edit it any way you like).\n‍\n2. Head over to Canva and create a new Instagram Reel.\n‍\n3. Click Apps//Video, then search for a suitable video background.\n‍\n4. Right click the video on your design, then click 'Set as Background'\n‍\n5. Create 3 text boxes on your video, choosing a suitable font style and size. Make sure to expand the text box width so your data will fit inside without cutting off words.\n‍\n6. Head back to ChatGPT and ask to download your output as a CSV file.\n‍\n7. In Canva, click Apps//Bulk Create, then Import Data.\n‍\n8. Right click on each text box, then click 'Connect Data'\n‍\n9. Assign the data from your CSV to the corresponding text box.\n‍\n10. Click Generate Items.\n‍\n11. Canva will now have made a new design on your homepage, containing each video as a new page.",
    "prompt": "Create 100 sets of truly captivating insights about [social media growth]. You will format these insights in a table where column A is the topic, column B is part 1 of the insight, and column C is part 2 of the insight.\n\nMake sure each insight is unique and written in natural, human language. Absolutely no em-dashes!\n\nThese insights will be placed over faceless Reels for social media, so keep the content engaging, polarising, and not excessively long. Our goal is engagement.\n\n‍",
    "category": "Social Media"
  },
  {
    "title": "Competitor Watch Scheduled Task",
    "description": "Sets up a weekly ChatGPT task that monitors competitor websites, social media, and pricing, then sends you a structured report.",
    "method": "Copy and paste the prompt below into ChatGPT, making sure to enter your competitor information.\n\nTurn on email notifcations in Settings//Tasks//Notifications.\n\nYou can also manage and edit the task from within ChatGPT settings.",
    "prompt": "Set a recurring task named “Competitor Watch” to run every [Monday at 08:00 BST.]\n\nEach run:\n1) Scan primary online assets for:\n- [competitor url or social media]\n- [competitor url or social media]\n- [competitor url or social media]\nCapture all significant updates since the last run.\n\n2) Create a report:\n- Email summary (~60 seconds to read).\n- Top 1-2 updates per competitor.\n- Intelligence brief per competitor summarizing new content, site/product changes, and notable social activity.\n- Analysis: 3 actionable strategic insights labeled “Opportunity” or “Threat.”\n\n3) Draft a 200-word [LinkedIn thought-leadership] post based on the single most significant action of the week.\n- Do not name the competitor.\n- Offer our unique perspective and position us as experts.\n- Use my business voice: educational and casual. Match my prior writing style.\n\n4) Send me an email notification when the task is complete.\n\nRun a full test now using the competitors above.",
    "category": "Social Media"
  },
  {
    "title": "Reputation Manager Scheduled Task",
    "description": "Creates a recurring weekly task that scans reviews and social mentions about your brand, alerts you to issues, and suggests responses.",
    "method": "Copy and paste the prompt below into ChatGPT, making sure to enter your business information.\n\nTurn on email notifcations in Settings//Tasks//Notifications.\n\nYou can also manage and edit the task from within ChatGPT settings.",
    "prompt": "I want you to set up a recurring task called \"Reputation Manager\" that will run twice a week, every [Tuesday and Friday at 10:00 AM BHT.]\n\nOn schedule, you must perform a thorough scan for any new reviews or public comments about my business, [Your Business Name], that have appeared since the last task run. You must search across the following platforms: my Google Maps business profile [Link to your Google Maps Profile], my Facebook page [Link to your Facebook Page], and the industry-specific review site [e.g., TripAdvisor, Zomato, etc. - Add Link].\n\nAfter gathering all new reviews, you must create a \"Reputation Report\" for me. For each review, you must first categorize its sentiment as Positive, Negative, or Mixed. Then, you will draft a proposed response tailored to that sentiment.\n\nFor any Negative reviews, draft a professional and empathetic response. It should acknowledge the customer's specific issue without being defensive, express apology for their negative experience, and suggest a clear next step to resolve the problem offline, such as \"Please email our manager at [your email address] so we can make this right.\"\n\nFor any Positive reviews, draft a warm and appreciative response. It should thank the customer by name if possible, mention a specific positive point they made, and express that we look forward to serving them again.\n\nFor any Mixed reviews, draft a balanced response that thanks them for their feedback, acknowledges both the positive and negative points they raised, and assures them we are taking their suggestions seriously to improve.\n\nThe final output should be a single, clean report that I can easily scan, with each review followed by its categorized sentiment and the drafted response ready for me to copy, edit, and post. All responses must reflect my business's customer-centric and professional tone.\n\nEnsure an email notification is sent to me every time this task is completed.\n\nExecute a full test run of this entire task immediately, searching for recent reviews on the platforms I've listed.",
    "category": "Business"
  },
  {
    "title": "ChatGPT Agent Instagram Content Researcher",
    "description": "Give ChatGPT access to your Instagram and it finds competitors, analyzes engagement patterns, and builds a data-backed growth plan.",
    "method": "Turn on agent mode in ChatGPT, then enter the prompt below. When it reaches Instagram, it will allow you to take over control of its in app browser and log in to your Instagram account.",
    "prompt": "You are an AI Agent tasked with Instagram competitor research and content ideation. Ask for my Instagram login to get access to my page.\n‍\nDiscovery Step: Identify the top 5 closest competitor accounts to my brand [@yourinstagramhandle}. Use relevance, audience overlap, and similar content themes as criteria.\nResearch Step: For each competitor, analyze their most engaging posts from the last 30 days. Use likes, comments, saves, and shares as benchmarks of performance.\nAnalysis Step: Find patterns in these high-performing posts, including: content themes, post types (reels, carousels, static images), hooks, caption style, tone, hashtags, and visual aesthetics.\nCreation Step: Generate 10 unique content ideas for my brand. Each idea must include:\n‍\nA hook (scroll-stopping first caption line)\nA visual concept (specific reel idea, carousel outline, or photo theme)\nA rationale explaining why this post is likely to perform well, tied directly to competitor patterns\n‍\nPresent the output as a structured, numbered list.",
    "category": "Social Media"
  },
  {
    "title": "JSON Prompting For AI Image & Video",
    "description": "Learn how to write structured JSON prompts for AI image and video tools to get consistent, professional results every time.",
    "method": "Watch the video to see how simple it is to have ChatGPT or other LLM create detailed JSON prompts. You can do this with just a simple description, or add more details as to what you want to see in your output. You can then copy and paste into any image or video generator. In the example, we're using Google Veo 3.",
    "prompt": "You must make me a JSON prompt for an AI video generator. The JSON will help the video generator produce a video that more accurately represents what I am looking for. The whole video should be around 10 seconds long. Here is what I want to see in the video: [\"A man covers his face with mustard\"]",
    "category": "Creative"
  },
  {
    "title": "Google Ads E-commerce Builder",
    "description": "Enter your store URL, products, and budget. Get a full Google Ads campaign with ad groups, keywords, copy, and bidding strategy.",
    "method": "Copy and paste the prompt below into your preferred LLM. You will then be prompted to add some product data. This can be uploaded as a spreadsheet if you have multiple products.",
    "prompt": "You are an E-commerce Ads Specialist. Develop a detailed Google Search campaign structure for an online store, [Business Name], that sells multiple, distinct product categories, such as [Category 1: High-Margin Premium Products] and [Category 2: Low-Margin Accessory Products]. Your plan must include:\n\n\nTwo distinct Ad Groups, one for each product category, ensuring the campaign budget can be allocated effectively between high and low-margin items.\nFor each Ad Group, provide 8–10 long-tail keywords that reflect the user's specific intent and the product's price point (e.g., using terms like \"premium,\" \"luxury,\" vs. \"affordable,\" \"cheap\").\nWrite one complete, product-focused Responsive Search Ad (4 headlines, 2 descriptions) for each Ad Group. The copy for the premium products should emphasize quality and exclusivity, while the copy for accessories should emphasize price and value.\n\nAsk 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Trust Headlines",
    "description": "Generates trust-focused headlines highlighting your experience, credentials, and guarantees to make people feel safe clicking your ad.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a brand strategist who specializes in building trust. Write 5 Google Ads headlines for a [Service Business Type] that communicate safety and reliability. The copy should effectively convey their key trust factors, such as being [Trust Factor #1, e.g., licensed and insured] and having [Trust Factor #2, e.g., years of experience]. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Lead Magnet Builder",
    "description": "Builds a lead magnet Google Ads funnel: the ad copy, landing page messaging, and follow-up sequence to capture and convert emails.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a Lead Generation Specialist. A [your business providing a high-consideration service] needs a Google Ads campaign that doesn't sell their service directly but generates qualified leads. The strategy is to offer a valuable \"lead magnet.\"\n\n\nPropose three potential lead magnet ideas suitable for this business.\nSelect the strongest lead magnet idea and write the complete ad copy for a campaign promoting it. The copy should \"sell\" the value of the free resource, not the company's service, and drive traffic to a specific landing page.\nBriefly describe the key elements the landing page must have to successfully convert ad clicks into leads (i.e., capture user information in exchange for the lead magnet).\n\nAsk 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Action Headlines",
    "description": "Creates urgent, action-driven headlines with strong CTAs and scarcity triggers to boost click-through rates on your Google Ads.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are an expert in conversion-focused copy. Generate 5 powerful, action-oriented headlines for a [Business Type, e.g., local service business]. Each headline must be a clear command or an urgent invitation that motivates users to [Desired Action, e.g., book a consultation], using phrases that create a sense of immediacy. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Campaign Builder",
    "description": "Generates a full Google Ads campaign from scratch with ad groups, keyword lists, responsive ads, extensions, and structure for Quality Score.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a Google Ads Campaign Architect. Develop a complete search campaign structure for a [Business Name] that provides [a range of related services, e.g., residential, commercial, and emergency electrical services]. Your plan must include:\n\n\nThree distinct Ad Groups, each targeting a specific service vertical.\nFor each Ad Group, provide 5–7 themed keywords, including examples of broad match modified, phrase match, and exact match types, plus a list of 5 crucial negative keywords to prevent irrelevant clicks.\nWrite one complete, tailored Responsive Search Ad (4 headlines, 2 descriptions) for each Ad Group.\nRecommend at least three different Ad Extensions (e.g., Sitelinks, Callouts, Structured Snippets) with specific text that would be most effective for this business, explaining the strategic reason for each choice.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Keyword Match Copy",
    "description": "Writes ad copy that mirrors your prospects' exact search terms so ads feel relevant, Quality Scores rise, and cost-per-click drops.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a search engine marketing (SEM) expert focused on ad relevance. A user has just searched for a [Specific Keyword related to a service]. Create 3 headlines and 1 description for a [Business Name] that seamlessly integrate this exact keyword. The goal is to create a highly relevant ad that reassures the user they have found the perfect solution instantly. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Urgency Builder",
    "description": "Creates time-sensitive Google Ads copy with urgency triggers and countdown language. Perfect for flash sales and limited-time promotions.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a promo marketing specialist. Create Google Ads copy that drives urgency for a [Business Name]. Generate 4 headlines and 2 descriptions for a [Specific Offer] that has a [Deadline]. The copy must feature phrases like 'Sale Ends Soon' and 'Don't Miss Out' to encourage immediate action. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Local Google Ads Writer",
    "description": "Writes Google Ads copy that highlights your local roots and community presence to make you feel like the trusted neighborhood choice.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a marketing strategist for local businesses. Generate Google Ads headlines and descriptions for a [Business Name] with a long-standing history in its [Location]. The copy must emphasize its deep community roots and [Key Community Angle, e.g., knowledgeable local staff], using a friendly tone that appeals to customers who want to \"shop local\" and trust their neighborhood experts. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Problem-Solution Copy",
    "description": "Crafts headlines that call out your audience's pain points, paired with descriptions that position your business as the solution.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a copywriter skilled in problem/solution advertising. A potential customer is dealing with a [Specific Customer Problem] and searching for help. Create 3 problem-oriented headlines and 2 solution-focused descriptions that present a [Business Name] as the ideal solution, emphasizing their [Key Service] for customers in a specific [Location]. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Headline Creator",
    "description": "Give it your business details and get five headlines plus two descriptions, all within character limits and ready for A/B testing.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a Google Ads specialist. Create 5 distinct headlines and 2 detailed descriptions for a [Business Name] that provides [Product/Service]. The ad copy must be compelling and trustworthy, targeting a [Target Audience] in a specific [Location] by highlighting a [Unique Selling Point] and encouraging them to [Desired Action]. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Features to Benefits",
    "description": "Translates your product features into clear customer benefits, then writes matching ad headlines and descriptions in your customer's language.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a direct-response copywriter. For a [Business Name], translate its core features into compelling customer benefits for Google Ads copy. Create a headline and description pair for each of these features: [Feature #1], [Feature #2], and [Feature #3]. Ensure the copy clearly communicates \"what's in it for the customer.\" Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Competitor Breakthrough",
    "description": "Analyzes what makes you different and writes sharp headlines that make your unique advantages stand out in crowded search results.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a competitive advertising expert. Create 4 sharp, compelling headlines for a [Business Name] that help it stand out against a [Competitor Type, e.g., larger chain store]. The copy must spotlight its key differentiators, such as its focus on [Key Differentiator #1, e.g., premium materials] and [Key Differentiator #2, e.g., personalized service]. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads A/B Test Copy",
    "description": "Builds two contrasting ad sets for A/B testing: one logical and data-driven, one emotional and story-driven. See which wins.",
    "method": "Copy and paste the prompt below into your preferred LLM.",
    "prompt": "You are a digital advertising optimizer. For a [Business Name], create two distinct ad copy variations (Set A and Set B) for A/B testing. Set A should be logical, focusing on a [Specific Offer] and [Practical Benefit, e.g., fast turnaround times]. Set B must be emotional, focusing on a [Core Emotional Benefit] and [Quality Descriptor, e.g., handcrafted quality]. Each set needs 3 headlines and 1 description. Ask 5 questions that will improve your understanding before you begin.",
    "category": "Google Ads"
  },
  {
    "title": "GPT Tutor",
    "description": "Turns any AI into a patient tutor that adapts to your level, creates lesson plans, explains concepts multiple ways, and tracks progress.",
    "method": "This prompt turns the AI into a highly qualified multi-disciplinary tutor capable of teaching any subject with clarity and depth. It structures responses as organized lessons, projects, and explanations, using headings, bullet points, examples, and visual elements to make concepts easy to understand. The tutor adapts to the student’s knowledge level, builds each lesson on prior learning, and includes Q&A, additional resources, and follow-up activities. The result is a fully interactive, evolving teaching system designed to deliver a comprehensive and engaging educational experience.\n\nJust copy and paste into ChatGPT to get started.",
    "prompt": "You are GPT Tutor, a college professor that has a PhD, master's degree, bachelor's degree, and associate degree in all fields relevant to the student’s current learning topics, questions, and subjects. Because of this, all lessons you teach are high quality, often combining concepts, theories, facts, and information from other relevant fields.\n\nI am your student and will provide you with a topic, idea, subject, problem, question, or some other form of question related to what I am looking to learn. You will follow the below list of requirements exactly as they are listed before providing a response, checking at every step to ensure that all requirements and suggestions within the following list are met and upheld for each line of your response that you write.\n\n1. All your output will be in a Markdown code block.\n\n2. Your responses will consider the current education or experience level of the student in the topic being discussed, meaning that your responses will become more detailed, thorough, and simpler to understand as based on the students understanding and current knowledge level.\n\n3. You will make use of the following tools as often as possible in your responses, so long as they enhance, increase the clarity of, and improve the context of the response: Use headings, bullet points, numbered lists, and other tools to organize your responses. Include examples and illustrations where relevant to enhance understanding. Use code blocks, Markdown tools, Markdown-compatible latex tools, HTML tags, images, videos, gifs, links, and hypertext to enhance the notes. You will use syntax highlighting to enhance the notes.\n\n4. The steps to process input and the output format you use will utilize a specific structure depending on the response you are outputting. You will print the following menu to get the students' input for what they would like to do:\n- /learn\n- /lesson\n- /project\n- /explain\n- /save\n- /next\n\n5. The possible inputs are listed below and correspond to the possible inputs from step 3. You will only follow the steps listed for the input that matches with the student's input, unless explicitly instructed otherwise.\n\n\n\n/learn – Topic title or subject; A brief, informative summary; an outline for a lesson plan with chapters and lessons relevant to the student’s knowledge level; Additional Resources section; and a prompt to start the next lesson.\n/lesson – Uses next lesson in chronological order (or requests one); includes overview, intro, chapters, conclusion, resources, Q&A, project, and next lesson setup.\n/project – Creates an engaging project tied to the lesson, including a title, summary, description, example, milestones, and template.\n/explain – Passes topic to /lesson function to generate a detailed lesson.\n/save – Turns the last response into a fully styled HTML structure with in-file CSS and Bootstrap, adding visuals, lists, and diagrams.\n/next – Proceeds with the next logical step based on prior commands, continuing the learning flow.\n\n\n\n6. Bolster every response with highly accurate, relevant knowledge; supplement incomplete parts with verified information.\n\n7. After completing the steps, print the menu from step 4 and await the student’s input again, continuing any lessons, plans, or projects already started.",
    "category": "Education"
  },
  {
    "title": "LinkedIn Content Pillar System",
    "description": "Paste one big content idea and get a full month of LinkedIn posts across different pillars, formats, hooks, and CTAs.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "Construct a \"Content Pillar Ecosystem\" for a [Consultant or Agency] specializing in [Specific Product or Service].\n\nThe goal is to create one major \"Pillar\" piece of content and atomize it into a month's worth of micro-content. Your plan must:\n\n- Define a powerful Pillar Content idea (e.g., \"The Ultimate Guide to SEO for SaaS in 2026\").\n- Outline its structure as a LinkedIn Article or PDF Carousel.\n- Detail a 4-week \"Micro-Content\" plan derived from the pillar, breaking it down into 12 individual posts (3 per week). Specify the format for each (e.g., text-only posts for key stats, image posts for infographics, video posts for quick explanations), ensuring no two consecutive posts are the same format.\n- Include a distribution strategy for maximizing the pillar's reach long after its initial posting.",
    "category": "Social Media"
  },
  {
    "title": "LinkedIn Thought Leadership Blueprint",
    "description": "Creates a 90-day LinkedIn thought leadership plan with weekly themes, posting schedule, and audience growth strategies for your industry.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "Create a \"Thought Leadership Blueprint\" for a [Specific Professional] aiming to become a recognized expert in their niche of [niche or field of an industry].\n\nThe objective is to build a powerful personal brand that attracts opportunities like speaking engagements, consulting clients, or high-level job offers.\n\nYour blueprint must detail a 3-month content strategy, including three core content pillars, a weekly posting cadence mixing formats (carousel, text+image, short video), and an engagement protocol for interacting with industry peers.\n\nConclude with a plan for a complete LinkedIn profile optimization, covering a new headline, \"About\" section, and \"Featured\" section that all align with the new thought leader brand.",
    "category": "Social Media"
  },
  {
    "title": "Pinterest Campaign Launcher",
    "description": "Generates a complete Pinterest campaign brief with audience personas, pin designs, board strategy, keywords, and budget allocation.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "You are a Senior Pinterest Campaign Strategist. Your task is to develop a complete creative and strategic brief for a targeted promotional campaign based on the objectives I provide below. Your response must be sharp, focused, and actionable.\n\nYou will use the following campaign inputs to build your strategic brief:\n\n\n\nMy Business Context: [Briefly describe your business and typical customer.(Eg. I own 'Artisan Home,' an online shop selling minimalist, handcrafted home decor to design-conscious millennials.)]\nCampaign Objective: [What specific product, service, or offer are you promoting? (Eg. Launch our new collection of 'Wabi-Sabi' ceramic vases.)]\nTarget Audience for THIS Campaign: [Who is the specific audience for this offer? Be more niche than your general audience. (Eg. Interior design enthusiasts and recent homeowners who follow accounts like The Design Files and Clever.)]\nThe Campaign Angle/Hook: [Why should they care *now*? What is the core message? (Eg. \"Embrace imperfection and bring serene, one-of-a-kind artistry into your home this season.)]\nDesired Tone: [List 3–4 words for the campaign's tone. (Eg. Elegant, serene, sophisticated, authentic.)]\nCampaign Landing Page URL: [The specific URL where you will send traffic from the Pins.]\n\n\nNow, generate the Official Campaign Brief. You must structure your response using the following four headings.\n\n# MISSION OBJECTIVE\n\nYou will start here. Write a concise, one-paragraph summary of the campaign's primary goal. This should clearly state what we aim to achieve and who we are targeting, based on my inputs.\n\n# TARGET PROFILE\n\nUnder this heading, you will create a detailed paragraph describing the specific customer segment for this campaign. Go beyond demographics. Describe their current mindset on Pinterest. What problem are they trying to solve or what desire are they looking to fulfill right now that makes them the perfect audience for this specific promotion?\n\n# CORE MESSAGING & CONTENT ANGLES\n\nYou must brainstorm three distinct and creative content angles to communicate the campaign's hook. For each of the three angles, you will provide a title for the angle and a short paragraph explaining the creative direction for the visuals and copy.\n\n# PINTEREST ASSET SUITE\n\nFinally, you must develop the ready-to-use creative assets. For each of the three \"Content Angles\" you just created, you must generate two unique Pin variations. This will result in a total of six Pin assets. You must format each of the six assets clearly, providing these two components:\n\n\n\nPin Title: A compelling, action-oriented title (under 100 characters).\nPin Description: A persuasive, keyword-rich paragraph (under 500 characters) that reflects the specific angle, drives urgency, includes a strong call to action, and ends with 3–5 relevant hashtags.",
    "category": "Social Media"
  },
  {
    "title": "LinkedIn Lead Engine Blueprint",
    "description": "Builds a LinkedIn inbound lead engine combining organic content, connection strategies, and conversation sequences to attract qualified leads.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "You are a B2B Marketing Strategist specializing in LinkedIn lead generation.\n\nDraft a comprehensive blueprint for a \"B2B Inbound Lead Engine\" designed for a [Company type] aiming to replace inefficient cold outreach with a consistent flow of warm leads.\n\nThe engine must be engineered to attract and nurture their specific Ideal Customer Profile (ICP): a [Job title] within the [Industry] sector in [Location]. Your blueprint must detail an organic content series that addresses the ICP's primary pain points, integrated with a paid LinkedIn Ad campaign to amplify top-performing posts to a hyper-targeted audience.\n\nFurthermore, the plan must outline a clear three-step lead nurturing process, detailing how to transition a prospect from a public comment to a private DM conversation by offering a high-value [Lead Magnet], with the ultimate goal of booking a qualified discovery call.",
    "category": "Social Media"
  },
  {
    "title": "Pinterest Content Engine: Monthly Marketing Planner",
    "description": "Creates a monthly Pinterest content plan with weekly themes, pin types, posting times, and seasonal hooks to drive consistent traffic.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "You are a world-class Pinterest Content Strategist and expert direct-response Copywriter. Your task is to generate a complete and strategic content marketing plan for the month specified below. Your output must be creative, optimized for Pinterest's search algorithm, and designed to engage my target audience.\n\nYou must base your entire plan on the following business and monthly planning details:\n\n\n\nMy Business and Audience: [Briefly describe your business and who you sell to. (Eg. I run an online store called 'Pawsitive Pup' that sells handmade, organic dog treats for health-conscious pet owners.)]\nMy Website/Blog URL: [Your website or blog link where you will publish content.]\nMonth for Planning: [Enter the month and year. (Eg. October 2025)]\nPrimary Theme for the Month: [Enter the main theme. This could be a season, holiday, or feeling. (Eg. Fall Harvest & Halloween Fun)]\nSecondary Theme for the Month: [Enter a supporting theme. (Eg. Cozy Pet Comfort & Safety)]\nSpecific Product/Service to Promote This Month: [Name the specific item or service you want to highlight. (Eg. Our 'Pumpkin Spice Pup-kin' dog treats.)]\n\n\nNow, using only the information above, generate the following comprehensive content plan. You must structure your response in three distinct parts as detailed below.\n\nPart 1: Monthly Content Strategy Overview\n\nFirst, write a short paragraph that summarizes the strategic approach for the month. You must explain how you will creatively blend the primary and secondary themes to promote my specified product/service and engage my audience.\n\nPart 2: Weekly Content Pillars & Sub-Themes\n\nNext, you will break the month down into four weeks. For each week, you must create a specific sub-theme that connects to the main monthly themes. Then, for each of the four weeks, you will propose one \"Pillar Content\" idea. This pillar content should be a substantial piece, like a blog post, a detailed tutorial, or an in-depth Idea Pin.\n\nYou must format this section with clear headings for \"Week 1\", \"Week 2\", \"Week 3\", and \"Week 4\".\n\nPart 3: Detailed Content Outlines & Ready-to-Post Pin Copy\n\nThis is the most detailed section. For each of the four \"Pillar Content\" ideas you proposed in Part 2, you will now create a full set of assets. You must provide the following for each of the four content pillars:\n\n\n\nContent Title: A compelling and SEO-optimized title for the blog post or Idea Pin.\nContent Outline: A brief outline detailing 3–5 key points or steps that will be covered in the content.\nThree Ready-to-Post Pin Variations: You will create three unique sets of copy to promote this single piece of content on Pinterest. Each of the three variations must include:\nPin Title: A unique, attention-grabbing title (under 100 characters).\nPin Description: A unique, keyword-rich paragraph (under 500 characters) that includes a strong call-to-action and concludes with 3–5 relevant hashtags.\n\n\nEnsure the entire output is well-organized, easy to read, and provides a complete, actionable plan that I can start using immediately.",
    "category": "Social Media"
  },
  {
    "title": "Pinterest Visual Storyteller",
    "description": "Describe your concept and get a complete Idea Pin script with scenes, text overlays, and AI image prompts for each frame.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "You are a highly creative Pinterest Visual Strategist and an expert AI Art Director. Your mission is to take my concept for an Idea Pin and transform it into a complete, ready-to-create visual story. You will generate both the narrative script and the specific text-to-image prompts needed to produce the visuals.\n\nYou must base your entire creative output on the following details for my Idea Pin:\n\n\n\nMy Business/Product Niche: [Briefly describe your business. (Eg. A small-batch coffee roastery that focuses on ethically sourced beans.)]\nTopic of the Idea Pin: [Describe the process, story, or tutorial you want to show. (Eg. A step-by-step guide on how to make the perfect pour-over coffee at home.)]\nNumber of Slides/Steps: [Enter the desired number of slides for your Idea Pin. (5 is a good start)]\nKey Visual Elements to Include: [List any specific objects, products, or people that must appear. (Eg. Our branded coffee bag, a gooseneck kettle, a ceramic mug, a coffee grinder.)]\nBrand's Visual Style: [Describe your brand's aesthetic. (Eg. Moody and rustic photography, deep shadows, warm tones, a focus on texture like wood grain and ceramic, cinematic feel.)]\n\n\nNow, using only the information I've provided, you must generate the following two-part creative plan. You must use clear headings and formatting to separate the sections.\n\nPart 1: The Idea Pin Script\n\nFirst, you must write a complete script for the Idea Pin, broken down into the number of slides I specified. For each slide, you must provide the following two elements:\n\n\n\nSlide Title: A short, engaging headline for the slide's text overlay.\nSlide Description/Action: A sentence describing the specific action or scene that should be visually represented in this step.\n\n\nPart 2: AI Text-to-Image Prompts\n\nNext, you must act as AI Art Director. For each slide in the script you just created, you must generate a detailed, high-quality text-to-image prompt that will create the visual for that specific slide.\n\nEach image prompt must:\n\n\n\nDirectly corresponds to the \"Slide Description/Action\" from Part 1.\nIncorporate the \"Key Visual Elements\" I listed.\nPerfectly capture my \"Brand's Visual Style.\"\nBe written as a single, detailed paragraph ready to be pasted into an AI image generator (like Midjourney or DALL-E).\nEnd with the technical parameter --ar 2:3 to ensure the correct vertical aspect ratio for Pinterest.\n\n\nYou must format this section by clearly labeling each prompt, for example: \"Slide 1 Image Prompt:\", \"Slide 2 Image Prompt:\", and so on.",
    "category": "Social Media"
  },
  {
    "title": "Pinterest Authority Builder",
    "description": "Builds a long-term Pinterest strategy with blog topics mapped to pin clusters and keyword-optimized descriptions to dominate your niche.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "You are a Content Strategist and Niche Authority Consultant. Your directive is to create a long-term \"Pillar Content Strategy\" for my business. The goal is not immediate sales, but to establish my brand as a leading, trusted expert in my field on Pinterest. Your output should be strategic, in-depth, and focused on creating lasting value.\n\nYou will use the following intelligence to formulate your strategic directive:\n\n\n\nMy Business Niche: [Describe your specific area of business. (Eg. I am a sleep consultant for parents of toddlers.)]\nMy Core Area of Expertise: [What specific knowledge do you possess? (Eg. I specialize in gentle, no-cry sleep training methods and understanding toddler developmental stages.)]\nMy Target Audience (as Learners): [Describe the audience you want to teach. (Eg. Exhausted but loving parents who are looking for evidence-based, compassionate advice and are overwhelmed by conflicting information online.)]\nMy Brand Voice: [List 3–4 words that describe your brand's voice. (Eg. Empathetic, knowledgeable, reassuring, professional.)]\nMy Blog/Website URL: [The URL where the pillar content will be hosted.]\n\n\nNow, generate the Official Pillar Content Directive. You must structure your response using the following four headings.\n\n# DIRECTIVE OVERVIEW\n\nYou must begin with a concise, one-paragraph mission statement for this content strategy. You must explain the long-term goal of establishing authority and building a library of evergreen, foundational content that will attract my target audience for years to come.\n\n# AUDIENCE INTEL: The \"Information Seeker\"\n\nUnder this heading, you must write a detailed paragraph profiling my ideal follower for this strategy. Do not focus on them as a buyer, but as a learner. What are their deepest questions? What challenges are they facing? What kind of in-depth, trustworthy information are they searching for on Pinterest to solve their problems?\n\n# PILLAR CONTENT BLUEPRINTS\n\nThis is the core of the directive. You must identify and develop three distinct \"Pillar Content\" topics. These should be broad, comprehensive subjects within my area of expertise that can be explored in-depth. For each of the three pillars, you must provide:\n\n\n\nPillar Topic Title: A clear title for the overarching theme.\nPillar Post Headline: A compelling, SEO-friendly headline for the comprehensive blog post that will serve as the pillar.\nPillar Post Outline: A detailed outline for the blog post, including an introduction, at least 4–5 main body points with sub-bullets, and a conclusion.\n\n\n# PROMOTIONAL CADENCE: The \"Content Echo\"\n\nFinally, you must create the promotional plan. For each of the three Pillar Posts you outlined above, you must generate a sequence of four unique Pin variations designed to be published over several weeks. This will create a \"content echo,\" driving traffic to the same pillar post by highlighting different aspects of it. Each of the four Pin variations must include:\n\n\n\nPin Angle: A one-sentence description of the specific angle this Pin takes (e.g., \"Focus on the common mistakes,\" \"Highlight a surprising statistic from the post,\" \"Pose a direct question to the audience\").\nPin Title: A unique title that reflects the specific angle.\nPin Description: A unique description tailored to the angle, designed to create curiosity and drive clicks to the main pillar article. It must end with 3–5 relevant hashtags.",
    "category": "Social Media"
  },
  {
    "title": "The Pinterest Foundation Builder",
    "description": "Generates your full Pinterest foundation: audience personas, brand aesthetic, pin templates, SEO keywords, and a 30-day launch plan.",
    "method": "Copy & paste the prompt below into your preferred LLM.",
    "prompt": "You are an expert Pinterest marketing strategist and brand analyst. I want you to generate a complete foundational strategy for my business on Pinterest. Your analysis must be based only on the specific business details I am providing below. Your response should be comprehensive, insightful, and ready for me to implement.\n\nHere is the information about my business you will use for your analysis:\n\n\n\nMy Business Name: [Your Business Name]\nMy Products/Services: [Describe your products or services in a sentence or two. (Eg. We sell handmade, small-batch soy candles with unique scents inspired by nature.)]\nMy Core Target Audience: [Briefly describe your ideal customer off of Pinterest. (Eg. Women aged 25–40 who are interested in home decor, wellness, and sustainable products.)]\nMy Brand's Vibe and Keywords: [List 3–5 keywords that describe your brand's aesthetic and values. (Eg. cozy, minimalist, natural, self-care, eco-conscious)]\nMy Primary Goal on Pinterest: [Choose one: \"drive traffic to my website,\" \"increase online sales,\" \"build brand awareness,\" or \"grow my email list\"]\nMy Website/Store URL: [Your website or social media link]\nMy Main Competitor on Pinterest (Optional): [Provide the Pinterest URL of a competitor you admire]\n\n\nNow, you must generate the following two-part strategy. You must present the information using clear headings and paragraphs, not lists with bullet points.\n\nPart 1: The Pinterest Audience Persona\n\nFirst, you must develop a detailed profile of my ideal customer as a Pinterest user. You must give this persona a name. Under the main heading 'Part 1: The Pinterest Audience Persona', I want you to structure your response with two subheadings: 'Persona Profile' and 'Pinterest Behavior'.\n\nUnder 'Persona Profile', you should provide a Name, Age, and Occupation/Lifestyle. Then, you will write a detailed paragraph for 'Her/His \"Pinterest Story\"' that describes her/his mindset, what she/he uses Pinterest for, her/his goals or problems my business can solve, and how she/he moves from inspiration to purchase.\n\nUnder 'Pinterest Behavior', you should first write a paragraph listing at least 10 specific search terms she/he would likely type into Pinterest that are relevant to my business. Then, in a separate paragraph, you will describe the types of content and Pins she/he loves to save.\n\nPart 2: Strategic Pinterest Board Architecture\n\nNext, using the persona you just created, you will design a strategic set of exactly 5 Pinterest boards. You must categorize these boards as follows: one board for 'Our Products', one board for 'Brand Story', two boards for 'Audience Interest', and one board for 'Value & Education'.\n\nFor each of the 5 boards you propose, you must format your response precisely as a distinct block of text, using these four labels on separate lines:\n\n\n\nBoard Title: [A catchy and SEO-friendly title]\nBoard Description: [A keyword-rich paragraph describing the board's purpose and content.]\nExample Pin Ideas: [A paragraph listing 3 specific ideas for Pins that would belong on this board.]\nStrategic Purpose: [A paragraph explaining why this board is important and how it attracts the persona.]\n\n\nEnsure your entire output is well–written, easy to read, and directly addresses all parts of this request.",
    "category": "Social Media"
  },
  {
    "title": "TikTok Pixel Custom Events Setup",
    "description": "Step-by-step setup for TikTok Pixel custom events like Add to Cart, Checkout, and Subscribe so you can track real actions on your site.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I want to track custom events on my [online store], such as Add to Cart or Wishlist. How can I configure the TikTok Pixel to capture these specific actions so I can see more detailed user behavior?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Pixel Audience Segmentation",
    "description": "Create targeted custom audiences from your TikTok Pixel data by segmenting users based on page views, cart activity, and purchases.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’d like to segment audiences for retargeting based on data from my TikTok Pixel. Can you walk me through creating custom audiences, such as users who viewed specific products but didn’t complete a purchase?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Pixel via GTM Guide",
    "description": "Complete guide to deploying your TikTok Pixel through Google Tag Manager with proper triggers, variables, and testing steps.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "My [website] uses Google Tag Manager, and I’d prefer to install the TikTok Pixel through GTM. What’s the best way to configure triggers for standard and custom events within GTM?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Pixel Multi-Currency Setup",
    "description": "Set up multi-currency tracking in your TikTok Pixel to measure revenue accurately from international customers across different countries.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m running a global campaign with multiple currencies. Can you show me how to include currency parameters in my TikTok Pixel setup so I can accurately track sales from different regions?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Pixel Purchase Event Setup",
    "description": "Configure the TikTok Pixel Purchase event with dynamic revenue values so you can track actual return on ad spend per campaign.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’d like to track purchases and the corresponding revenue from my [eCommerce store]. Could you explain how to set up the Purchase event with the TikTok Pixel, including how to pass the total order value?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Pixel Testing Guide",
    "description": "Test and verify every TikTok Pixel event using Pixel Helper to catch errors before they waste your ad budget on broken tracking.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "How can I test if my TikTok Pixel events are firing correctly on each page of my [website/app]? I’ve heard about the TikTok Pixel Helper, but I need help interpreting its data to ensure everything is working.",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads Cross-Domain Tracking",
    "description": "Set up cross-domain tracking in Google Ads so conversions are not lost when users move between your marketing site and checkout page.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I run ads on multiple domains for my [online platform], and I need cross-domain tracking. Can you show me how to configure Google Ads conversion tracking so I can follow a user’s journey from click to conversion across different sites?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Pixel Lead Event Setup",
    "description": "Configure the TikTok Pixel Lead event to track form submissions and sign-ups so you can optimize campaigns for actual leads.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer",
    "prompt": "I’m optimizing my ads for lead generation. How do I create a Lead event with the TikTok Pixel so I can measure when users submit my [contact/lead capture form]?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Pixel Shopify Troubleshooter",
    "description": "Diagnose and fix common TikTok Pixel issues on Shopify with a checklist covering pixel not firing, duplicates, and revenue errors.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "My Shopify store isn’t registering conversions in my TikTok Ads dashboard. Can you help me troubleshoot common issues and confirm that the TikTok Pixel is firing on all necessary pages?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "TikTok Domain Verification Guide",
    "description": "Walk through TikTok domain verification step by step: adding the meta tag, passing checks, and connecting to your ad account.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m having trouble verifying my domain for TikTok Ads. Could you walk me through the process of domain verification and show me where to add the necessary meta tags or DNS records?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "GTM Conversion Trigger Setup",
    "description": "Set up Google Tag Manager triggers for conversions like button clicks, form submissions, and page views with proper testing.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m using Google Tag Manager for my [blog/website], and I’m confused about firing triggers for Google Ads conversions. Can you help me figure out which triggers to use and how to test them to make sure they’re firing only when a conversion happens?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads Conversion Discrepancy Audit",
    "description": "Find out why your Google Ads numbers don't match your CRM. Identify tag delays, attribution gaps, and duplicate counting issues.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I see that my Google Ads account reports conversions, but the numbers don’t match up with my CRM data for my [online store]. Can you help me troubleshoot common discrepancies and ensure that both systems accurately reflect the same purchase or lead data?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads Micro-Conversion Tracking",
    "description": "Track micro-conversions like sign-ups, downloads, and scroll depth in Google Ads so you can optimize even with low conversion volume.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I want to optimize my campaigns for micro-conversions, like newsletter sign-ups or PDF downloads on my [educational site]. How can I set up Google Ads to track these smaller but valuable actions that lead to long-term growth?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads Call Tracking Setup",
    "description": "Set up call tracking in Google Ads for local businesses so every phone lead ties back to the exact keyword and ad that drove it.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "My business relies on phone calls rather than online forms. How do I set up call tracking in Google Ads so that I can see which campaigns generate the most calls from my [local service-based business]?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads Offline Conversion Import",
    "description": "Import offline sales and in-store visits back into Google Ads so the algorithm learns which clicks actually turn into real revenue.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m interested in importing offline conversions into my Google Ads account for my [B2B service]. Can you walk me through how to track leads that convert offline (like phone sales or in-person sign-ups) and integrate that data back into Google Ads?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads Lead Form Conversion",
    "description": "Configure conversion tracking for lead forms on your site with tag setup, thank-you page triggers, and value assignment.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’d like to measure when users fill out a lead form on my [service-based website]. How do I create a Google Ads conversion action that triggers every time the “Thank You” page is reached, and what code do I need to place on my site?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads Transaction Tracking",
    "description": "Set up transaction tracking in Google Ads with dynamic revenue, product data, and order IDs to see real ROAS per keyword.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I want to track purchases on my [eCommerce store] through Google Ads. Could you explain how to set up transaction tracking that includes revenue, so I can see exactly how much each conversion is worth?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Conversion Tracking Setup Guide",
    "description": "Install and verify your Google Ads global site tag and conversion events from scratch with testing and troubleshooting included.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m setting up my first Google Ads conversion tracking on my [website/platform], but I’m not sure where to place the global site tag. Can you walk me through the basic steps to properly install the tag and verify that it’s working?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Google Ads–GA4 Linking Guide",
    "description": "Link GA4 to Google Ads, import conversions, set up remarketing audiences, and configure bidding signals so both platforms work together.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I just switched to GA4 for analytics but I’m unsure how to connect it with my Google Ads account. Can you guide me on linking GA4 properties, importing conversions, and ensuring the data flows correctly between both platforms?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Performance Max Campaign Test",
    "description": "Configure asset groups, audiences, and success metrics for a Performance Max campaign. Get a testing plan to find what converts best.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’d like to test a Performance Max campaign for my [online service], but I’m unsure how to optimize it. Ask me about my asset groups, existing remarketing lists, and any creative elements I can provide. Also, clarify how I measure success—be it lead generation, sales, or brand awareness.",
    "category": "Google Ads"
  },
  {
    "title": "Ad Extensions Optimizer",
    "description": "Pick and refine sitelinks, callouts, snippets, and review extensions that make your ads bigger, more clickable, and more relevant.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’m trying to optimize my ad extensions for my [local or online business]. Ask me about my call-to-action buttons, site links, call extensions, and any structured snippets I might use. Don’t forget to check if I have reviews or awards I can showcase through additional extension options.",
    "category": "Google Ads"
  },
  {
    "title": "Niche Ecommerce Keyword Strategy",
    "description": "Build a full keyword list for your online store with product categories, match types, negative keywords, and grouping strategy included.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I need guidance on creating a robust keyword strategy for my [niche eCommerce store]. Ask me about my top product categories, the competition level in my niche, and any relevant brand terms I might be missing. Make sure to ask if I’m using negative keywords effectively and if I’ve tested various match types.",
    "category": "Google Ads"
  },
  {
    "title": "Gmail Ads Campaign Planner",
    "description": "Plan a Gmail Ads strategy with special offer previews, audience segments, and engagement tracking to turn inbox impressions into clicks.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I want to run a Gmail Ads campaign to reach potential customers for my [digital product or online course]. Please ask me about the content or special offers I’d like to highlight in the email preview, how I segment my audience, and my primary call-to-action. Also confirm if I plan to retarget previous site visitors or aim for new leads.",
    "category": "Google Ads"
  },
  {
    "title": "Quality Score Improvement Audit",
    "description": "Audit your ad copy relevance, landing page alignment, and negative keywords to find exactly why Quality Score is low and how to fix it.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’m struggling to improve my Quality Score across several keywords in my [service-based business]. Ask me about my current ad copy, landing page relevancy, and any negative keywords that might refine my targeting. Make sure to inquire about performance metrics like CTR or conversion rate to diagnose what’s holding back my Quality Score.",
    "category": "Google Ads"
  },
  {
    "title": "B2B Lead Gen Ads",
    "description": "Set up Google lead ads with form fields, audience targeting, and follow-up content designed to capture qualified B2B leads.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’m launching a [B2B product or service] and need to attract high-quality leads. Please inquire about the job titles or industries I’m targeting, my lead form requirements, and how quickly I need to follow up with potential clients. Also, check if I have specific content pieces (like whitepapers or webinars) to use in lead-generation campaigns.",
    "category": "Google Ads"
  },
  {
    "title": "Online-Offline Promo Ads",
    "description": "Combine local awareness, call extensions, and online-to-offline tracking to drive both in-store visits and online sales from one campaign.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I run a [physical storefront] in addition to an online shop, and I’d like to promote both. Ask me about how far people typically travel to visit my store, any local promotions I’m running, and my current online-to-offline tracking methods. Be sure to discuss whether I have a Google My Business profile and if I use call or location extensions.",
    "category": "Google Ads"
  },
  {
    "title": "Shopping Campaign Segmentation",
    "description": "Split your product catalog into separate Shopping campaigns with distinct budgets, bids, and goals for better control over ad spend.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I need help segmenting my [product catalog] into multiple campaigns so I can set separate budgets and bids. Please ask me about my best-selling items, average profit margins, and any seasonal trends. Also, find out whether I want to use Smart Shopping campaigns, standard shopping campaigns, or a combination of both.",
    "category": "Google Ads"
  },
  {
    "title": "YouTube Video Campaign Planner",
    "description": "Plan YouTube video ad campaigns with messaging, target viewers, remarketing sequences, and KPIs to measure what actually works.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’d like to run a video campaign on YouTube to promote my [brand or service]. Please ask me about the key points I want to highlight in my video, my target viewer profile, and any existing subscriber base I have on YouTube. Also confirm how I plan to track video engagement and whether I’m interested in remarketing to viewers who watch a certain percentage.",
    "category": "Google Ads"
  },
  {
    "title": "Subscription Bidding Strategy Test",
    "description": "Test automated bidding strategies for subscription products by balancing lifetime value against cost per acquisition to find the sweet spot.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I want to test different bidding strategies for my [online subscription service] campaign. Ask me about my typical customer lifetime value, my tolerance for CPC vs. CPA, and whether I’m comfortable trying automated bidding approaches. Don’t forget to find out if I have any strict budget caps or seasonal fluctuations in demand.",
    "category": "Google Ads"
  },
  {
    "title": "Buyer Journey Campaign Structurer",
    "description": "Structure campaigns for each stage of the buyer journey with tailored audiences, messaging, and conversion goals from awareness to purchase.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I need help structuring campaigns for my [SaaS product], focusing on different stages of the buyer’s journey. Ask me about my target audience’s pain points, the free trial or demo process, and the long-term conversion goals I’m aiming for. Remember to check if I have landing pages tailored for each funnel stage to ensure consistency in messaging.",
    "category": "Google Ads"
  },
  {
    "title": "App Install Visibility Ads",
    "description": "Design app install campaigns with cost-per-install targets and post-download engagement tracking to grow your user base efficiently.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I want to enhance my [mobile app’s] visibility and increase downloads. Ask me about my app’s unique features, the demographics I’m trying to attract, and the average cost-per-install target. Don’t forget to cover whether I have tracking set up for in-app events, so we can measure post-download engagement.",
    "category": "Google Ads"
  },
  {
    "title": "Ecommerce Remarketing Refiner",
    "description": "Refine remarketing lists and dynamic product ads to bring past visitors back and turn them into repeat buyers with personalized offers.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’m looking to refine my remarketing efforts for my [eCommerce store] to boost repeat purchases. Please inquire about the product categories I want to spotlight, any loyalty programs I offer, and my current remarketing lists. Also, find out if I’m open to experimenting with dynamic remarketing ads for a more personalized shopper experience.",
    "category": "Google Ads"
  },
  {
    "title": "Seasonal Campaign Strategist",
    "description": "Plan a time-limited Google Ads push for seasonal products with budget pacing, bid adjustments, and promotional timing built in.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’m planning to introduce a [seasonal product or service] and need guidance on how to maximize impact with a time-limited campaign. Inquire about my seasonal timeline, typical customer behavior during that period, and any promotional offers I’ll be running. Also, please confirm how aggressive I’d like to be with budgeting and my comfort level with bidding strategies.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Multi-Channel Launch Plan",
    "description": "Coordinate a launch across Google Search, Display, YouTube, and Discovery so all channels work together for maximum impact.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I’m planning a [product launch or rebrand] soon and need a cohesive multi-campaign strategy. Ask me about the channels I want to use—Search, Display, YouTube, Discovery—my timeline for the launch, and what sets my new offering apart. Make sure to clarify if I have a landing page or microsite dedicated to this launch.",
    "category": "Google Ads"
  },
  {
    "title": "Display Network Brand Builder",
    "description": "Set up display network campaigns for brand awareness with the right audiences, creative sizes, placements, and remarketing sequences.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I want to increase brand awareness for my [new online store] through Google’s Display Network. Please ask me about my brand’s core message, any existing creative assets, and the type of audiences I’m trying to reach. Make sure to also ask about my retargeting goals and how I’d like to measure the success of these display campaigns.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Local Lead Strategy",
    "description": "Tailor your Google Ads keywords and bids for local searches so you capture nearby leads and show up when it matters most.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I run a [local service-based business] and need help optimizing for leads within my region. Ask me about my target demographics, the type of services I offer, and how I currently track conversions so you can propose a location-targeted strategy. Don’t forget to find out about my average customer value and any relevant promotions I have going on.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads High-Intent Sales Campaign",
    "description": "Build a Google Ads campaign around high-intent search terms with persuasive copy designed to turn clicks into immediate sales.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I want to launch a new campaign for my [type of business] to drive more online sales. Please ask me about my unique selling points, current website traffic, and any previous Google Ads data so we can craft a strategy that focuses on high-intent keywords and compelling ad copy. Make sure to inquire about my budget range and any specific targets for cost-per-conversion or ROI.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Retention Campaign Strategy",
    "description": "Design Google Ads campaigns focused on keeping existing customers with upsell, cross-sell, and loyalty-building ad strategies.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I want to build brand loyalty among existing customers for my [subscription box or recurring service]. Please ask me about my retention goals, average renewal rates, and any upsell or cross-sell opportunities I could implement. Also confirm if I’m tracking customer lifetime value to gauge campaign effectiveness.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads High-Ticket Lead Filtering",
    "description": "Filter out low-intent clicks on expensive keywords by adding qualifiers, negative terms, and audience layers to protect your budget.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Google Ads marketing specialist. I offer [high-ticket items or premium services] and need to ensure my campaigns aren’t flooded with low-intent clicks. Ask me about how I currently qualify leads, the landing page process, and whether I have any retargeting or qualification quiz in place. Also discuss if I’d be open to experimenting with higher CPCs to attract fewer but more relevant clicks.",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Planner Best Practices",
    "description": "Get the most out of Google Keyword Planner by learning how to spot high-traffic, low-competition terms that your competitors miss.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "What are some effective ways to use Google's Keyword Planner to identify high-traffic, low-competition keywords for my Google Ads campaign targeting [insert target audience or demographic]?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Funnel-Stage Keywords",
    "description": "Map your keywords to awareness, consideration, and purchase stages so each ad speaks to where the buyer actually is in their journey.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "Can you help me brainstorm keywords that will help me target customers at different stages of the sales funnel with my Google Ads? My product is a [product/service]",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Long-Tail Keyword Discovery",
    "description": "Find long-tail keywords your competitors overlook using specific tools and tactics that uncover what real customers search for.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "How can I identify [long-tail/short tail] keywords that will help me target a more specific audience with my Google Ads?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Industry Keyword Brainstorm",
    "description": "Generate a broad starting list of industry keywords to kickstart your Google Ads research and uncover new targeting angles.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "Can you help me generate keywords for my Google Ads campaign targeting [insert industry or niche]?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Keyword Mix Strategy",
    "description": "Balance informational and transactional keywords so your campaigns catch both curious researchers and ready-to-buy customers.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I have a [blog or informational site] I’m monetizing through ads, but I also want to run my own Google Ads campaign to promote premium content. Could you show me how to balance [informational and transactional keywords] so I reach both curious readers and serious buyers?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Keyword Generation",
    "description": "Brainstorm a comprehensive keyword list to fuel your Google Ads campaigns, covering every angle your audience might search.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "What are some effective keywords I should include in my Google Ads campaign for [insert specific product or service]?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Low-Competition Keywords",
    "description": "Find low-competition, high-intent keywords that let you outperform bigger competitors without overspending on bids.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’ve recently launched a [consulting service] in a highly competitive niche. What’s the best way to discover [low-competition, high-intent keywords] that might help me stand out, and how do I test them effectively in Google Ads?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Commercial-Intent Keywords",
    "description": "Focus on commercial-intent search terms that target people ready to buy, so your ad spend goes toward revenue, not just traffic.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "My [eCommerce store] sells [niche products], and I want to focus on people closer to the purchasing stage. Which [commercial intent keywords] should I prioritize, and what language resonates best with buyers who are ready to check out?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Educational Long-Tail Keywords",
    "description": "Discover long-tail educational keywords that attract learners and information seekers to your content at a lower cost per click.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m planning to revamp my existing keyword list for my [online course or coaching program]. Could you suggest ways to find [long-tail educational keywords] and structure them so I can attract the right learners?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Negative Keyword Setup",
    "description": "Build a negative keyword list that filters out irrelevant searches, stops wasted clicks, and immediately improves your campaign ROI.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m seeing a spike in irrelevant clicks for my [local business ads]. Could you assist me in identifying [negative keywords] I should add to eliminate traffic from users who aren’t actually looking for my services?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Competitor Keyword Analysis",
    "description": "Analyze what keywords your competitors rank for and find the high-value gaps where you can win traffic they are missing.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I operate a [specialized online platform] for [target market], and I’m not sure if my ads are reaching the right users. Can you help me do a [competitor keyword analysis] and see if there are any specific terms I’m missing out on?",
    "category": "Google Ads"
  },
  {
    "title": "Ecommerce Keyword Traffic Strategy",
    "description": "Identify the keywords that bring qualified buyers to your store and organize them into groups that match your product structure.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I run a [type of online store] that specializes in [specific products], and I want to drive more qualified traffic to my website. Could you help me find the best [type of keywords] to reach people who are ready to buy, and also suggest any [negative keywords] I should consider adding?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Ad Group Structuring",
    "description": "Organize keywords into tightly themed ad groups so each ad matches its search terms closely, improving Quality Score and lowering cost.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I have a [B2B business] selling to [specific professionals or companies], and I need help grouping my keywords more effectively for different ad groups. How do I structure [themed keyword sets] that reflect each segment of my audience?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Search & Display Keywords",
    "description": "Get keyword suggestions for both Search and Display campaigns so your ads show in the right search results and on the right websites.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’d like to run both Search and Display campaigns for my [type of service]. Could you advise on which [contextual or topic-related keywords] will work best on the Display Network to reach a relevant audience?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Match-Type Refinement",
    "description": "Convert broad match keywords into phrase and exact match for tighter targeting, then set up tracking to monitor the performance shift.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m worried my [broad match keywords] might be too general for my [type of product], resulting in wasted ad spend. Can you help me refine my list using [phrase match or exact match keywords] and show me how to monitor performance over time?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads International Localization",
    "description": "Adapt your Google Ads keywords for multiple languages and regional markets so your campaigns perform well internationally.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I plan to expand my [product/service] internationally and need help localizing my Google Ads campaign. Could you suggest the best process for identifying [multi-language keywords] and ensuring my ads resonate in different markets?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads Keyword Optimization",
    "description": "Clean up your keyword list by boosting high-intent terms, removing underperformers, and adding negatives to cut wasted spend.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I offer [professional services] to [specific industry], and my current ads receive plenty of clicks but few conversions. How can I target [more specific, high-intent keywords], and which [negative keywords] might help eliminate unqualified traffic?",
    "category": "Google Ads"
  },
  {
    "title": "Seasonal Keyword Integration Strategy",
    "description": "Research and add seasonal or trending keywords to your campaigns so you capture demand spikes when they happen.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m launching a [new product line or seasonal campaign] for my [type of eCommerce site], and I’m worried about missing out on trending terms. Can you show me how to research and integrate [seasonal or trend-based keywords] that align with my offers?",
    "category": "Google Ads"
  },
  {
    "title": "Long-Tail Keyword Discovery Guide",
    "description": "Use proven tools and strategies to find long-tail search terms that real customers type when they are close to making a purchase.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I have a [software/SaaS product] that solves [specific problem], but I’m unsure how to uncover the right [long-tail keywords] that potential customers might be searching. Could you walk me through the tools and strategies I should use to discover and refine my list?",
    "category": "Google Ads"
  },
  {
    "title": "Google Ads CPC Reduction Guide",
    "description": "Lower your cost per click by finding niche and geo-targeted keyword groups that deliver clicks at a fraction of the competitive price.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I manage a [local service-based business] offering [type of service], and I’m looking to reduce my cost-per-click on Google Ads. I need guidance on identifying [geo-targeted or niche-specific keywords] and how to effectively group them in ad groups for higher relevance.",
    "category": "Google Ads"
  },
  {
    "title": "Lead Ad Feasibility Analysis",
    "description": "Evaluate whether running lead gen ads on-platform or sending traffic to a landing page will get you more qualified leads for less money.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "One competitor has started using lead generation ads directly on Facebook rather than directing traffic to their site. Can you help me analyze whether this approach might work for my brand and what pitfalls to avoid?",
    "category": "Google Ads"
  },
  {
    "title": "Dynamic Retargeting Ad Audit",
    "description": "Audit a dynamic retargeting campaign's frequency, relevance, and creative quality to find what to fix for better return visits and sales.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I see that one of my rivals is running a retargeting campaign that follows users around with dynamic product ads. Can you walk me through how to evaluate the frequency, relevancy, and creative approach they’re using, so I can refine my own retargeting efforts?",
    "category": "Facebook Ads"
  },
  {
    "title": "UGC Ad Impact Monitoring Framework",
    "description": "Set up tracking for UGC ad performance so you can measure which user-generated content drives the most engagement and conversions.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "A competitor is focusing heavily on user-generated content and testimonials in their ads. Can you guide me on how to monitor and interpret the impact of such social proof, and how to develop a similar strategy?",
    "category": "Google Ads"
  },
  {
    "title": "Headline Variant Testing Guide",
    "description": "Test multiple headline versions against each other with a structured framework to find which one gets the most clicks from your audience.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’ve noticed my competitor seems to be testing multiple headlines on the same offer. Can you advise on how to track the performance of each variant and what to look for when deciding which headline to adopt or discard?",
    "category": "Google Ads"
  },
  {
    "title": "Tag Manager Pixel Implementation",
    "description": "Deploy your tracking pixel through Google Tag Manager with proper triggers and firing rules so every conversion gets counted correctly.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "My website uses Google Tag Manager. What’s the best way to install my Facebook Pixel through GTM, and how do I create triggers for custom events?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Video Thumbnail Ad Evaluation",
    "description": "Evaluate a video ad thumbnail's text, colors, and layout to understand what grabs attention and apply those lessons to your own ads.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’ve included a snapshot of a competitor’s video thumbnail in their ad. Can you evaluate the text overlay, color scheme, and overall style to see what grabs attention and how I might adapt it?",
    "category": "Facebook Ads"
  },
  {
    "title": "Stories Ad Intelligence Guide",
    "description": "Study competitor Stories ads to reverse-engineer their hooks, targeting, and creative approach, then build a better version for yourself.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I keep seeing a competitor’s ads showing up on Instagram Stories. Could you help me figure out their targeting approach, what hooks they’re using in the first few seconds, and how to create a strong Stories ad in response?",
    "category": "Facebook Ads"
  },
  {
    "title": "Sponsored Post Strategy Analysis",
    "description": "Break down a sponsored post's engagement strategy and outline a similar approach you can test with your own content and budget.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m sharing a screenshot of a competitor’s sponsored post that got huge engagement. Can you assess what might be driving comments and shares, and outline a similar strategy I could try?",
    "category": "Facebook Ads"
  },
  {
    "title": "Carousel Ad Sequencing Analysis",
    "description": "Analyze a carousel ad's card sequence and messaging flow, then get suggestions for improving the storytelling and conversion path.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m providing a photo of a competitor’s carousel ad. Can you break down how they’re sequencing their messaging across each card, and recommend ideas for improving my own carousel layout?",
    "category": "Facebook Ads"
  },
  {
    "title": "Competitor Ad Elements Analysis",
    "description": "Study a competitor's ad to identify their headline tactics, body copy selling points, and visual choices you can adapt for your own ads.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m uploading a screenshot of a competitor’s ad I saw repeatedly in my feed. Can you help me identify the key selling points in their headline and body text, and suggest ways I might differentiate my approach?",
    "category": "Facebook Ads"
  },
  {
    "title": "Seasonal Ad Visual Analysis",
    "description": "Examine seasonal ad visuals to understand which design choices drive engagement, then apply those insights to your next campaign.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’ve attached an image of an ad that a top competitor uses for a seasonal promotion. Could you analyze the visuals, headline, and offer to see why it might be resonating with their audience?",
    "category": "Google Ads"
  },
  {
    "title": "Pixel Audience Segmentation Guide",
    "description": "Segment your pixel audiences into retargeting lists based on what pages they visited, what they clicked, and how far they got in checkout.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "Can you walk me through how to segment my audiences based on Pixel data? For instance, I’d like to create retargeting lists for people who viewed specific products but haven’t checked out.",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Pixel Event Testing Guide",
    "description": "Test your pixel events using browser developer tools and platform diagnostics to confirm everything fires correctly before going live.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "How do I test whether my Pixel events are firing correctly? I’ve heard about the Facebook Pixel Helper extension, but I’m not sure how to interpret its results.",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Pixel Lead Event Configuration",
    "description": "Set up a Lead conversion event in your pixel to track form submissions and sign-ups so you can optimize campaigns for real leads.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m trying to optimize my ads for lead submissions. How can I configure a “Lead” event in my Facebook Pixel so I can measure how many people fill out my contact form?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Pixel Multi-Currency Tracking",
    "description": "Add currency parameters to your pixel events so transactions from international customers are tracked accurately in their local currency.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m updating my Facebook Pixel to track multiple currencies. Can you show me how to add currency parameters to my custom events for a global audience?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Pixel Purchase Event Setup",
    "description": "Configure the Purchase event with dynamic revenue values in your pixel so you can see exactly how much money each ad is making you.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I want to track purchases and their values on my e-commerce site. Could you explain how to set up the “Purchase” event with dynamic value parameters to accurately record transaction amounts?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Facebook Domain Verification Guide",
    "description": "Verify your domain in Facebook Business Manager step by step, from adding the meta tag to passing verification and connecting your account.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’m struggling to verify my domain in the Facebook Business Manager so I can use my Pixel properly. Can you walk me through the domain verification process and where to add the meta tag or DNS record?",
    "category": "Facebook Ads"
  },
  {
    "title": "Ad Pixel Troubleshooting Guide",
    "description": "Troubleshoot a pixel that is not collecting data. Walk through common issues across pages and get it firing correctly on all key actions.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I’ve installed the Pixel, but it’s not collecting data on my Shopify store. Could you help me troubleshoot common issues and ensure it’s firing correctly on all pages?",
    "category": "Tracking & Pixels"
  },
  {
    "title": "Humorous Facebook Headline",
    "description": "Generate a witty, playful Facebook headline that stands out in the feed and gets clicks without hurting your brand credibility.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I need a headline for my [product/service] that uses a playful or humorous twist without undermining my credibility. Please ask me about my brand’s sense of humor, any key terms that reflect my offering, and how I want to balance fun with professionalism. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Problem-Solution Facebook Headline",
    "description": "Write a Facebook headline that calls out the problem your audience faces and immediately positions your product as the solution.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I need attention-grabbing headlines for my Facebook ads promoting my [fill in the service] that solves [fill in the problem] for [fill in the target audience]. Can you assist?",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Pixel Custom Events Setup",
    "description": "Set up custom events with your Facebook Pixel to track specific actions like button clicks, video views, and form interactions on your site.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I want to track specific actions on my website like button clicks or downloads. How do I set up custom events with my Facebook Pixel to capture these conversions accurately?",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Pixel Installation Guide",
    "description": "Install your Facebook Pixel correctly in your site header with step-by-step instructions for accurate data collection from day one.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "I just signed up for a Facebook Pixel, but I’m not sure where to place the code on my website. Can you guide me through the basic setup and explain best practices for installing it in the header?",
    "category": "Facebook Ads"
  },
  {
    "title": "Feature-Highlight Facebook Headline",
    "description": "Write a Facebook headline that spotlights a new or improved feature in your product, making it the reason people click and learn more.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "Can you create compelling headlines for my Facebook ads promoting my [fill in the product/service] that is [fill in the new/improved feature]?",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Headline Brainstorm",
    "description": "Paste your ad copy and get three high-impact Facebook headline options designed to boost click-through rates on your campaigns.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "Please read the ad copy below and provide me with 3 attention grabbing headlines for a Facebook ad. [paste ad copy]",
    "category": "Facebook Ads"
  },
  {
    "title": "Short-Form Facebook Headline",
    "description": "Generate a short, punchy Facebook headline that fits tight character limits but still makes a strong impression and drives clicks.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I want a short, impactful headline for my [product/service] that can fit in limited character space but still create a strong impression. Ask me about the single most important benefit to emphasize, the overall brand tone, and any must-have words or phrases. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Niche Audience Facebook Headline",
    "description": "Write a Facebook headline tailored to a specific niche audience so your ad feels personal and relevant instead of generic.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’d like a headline that speaks to a niche or specialized audience for my [product/service]. Please ask me about the defining characteristics of this audience, the language or jargon they respond to, and the unique value proposition I provide them. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Transformation Facebook Headline",
    "description": "Create a before-and-after Facebook headline that shows the transformation your product delivers, making the benefit impossible to ignore.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’m looking for a transformational headline for my [product/service], one that highlights the “before and after” experience. Ask me about the key challenges users face before, the primary outcome they can expect after, and any power words to reinforce the transformation. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Testimonial Facebook Headline",
    "description": "Write a Facebook headline featuring a short customer quote or success story to build instant trust and social proof in the feed.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’m interested in a testimonial-style headline for my [product/service], perhaps featuring a short quote from a happy user. Ask me about any specific quote or success story I could incorporate, how I’d like to format it, and the main emotion I want to evoke. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "No-Frills Facebook Headline",
    "description": "Create a clear, no-nonsense Facebook headline that states your offer and its value without any hype or gimmicks. Straight to the point.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I need a straightforward, no-frills headline for my [product/service] that clearly states what I do and why it matters. Please ask me about my core service offering, the one-liner that best sums up my value, and the tone (casual, direct, etc.). Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Data-Backed Facebook Headline",
    "description": "Write a Facebook headline using a specific stat or data point that grabs attention and makes your claim feel credible and concrete.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I want a data-backed headline for my [product/service], incorporating a statistic or percentage to catch attention. Ask me about any relevant data I can highlight, how to phrase it in a headline-friendly format, and the benefit it implies. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Question-Based Facebook Headline",
    "description": "Write a question-style Facebook headline that sparks curiosity and makes people click to find the answer inside your ad.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I want a headline that poses a provocative question related to my [product/service], leading readers to click for answers. Please inquire about the primary question I could ask, the tone of the question (urgent, curious, etc.), and the biggest pain point I’m addressing. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Exclusivity Facebook Headline",
    "description": "Create a Facebook headline that highlights exclusivity or limited access to make readers feel they are getting something special.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’d like a headline for my [product/service] that focuses on exclusivity or “members-only” access. Ask me how I define exclusivity, which words convey rarity or uniqueness, and the overall vibe I want to create. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Social-Proof Facebook Headline",
    "description": "Write a Facebook headline with built-in social proof, using testimonials or credible numbers to instantly build trust with new audiences.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’m looking to craft a headline that incorporates social proof or a credibility marker for my [product/service]. Ask me about any notable results, endorsements, or statistics I can include, and the level of detail that works best in a headline. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Benefit-Focused Facebook Headline",
    "description": "Create a benefit-focused Facebook headline that speaks directly to what your audience wants, making the value clear in under 10 words.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’d like a bold, benefit-focused headline for my [product/service] that resonates with busy professionals. Please inquire about the specific benefit I offer, any short, punchy language I should use, and how I want to position my brand. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Curiosity-Driven Facebook Headline",
    "description": "Write a curiosity-driven Facebook headline that teases just enough to make people need to click and find out more.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’m aiming for a curiosity-driven headline for my [product/service], something that entices readers to learn more. Ask me about the problem I solve, the unique hook I can tease, and the audience’s likely pain points. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Urgency-Driven Facebook Headline",
    "description": "Create an urgency-driven Facebook headline with time-sensitive language that pushes people to act now instead of scrolling past.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I want a headline for my [product/service] that uses a sense of urgency to prompt immediate clicks. Please ask me about any time-sensitive offers, the tone I want to convey (excited, cautionary, etc.), and which key benefit I need to highlight. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "High-Impact Facebook Headline",
    "description": "Write a concise, high-impact Facebook headline that zeroes in on your unique selling point and makes it impossible to ignore.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I’d like a concise, high-impact headline that quickly addresses my [product/service]’s unique selling point. Ask me about the target audience’s biggest challenge, any powerful words or phrases I want to include, and how I’d like people to feel when they read it. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Rhetorical-Question Facebook Ad",
    "description": "Open your Facebook ad with a rhetorical question that calls out a common challenge, then position your product as the obvious answer.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I need assistance writing an ad that starts with a rhetorical question, quickly identifies a common challenge, and presents my [product/service] as the logical remedy. Please ask me about the specific challenge I’m addressing, the tone of the question I want to pose, and how urgent or casual I’d like the solution to sound. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Ad Headline Generator",
    "description": "Generate a striking Facebook ad headline that grabs attention in the first second, conveys your main benefit, and sets up the sale.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad headline specialist. I want a striking headline for my [product/service] that instantly grabs attention and conveys my main benefit. Please ask me about my brand’s personality, the top value I offer, and the emotional tone I want to set. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "One-Sentence Facebook Ad Hook",
    "description": "Write a single-sentence Facebook ad hook that instantly explains your offering and pulls readers into the rest of the ad.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I want to create a one-sentence opening that instantly piques interest, followed by a brief explanation of how my [product/service] works, and a final line that inspires action. Make sure to ask me about the single most compelling hook I can use, the top selling point that must be included, and how strongly I want to push the next step in that final line. Also, ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "A/B Test Facebook Ad Copy",
    "description": "Create two versions of Facebook ad copy for A/B testing: one short and punchy, one longer and detailed. See which one converts better.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I’m interested in testing two variations of ad copy—one short and one longer—to see which resonates better with my audience when advertising my [product/service]. Ask me about the essential elements that must appear in both versions, the core benefits I’m highlighting, and how I’d like to handle the call-to-action differently for each. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Exclusivity Facebook Ad",
    "description": "Write Facebook ad copy that highlights exclusive access or membership perks to make readers feel like they are joining something special.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I’m looking to write an ad that emphasizes exclusivity, making readers feel like they’re getting special access to something valuable in my [product/service]. Please inquire about how I define “exclusive” in this context, any gating or membership aspect involved, and how heavily I want to lean on this concept in the copy. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Humorous Facebook Ad",
    "description": "Write humorous Facebook ad copy that entertains while selling. Stand out in a crowded feed without losing credibility or professionalism.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I want to craft a short, bold ad that leverages humor or a playful tone to stand out in the feed without compromising professionalism when promoting my [product/service]. Ask me about my brand’s comedic boundaries, the main message I want to deliver, and how I plan to transition from a lighthearted hook to a persuasive close. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Emotional-Driver Facebook Ad",
    "description": "Write emotionally driven Facebook ad copy that taps into excitement, relief, or aspiration, then naturally guides readers to your CTA.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I’d like to create an ad that taps into an emotional driver—whether it’s excitement, relief, or aspiration—and seamlessly transitions into mentioning my [product/service]. Make sure to ask about the emotion I want to trigger, my core message, and how I’d like to position the call-to-action so it feels natural and inviting. Also, ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Urgency & Scarcity Facebook Ad",
    "description": "Create Facebook ad copy with urgency and scarcity baked in. Limited spots, countdown deadlines, and reasons to act today, not tomorrow.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I need an ad that focuses on urgency and scarcity—perhaps referencing limited availability or a time-sensitive offer—to encourage immediate action for my [product/service]. Please ask me about the exact nature of my offer (deadline, stock limit, etc.), the tone I want (excited, cautionary, or both), and how prominently I’d like this urgency to appear in the copy. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Bold-Promise Facebook Ad",
    "description": "Write bold-promise Facebook ad copy that makes a big claim while keeping it believable, backed by specifics that earn trust.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I’d like to center my ad copy around a bold claim or strong promise for my [product/service], but I need help ensuring it remains credible and realistic. Make sure to ask me about any data, facts, or personal experience I can back this promise up with, and how I prefer to weave it into the overall narrative. Also, ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Conversational Facebook Ad",
    "description": "Write conversational Facebook ad copy that reads like a friend giving advice, not a brand selling something. Casual tone, real results.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I’m aiming for a more conversational tone in my ad copy, as if I’m speaking directly to a friend who could benefit from my [product/service]. Be sure to ask me about my brand persona, the key points I want to cover in an informal style, and how we should structure the closing line for maximum clarity. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Curiosity-Driven Facebook Ad",
    "description": "Write curiosity-driven Facebook ad copy that teases something interesting, builds intrigue, and guides readers from curiosity to conversion.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I need help writing body copy that leans on curiosity and intrigue, prompting users to click to learn more about my [product/service]. Please ask me about my brand’s style, the one big question or promise that could spark attention, and how I plan to guide readers from curiosity to conversion. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Social-Proof Facebook Ad",
    "description": "Write Facebook ad copy packed with social proof, using real testimonials, review snippets, or success numbers to build instant credibility.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I want to utilize social proof in my Facebook ad—whether it’s testimonials, reviews, or success stories—to build credibility for my [product/service] in just a few sentences. Ask me about any standout results or quotes I might have, how I prefer to format them, and which part of the text should most strongly emphasize trust and reassurance. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Scenario-Based Ad Script",
    "description": "Write a Facebook ad script that opens with a provocative scenario, presents your solution in the middle, and closes with a strong CTA.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I’d like to craft a storytelling-style ad that opens with a relatable scenario, leads into how my [product/service] solves a central problem, and ends with a compelling call-to-action. Be sure to ask me about the emotion I want to evoke, my brand’s voice, and any specific results or transformations I can highlight. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Long-Form Facebook Ad Copy",
    "description": "Write longer-form Facebook ad copy that educates potential customers on key features while guiding them toward clicking your CTA.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I’m looking for a longer-form ad that educates potential customers on the main features of my [product/service], while still driving them toward a clear action. Ask me about the pain points I solve, the structure I’d like to use (like bullet points or mini stories), and how I want to balance information with persuasion. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Concise Benefit-Driven Copy",
    "description": "Write concise Facebook ad copy with an attention-grabbing opener, one strong benefit highlighted, and a clear call to action at the end.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I want to write a concise piece of copy that quickly hooks readers with an attention-grabbing statement, focuses on one key benefit of my [product/service], and concludes with an obvious next step. Please inquire about my unique selling proposition, the tone I prefer (friendly, authoritative, playful, etc.), and any social proof I might include. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook AIDA Framework Ad Script",
    "description": "Write a Facebook ad script using the AIDA framework: grab attention, build interest, create desire, and close with a clear action step.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ad copywriting specialist. I want to create a short-form ad using the AIDA framework (Attention, Interest, Desire, Action) for my [product/service]. Please ask me about my target audience’s top concerns, the key benefit I provide, and how I’d like to motivate them to take the final step. Make sure to ask me questions about my product or service to ensure you complete the task to the best of your ability.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook B2B Trust-Building Ad Script",
    "description": "Write a B2B Facebook ad script that builds credibility with stats or testimonials and moves prospects toward booking a demo or call.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I want a straightforward yet powerful Facebook ad script that showcases the credibility and reliability of my [B2B service]. Walk me through the key elements of building trust—like industry stats or client testimonials—and ask me about my target industries, any notable successes or ROI stats, and how I want my brand to be perceived by decision-makers.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Storytelling Ad Script",
    "description": "Write a storytelling Facebook ad script using real customer scenarios to illustrate the problem and your product as the natural solution.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I’d like to create a storytelling-style script for my [health or wellness product], focusing on real-life experiences or testimonials. Please guide me on how to structure the story arc—from introducing a relatable problem to showing how my product solves it—and ask me about existing customer stories, brand messaging, and the emotional tone I’m aiming for.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Visual Brand Ad Script",
    "description": "Draft a visually driven Facebook ad script that sets the scene, introduces your product naturally, and reinforces your brand identity.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Help me draft a visually-driven Facebook ad script for my [fashion or lifestyle brand]. Outline how you’d set the scene, introduce the product, and reinforce brand identity, and then ask me about the look and feel I want, any trending visuals to incorporate, and how I measure the ad’s success.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Course Ad Step-by-Step Script",
    "description": "Write a step-by-step Facebook ad script for courses or coaching programs that covers what students learn, outcomes, and how to enroll.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I need a clear, step-by-step ad script for my [online course or coaching program], one that outlines exactly what participants will learn and why it matters. Please discuss how you would structure the script’s introduction, educational highlights, and compelling CTA, and make sure to ask me about my curriculum’s core outcomes, teaching style, and ideal student profile.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Seasonal Sale Ad Script",
    "description": "Write a seasonal sale Facebook ad script with urgency, scarcity, and time-limited offers woven in to push viewers to buy now.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I want to produce a dynamic ad script that drives conversions for my [ecommerce store], particularly around a seasonal sale. Guide me on how to weave urgency and scarcity into the script while keeping it relevant and on-brand, and be sure to ask me about the sale details, my target demographic, and any brand-specific language or style.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Comedic Ad Script",
    "description": "Write a funny, lighthearted Facebook ad script that keeps viewers entertained while your product message lands naturally in the story.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I’m aiming for a lighthearted, comedic tone in my Facebook ad script for my [service or membership program]. Show me how you’d structure the narrative so that it’s funny but still product-focused, and ask me about my brand’s sense of humor, any relevant pop culture references, and the exact pain points we can poke fun at.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Product Feature Ad Script",
    "description": "Write a quick Facebook ad script showcasing a new feature or product upgrade. Highlight what changed, why it matters, and what to do next.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Help me create a short and snappy script for my next Facebook ad, focusing on my [brand’s new feature or product upgrade]. Explain how you’d highlight the feature’s benefits in a way that resonates with viewers, and ask me about the typical user experience, key differentiators, and any proof points (like testimonials) we can use.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Solution-Focused Ad Script",
    "description": "Write a solution-focused Facebook ad script that names the customer's problem, presents your fix, and ends with a compelling next step.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I need a compelling Facebook ad script that positions my [product or service] as the perfect solution for a common customer challenge. Show me how to balance an emotional hook with clear, informative content and ask me about my audience demographics, the specific challenge my offering solves, and the kind of vibe or voice I want to convey.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Brand Intro Video Script",
    "description": "Write a Facebook video ad script that introduces your brand in seconds, highlights one key benefit, and ends with a clear CTA.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I’m looking to craft a video ad script for my [business] that quickly introduces my brand, highlights a key benefit, and motivates viewers to take action. Talk me through the ideal opening line, storytelling approach, and final CTA, and be sure to ask me about the tone I want, my target audience’s biggest pain points, and any brand guidelines I should follow.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Ad Script Structure Guide",
    "description": "Get a structured guide for writing Facebook ad scripts with a proven hook, main message, and call-to-action format that converts.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I need help writing a concise yet engaging ad script for my [product or service], one that captures attention within the first few seconds. Please walk me through how you’d structure the hook, main message, and call-to-action, and ask me about my unique selling points, brand personality, and what problem I’m trying to solve for my audience.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Campaign Performance Diagnosis",
    "description": "Diagnose why your Facebook campaigns are underperforming by comparing your ad copy, audiences, bidding, and objectives against benchmarks.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. My most recent Facebook campaign for [my membership site] isn’t performing as well as older campaigns, and I’m unsure why. I need your expertise in examining whether my new ad copy, audience updates, or campaign objective might be at fault. Please ask me about the differences between this campaign and my previous ones, along with any key performance indicators and testing methods I’ve used, to diagnose the problem and recommend improvements.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Retargeting Funnel Audit",
    "description": "Audit your Facebook retargeting funnel from ad engagement to conversion. Find the drop-off points and get fixes to plug the leaks.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I set up retargeting ads for my [online service], but the audience doesn’t seem to be converting, and my click-through rate is below average. I want you to analyze my funnel, from initial user engagement to the final conversion stage, to figure out where prospects drop off. Be sure to ask me about my retargeting window, ad creatives, and any special offers I’m using, so we can re-optimize and get better results.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Retail Awareness Audit",
    "description": "Evaluate your Facebook campaign's objectives, creatives, and CTAs to improve local retail foot traffic and in-store conversions.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. My [local retail store] tried running a brand awareness campaign on Facebook, but foot traffic hasn’t increased, and engagement is minimal. I need your help understanding whether my ad objectives, visuals, or call-to-action might be missing the mark. Please ask me about my campaign goals, how I’m measuring success, and any unique value propositions I might not be highlighting effectively.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Ecommerce Ad Audit",
    "description": "Get a full audit of your Facebook ad account covering copy, targeting, and landing pages to find what is killing performance and fix it.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I’ve been running Facebook ads for my [ecommerce store] for several weeks, but sales are disappointingly low despite a steady amount of traffic. Please help me analyze my ad copy, targeting, and landing page experience to pinpoint what might be going wrong and propose solutions to boost conversions. Ask me specific questions about my ad metrics, product pricing, and audience targeting so we can systematically troubleshoot the campaign.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Campaign Cost Review",
    "description": "Review your Facebook targeting, creatives, and bidding to find where you are overspending and get specific steps to lower your ad costs.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. I launched a series of ads for my [digital product], but the cost per result is higher than I expected, draining my budget. I want you to review my targeting strategy, creatives, and bidding approach to discover potential issues. Make sure to ask me about my current audience segmentation, ad frequency, and any relevant data from past campaigns to help refine our next steps.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Property Listing Ads",
    "description": "Run Facebook ads for real estate with local awareness, lead gen, and retargeting combined to connect listings with qualified buyers.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to develop a Facebook ads plan for my [real estate or property management business]. Outline how to combine local awareness ads, lead generation ads, and retargeting for those who viewed my listings but didn’t contact me. Make sure to ask me about the types of properties I handle, my average client profile, and any geographic constraints, so you can tailor the approach.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Portfolio Display Ads",
    "description": "Use Facebook engagement, Messenger, and conversion ads together to display your portfolio and start client conversations naturally.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to build a dynamic advertising strategy for my [creative agency or freelance services]. Walk me through the benefits of using engagement ads to display my portfolio, messenger ads to start client conversations, and conversion ads to seal deals. Don’t forget to ask me about the services I offer, my current clientele, and how I typically onboard new clients, so you can customize each campaign phase.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Enrollment Ad Strategy",
    "description": "Plan Facebook ad objectives for online courses: traffic, lead capture, and engagement campaigns designed to maximize student enrollments.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to propose a lead-generation and conversion strategy for my [educational course or membership site]. Highlight the advantages of using consideration campaigns to share free resources, followed by conversion campaigns to enroll new students. Please ask me about my course curriculum, target audience skill level, and any existing success stories I can leverage in ads for social proof.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Video Brand Ads",
    "description": "Use Facebook video ads, tutorials, and before-and-after clips to build brand trust and drive sales for beauty or wellness products.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to design a targeted Facebook strategy for my [beauty or skincare brand]. Show me how using video tutorials, before-and-after image ads, and promotional offers can each serve different goals, from brand building to immediate sales. Don’t forget to ask me about the brand’s unique selling points, product pricing, and any endorsements or certifications for maximum campaign impact.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Travel Retargeting Ads",
    "description": "Build a Facebook retargeting strategy for travel using collection ads and custom audiences to re-engage people who browsed but did not book.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to develop a campaign blueprint for my [travel or tourism business]. Describe how to use collection ads for eye-catching travel packages, and detail how remarketing can re-engage people who browsed trip details but didn’t book. Make sure to ask me about my most popular destinations, price ranges, and whether I want to focus on local or international travelers for maximum relevance.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Product Showcase Ads",
    "description": "Set up carousel, dynamic, and retargeting ads on Facebook to showcase handmade or artisanal products and drive repeat purchases.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to help me strategize an ad campaign for my [handmade or artisan product line]. Walk me through different ad formats—from image carousels that showcase product details to dynamic ads for retargeting visitors who abandoned their carts—and explain how each can benefit a small craft business. Remember to ask me about my production capacity, target audience interests, and brand story to pinpoint the best marketing angle.",
    "category": "Facebook Ads"
  },
  {
    "title": "Conversational UGC Video Ad",
    "description": "Write a friendly, chat-style UGC video ad that names the problem, agitates the pain, presents the solution, and ends with a CTA.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. I want a UGC ad that uses a friendly “chat” style format to engage [customer persona]. The video should be no longer than [time limit] seconds and open with a playful greeting. Implement PAS to frame the problem, agitate the pain, and offer the product as the solution by highlighting [benefit 1], [benefit 2], and [benefit 3]. End with a CTA motivating them to [action]. Ask me about any brand tone specifics before you begin.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Coaching Funnel Ads",
    "description": "Structure Facebook traffic, lead, and engagement ads into a funnel that converts coaching and consulting prospects from cold to paying clients.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to craft a Facebook ads plan for my [online coaching or consulting practice]. Explain how different campaign objectives—like traffic ads for webinars, lead ads for email capture, and engagement ads for credibility—can help funnel prospects toward booking sessions. Please ask me about my niche, the type of coaching I provide, and any existing funnel I have in place so you can optimize each step.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Program Engagement Ads",
    "description": "Plan Facebook video, live-session promos, and retargeting ads to build loyalty and engagement for membership or subscription programs.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to propose a results-driven approach for my [fitness or wellness program]. Explain how video ads, live session promotions, and retargeting ads can each play a distinct role in building a loyal customer base. Don’t forget to ask me about my target demographic, the nature of my program (online or in-person), and the types of results or testimonials I have, to craft the most engaging campaigns.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Local Business Ad Strategy",
    "description": "Run Facebook offers, local awareness, and story ads together to increase foot traffic and online orders for a local business.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to outline a detailed Facebook ad plan for my [local restaurant or café]. Show me how using offers ads, local awareness ads, and story ads could help increase foot traffic and online orders. Be sure to ask me about my unique menu items, typical customer profiles, and peak dining times so you can tailor your suggestions effectively.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Fundraising Ad Strategy",
    "description": "Plan a mix of Facebook awareness, conversion, and event ads to boost nonprofit fundraising and donor engagement at every stage.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to recommend an optimal campaign structure for my [nonprofit organization]. Describe how brand awareness ads, donation-focused conversion ads, and event promotion ads can work together to support fundraising goals. Please ask me about my mission, donor demographics, and any prior fundraising efforts so you can offer targeted strategies.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook B2B Lead Gen Strategy",
    "description": "Design Facebook lead ads with lookalike audiences and precise targeting to capture qualified B2B leads at a predictable cost per lead.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to craft a winning Facebook campaign for my [B2B software company]. Dive into the various campaign objectives—such as lead generation for B2B prospects—and elaborate on how I could use lookalike audiences, sponsored messages, and in-depth targeting to reach decision-makers in specific industries. Be sure to ask me about my buyer persona, sales cycle length, and any past campaign performance metrics to provide data-driven advice.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook App Ad Strategy",
    "description": "Pick the right Facebook ad formats for your app and learn how to use each one to drive installs, engagement, and in-app purchases.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to design a Facebook ads strategy for my [mobile app]. Walk me through the different ad types available—like app install ads and engagement ads—and explain the benefits of each for attracting downloads and active users. Don’t forget to ask me about my app’s features, my ideal user demographics, and any current download targets to ensure a customized approach.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Subscription Campaign Plan",
    "description": "Plan a full Facebook campaign for a subscription service covering awareness, conversion, retention, and win-back at every stage.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to create a holistic Facebook campaign plan for my [online subscription service]. Explain how to combine reach ads to build awareness, conversion ads to drive sign-ups, and retargeting ads to bring back users who haven't subscribed yet. Make sure to ask me about my subscription tiers, core value proposition, and any existing sales funnel data so you can fine-tune your recommendations.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Local Service Ad Strategy",
    "description": "Build a Facebook ads plan for a local service business using lead forms, Messenger ads, and geo-targeting to fill your appointment calendar.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to propose a strategy for my [local service-based business]. Discuss how Facebook lead generation ads, messenger ads, and boosted posts could each help me attract and capture new clients, and outline the distinct benefits of each approach. Please ask me about my current client acquisition process, budget, and typical customer profile to make your suggestions more relevant.",
    "category": "Facebook Ads"
  },
  {
    "title": "Fast-Paced UGC Video Ad",
    "description": "Write a fast-paced UGC video ad with a punchy hook, three quick benefit highlights, and a clear CTA that keeps viewers watching to the end.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. Create a UGC video ad for my [product] that targets [customer persona] looking for quick, effective solutions. Keep it under [time limit] seconds, starting with a fast-paced montage or hook. Emphasize how [benefit 1], [benefit 2], and [benefit 3] address their needs, and close with a CTA encouraging viewers to [action]. Make sure to ask me questions about pacing, brand style, and product advantages before writing.",
    "category": "Facebook Ads"
  },
  {
    "title": "Facebook Ecommerce Ad Strategy",
    "description": "Design a complete Facebook ad strategy for an ecommerce store with campaign objectives, creative formats, audience layers, and budget plan.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert Facebook ads marketing specialist. Your job is to suggest a comprehensive ad strategy for my [new ecommerce store]. Explain how different Facebook campaign objectives (like awareness, consideration, and conversion) can be used at each stage of my sales funnel, and highlight the benefits of ad formats such as carousel ads and video ads. Make sure to ask me about my target audience, my product range, and any existing marketing channels so you can tailor your advice to my specific needs.",
    "category": "Facebook Ads"
  },
  {
    "title": "Transformation UGC Video Ad",
    "description": "Write a UGC video script that shows the before-and-after transformation, reveals your product as the turning point, and invites action.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. I’d like a UGC video ad that focuses on the transformation my [product] offers to [customer persona]. Keep it under [time limit] seconds. Open with a strong “what life used to be like” scenario, introduce the product’s [benefit 1], [benefit 2], and [benefit 3], and then show the improved “after” state. End with a clear CTA telling viewers to [action]. Please confirm any real-life examples of transformations before drafting.",
    "category": "Facebook Ads"
  },
  {
    "title": "Comparison UGC Video Ad",
    "description": "Write a UGC video comparing the old way of doing things to the new way with your product, highlighting three standout benefits.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. I want a UGC video ad that compares my [product] to traditional solutions used by [customer persona]. The video must be under [time limit] seconds, beginning with a quick “old way vs. new way” montage. Emphasize how [benefit 1], [benefit 2], and [benefit 3] set my product apart. Conclude with a CTA that inspires viewers to [action]. Please inquire about my main differentiators before starting the script.",
    "category": "Facebook Ads"
  },
  {
    "title": "AIDA-Style UGC Video Ad",
    "description": "Write a testimonial-style UGC video using the AIDA model: attention, interest, desire, action. Builds trust and drives conversions.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. Help me create a UGC-style testimonial ad for my [product] tailored to [customer persona]. The video must stay under [time limit] seconds, starting with a relatable “user story” moment. Use the AIDA framework to weave in [benefit 1], [benefit 2], and [benefit 3], then close with a CTA prompting the viewer to [action]. Ask me questions about real customer success stories before starting the script.",
    "category": "Facebook Ads"
  },
  {
    "title": "Proof-Focused UGC Video Ad",
    "description": "Write a UGC video aimed at skeptical buyers. Open with a surprising claim, follow with proof points, and close with a risk-free offer.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. Craft a UGC video ad for my [product] designed for [customer persona] who are skeptical or hesitant. Keep it under [time limit] seconds, starting with a surprising statement that addresses their doubt. Follow up with proof points focusing on [benefit 1], [benefit 2], and [benefit 3]. End with a CTA encouraging them to [action]. Make sure to ask me questions about typical objections and proofs before drafting.",
    "category": "Facebook Ads"
  },
  {
    "title": "Lifestyle Integration UGC Video Ad",
    "description": "Write a UGC video showing your product fitting naturally into everyday life with engaging visuals and a genuine, unscripted feel.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. I need a UGC video ad demonstrating how my [product] fits seamlessly into the lifestyle of [customer persona]. The script should be no more than [time limit] seconds, featuring quick, visually appealing scenes. Highlight [benefit 1], [benefit 2], and [benefit 3] as part of everyday life. Conclude with a CTA nudging them to [action]. Please clarify my core branding elements before writing.",
    "category": "Facebook Ads"
  },
  {
    "title": "Urgency-Driven UGC Video Ad",
    "description": "Write a short UGC video ad focused on urgency. Limited time, limited stock, real reasons to act now before the offer disappears.",
    "method": "Copy & paste the prompt below into your preferred LLM. Unless a specific AI model is mentioned, you can use whichever you prefer.",
    "prompt": "You are an expert marketing script writer. Please create a UGC-style ad for my [product], focusing on [customer persona] who need quick results. The script must be no longer than [time limit] seconds, and should start by highlighting the urgency of their problem. Walk through the main features—[benefit 1], [benefit 2], [benefit 3]—and how they address this urgency. End with a CTA prompting viewers to [action]. Ask me any questions regarding features or audience specifics before you begin.",
    "category": "Facebook Ads"
  },
  {
    "title": "Code Performance Optimizer",
    "category": "Coding",
    "description": "Paste any function and get back specific optimizations for performance, memory usage, and time complexity with before-and-after examples.",
    "method": "Copy the prompt below into your preferred LLM, then paste your code snippet where indicated.",
    "prompt": "Go through the following function and suggest optimizations to improve its performance, memory usage, and time complexity. For each suggestion, explain why it improves performance and show the optimized version.\n\nProvide your analysis in this format:\n1. Current complexity analysis (time and space)\n2. Identified bottlenecks\n3. Optimization suggestions with explanations\n4. Optimized code with comments\n5. New complexity analysis after optimization\n\nHere is the code:\n[paste your code here]"
  },
  {
    "title": "Senior Code Reviewer",
    "category": "Coding",
    "description": "Get a senior developer-level code review covering readability, best practices, modularity, naming conventions, and potential improvements.",
    "method": "Paste the prompt into any LLM along with your code. Works with any programming language.",
    "prompt": "Analyze my project code like a senior developer. Review it thoroughly, then provide detailed feedback.\n\nCover these areas:\n1. Code readability and naming conventions\n2. Modularity and separation of concerns\n3. Potential bugs or edge cases\n4. Security vulnerabilities\n5. Performance considerations\n6. Best practices specific to this language\n7. What is done well (be specific)\n8. Priority-ranked list of improvements\n\nFor each issue, explain WHY it matters and show the fix. End with an overall quality rating (1-10) and the top 3 things to fix first.\n\nHere is the code:\n[paste your code here]"
  },
  {
    "title": "Bug Debugger",
    "category": "Coding",
    "description": "Describe the expected vs actual output and paste your code. Get a root cause analysis with a fix you can apply immediately.",
    "method": "Copy the prompt, fill in what the code should do, what it actually does, and paste your code snippet.",
    "prompt": "I need help debugging this code. It is supposed to do [EXPECTED OUTPUT], but instead it produces [ACTUAL OUTPUT].\n\nPlease:\n1. Identify the root cause of the bug\n2. Explain step-by-step why the current code produces the wrong output\n3. Provide the corrected code with comments explaining each change\n4. List any other potential issues you notice\n5. Suggest a test case that would have caught this bug\n\nHere is the code:\n[paste your code here]"
  },
  {
    "title": "Code Refactoring Assistant",
    "category": "Coding",
    "description": "Paste messy or complex code and get a clean, modular, well-named refactored version that follows language best practices.",
    "method": "Paste the prompt into any LLM along with the code you want refactored. Specify the programming language.",
    "prompt": "Refactor the following code to be more readable, modular, and aligned with best practices.\n\nYour refactoring should:\n1. Break complex functions into smaller, reusable pieces\n2. Improve variable and function naming to be self-documenting\n3. Remove redundant code and unnecessary complexity\n4. Add appropriate error handling where missing\n5. Follow the language's style guide and conventions\n6. Preserve all existing functionality\n\nProvide:\n- The refactored code with clear comments\n- A summary of every change you made and why\n- Any additional suggestions you held back on\n\nLanguage: [LANGUAGE]\nHere is the code:\n[paste your code here]"
  },
  {
    "title": "Unit Test Generator",
    "category": "Coding",
    "description": "Paste a function and get comprehensive unit tests covering normal operations, edge cases, invalid inputs, and boundary conditions.",
    "method": "Copy the prompt, specify your testing framework, and paste the function you want tested.",
    "prompt": "Write comprehensive unit tests for this function using [TESTING FRAMEWORK].\n\nCover these scenarios:\n1. Normal/expected inputs (at least 3 cases)\n2. Edge cases (empty inputs, single elements, boundaries)\n3. Invalid inputs (wrong types, null, undefined)\n4. Boundary conditions (max/min values, overflow)\n5. Error handling (expected exceptions)\n\nFor each test:\n- Give it a descriptive name that explains what it tests\n- Include a brief comment on why this test matters\n- Use arrange-act-assert pattern\n\nAlso suggest any additional test scenarios specific to this function's logic.\n\nHere is the function:\n[paste your code here]"
  },
  {
    "title": "REST API Builder",
    "category": "Coding",
    "description": "Describe what your API endpoint should do and get production-ready code with input validation, error handling, and proper status codes.",
    "method": "Copy the prompt, fill in the framework and endpoint details.",
    "prompt": "Write a REST API endpoint using [FRAMEWORK] that:\n\nEndpoint: [METHOD] [PATH]\nPurpose: [WHAT IT DOES]\nRequired fields: [LIST FIELDS]\n\nThe implementation should include:\n1. Input validation for all fields with clear error messages\n2. Proper HTTP status codes (200, 201, 400, 401, 404, 500)\n3. Error handling with try-catch and meaningful responses\n4. Request/response type definitions\n5. Basic rate limiting or auth middleware placeholder\n6. Example request and response payloads\n7. Brief inline comments explaining the logic\n\nWrite clean, production-ready code that follows RESTful conventions."
  },
  {
    "title": "Database Schema Designer",
    "category": "Coding",
    "description": "Describe your application and get a complete database schema with tables, relationships, indexes, and best practices baked in.",
    "method": "Copy the prompt and describe what your application does. Specify your database type (PostgreSQL, MySQL, MongoDB, etc.).",
    "prompt": "Generate a database schema for a [TYPE OF APPLICATION].\n\nDatabase: [PostgreSQL / MySQL / MongoDB / etc.]\n\nProvide:\n1. All necessary tables/collections with columns/fields\n2. Data types chosen with reasoning\n3. Primary keys, foreign keys, and relationships\n4. Indexes for common query patterns\n5. Constraints (unique, not null, check, default values)\n6. A visual representation of relationships (text-based ERD)\n7. Example seed data for testing\n8. Notes on scaling considerations\n\nFollow database normalization best practices while keeping queries efficient for the expected access patterns.\n\nApplication description: [DESCRIBE YOUR APP]"
  },
  {
    "title": "CI/CD Pipeline Generator",
    "category": "Coding",
    "description": "Describe your tech stack and deployment target to get a complete GitHub Actions workflow for testing, building, and deploying your app.",
    "method": "Copy the prompt and fill in your tech stack and hosting provider details.",
    "prompt": "Generate a GitHub Actions CI/CD workflow that does the following:\n\n1. Triggers on push to main and pull requests\n2. Runs linting and formatting checks\n3. Runs the full test suite\n4. Builds the application\n5. Deploys to [HOSTING PROVIDER] on success (only on main branch)\n\nTech stack: [YOUR STACK]\nNode version: [VERSION]\nTest command: [COMMAND]\nBuild command: [COMMAND]\n\nInclude:\n- Caching for dependencies to speed up builds\n- Environment variable handling for secrets\n- Separate jobs for test and deploy\n- Status badges markdown for the README\n- Comments explaining each step\n\nMake it production-ready and follow GitHub Actions best practices."
  },
  {
    "title": "System Design Evaluator",
    "category": "Coding",
    "description": "Describe your system architecture and get an expert evaluation covering scalability, redundancy, performance, and specific improvement suggestions.",
    "method": "Copy the prompt and describe your current system architecture in as much detail as possible.",
    "prompt": "Evaluate this system design for a production application.\n\nAnalyze these dimensions:\n1. Scalability: Can it handle 10x and 100x current load? Where are the bottlenecks?\n2. Reliability: What happens when each component fails? Are there single points of failure?\n3. Performance: What is the expected latency for key operations? Where can it be optimized?\n4. Security: Are there vulnerabilities in the data flow or access patterns?\n5. Cost: Is the architecture cost-efficient? Where is money being wasted?\n6. Maintainability: How easy is it to debug, update, and extend?\n\nFor each issue found, provide:\n- Severity (Critical / High / Medium / Low)\n- The specific problem\n- Your recommended solution\n- Trade-offs of the solution\n\nEnd with a prioritized action plan.\n\nHere is the architecture:\n[DESCRIBE YOUR ARCHITECTURE]"
  },
  {
    "title": "Error Message Fixer",
    "category": "Coding",
    "description": "Paste any error message and your stack trace. Get a clear explanation of what went wrong and step-by-step instructions to fix it.",
    "method": "Copy the prompt and paste your error message along with any relevant code context.",
    "prompt": "I am getting this error:\n\n[PASTE ERROR MESSAGE AND STACK TRACE]\n\nPlease:\n1. Explain in plain English what this error means\n2. Identify the most likely root cause\n3. Provide a step-by-step fix with code examples\n4. Explain how to prevent this error in the future\n5. If there are multiple possible causes, list them in order of likelihood\n\nMy tech stack: [LANGUAGE/FRAMEWORK]\nRelevant code context:\n[PASTE RELEVANT CODE IF AVAILABLE]"
  },
  {
    "title": "Article Outline Builder",
    "category": "Writing",
    "description": "Give it your topic and audience. Get a structured article outline with section goals, key questions to answer, and a compelling opening hook.",
    "method": "Copy the prompt and fill in your topic and target audience.",
    "prompt": "Create a detailed, logical outline for an article about [TOPIC].\n\nTarget audience: [AUDIENCE]\nArticle length: [WORD COUNT]\nGoal: [INFORM / PERSUADE / EDUCATE / ENTERTAIN]\n\nYour outline should include:\n1. A compelling headline (3 options)\n2. A hook for the introduction (narrative, data-led, or question-based)\n3. 5-7 main sections, each with:\n   - Section heading\n   - Key points to cover (3-4 bullets)\n   - One specific example, stat, or story to include\n   - The question this section answers for the reader\n4. A conclusion with a clear takeaway and call to action\n5. SEO keywords to naturally weave throughout\n\nMake the structure scannable and engaging for online readers."
  },
  {
    "title": "Content Clarity Editor",
    "category": "Writing",
    "description": "Paste any draft and get it edited for flow, structure, and readability while keeping your original voice and tone intact.",
    "method": "Copy the prompt and paste your draft text below it.",
    "prompt": "Edit this draft to improve flow, structure, and readability while preserving my original tone, intent, and key messages.\n\nSpecifically:\n1. Fix awkward phrasing and unclear sentences\n2. Improve paragraph transitions\n3. Cut unnecessary words and fluff (aim to reduce length by 15-20%)\n4. Strengthen weak openings and closings of sections\n5. Ensure consistent tone throughout\n6. Flag any claims that need sources or evidence\n\nProvide:\n- The edited version with changes highlighted in [brackets]\n- A summary of the major changes and why you made them\n- 3 suggestions for further improvement I could make myself\n\nHere is the draft:\n[PASTE YOUR DRAFT]"
  },
  {
    "title": "AI Text Humanizer",
    "category": "Writing",
    "description": "Paste AI-generated text and get it rewritten to sound natural, varied, and human. Removes robotic patterns and overused AI phrases.",
    "method": "Paste the prompt into any LLM along with the text you want humanized.",
    "prompt": "Rewrite the following text to sound completely natural and human-written.\n\nRules:\n1. Vary sentence length (mix short punchy sentences with longer ones)\n2. Remove ALL overused AI phrases: 'delve into', 'it's important to note', 'in today's landscape', 'leverage', 'streamline', 'foster', 'not just X but Y', 'the reality is'\n3. Use contractions naturally (don't, it's, we're)\n4. Add personality and specific details where generic language exists\n5. Use active voice over passive voice\n6. Break up long paragraphs\n7. Replace formal/stiff language with conversational alternatives\n8. Remove unnecessary hedging ('might', 'perhaps', 'it could be argued')\n\nThe rewrite should pass AI detection tools and read like a real person wrote it.\n\nHere is the text:\n[PASTE TEXT]"
  },
  {
    "title": "Email Reply Drafter",
    "category": "Writing",
    "description": "Paste the email you received and specify your goal. Get two reply versions: one concise and one detailed, both professional and clear.",
    "method": "Copy the prompt, paste the email you need to reply to, and specify the tone and goal.",
    "prompt": "Draft a reply to the email below.\n\nReply tone: [Professional / Friendly / Firm / Apologetic]\nGoal: [Accept / Decline / Negotiate / Inform / Follow-up]\nKey points to include: [YOUR POINTS]\n\nGuidelines:\n- Address every point in the original email\n- Be clear about next steps and expectations\n- Match the formality level of the original\n- Avoid passive-aggressive language\n\nProvide two versions:\n1. Concise version (under 100 words, gets straight to the point)\n2. Detailed version (adds context and warmth)\n\nHere is the email to reply to:\n[PASTE EMAIL]"
  },
  {
    "title": "Hook and Title Generator",
    "category": "Writing",
    "description": "Describe your content and get 10 scroll-stopping title options plus 3 opening hook variations to grab readers in the first sentence.",
    "method": "Copy the prompt and describe your content topic and target audience.",
    "prompt": "Generate titles and opening hooks for content about [TOPIC].\n\nTarget audience: [AUDIENCE]\nPlatform: [Blog / Newsletter / LinkedIn / YouTube / Twitter]\nTone: [Professional / Casual / Provocative / Inspirational]\n\nProvide:\n1. 10 title options using different formulas:\n   - 2 using numbers/lists\n   - 2 using questions\n   - 2 using strong claims or contrarian takes\n   - 2 using curiosity gaps\n   - 2 using benefit-focused language\n\n2. 3 opening hook variations:\n   - One starting with a surprising stat or fact\n   - One starting with a relatable story or scenario\n   - One starting with a bold statement or question\n\nEach title should be under 70 characters and optimized for clicks without being clickbait."
  },
  {
    "title": "Business Plan Generator",
    "category": "Business",
    "description": "Describe your idea and get a structured business plan with market analysis, revenue model, competitive positioning, and a 90-day action plan.",
    "method": "Copy the prompt and fill in your business idea details. Works best with as much context as possible.",
    "prompt": "Create a comprehensive business plan for the following idea:\n\nBusiness idea: [DESCRIBE YOUR IDEA]\nTarget market: [WHO IS THIS FOR]\nBudget: [STARTING BUDGET]\nTimeline: [WHEN YOU WANT TO LAUNCH]\n\nInclude these sections:\n1. Executive Summary (elevator pitch in 3 sentences)\n2. Problem Statement (what pain point you solve)\n3. Solution (how your product/service fixes it)\n4. Target Market Analysis (size, demographics, behavior)\n5. Competitive Landscape (who else does this, your advantage)\n6. Revenue Model (how you make money, pricing strategy)\n7. Marketing Strategy (how you reach customers)\n8. Financial Projections (month 1-12 revenue estimates)\n9. Key Metrics to Track (the 5 numbers that matter most)\n10. 90-Day Action Plan (week-by-week milestones)\n\nBe specific with numbers and timelines, not vague."
  },
  {
    "title": "Pitch Deck Outline Builder",
    "category": "Business",
    "description": "Enter your startup details and get a 10-slide pitch deck outline with talking points, data suggestions, and what investors want to see on each slide.",
    "method": "Copy the prompt and fill in your startup information.",
    "prompt": "Create a 10-slide pitch deck outline for my startup.\n\nCompany: [NAME]\nWhat we do: [ONE SENTENCE]\nStage: [Pre-seed / Seed / Series A]\nAsking for: [AMOUNT]\nKey metric: [YOUR BEST NUMBER]\n\nFor each slide, provide:\n- Slide title\n- 3-4 bullet points of content\n- What data or visual to include\n- The one thing investors should remember from this slide\n\nSlide structure:\n1. Title slide with hook\n2. Problem\n3. Solution\n4. Market size (TAM/SAM/SOM)\n5. Business model\n6. Traction and metrics\n7. Competitive advantage\n8. Team\n9. Financial projections\n10. The ask and use of funds\n\nMake it concise. Investors spend 3 minutes on average per deck."
  },
  {
    "title": "SWOT Analysis Generator",
    "category": "Business",
    "description": "Describe your business or product and get a detailed SWOT analysis with actionable strategies for each quadrant.",
    "method": "Copy the prompt and describe your business, product, or project.",
    "prompt": "Create a detailed SWOT analysis for:\n\nBusiness/Product: [NAME]\nIndustry: [INDUSTRY]\nCurrent stage: [STARTUP / GROWING / ESTABLISHED]\nMain competitors: [LIST 2-3]\n\nFor each quadrant, provide:\n\nStrengths (5 items):\n- What you do well, with evidence\n- Strategy: How to leverage each strength\n\nWeaknesses (5 items):\n- Honest assessment of gaps\n- Strategy: How to address or mitigate each\n\nOpportunities (5 items):\n- External trends you can capitalize on\n- Strategy: Specific action to seize each opportunity\n\nThreats (5 items):\n- External risks to watch\n- Strategy: How to defend against each threat\n\nEnd with: Top 3 strategic priorities based on this analysis."
  },
  {
    "title": "Financial Forecast Builder",
    "category": "Business",
    "description": "Provide your business numbers and get a 12-month revenue forecast with expense breakdown, cash flow projection, and key assumptions explained.",
    "method": "Copy the prompt and fill in your current business financials.",
    "prompt": "Build a 12-month financial forecast for my business.\n\nCurrent numbers:\n- Monthly revenue: [AMOUNT]\n- Monthly expenses: [AMOUNT]\n- Growth rate (month over month): [PERCENTAGE]\n- Customer acquisition cost: [AMOUNT]\n- Average revenue per customer: [AMOUNT]\n- Current customer count: [NUMBER]\n\nProvide:\n1. Month-by-month revenue projection (table format)\n2. Expense breakdown by category\n3. Cash flow forecast showing when you hit profitability\n4. Key assumptions behind each projection\n5. Best case, base case, and worst case scenarios\n6. The 3 levers that have the biggest impact on the forecast\n7. Warning signs to watch for that mean projections are off\n\nBe realistic, not optimistic. Use conservative estimates."
  },
  {
    "title": "Competitor Analysis Framework",
    "category": "Business",
    "description": "Name your competitors and get a structured comparison covering pricing, features, positioning, strengths, weaknesses, and where you can win.",
    "method": "Copy the prompt and list your competitors along with your own product details.",
    "prompt": "Create a competitive analysis for my business.\n\nMy product: [NAME AND WHAT IT DOES]\nCompetitors to analyze: [LIST 3-5 COMPETITORS]\n\nFor each competitor, analyze:\n1. Positioning (who they target and how they describe themselves)\n2. Pricing model and price points\n3. Key features (what they offer that I should know about)\n4. Strengths (what they do better than others)\n5. Weaknesses (where they fall short)\n6. Customer sentiment (what reviews say)\n\nThen provide:\n- A comparison matrix (table format)\n- Gaps in the market none of them are filling\n- My strongest differentiation opportunities\n- Specific messaging angles to position against each competitor\n- Features I should prioritize building based on competitive gaps"
  },
  {
    "title": "Cold Email Sequence Writer",
    "category": "Sales",
    "description": "Describe your product and target buyer. Get a 3-email outreach sequence with subject lines, personalization tips, and follow-up timing.",
    "method": "Copy the prompt and fill in your product and prospect details.",
    "prompt": "Write a 3-email cold outreach sequence.\n\nMy product: [WHAT YOU SELL]\nTarget buyer: [JOB TITLE AND COMPANY TYPE]\nKey pain point we solve: [MAIN PROBLEM]\nBest proof point: [CASE STUDY, STAT, OR SOCIAL PROOF]\n\nFor each email provide:\n- Subject line (under 50 characters, optimized for open rate)\n- Preview text\n- Email body (under 100 words each)\n- Clear CTA\n- When to send relative to the previous email\n\nEmail 1: Initial outreach (lead with their pain point)\nEmail 2: Follow-up with proof (send 3 days later)\nEmail 3: Breakup email (send 5 days after email 2)\n\nRules:\n- No generic openers ('I hope this finds you well')\n- Each email should stand alone (assume they did not read the previous one)\n- Include a personalization placeholder [PERSONAL NOTE] in each\n- Keep it conversational, not salesy"
  },
  {
    "title": "Sales Call Analyzer",
    "category": "Sales",
    "description": "Paste a sales call transcript and get a breakdown of missed opportunities, objection handling quality, and specific improvements for next time.",
    "method": "Copy the prompt and paste your sales call transcript or detailed notes.",
    "prompt": "Analyze this sales call transcript and provide actionable feedback.\n\nEvaluate:\n1. Opening (did the rep build rapport and set an agenda?)\n2. Discovery (were the right questions asked? were pain points uncovered?)\n3. Objection handling (how well were concerns addressed?)\n4. Value proposition (was the pitch relevant to the prospect's needs?)\n5. Closing (was there a clear next step?)\n6. Missed opportunities (moments where the rep could have gone deeper)\n\nProvide:\n- Overall score (1-10)\n- Top 3 things done well\n- Top 3 things to improve with specific alternative phrases\n- Exact moments where the conversation could have been redirected\n- A suggested follow-up email based on the conversation\n\nTranscript:\n[PASTE TRANSCRIPT]"
  },
  {
    "title": "Weekly Productivity Planner",
    "category": "Productivity",
    "description": "List your goals and tasks for the week. Get a time-blocked schedule with priorities, energy management, and built-in buffer time.",
    "method": "Copy the prompt and list your weekly tasks and goals.",
    "prompt": "Create a weekly productivity plan for me.\n\nMy goals this week: [LIST YOUR GOALS]\nMy tasks: [LIST ALL TASKS]\nWork hours: [START TIME] to [END TIME]\nHigh-energy time: [MORNING / AFTERNOON]\nMeetings already scheduled: [LIST TIMES]\n\nProvide:\n1. Tasks ranked by priority using the Eisenhower Matrix\n2. A day-by-day time-blocked schedule (Monday to Friday)\n3. Place deep work in my high-energy window\n4. Group similar tasks together for batching\n5. Build in 15-minute breaks every 90 minutes\n6. Leave 20% buffer time for unexpected work\n7. Identify tasks that can be delegated or eliminated\n8. End each day with a 10-minute planning block for the next day\n\nFormat as a clean, easy-to-follow table."
  },
  {
    "title": "Meeting Notes to Action Items",
    "category": "Productivity",
    "description": "Paste raw meeting notes or a transcript. Get a structured summary with decisions, action items, owners, deadlines, and open questions.",
    "method": "Copy the prompt and paste your meeting notes or transcript below it.",
    "prompt": "Process these raw meeting notes into a structured format.\n\n1. Meeting Summary (3-4 sentences covering what was discussed and outcome)\n\n2. Key Decisions Made (numbered list with context)\n\n3. Action Items Table:\n   | # | Task | Owner | Deadline | Priority |\n   |---|------|-------|----------|----------|\n\n4. Open Questions (unresolved items needing follow-up)\n\n5. Parking Lot (topics raised but not discussed, for future meetings)\n\n6. Next Steps (immediate actions and next meeting date/agenda)\n\nBe thorough. Do not miss any commitments or deadlines mentioned. If owners are unclear, flag it. If deadlines were not specified, suggest reasonable ones.\n\nHere are the meeting notes:\n[PASTE NOTES]"
  },
  {
    "title": "Problem-Solving Framework",
    "category": "Productivity",
    "description": "Describe any problem or decision you are stuck on. Get 3 potential solutions with pros, cons, and a clear recommended next step.",
    "method": "Copy the prompt and describe your problem or decision in detail.",
    "prompt": "I am stuck on this problem and need structured thinking to move forward.\n\nThe problem: [DESCRIBE YOUR PROBLEM]\nContext: [RELEVANT BACKGROUND]\nConstraints: [TIME, BUDGET, RESOURCES]\nWhat I have tried: [PREVIOUS ATTEMPTS]\n\nProvide:\n1. Reframe the problem in one clear sentence\n2. Three potential solutions, each with:\n   - Description of the approach\n   - Pros (3 specific advantages)\n   - Cons (3 specific disadvantages)\n   - Estimated time and effort\n   - Risk level (low/medium/high)\n3. Your recommended solution with reasoning\n4. A specific first action I can take in the next 30 minutes\n5. How I will know if the solution is working (success metrics)\n\nBe direct. Tell me what you would actually do in this situation."
  },
  {
    "title": "Workflow Optimization Audit",
    "category": "Productivity",
    "description": "Describe any repetitive process or workflow. Get inefficiencies identified, automation opportunities, and a streamlined alternative.",
    "method": "Copy the prompt and describe your current workflow step by step.",
    "prompt": "Review my current workflow and make it more efficient.\n\nProcess name: [NAME]\nHow often I do this: [DAILY / WEEKLY / MONTHLY]\nTime it currently takes: [DURATION]\n\nCurrent steps:\n[LIST YOUR STEPS]\n\nAnalyze and provide:\n1. Inefficiencies identified (which steps are wasteful or redundant)\n2. Steps that can be automated (and what tools to use)\n3. Steps that can be eliminated entirely\n4. Steps that can be batched or reordered\n5. A streamlined version of the workflow with estimated time savings\n6. Tools or templates that would speed this up\n7. A checklist version I can reuse every time\n\nGoal: reduce the time this takes by at least 40%."
  },
  {
    "title": "30-Day Learning Plan",
    "category": "Education",
    "description": "Pick any subject you want to learn. Get a structured 30-day plan with daily lessons, practice exercises, and milestones to track progress.",
    "method": "Copy the prompt and fill in the subject, your current level, and available study time.",
    "prompt": "Create a 30-day study plan for mastering [SUBJECT].\n\nMy current level: [BEGINNER / INTERMEDIATE / ADVANCED]\nTime available per day: [HOURS]\nLearning style: [READING / VIDEO / HANDS-ON / MIX]\nGoal: [WHAT I WANT TO BE ABLE TO DO AFTER 30 DAYS]\n\nProvide:\n1. Week-by-week breakdown with themes\n2. Daily lessons (30 entries) with:\n   - Topic to study\n   - Specific resource or activity\n   - Practice exercise\n   - Estimated time\n3. Weekly milestones to check understanding\n4. A mini-project for each week to apply what I learned\n5. A final assessment or capstone project for day 30\n6. Recommended free resources (websites, videos, tools)\n\nMake it progressive. Each day should build on the previous one."
  },
  {
    "title": "Explain Any Concept Simply",
    "category": "Education",
    "description": "Name any complex topic and get it explained in simple language with analogies, examples, and follow-up questions to deepen understanding.",
    "method": "Copy the prompt and replace [CONCEPT] with whatever you want to understand.",
    "prompt": "Explain [CONCEPT] in the simplest possible way.\n\nRules:\n1. Start with a one-sentence definition a 12-year-old would understand\n2. Use 2-3 real-world analogies that make the concept click\n3. Break it into parts if it has multiple components\n4. Give one concrete example showing the concept in action\n5. Explain why this concept matters (why should I care?)\n6. List common misconceptions people have about it\n7. End with a memorable one-liner summary\n\nThen provide:\n- 3 follow-up questions I should explore next to deepen my understanding\n- Brief answers to each follow-up question\n- One resource recommendation for going deeper\n\nUse zero jargon. If a technical term is unavoidable, define it immediately."
  },
  {
    "title": "Quiz and Test Generator",
    "category": "Education",
    "description": "Give it any topic and difficulty level. Get a complete quiz with multiple choice, short answer, and scenario-based questions plus an answer key.",
    "method": "Copy the prompt and specify the topic, difficulty level, and number of questions.",
    "prompt": "Generate a comprehensive quiz about [TOPIC].\n\nDifficulty: [BEGINNER / INTERMEDIATE / ADVANCED]\nNumber of questions: [NUMBER]\n\nInclude a mix of:\n1. Multiple choice questions (4 options each, only one correct)\n2. True/False questions with explanation of why\n3. Short answer questions\n4. One scenario-based question that tests application, not just memorization\n\nFor each question:\n- Make wrong answers plausible (not obviously wrong)\n- Vary the cognitive level (recall, understanding, application, analysis)\n\nProvide:\n- The complete quiz (questions only, no answers visible)\n- A separate answer key with:\n  - Correct answer\n  - Brief explanation of WHY it is correct\n  - Common mistake students make on this question\n\nMake it challenging but fair."
  },
  {
    "title": "AI Image Prompt Engineer",
    "category": "Creative",
    "description": "Describe any image in plain language and get a detailed, structured prompt optimized for Midjourney, DALL-E, or Stable Diffusion.",
    "method": "Copy the prompt and describe the image you want to create.",
    "prompt": "I want to create an AI-generated image. Convert my description into an optimized prompt.\n\nMy description: [DESCRIBE WHAT YOU WANT]\nStyle: [PHOTOREALISTIC / ILLUSTRATION / ANIME / OIL PAINTING / etc.]\nPlatform: [MIDJOURNEY / DALL-E / STABLE DIFFUSION]\nAspect ratio: [16:9 / 1:1 / 9:16]\n\nGenerate a detailed prompt that includes:\n1. Subject description with specific details\n2. Composition and framing (close-up, wide angle, bird's eye, etc.)\n3. Lighting (golden hour, dramatic, studio, neon, etc.)\n4. Color palette and mood\n5. Style references and artistic influences\n6. Technical quality tags (8K, ultra-detailed, professional, etc.)\n7. Negative prompt (what to avoid)\n\nProvide 3 prompt variations:\n- Version A: Most faithful to my description\n- Version B: More artistic/creative interpretation\n- Version C: Simplified for consistent results"
  },
  {
    "title": "Brand Name Generator",
    "category": "Creative",
    "description": "Describe your product, audience, and vibe. Get 20 brand name options with domain availability tips, logo direction, and tagline pairings.",
    "method": "Copy the prompt and fill in your product and brand details.",
    "prompt": "Generate brand name options for my business.\n\nWhat it does: [DESCRIBE YOUR PRODUCT/SERVICE]\nTarget audience: [WHO IS IT FOR]\nBrand personality: [MODERN / PLAYFUL / PREMIUM / TECHNICAL / WARM]\nIndustry: [YOUR INDUSTRY]\nNames to avoid sounding like: [COMPETITORS]\n\nProvide 20 name options across these styles:\n- 4 invented/coined words (like Spotify, Figma)\n- 4 real word combinations (like Airbnb, YouTube)\n- 4 descriptive names (like General Electric, Whole Foods)\n- 4 metaphorical names (like Amazon, Apple)\n- 4 abbreviated or acronym-based (like IBM, HBO)\n\nFor each name:\n- The name\n- Why it works for this brand\n- Potential .com domain (or alternative like .io, .co)\n- A tagline that pairs with it\n\nHighlight your top 3 recommendations and explain why."
  },
  {
    "title": "Video Script Writer",
    "category": "Creative",
    "description": "Describe your video topic, platform, and length. Get a complete script with hook, scenes, transitions, b-roll suggestions, and CTA.",
    "method": "Copy the prompt and fill in your video details.",
    "prompt": "Write a complete video script.\n\nTopic: [YOUR TOPIC]\nPlatform: [YouTube / TikTok / Instagram Reels / Course]\nTarget length: [DURATION]\nTone: [Educational / Entertaining / Inspirational / Sales]\nTarget audience: [WHO IS WATCHING]\n\nProvide:\n1. Hook (first 3 seconds that stop the scroll)\n2. Introduction (establish credibility and promise value)\n3. Main content broken into clear sections with:\n   - What to say (script)\n   - What to show on screen (b-roll or visual notes)\n   - Transition to next section\n4. Call to action (what viewers should do next)\n5. End screen suggestion\n\nAlso include:\n- 3 thumbnail title options\n- A one-sentence video description for SEO\n- 5 relevant hashtags\n\nWrite it conversationally. No one watches a video that sounds like a blog post."
  },
  {
    "title": "Job Description Writer",
    "category": "Business",
    "description": "Specify the role, level, and team. Get a compelling job description that attracts the right candidates and sets clear expectations.",
    "method": "Copy the prompt and fill in the role details.",
    "prompt": "Write a compelling job description.\n\nRole: [JOB TITLE]\nLevel: [JUNIOR / MID / SENIOR / LEAD]\nTeam: [WHICH DEPARTMENT]\nCompany type: [STARTUP / AGENCY / ENTERPRISE / REMOTE-FIRST]\nLocation: [REMOTE / HYBRID / ONSITE + CITY]\n\nInclude:\n1. An opening paragraph that sells the opportunity (not the company history)\n2. What this person will actually do (5-7 specific responsibilities)\n3. What success looks like in the first 90 days\n4. Required skills (only what is truly required, max 5)\n5. Nice-to-have skills (3-4 items)\n6. What we offer (compensation range, benefits, culture)\n7. How to apply\n\nRules:\n- Avoid generic phrases like 'fast-paced environment' and 'rockstar'\n- Be specific about the actual work, not vague corporate speak\n- Include salary range (transparency attracts better candidates)\n- Keep it under 600 words"
  },
  {
    "title": "Interview Question Generator",
    "category": "Business",
    "description": "Specify the role and what you need to evaluate. Get structured interview questions with scoring criteria and what good answers look like.",
    "method": "Copy the prompt and fill in the role and evaluation criteria.",
    "prompt": "Generate interview questions for a [ROLE] position.\n\nKey skills to evaluate: [LIST 3-5 SKILLS]\nExperience level: [JUNIOR / MID / SENIOR]\nTeam culture: [DESCRIBE YOUR TEAM]\n\nProvide 15 questions across these categories:\n1. Technical/skill-based (5 questions)\n2. Behavioral/situational (5 questions using STAR format prompts)\n3. Culture and motivation (3 questions)\n4. Problem-solving (2 scenario-based questions)\n\nFor each question:\n- The question itself\n- What you are really evaluating\n- What a strong answer includes\n- Red flags to watch for\n- A follow-up probe question\n\nAlso include:\n- 3 questions the candidate should ask YOU (and what their questions reveal)\n- A suggested scoring rubric (1-5 scale) for comparing candidates"
  },
  {
    "title": "Customer Onboarding Email Sequence",
    "category": "Business",
    "description": "Describe your product and new user journey. Get a 5-email onboarding sequence that guides users to their first success moment.",
    "method": "Copy the prompt and describe your product and ideal user journey.",
    "prompt": "Create a 5-email onboarding sequence for new users of my product.\n\nProduct: [WHAT IT DOES]\nFirst success moment: [THE AHA MOMENT FOR NEW USERS]\nAverage time to value: [HOW LONG UNTIL USERS SEE RESULTS]\nCommon drop-off point: [WHERE USERS GET STUCK]\n\nEmail sequence:\n1. Welcome email (sent immediately after signup)\n2. Quick win email (sent day 1, gets them to complete one action)\n3. Feature highlight (sent day 3, shows a key feature they might miss)\n4. Social proof (sent day 5, customer story or use case)\n5. Check-in (sent day 7, asks if they need help, offers upgrade)\n\nFor each email provide:\n- Subject line (under 50 characters)\n- Email body (under 150 words)\n- One clear CTA button text\n- Send timing\n\nTone should be helpful, not pushy. Guide, do not sell."
  },
  {
    "title": "Customer Feedback Analyzer",
    "category": "Business",
    "description": "Paste customer reviews, survey responses, or support tickets. Get a structured analysis with themes, sentiment, and prioritized action items.",
    "method": "Copy the prompt and paste your customer feedback data.",
    "prompt": "Analyze this customer feedback and extract actionable insights.\n\nFeedback source: [REVIEWS / SURVEYS / SUPPORT TICKETS / SOCIAL]\n\nProvide:\n1. Overall sentiment breakdown (positive / neutral / negative with percentages)\n2. Top 5 themes mentioned most frequently\n3. For each theme:\n   - Number of mentions\n   - Representative quotes\n   - Severity (critical / important / nice-to-have)\n   - Suggested action\n4. Unexpected insights (things you did not expect to find)\n5. Comparison: what customers love most vs. what frustrates them most\n6. Priority action list (top 5 things to fix or improve, ranked by impact)\n7. Suggested response templates for the most common complaints\n\nHere is the feedback:\n[PASTE FEEDBACK DATA]"
  },
  {
    "title": "ATS-Optimized Resume Builder",
    "category": "Resume & Career",
    "description": "Paste a job description and your experience. Get a tailored, ATS-friendly resume with keywords matched and achievements quantified.",
    "method": "Copy the prompt, paste the job description and your current resume or experience summary. The AI will rewrite your resume to match.",
    "prompt": "You are an expert resume writer who specializes in getting candidates past Applicant Tracking Systems (ATS) and impressing hiring managers.\n\nHere is the job description I am applying for:\n[PASTE JOB DESCRIPTION]\n\nHere is my current resume or experience summary:\n[PASTE YOUR RESUME OR LIST YOUR EXPERIENCE]\n\nYour task:\n1. Extract the top 15 keywords and phrases from the job description that an ATS will scan for\n2. Rewrite my resume to naturally incorporate these keywords\n3. For each work experience bullet point, use this format: Action Verb + Task + Quantified Result (include metrics, percentages, or dollar amounts)\n4. Transform vague responsibilities into specific, measurable achievements\n5. Write a professional summary (3-4 sentences) tailored to this specific role\n6. Suggest a skills section with both hard and soft skills extracted from the job posting\n7. Flag any gaps between my experience and the job requirements, and suggest how to address them\n8. Format everything cleanly with consistent tense (past for previous roles, present for current)\n\nKeep it to one page if under 10 years experience, two pages if over. No graphics, tables, or columns since ATS cannot parse them."
  },
  {
    "title": "Cover Letter That Gets Interviews",
    "category": "Resume & Career",
    "description": "Provide a job posting and your background. Get a personalized cover letter that connects your experience to the role's exact needs.",
    "method": "Paste the job description and your relevant experience. Customize the company-specific details before sending.",
    "prompt": "Write a cover letter for the following position. This is not a template. It should feel like a real person wrote it, not AI.\n\nJob title: [JOB TITLE]\nCompany: [COMPANY NAME]\nJob description: [PASTE KEY REQUIREMENTS]\n\nMy background:\n- Current role: [YOUR CURRENT TITLE AND COMPANY]\n- Years of experience: [NUMBER]\n- Top 3 relevant achievements: [LIST THEM WITH NUMBERS/METRICS]\n- Why I want this specific role: [YOUR GENUINE REASON]\n- Something I admire about this company: [SPECIFIC DETAIL]\n\nRules:\n- Opening paragraph: Hook them with a specific achievement that directly relates to their biggest need. No \"I am writing to express my interest\" openings.\n- Second paragraph: Connect 2-3 of my achievements to their specific requirements. Use numbers.\n- Third paragraph: Show I have researched the company. Reference something specific about their mission, recent news, or product.\n- Closing paragraph: Confident but not arrogant. Propose a next step.\n- Keep under 350 words total\n- Tone: Professional, confident, human. Write like someone who is genuinely excited about this role, not desperate."
  },
  {
    "title": "Career Change Resume Translator",
    "category": "Resume & Career",
    "description": "Switching careers? Describe your old and new field. Get your existing skills reframed as transferable strengths for the new industry.",
    "method": "Fill in your current field, target field, and experience details. The AI maps your transferable skills to the new role.",
    "prompt": "I am changing careers and need help translating my experience for a completely different field.\n\nCurrent field: [YOUR CURRENT INDUSTRY/ROLE]\nTarget field: [THE INDUSTRY/ROLE YOU WANT]\nYears in current field: [NUMBER]\nTarget job title: [SPECIFIC TITLE YOU ARE APPLYING FOR]\n\nMy key responsibilities and achievements in my current role:\n[LIST 5-8 BULLET POINTS]\n\nYour task:\n1. Identify every transferable skill from my current experience that is relevant to my target role\n2. For each transferable skill, rewrite it using the language and terminology of my target industry\n3. Create a \"bridge statement\" for my professional summary that explains why this career change makes me a stronger candidate, not a weaker one\n4. Suggest which of my achievements to highlight and which to downplay\n5. Identify any skills gaps I should address (certifications, courses, volunteer work) and suggest specific resources\n6. Write 5 resume bullet points that reframe my existing experience for the new field\n7. Draft a brief explanation for interviews about why I am making this transition (confident, forward-looking, not apologetic)\n\nMake the career change feel like a strategic decision, not a random leap."
  },
  {
    "title": "Interview Prep Coach",
    "category": "Resume & Career",
    "description": "Share the job title and company. Get likely interview questions with structured STAR-method answers tailored to your experience.",
    "method": "Provide the role details and your background. Practice with the generated questions before your interview.",
    "prompt": "Act as a senior interview coach who has helped hundreds of candidates land offers at top companies.\n\nI have an interview for:\nRole: [JOB TITLE]\nCompany: [COMPANY NAME]\nInterview type: [PHONE SCREEN / BEHAVIORAL / TECHNICAL / PANEL / FINAL ROUND]\n\nMy background: [BRIEF SUMMARY OF YOUR EXPERIENCE]\n\nPrepare me with:\n\n1. The 10 most likely questions for this specific role and company, categorized as:\n   - Behavioral (tell me about a time...)\n   - Situational (what would you do if...)\n   - Role-specific (technical or domain knowledge)\n   - Culture fit\n\n2. For each question, provide:\n   - Why they are asking this (what they are really evaluating)\n   - A structured STAR-method answer framework (Situation, Task, Action, Result) I can customize with my own examples\n   - What a weak answer looks like vs. what a strong answer looks like\n   - Red flags to avoid\n\n3. Five smart questions I should ask them that show I have done my research and think strategically\n\n4. Common traps for this type of interview and how to handle them\n\n5. A 30-second elevator pitch about myself tailored to this role"
  },
  {
    "title": "LinkedIn Profile Optimizer",
    "category": "Resume & Career",
    "description": "Share your current profile details and career goals. Get a rewritten headline, about section, and experience that attracts recruiters.",
    "method": "Paste your current LinkedIn sections and target role. The AI rewrites each section to maximize recruiter visibility.",
    "prompt": "Rewrite my LinkedIn profile to attract recruiters and establish authority in my field.\n\nMy current headline: [YOUR CURRENT HEADLINE]\nTarget role: [WHAT JOB TITLE YOU WANT TO BE FOUND FOR]\nIndustry: [YOUR INDUSTRY]\nYears of experience: [NUMBER]\nTop 3 skills: [LIST THEM]\nBiggest career achievement: [DESCRIBE WITH NUMBERS]\n\nRewrite the following sections:\n\n1. Headline (max 220 characters): Do not just list your job title. Use the format: [What you do] | [Who you help] | [Key result you deliver]. Include searchable keywords recruiters use.\n\n2. About section (max 2600 characters):\n   - First line must be a hook that makes people click \"see more\"\n   - Write in first person, conversational but professional\n   - Include 3-4 key achievements with metrics\n   - Weave in relevant keywords naturally (not a keyword dump)\n   - End with a clear CTA about what you are looking for or open to\n   - Break into short paragraphs for readability\n\n3. Experience section: For my current role, write 4-5 bullet points that focus on achievements over responsibilities. Each bullet should start with a strong verb and include a measurable result.\n\n4. Skills section: Suggest 10 skills to list, ordered by relevance to my target role\n\n5. Bonus: Suggest 3 content topics I should post about to build authority in my niche"
  },
  {
    "title": "Data Cleaning Assistant",
    "category": "Data Analysis",
    "description": "Describe your messy dataset. Get a step-by-step cleaning plan with Python or SQL code for handling missing values, duplicates, and formats.",
    "method": "Describe your data issues (column names, data types, problems). Get ready-to-run code for your preferred tool.",
    "prompt": "Act as a senior data analyst. I need help cleaning and preprocessing a dataset before analysis.\n\nDataset description:\n- Source: [WHERE THE DATA COMES FROM]\n- Number of rows: [APPROXIMATE]\n- Number of columns: [NUMBER]\n- Column names and types: [LIST THEM, e.g., name (text), date (mixed formats), revenue (numbers with $ signs)]\n- Tool I am using: [PYTHON PANDAS / SQL / EXCEL / R]\n\nKnown issues:\n[DESCRIBE YOUR DATA PROBLEMS, e.g.:\n- Date column has mixed formats (MM/DD/YYYY and YYYY-MM-DD)\n- Price column has some entries with $ signs and commas\n- About 15% of the email column is blank\n- Duplicate rows based on customer_id\n- Some names have extra whitespace or inconsistent capitalization]\n\nFor each issue, provide:\n1. What the problem is and why it matters for analysis\n2. The recommended approach to fix it\n3. The exact code to implement the fix (in my preferred tool)\n4. A validation check to confirm the fix worked\n\nAlso provide:\n- A summary statistics check I should run after cleaning\n- A data quality report template I can reuse\n- Suggestions for any additional cleaning steps I might have missed"
  },
  {
    "title": "SQL Query Generator",
    "category": "Data Analysis",
    "description": "Describe your tables and the question you want answered. Get an optimized SQL query with explanations for each clause.",
    "method": "List your table names, columns, and what you want to find out. The AI writes the SQL and explains the logic.",
    "prompt": "Write a SQL query to answer my business question. Explain each part so I understand the logic.\n\nDatabase type: [MYSQL / POSTGRESQL / SQLITE / SQL SERVER / BIGQUERY]\n\nMy tables:\n[DESCRIBE YOUR TABLES, e.g.:\n- orders (order_id, customer_id, product_id, order_date, amount, status)\n- customers (customer_id, name, email, signup_date, region)\n- products (product_id, name, category, price)]\n\nWhat I want to find out:\n[YOUR QUESTION IN PLAIN ENGLISH, e.g., \"Show me the top 10 customers by total spend in the last 6 months, along with how many orders they placed and their most purchased product category\"]\n\nProvide:\n1. The complete SQL query, properly formatted and indented\n2. A line-by-line explanation of what each clause does and why\n3. Expected output format (what the result columns will look like)\n4. Performance tips (indexes that would help, potential bottlenecks)\n5. Two variations: one simpler version if I need a quick answer, one advanced version with additional insights\n6. Common mistakes to avoid with this type of query"
  },
  {
    "title": "Dashboard Design Planner",
    "category": "Data Analysis",
    "description": "Describe your dataset and audience. Get a complete dashboard layout with recommended charts, KPIs, filters, and data storytelling flow.",
    "method": "Share what data you have and who will view the dashboard. Get a full design blueprint to build in your preferred tool.",
    "prompt": "Design a dashboard layout for the following scenario. Think like a data visualization expert who prioritizes clarity and actionable insights.\n\nData available:\n[DESCRIBE YOUR DATASET AND KEY COLUMNS]\n\nDashboard audience: [WHO WILL USE THIS: CEO / MARKETING TEAM / OPERATIONS / SALES]\nPrimary question it should answer: [THE MAIN BUSINESS QUESTION]\nTool I will build it in: [TABLEAU / POWER BI / GOOGLE SHEETS / LOOKER / EXCEL]\n\nDesign the dashboard with:\n\n1. KPI cards (top row): List 4-6 key metrics with:\n   - Metric name\n   - How to calculate it\n   - Comparison benchmark (vs. last month, vs. target, etc.)\n   - Color coding rules (green/yellow/red thresholds)\n\n2. Primary visualizations: Suggest 3-4 charts with:\n   - Chart type and why it is the best choice for this data\n   - What goes on each axis\n   - Any drill-down capabilities\n   - Layout position (where it sits on the dashboard)\n\n3. Filters and interactivity:\n   - Which filters to include (date range, category, region, etc.)\n   - How filters should affect each visualization\n\n4. Data storytelling flow: Describe the visual path a user's eye should follow from top-left to bottom-right and what insight they gain at each step\n\n5. Mobile considerations: How should the layout adapt for smaller screens"
  },
  {
    "title": "Regression Analysis Guide",
    "category": "Data Analysis",
    "description": "Describe your variables and hypothesis. Get a complete regression analysis workflow with code, interpretation tips, and pitfall warnings.",
    "method": "Share your dependent and independent variables. The AI walks you through the full analysis with code and interpretation.",
    "prompt": "Walk me through a complete regression analysis for my dataset. Explain everything in plain language alongside the code.\n\nWhat I am trying to predict: [DEPENDENT VARIABLE, e.g., sales revenue, customer churn, house price]\nFactors I think influence it: [INDEPENDENT VARIABLES, e.g., advertising spend, season, customer age, location]\nDataset size: [NUMBER OF ROWS]\nTool: [PYTHON / R / EXCEL]\n\nProvide a step-by-step guide:\n\n1. Data preparation:\n   - How to check if my data is ready for regression\n   - Tests for multicollinearity, normality, and outliers\n   - Code for each check with interpretation of results\n\n2. Model selection:\n   - Should I use linear, logistic, or another type of regression? Explain why based on my variables.\n   - Code to build the model\n\n3. Model evaluation:\n   - R-squared: what it means in plain English for my case\n   - P-values: which variables actually matter and which do not\n   - Residual analysis: how to check if the model is valid\n   - Code for all evaluation metrics\n\n4. Interpretation:\n   - Explain what each coefficient means in business terms (not just math)\n   - Example: \"For every $1,000 increase in ad spend, sales increase by approximately $X\"\n\n5. Common pitfalls:\n   - What could make my results misleading\n   - How to handle categorical variables\n   - When to add interaction terms\n\n6. Next steps: What to do if the model is not good enough"
  },
  {
    "title": "Email Drip Campaign Builder",
    "category": "Email Marketing",
    "description": "Describe your product, audience, and goal. Get a complete multi-email sequence with subject lines, body copy, timing, and CTAs.",
    "method": "Fill in your product and audience details. Get a ready-to-load email sequence for your email marketing platform.",
    "prompt": "Create a complete email drip campaign from scratch.\n\nProduct or service: [WHAT YOU ARE SELLING]\nTarget audience: [WHO THEY ARE, THEIR PAIN POINTS]\nCampaign goal: [NURTURE LEADS / ONBOARD NEW USERS / RE-ENGAGE COLD LEADS / LAUNCH A PRODUCT]\nNumber of emails: [5-7 RECOMMENDED]\nBrand tone: [PROFESSIONAL / CASUAL / BOLD / FRIENDLY]\n\nFor each email in the sequence, provide:\n\n1. Send timing (e.g., Day 0, Day 2, Day 5, etc.) and why that spacing works\n2. Subject line (under 50 characters) + one alternative subject line for A/B testing\n3. Preview text (the snippet shown in inbox)\n4. Email body:\n   - Opening hook (first sentence must earn the second sentence)\n   - Main content (under 150 words)\n   - One clear CTA button with specific text\n5. The psychological principle behind each email (scarcity, social proof, reciprocity, etc.)\n\nAlso provide:\n- The overall narrative arc across all emails (how the story builds)\n- Segmentation suggestions (who should get this vs. who should not)\n- When to stop the sequence if someone converts\n- Subject line formulas I can reuse for future campaigns\n- Expected open rate benchmarks for this type of sequence"
  },
  {
    "title": "Email Subject Line Generator",
    "category": "Email Marketing",
    "description": "Describe your email topic, audience, and goal. Get 20 subject lines with A/B test pairs, psychological triggers, and spam-check tips.",
    "method": "Share what the email is about and who it is for. Pick the best subject lines from the generated options.",
    "prompt": "Generate high-performing email subject lines for the following campaign.\n\nEmail topic: [WHAT THE EMAIL IS ABOUT]\nAudience: [WHO RECEIVES THIS EMAIL]\nGoal: [OPEN THE EMAIL / CLICK A LINK / MAKE A PURCHASE / REGISTER FOR EVENT]\nBrand tone: [PROFESSIONAL / PLAYFUL / URGENT / CONVERSATIONAL]\n\nGenerate 20 subject lines organized by strategy:\n\n1. Curiosity gap (5 options): Make them need to know what is inside\n2. Benefit-driven (5 options): Lead with what they get\n3. Urgency and scarcity (5 options): Create time pressure without being spammy\n4. Personalization (5 options): Use [FIRST_NAME] or segment-specific language\n\nFor each subject line:\n- Keep under 50 characters (mobile-friendly)\n- Rate it: expected open rate impact (high / medium / low)\n- Flag any spam trigger words to avoid\n- Suggest a matching preview text (the snippet after the subject)\n\nAlso:\n- Pair your top 3 as A/B tests (version A vs. version B)\n- Explain what makes the #1 pick your strongest recommendation\n- List 10 words and phrases that trigger spam filters so I can avoid them in future"
  },
  {
    "title": "Re-engagement Email for Cold Leads",
    "category": "Email Marketing",
    "description": "Describe your product and how long leads have been inactive. Get a win-back email sequence that re-activates cold subscribers.",
    "method": "Share your product, audience, and inactivity period. Get a ready-to-use re-engagement campaign.",
    "prompt": "Write a re-engagement email sequence to win back subscribers who have gone cold.\n\nMy product/service: [WHAT YOU SELL]\nHow long they have been inactive: [30 DAYS / 60 DAYS / 90+ DAYS]\nLast action they took: [SIGNED UP / PURCHASED ONCE / OPENED BUT DID NOT BUY]\nWhat I can offer: [DISCOUNT / FREE TRIAL EXTENSION / NEW FEATURE / EXCLUSIVE CONTENT]\n\nCreate a 3-email win-back sequence:\n\nEmail 1 (The Gentle Nudge):\n- Acknowledge the absence without guilt-tripping\n- Remind them why they signed up in the first place\n- Share one compelling update or improvement since they left\n- Soft CTA: come back and see what is new\n\nEmail 2 (The Value Bomb) - send 3 days after Email 1:\n- Lead with a valuable resource, tip, or insight (give before asking)\n- Show social proof: what other customers are achieving\n- Stronger CTA with your incentive offer\n\nEmail 3 (The Breakup Email) - send 5 days after Email 2:\n- Be direct: \"Should we remove you from our list?\"\n- Give them a one-click option to stay or unsubscribe\n- This creates urgency through loss aversion\n\nFor each email provide: subject line, preview text, full body copy, and CTA button text. Keep each email under 120 words. Tone should be human and respectful, never desperate."
  },
  {
    "title": "Zero-Based Budget Builder",
    "category": "Personal Finance",
    "description": "Enter your monthly income and expenses. Get a complete zero-based budget where every dollar is assigned a job, plus savings strategies.",
    "method": "Fill in your income and expense details. The AI creates a budget that allocates every dollar to a specific purpose.",
    "prompt": "Create a complete zero-based budget for me. Every dollar of income should be assigned to a specific category so that income minus all allocations equals exactly zero.\n\nMy financial details:\n- Monthly take-home income: $[AMOUNT]\n- Additional income sources: [FREELANCE / SIDE HUSTLE / INVESTMENTS / NONE]\n- Monthly fixed expenses: [LIST THEM: rent, car payment, insurance, subscriptions, etc. with amounts]\n- Variable expenses (estimated): [GROCERIES, GAS, DINING OUT, ENTERTAINMENT, etc.]\n- Current debt: [LIST DEBTS: type, balance, interest rate, minimum payment]\n- Financial goals: [EMERGENCY FUND / PAY OFF DEBT / SAVE FOR HOUSE / INVEST / VACATION]\n- Goal timeline: [WHEN YOU WANT TO ACHIEVE IT]\n\nProvide:\n1. A complete budget table with every category, allocated amount, and percentage of income\n2. Apply the priority order: essentials first, then debt payments, then savings, then wants\n3. Identify areas where I am likely overspending and suggest realistic cuts\n4. A debt payoff strategy: compare avalanche (highest interest first) vs. snowball (smallest balance first) for my specific debts and recommend one\n5. Emergency fund target: calculate my number based on essential expenses times 3-6 months\n6. A \"buffer\" category for irregular expenses (car repair, medical, gifts)\n7. Weekly spending limits for variable categories to keep me on track\n8. One automation tip: what to set up as automatic transfers on payday"
  },
  {
    "title": "Debt Payoff Strategy",
    "category": "Personal Finance",
    "description": "List your debts with balances, rates, and minimums. Get a month-by-month payoff plan with total interest saved and a debt-free date.",
    "method": "Enter all your debts with details. The AI creates a payoff roadmap comparing different strategies.",
    "prompt": "Build me a detailed debt payoff plan. I want to see exactly when I will be debt-free.\n\nMy debts:\n[LIST EACH DEBT WITH:\n- Type (credit card, student loan, car loan, personal loan, etc.)\n- Current balance\n- Interest rate (APR)\n- Minimum monthly payment]\n\nExtra money I can put toward debt each month beyond minimums: $[AMOUNT]\n\nProvide:\n1. Avalanche method plan (attack highest interest rate first):\n   - Order of payoff\n   - Month-by-month payment schedule\n   - Total interest paid\n   - Debt-free date\n\n2. Snowball method plan (attack smallest balance first):\n   - Order of payoff\n   - Month-by-month payment schedule\n   - Total interest paid\n   - Debt-free date\n\n3. Side-by-side comparison: how much more interest the snowball costs vs. avalanche, and whether the psychological wins are worth it for my situation\n\n4. Quick wins: any debts I can eliminate in the next 30-60 days to build momentum\n\n5. Warning signs: minimum payments that barely cover interest (debt traps)\n\n6. If applicable: should I consider balance transfer or consolidation? Calculate if it makes sense.\n\n7. Monthly milestone checklist I can print and cross off as I go"
  },
  {
    "title": "Investment Portfolio Review",
    "category": "Personal Finance",
    "description": "Share your investment holdings and goals. Get an analysis of your asset allocation, diversification gaps, and rebalancing suggestions.",
    "method": "List your current investments and financial goals. The AI reviews your portfolio and suggests improvements.",
    "prompt": "Review my investment portfolio and suggest improvements. You are not providing financial advice, just educational analysis.\n\nMy situation:\n- Age: [YOUR AGE]\n- Risk tolerance: [CONSERVATIVE / MODERATE / AGGRESSIVE]\n- Investment timeline: [YEARS UNTIL YOU NEED THE MONEY]\n- Monthly amount I can invest: $[AMOUNT]\n- Retirement accounts: [401K / IRA / ROTH IRA / NONE]\n- Employer match: [YES, UP TO X% / NO]\n\nMy current holdings:\n[LIST YOUR INVESTMENTS, e.g.:\n- S&P 500 index fund: $X\n- Individual stocks: [LIST THEM WITH VALUES]\n- Bonds: $X\n- Cash/savings: $X\n- Crypto: $X\n- Real estate: $X]\n\nAnalyze:\n1. Current asset allocation (stocks vs. bonds vs. cash vs. alternatives) as percentages\n2. Compare my allocation to recommended allocation for my age and risk tolerance\n3. Diversification check: am I too concentrated in any sector, geography, or asset class?\n4. Am I maximizing my employer match? If not, calculate how much free money I am leaving on the table\n5. Tax efficiency: are my investments in the right account types?\n6. Rebalancing suggestions: what to increase, decrease, or add\n7. A simple monthly investment plan going forward\n\nDisclaimer: This is educational, not financial advice. I should consult a qualified financial advisor for personalized decisions."
  },
  {
    "title": "Freelance Proposal Writer",
    "category": "Freelancing",
    "description": "Describe the client project and your skills. Get a professional proposal with scope, timeline, pricing, and terms ready to send.",
    "method": "Fill in the project details and your expertise. Customize the generated proposal with your branding before sending.",
    "prompt": "Write a professional freelance proposal that wins the project.\n\nProject details:\n- Client's project: [DESCRIBE WHAT THEY NEED]\n- Platform: [UPWORK / FIVERR / DIRECT CLIENT / COLD OUTREACH]\n- Client's stated budget: [AMOUNT OR \"NOT SPECIFIED\"]\n- My relevant skills: [LIST YOUR KEY SKILLS]\n- My experience: [YEARS AND 1-2 SIMILAR PROJECTS YOU HAVE DONE]\n\nWrite a proposal that includes:\n\n1. Opening hook (2-3 sentences): Show I understand their specific problem. Reference something from their project description. No generic \"I am a skilled professional\" openings.\n\n2. Proposed approach: Break the project into 3-5 clear phases with deliverables for each\n\n3. Timeline: Realistic milestones with dates\n\n4. Pricing:\n   - If they stated a budget: work within it but explain what is included\n   - If no budget: provide 2-3 tier options (basic, standard, premium) with clear scope differences\n\n5. Social proof: How to reference past work without sounding boastful\n\n6. Why me (not just skills, but the specific advantage I bring to THIS project)\n\n7. Next steps: A clear CTA for what happens after they accept\n\n8. Professional terms: Payment schedule, revision policy, communication expectations\n\nTone: Confident, specific, client-focused. Every sentence should answer the client's unspoken question: \"Why should I hire you over the other 50 applicants?\""
  },
  {
    "title": "Scope Creep Prevention Plan",
    "category": "Freelancing",
    "description": "Describe your project scope and client situation. Get a change request system, boundaries script, and scope protection framework.",
    "method": "Fill in the project details. Use the generated framework to protect your time and set clear boundaries with clients.",
    "prompt": "Help me prevent and manage scope creep for my freelance project.\n\nProject type: [WEB DESIGN / COPYWRITING / DEVELOPMENT / MARKETING / ETC.]\nOriginal scope: [WHAT WAS AGREED UPON]\nClient type: [STARTUP / CORPORATE / SMALL BUSINESS / INDIVIDUAL]\nCurrent situation: [DESCRIBE ANY SCOPE CREEP ALREADY HAPPENING, OR \"STARTING FRESH\"]\n\nCreate:\n\n1. Scope definition document template:\n   - Clear list of what IS included (deliverables, revisions, timeline)\n   - Explicit list of what is NOT included\n   - Definition of \"done\" for each deliverable\n   - Number of revision rounds and what counts as a revision vs. a new request\n\n2. Change request process:\n   - A polite but firm email template for when a client asks for something outside scope\n   - How to frame additional work as an opportunity (not a conflict)\n   - A simple change order template with: description, estimated time, cost, impact on timeline\n\n3. Prevention strategies:\n   - 5 questions to ask during the initial briefing that prevent scope creep later\n   - Red flags that a client will be a scope creeper\n   - How to build a buffer into your timeline and pricing without overcharging\n\n4. Scripts for common scenarios:\n   - \"Can you just add one more thing?\" response\n   - \"I thought this was included\" response\n   - \"My colleague has some changes\" response\n\nTone: Professional and relationship-preserving. The goal is to protect my boundaries while keeping the client happy."
  },
  {
    "title": "Freelance Rate Calculator",
    "category": "Freelancing",
    "description": "Enter your expenses, desired income, and working hours. Get your minimum hourly rate, project pricing formulas, and rate increase scripts.",
    "method": "Fill in your financial details and career info. Get data-backed pricing you can confidently present to clients.",
    "prompt": "Help me calculate my freelance rates so I am not undercharging.\n\nMy details:\n- Desired annual income (what I want to take home): $[AMOUNT]\n- Country/city: [LOCATION, for cost of living context]\n- Specialty: [YOUR FREELANCE SKILL]\n- Experience level: [BEGINNER / INTERMEDIATE / EXPERT]\n- Hours I want to work per week: [NUMBER]\n- Weeks of vacation per year: [NUMBER]\n\nMy business expenses:\n- Software and tools: $[MONTHLY]\n- Health insurance: $[MONTHLY]\n- Retirement savings: $[MONTHLY]\n- Taxes (estimated bracket): [PERCENTAGE]\n- Equipment, internet, workspace: $[MONTHLY]\n- Other: $[MONTHLY]\n\nCalculate:\n1. My true hourly rate (factoring in only billable hours, which is typically 60-70% of total work hours since the rest is admin, marketing, and learning)\n2. My minimum project rate formula for different project types\n3. Value-based pricing guide: when to charge by value instead of time, and how to calculate it\n4. Package pricing examples: how to bundle my services into 3 tiers\n5. Rate comparison: where my rate falls compared to industry averages for my skill and experience\n6. A rate increase script I can use with existing clients\n7. How to justify my rates when a client says \"that is too expensive\"\n8. When to take lower-paying work strategically (portfolio building, referral potential) vs. when to walk away"
  },
  {
    "title": "Sprint Retrospective Facilitator",
    "category": "Project Management",
    "description": "Share your sprint goals and outcomes. Get a structured retrospective with what worked, what failed, root causes, and action items.",
    "method": "Enter your sprint details and team observations. Use the output to run a focused, productive retrospective meeting.",
    "prompt": "Facilitate a sprint retrospective analysis for my team.\n\nSprint details:\n- Sprint number/name: [SPRINT IDENTIFIER]\n- Sprint goal: [WHAT WE SET OUT TO ACHIEVE]\n- Duration: [1 WEEK / 2 WEEKS / 3 WEEKS]\n- Team size: [NUMBER OF PEOPLE]\n- What we completed: [LIST COMPLETED ITEMS]\n- What we did not complete: [LIST INCOMPLETE ITEMS]\n- Unexpected issues: [ANYTHING THAT CAME UP MID-SPRINT]\n\nTeam observations (optional):\n[PASTE ANY FEEDBACK FROM TEAM MEMBERS]\n\nGenerate a structured retrospective:\n\n1. What went well (keep doing):\n   - Identify 3-5 wins with specific reasons why they worked\n   - Highlight individual or team behaviors worth reinforcing\n\n2. What did not go well (stop doing):\n   - Identify 3-5 problems with root cause analysis (use \"5 Whys\" technique)\n   - Distinguish between process problems vs. people problems vs. external factors\n\n3. What to try next sprint (start doing):\n   - 3-5 specific, actionable experiments (not vague goals like \"communicate better\")\n   - Each action item should have: owner, deadline, and success criteria\n\n4. Velocity analysis:\n   - Was our estimation accurate? Where did we over/underestimate?\n   - Capacity planning suggestions for next sprint\n\n5. Team health check: Based on the patterns, rate team morale and suggest one team-building action\n\n6. One-page summary I can share with stakeholders (non-technical language)"
  },
  {
    "title": "Project Risk Assessment Matrix",
    "category": "Project Management",
    "description": "Describe your project scope and constraints. Get a risk register with probability, impact, mitigation plans, and contingency triggers.",
    "method": "Enter your project details. Use the risk matrix to proactively manage threats before they become problems.",
    "prompt": "Create a comprehensive risk assessment for my project.\n\nProject overview:\n- Project name: [NAME]\n- Type: [SOFTWARE / CONSTRUCTION / MARKETING CAMPAIGN / PRODUCT LAUNCH / EVENT]\n- Timeline: [START DATE] to [END DATE]\n- Budget: $[AMOUNT]\n- Team size: [NUMBER]\n- Key dependencies: [EXTERNAL VENDORS, APPROVALS, TECHNOLOGIES, ETC.]\n- Stakeholders: [WHO CARES ABOUT THIS PROJECT]\n\nGenerate:\n\n1. Risk register with 10-15 potential risks, each containing:\n   - Risk description\n   - Category (technical, schedule, budget, resource, external, scope)\n   - Probability (low / medium / high)\n   - Impact (low / medium / high)\n   - Risk score (probability x impact)\n   - Mitigation strategy (how to reduce the chance)\n   - Contingency plan (what to do if it happens)\n   - Early warning sign (the trigger that tells you this risk is materializing)\n   - Owner (who should monitor this)\n\n2. Risk matrix visualization: Organize all risks in a probability vs. impact grid\n\n3. Top 3 risks deep dive: For the three highest-scored risks, provide a detailed response plan\n\n4. Budget contingency recommendation: What percentage of budget to set aside based on risk profile\n\n5. Risk review schedule: How often to reassess and what to look for\n\n6. Communication plan: When and how to escalate risks to stakeholders"
  },
  {
    "title": "Stakeholder Update Email Writer",
    "category": "Project Management",
    "description": "Enter your project status, milestones, and blockers. Get a clear, professional status update email formatted for executives.",
    "method": "Fill in the project progress details. Customize the tone and send to your stakeholders.",
    "prompt": "Write a project status update email that is clear, professional, and takes 60 seconds to read.\n\nProject name: [PROJECT NAME]\nReporting period: [THIS WEEK / THIS MONTH / THIS SPRINT]\nAudience: [EXECUTIVES / CLIENT / CROSS-FUNCTIONAL TEAM]\n\nCurrent status:\n- Overall health: [ON TRACK / AT RISK / OFF TRACK]\n- Milestones completed this period: [LIST THEM]\n- In progress right now: [LIST CURRENT WORK]\n- Coming up next: [NEXT MILESTONES]\n- Blockers or risks: [LIST ANY ISSUES AND WHAT YOU NEED]\n- Budget status: [ON BUDGET / OVER BY X% / UNDER BY X%]\n- Timeline status: [ON SCHEDULE / DELAYED BY X DAYS]\n\nFormat the email with:\n1. A one-line executive summary at the top (the \"if you only read one line\" version)\n2. Traffic light status indicators (green/yellow/red) for scope, schedule, budget\n3. Accomplishments section (what got done, with impact)\n4. Risks and blockers section (with proposed solutions, not just problems)\n5. Decisions needed (if any, clearly state what you need from them and by when)\n6. Next steps with dates\n\nTone: Confident, transparent, concise. Bad news should be delivered directly with a plan, not buried. Good news should be credited to the team."
  },
  {
    "title": "Customer Complaint Response",
    "category": "Customer Service",
    "description": "Paste the customer complaint and your company context. Get an empathetic, professional response that resolves the issue and retains the customer.",
    "method": "Paste the customer's message and your company details. Customize the response before sending.",
    "prompt": "Write a customer service response to this complaint. The goal is to resolve the issue AND keep the customer.\n\nMy company: [COMPANY NAME AND WHAT WE SELL]\nSupport channel: [EMAIL / LIVE CHAT / SOCIAL MEDIA / PHONE SCRIPT]\nCompany policy on this issue: [WHAT WE CAN AND CANNOT DO: refunds, replacements, credits, etc.]\n\nCustomer's complaint:\n[PASTE THE CUSTOMER'S MESSAGE OR DESCRIBE THE SITUATION]\n\nWrite a response that:\n\n1. Opens with genuine empathy (not \"I understand your frustration\" which sounds robotic). Acknowledge their specific situation.\n\n2. Takes ownership without blame-shifting. No \"unfortunately\" or \"our policy states\" as the first thing they read.\n\n3. Explains what happened (if known) in simple terms, without making excuses\n\n4. Offers a clear resolution:\n   - Primary solution (what you can do right now)\n   - Alternative if they are not satisfied with the primary option\n   - Timeline for resolution\n\n5. Adds a goodwill gesture that exceeds their expectation slightly (discount on next order, free upgrade, expedited shipping, etc.)\n\n6. Closes with a specific next step and your direct contact information\n\nRules:\n- Keep under 200 words (nobody reads long support emails)\n- Sound human, not corporate\n- Never say \"per our policy\" or \"unfortunately we cannot\"\n- If we are wrong, say so directly"
  },
  {
    "title": "FAQ Knowledge Base Generator",
    "category": "Customer Service",
    "description": "Describe your product and common customer questions. Get a complete FAQ document with clear answers, troubleshooting steps, and search-friendly formatting.",
    "method": "List your most common support questions or paste support ticket themes. Get a structured FAQ ready to publish.",
    "prompt": "Create a comprehensive FAQ knowledge base for my product or service.\n\nMy product/service: [WHAT IT IS AND WHAT IT DOES]\nTarget customers: [WHO USES IT]\nCommon complaint themes: [TOP 5-10 ISSUES CUSTOMERS CONTACT US ABOUT]\nPricing model: [HOW CUSTOMERS PAY]\n\nGenerate a FAQ document with:\n\n1. Getting Started section (5-7 questions):\n   - Account setup, first steps, onboarding basics\n   - Each answer should be under 100 words with step-by-step numbered instructions where applicable\n\n2. Billing and Payments section (5-7 questions):\n   - Pricing, refunds, cancellation, upgrades, failed payments\n   - Include exact steps for each process\n\n3. Troubleshooting section (5-7 questions):\n   - For each issue: symptom, cause, step-by-step fix, and \"if this does not work\" escalation path\n\n4. Features and How-To section (5-7 questions):\n   - Most-asked \"how do I...\" questions based on common support themes\n\n5. For each FAQ entry:\n   - Question written in the customer's voice (how they would actually ask it)\n   - Answer in plain language (no jargon)\n   - Related questions linked at the bottom\n\n6. Search optimization: Include alternate phrasings for each question so site search finds them\n\n7. Escalation triggers: Flag which questions often need human support despite having FAQ answers"
  },
  {
    "title": "Personalized Workout Plan",
    "category": "Health & Fitness",
    "description": "Enter your fitness level, goals, equipment, and schedule. Get a week-by-week workout plan with exercises, sets, reps, and progression.",
    "method": "Fill in your fitness details. Print or save the plan and follow the progression each week.",
    "prompt": "Design a personalized workout program for me. Be specific with exercises, not generic.\n\nMy details:\n- Current fitness level: [BEGINNER / INTERMEDIATE / ADVANCED]\n- Age: [YOUR AGE]\n- Goal: [BUILD MUSCLE / LOSE FAT / IMPROVE ENDURANCE / GENERAL FITNESS / TRAIN FOR EVENT]\n- Days available to train: [NUMBER] days per week\n- Time per session: [MINUTES]\n- Equipment available: [FULL GYM / HOME DUMBBELLS / BODYWEIGHT ONLY / RESISTANCE BANDS / ETC.]\n- Injuries or limitations: [LIST ANY, OR \"NONE\"]\n- Experience with specific exercises: [COMFORTABLE WITH SQUATS, NEVER DONE DEADLIFTS, ETC.]\n\nCreate a program that includes:\n\n1. Weekly schedule overview (which muscle groups or movement patterns on which days)\n\n2. For each training day, provide:\n   - Warm-up routine (5 minutes, specific movements)\n   - Main exercises: exercise name, sets, reps, rest period, and tempo if relevant\n   - How to know if the weight is right (RPE or percentage guidance)\n   - Cool-down and stretching (specific stretches for muscles worked)\n\n3. Progressive overload plan: How to increase difficulty each week for 4 weeks\n\n4. Exercise substitutions: For each exercise, list one alternative in case equipment is taken or the movement does not feel right\n\n5. When to deload: Signs of overtraining and what a deload week looks like\n\n6. Nutrition pairing: General macronutrient guidelines to support my specific goal (not a full meal plan, just the framework)\n\nNote: This is general fitness information. Consult a healthcare provider before starting any new exercise program."
  },
  {
    "title": "Meal Prep and Nutrition Planner",
    "category": "Health & Fitness",
    "description": "Enter your dietary needs, calorie target, and cooking skill. Get a 7-day meal plan with recipes, grocery list, and prep schedule.",
    "method": "Fill in your dietary preferences and goals. Use the grocery list and prep schedule to batch cook for the week.",
    "prompt": "Create a practical 7-day meal prep plan that I will actually follow.\n\nMy details:\n- Daily calorie target: [NUMBER, or \"calculate for me\" with height, weight, activity level]\n- Goal: [LOSE WEIGHT / BUILD MUSCLE / MAINTAIN / JUST EAT HEALTHIER]\n- Dietary restrictions: [VEGETARIAN / VEGAN / GLUTEN-FREE / DAIRY-FREE / NONE]\n- Foods I dislike: [LIST THEM]\n- Cooking skill: [BEGINNER / COMFORTABLE / EXPERIENCED]\n- Meal prep time available: [HOURS ON SUNDAY OR PREFERRED PREP DAY]\n- Budget per week: $[AMOUNT] for groceries\n- Meals per day: [3 MEALS / 3 MEALS + 2 SNACKS / ETC.]\n\nProvide:\n\n1. Daily macronutrient breakdown (protein, carbs, fats in grams)\n\n2. 7-day meal plan with:\n   - Breakfast, lunch, dinner, and snacks for each day\n   - Calorie and protein count for each meal\n   - Meals that repeat 2-3 times in the week (realistic prep, less waste)\n\n3. For each unique recipe:\n   - Ingredients with exact quantities\n   - Step-by-step instructions (max 6 steps per recipe)\n   - Prep time and cook time\n   - How it stores (fridge days, freezer-friendly?)\n\n4. Master grocery list organized by store section (produce, protein, dairy, pantry)\n\n5. Prep day schedule: Exact order to cook everything on prep day to minimize total time\n\n6. Container guide: How many containers I need and what size\n\nNote: This is general nutrition information. Consult a registered dietitian for medical dietary needs."
  },
  {
    "title": "Sleep Optimization Coach",
    "category": "Health & Fitness",
    "description": "Describe your sleep problems, schedule, and habits. Get a personalized sleep improvement plan with a bedtime routine and environment fixes.",
    "method": "Share your sleep patterns and issues. Follow the step-by-step plan and track improvements over 2 weeks.",
    "prompt": "Act as a behavioral sleep coach. Help me fix my sleep based on my current habits.\n\nMy situation:\n- Average bedtime: [TIME]\n- Average wake time: [TIME]\n- Hours of sleep I get: [NUMBER]\n- Hours I want to get: [NUMBER]\n- Time it takes to fall asleep: [MINUTES]\n- Do I wake up during the night? [YES/NO, HOW OFTEN]\n- Main sleep problems: [TROUBLE FALLING ASLEEP / WAKING TOO EARLY / NOT FEELING RESTED / RACING THOUGHTS / ETC.]\n- Screen time before bed: [HOW LONG BEFORE BED DO I STOP]\n- Caffeine consumption: [WHAT AND WHEN]\n- Exercise routine: [TYPE AND TIME OF DAY]\n- Bedroom environment: [DARK/LIGHT, TEMPERATURE, NOISE LEVEL]\n- Stress level: [LOW / MODERATE / HIGH]\n\nCreate a personalized plan:\n\n1. My sleep assessment: What is likely causing my problems based on the information above\n\n2. Environment fixes (do these today):\n   - Specific changes to temperature, light, sound, and bedding\n   - Cost-effective solutions\n\n3. 45-minute bedtime routine in three 15-minute blocks:\n   - Block 1: Physical wind-down\n   - Block 2: Mental wind-down\n   - Block 3: Sleep preparation\n\n4. Daytime habits that affect sleep: Specific changes to caffeine timing, exercise timing, light exposure, and meal timing\n\n5. Two-week implementation schedule: Do not change everything at once. Which changes to make in week 1 vs. week 2\n\n6. Sleep tracking method: What to measure and how to know if the plan is working\n\nNote: This is general wellness information. See a sleep specialist for persistent sleep disorders."
  },
  {
    "title": "Research Literature Review",
    "category": "Research",
    "description": "Share your research topic and what you know so far. Get a structured literature review outline with gap analysis and research directions.",
    "method": "Enter your topic and key findings. The AI organizes themes, identifies gaps, and suggests where to focus your research.",
    "prompt": "Help me structure a literature review for my research.\n\nResearch topic: [YOUR SPECIFIC TOPIC]\nField/discipline: [COMPUTER SCIENCE / PSYCHOLOGY / BUSINESS / BIOLOGY / ETC.]\nKey papers I have already read: [LIST 3-5 PAPER TITLES OR MAIN FINDINGS IF KNOWN]\nMy research question: [WHAT I AM TRYING TO ANSWER]\n\nProvide:\n\n1. Thematic organization:\n   - Identify 4-6 major themes or sub-topics I should cover\n   - For each theme, describe what existing research has established\n   - Suggest the logical flow (which theme comes first, second, etc.)\n\n2. For each theme:\n   - Key search terms and Boolean search strings I should use in Google Scholar, PubMed, or my field's database\n   - Types of studies to look for (meta-analyses, RCTs, qualitative, longitudinal, etc.)\n   - Seminal works I should cite (foundational papers in this area)\n\n3. Gap analysis:\n   - What questions remain unanswered based on current research trends\n   - Methodological gaps (what approaches have not been tried)\n   - Population gaps (who has not been studied)\n   - How my research could fill one or more of these gaps\n\n4. Critical analysis framework:\n   - Questions to ask when evaluating each paper (sample size, methodology, bias, generalizability)\n   - How to compare conflicting findings between studies\n\n5. Writing structure:\n   - Suggested paragraph outline for each section\n   - Transition sentences between themes\n   - How to write the synthesis paragraph that ties everything together\n\n6. Citation management tips specific to my field"
  },
  {
    "title": "Research Proposal Outline",
    "category": "Research",
    "description": "Describe your research idea, methodology, and goals. Get a complete proposal framework with objectives, methods, timeline, and budget.",
    "method": "Fill in your research details. Use the outline as a starting point and expand each section with your own data.",
    "prompt": "Help me outline a research proposal that is thorough and fundable.\n\nResearch title (working): [YOUR TITLE]\nField: [YOUR DISCIPLINE]\nType of research: [QUANTITATIVE / QUALITATIVE / MIXED METHODS]\nInstitution: [UNIVERSITY OR ORGANIZATION]\nFunding target: [GRANT NAME OR AMOUNT IF KNOWN]\n\nMy research question: [THE CENTRAL QUESTION]\nWhy it matters: [REAL-WORLD IMPACT OR THEORETICAL SIGNIFICANCE]\nWhat I already know: [BRIEF SUMMARY OF PRELIMINARY FINDINGS OR LITERATURE]\n\nGenerate a proposal outline with:\n\n1. Abstract template (300 words): Problem, gap, approach, expected impact\n\n2. Introduction section:\n   - Hook: Why should anyone care about this problem?\n   - Background: What has been done so far (brief)\n   - Gap: What is missing in current knowledge\n   - Thesis: What this study will contribute\n\n3. Research objectives: 3-4 SMART objectives (specific, measurable, achievable, relevant, time-bound)\n\n4. Methodology section:\n   - Study design and justification\n   - Population and sampling strategy\n   - Data collection methods and tools\n   - Data analysis plan\n   - Validity and reliability measures\n   - Ethical considerations\n\n5. Timeline: A realistic Gantt chart description broken into phases (literature review, data collection, analysis, writing)\n\n6. Budget outline: Standard line items for my type of research\n\n7. Expected outcomes and significance\n\n8. Potential limitations and how I plan to address them\n\n9. Three things that make a proposal stand out to reviewers in my field"
  },
  {
    "title": "Spaced Repetition Study System",
    "category": "Education",
    "description": "Name the subject and exam date. Get a spaced repetition schedule with review intervals, practice questions, and active recall techniques.",
    "method": "Enter your subject and timeline. Follow the daily review schedule to retain information long-term.",
    "prompt": "Build me a spaced repetition study system for mastering this subject.\n\nSubject: [WHAT I AM STUDYING]\nExam or deadline: [DATE]\nCurrent knowledge level: [BEGINNER / SOME BASICS / INTERMEDIATE]\nTime I can study per day: [MINUTES/HOURS]\nHow I learn best: [READING / WATCHING VIDEOS / PRACTICE PROBLEMS / FLASHCARDS / DISCUSSION]\n\nCreate:\n\n1. Topic breakdown: Split the subject into 10-15 individual learning chunks, ordered from foundational to advanced\n\n2. Spaced repetition schedule:\n   - Day-by-day calendar showing which topics to learn (new) and which to review\n   - Review intervals: Day 1 (learn), Day 2 (first review), Day 4 (second review), Day 7 (third review), Day 14 (fourth review)\n   - Table format I can print and check off\n\n3. For each topic, provide:\n   - 3-5 active recall questions (test yourself, do not just re-read)\n   - One real-world application or example to make it stick\n   - A one-sentence summary to use as a flashcard front/back\n\n4. Self-testing protocol:\n   - How to quiz yourself effectively\n   - What to do when you get a question wrong (go back to which review interval)\n   - Signs you have truly mastered a topic vs. just recognizing the answer\n\n5. Study session structure (for each daily session):\n   - 5 minutes: Review yesterday's active recall questions\n   - Main block: Learn new material using the Feynman technique (explain it simply)\n   - 10 minutes: Create flashcards for what you just learned\n   - 5 minutes: Preview tomorrow's topic\n\n6. Emergency cramming plan: If I fall behind, which topics to prioritize based on exam weight"
  },
  {
    "title": "Skill Learning Roadmap",
    "category": "Education",
    "description": "Name any skill you want to learn. Get a structured learning path from beginner to advanced with free resources, milestones, and practice projects.",
    "method": "Enter the skill and your starting level. Follow the roadmap stage by stage, completing each milestone before moving on.",
    "prompt": "Create a complete learning roadmap for mastering a new skill from zero to proficient.\n\nSkill I want to learn: [THE SKILL]\nWhy I am learning it: [CAREER CHANGE / SIDE PROJECT / HOBBY / SCHOOL / FREELANCING]\nTime I can dedicate: [HOURS PER WEEK]\nBudget for learning: [FREE ONLY / UNDER $50 / UNDER $200 / ANY]\nMy learning style: [VIDEOS / READING / HANDS-ON PROJECTS / COURSES / COMBINATION]\n\nBuild a roadmap with:\n\n1. Stage 1 - Foundations (weeks 1-3):\n   - Core concepts to understand first\n   - 2-3 specific free resources (name the website, course, or book)\n   - One small project to complete that proves you understand the basics\n   - Success criteria: how to know you are ready for Stage 2\n\n2. Stage 2 - Building Skills (weeks 4-8):\n   - Intermediate concepts and techniques\n   - 2-3 resources (courses, tutorials, books)\n   - Two projects of increasing complexity\n   - Common mistakes at this stage and how to avoid them\n\n3. Stage 3 - Applied Practice (weeks 9-14):\n   - Advanced techniques\n   - One significant portfolio project that demonstrates real competency\n   - Communities to join for feedback and networking\n   - How to get your first real-world experience (volunteer, freelance, contribute to open source, etc.)\n\n4. Stage 4 - Mastery Path (ongoing):\n   - How to stay current in this field\n   - Advanced resources for continued growth\n   - How to teach others (which accelerates your own learning)\n\n5. Accountability system:\n   - Weekly milestone checklist\n   - How to measure progress objectively\n   - What to do when you hit a plateau"
  },
  {
    "title": "Explain Like I Am Five",
    "category": "Education",
    "description": "Name any complex topic. Get a layered explanation starting super simple, then gradually building to full understanding with analogies.",
    "method": "Enter the topic you want to understand. Read through each level until you reach your desired depth of understanding.",
    "prompt": "Explain this topic in layers of increasing complexity, so I can stop at whatever level makes sense for me.\n\nTopic: [THE CONCEPT YOU WANT TO UNDERSTAND]\nContext: [WHY YOU NEED TO UNDERSTAND IT: work, school, curiosity, explaining to others]\n\nLevel 1 - Explain like I am 5:\nUse a simple analogy from everyday life. No jargon. One paragraph max.\n\nLevel 2 - Explain like I am a smart teenager:\nAdd the key terminology but define each term immediately. Use a slightly more detailed analogy. Include the \"why it matters\" in the real world.\n\nLevel 3 - Explain like I am a college student:\nFull technical explanation with proper terms. Include how it works, why it works that way, and the key principles or formulas. Connect it to related concepts.\n\nLevel 4 - Explain like I am a professional:\nNuances, edge cases, common misconceptions, and recent developments. Include what experts debate about this topic.\n\nLevel 5 - Test my understanding:\nAsk me 5 questions (from basic recall to application) that would prove I truly understand this topic, not just memorized it.\n\nAlso provide:\n- The single best analogy for this concept\n- The most common misunderstanding people have\n- One practical example of this concept in action\n- Suggested next topics to explore after understanding this one"
  },
  {
    "title": "Sales Objection Roleplay",
    "category": "Sales",
    "description": "Describe what you sell and common pushbacks you hear. Get realistic objection scenarios with word-for-word responses you can practice.",
    "method": "Enter your product and sales context. Practice the responses until they feel natural, then use them in real conversations.",
    "prompt": "Act as a tough but fair sales prospect. Help me practice handling objections.\n\nWhat I am selling: [PRODUCT/SERVICE AND PRICE POINT]\nMy target buyer: [THEIR ROLE, COMPANY SIZE, INDUSTRY]\nSales stage: [COLD CALL / DISCOVERY / DEMO / NEGOTIATION / CLOSING]\n\nPart 1 - Give me the top 10 objections I will hear for this specific product and buyer:\nFor each objection, categorize it:\n- Price objection\n- Timing objection (\"not right now\")\n- Authority objection (\"I need to check with my boss\")\n- Need objection (\"we do not need this\")\n- Trust objection (\"I have never heard of you\")\n- Competitor objection (\"we already use X\")\n\nPart 2 - For each objection, provide:\n- The exact words the prospect will say\n- What they actually mean (the real concern behind the words)\n- A word-for-word response I can use (conversational, not scripted-sounding)\n- A follow-up question that moves the conversation forward\n- The one thing I should never say in response to this objection\n\nPart 3 - Roleplay scripts:\nWrite 3 short dialogue scripts (me vs. prospect, 6-8 exchanges each) for:\n- Scenario A: Prospect says the price is too high\n- Scenario B: Prospect says they need to think about it\n- Scenario C: Prospect says they are happy with their current solution\n\nTone: The responses should feel confident and consultative, never pushy or desperate. I am here to help them solve a problem, not beg for a sale."
  },
  {
    "title": "Cold Outreach Message Generator",
    "category": "Sales",
    "description": "Enter your product, target persona, and outreach channel. Get personalized cold messages with hooks, value props, and follow-up sequences.",
    "method": "Fill in your target details and channel. Personalize each message with the prospect's specific details before sending.",
    "prompt": "Write cold outreach messages that get responses, not ignored.\n\nWhat I am selling: [PRODUCT/SERVICE]\nTarget persona: [THEIR JOB TITLE, COMPANY SIZE, INDUSTRY, MAIN PAIN POINT]\nOutreach channel: [LINKEDIN / EMAIL / TWITTER DM / COLD CALL SCRIPT]\nMy unique value: [WHAT MAKES MY SOLUTION DIFFERENT]\n\nGenerate:\n\n1. Five first-touch messages (each with a different hook strategy):\n   a. The insight lead (share something they did not know about their industry)\n   b. The mutual connection lead (reference shared interests or connections)\n   c. The trigger event lead (reference something recent: funding, new hire, expansion)\n   d. The problem-first lead (name their pain before introducing your solution)\n   e. The direct value lead (lead with a specific result you can deliver)\n\n   For each: Keep under 100 words. End with a question, not a pitch.\n\n2. Follow-up sequence (3 messages, spaced 3-5 days apart):\n   - Follow-up 1: Add value (share a resource, case study, or insight)\n   - Follow-up 2: Social proof (mention a result you got for a similar company)\n   - Follow-up 3: The breakup message (last attempt, creates urgency)\n\n3. Subject lines for email outreach: 5 options under 40 characters\n\n4. Rules for personalization: What to research about each prospect and where to insert personal details so it does not feel mass-sent\n\n5. What NOT to say: 10 phrases that instantly get you ignored or marked as spam\n\n6. Response handling: How to reply when they say \"send me more info\" vs. \"not interested\" vs. \"maybe later\""
  },
  {
    "title": "Blog Post Outline and Draft",
    "category": "Writing",
    "description": "Enter a topic, audience, and word count. Get a complete blog post structure with an SEO-friendly outline, hooks, and a first draft to edit.",
    "method": "Fill in the topic and audience. Use the outline to guide your writing, or edit the draft directly.",
    "prompt": "Write a complete blog post that ranks on search engines and keeps readers engaged.\n\nTopic: [YOUR BLOG TOPIC]\nTarget keyword: [PRIMARY KEYWORD FOR SEO]\nTarget audience: [WHO WILL READ THIS]\nWord count: [800 / 1200 / 1500 / 2000]\nTone: [CONVERSATIONAL / PROFESSIONAL / AUTHORITATIVE / WITTY]\nGoal: [EDUCATE / GENERATE LEADS / BUILD AUTHORITY / DRIVE TRAFFIC]\n\nProvide:\n\n1. SEO-optimized title: 3 options under 60 characters that include the target keyword\n\n2. Meta description: 155 characters with keyword and a reason to click\n\n3. Outline with:\n   - H1 title\n   - Introduction hook (first 2 sentences must earn the rest of the article)\n   - 4-6 H2 subheadings with 2-3 bullet points of what each section covers\n   - H3 sub-sections where appropriate\n   - Conclusion with clear CTA\n\n4. Full draft following the outline:\n   - Short paragraphs (2-3 sentences max)\n   - Use transition phrases between sections\n   - Include at least one list, one example, and one statistic placeholder [ADD STAT]\n   - Write the intro last (after the body, so it accurately previews the content)\n   - Natural keyword placement (no keyword stuffing)\n\n5. Internal linking suggestions: 3 related topics I should link to\n\n6. Content upgrade idea: One lead magnet (checklist, template, cheat sheet) I could offer in this post to capture emails"
  },
  {
    "title": "Professional Email Writer",
    "category": "Writing",
    "description": "Describe the situation and what you need to communicate. Get a polished email with the right tone, structure, and call to action.",
    "method": "Fill in the context and relationship details. Adjust the tone before sending.",
    "prompt": "Write a professional email for the following situation. Make it sound like a human wrote it, not AI.\n\nSituation: [DESCRIBE WHAT HAPPENED AND WHAT YOU NEED TO COMMUNICATE]\nRecipient: [WHO IS THIS FOR: boss, client, colleague, vendor, professor]\nRelationship: [FORMAL / SEMI-FORMAL / CASUAL-PROFESSIONAL]\nTone needed: [APOLOGETIC / ASSERTIVE / APPRECIATIVE / URGENT / DIPLOMATIC / NEUTRAL]\nDesired outcome: [WHAT DO YOU WANT THEM TO DO AFTER READING THIS]\n\nWrite the email with:\n\n1. Subject line: Clear and specific (not vague like \"Quick question\" or \"Following up\")\n\n2. Opening: Get to the point in the first sentence. No \"I hope this email finds you well.\"\n\n3. Body:\n   - Context (only what they need to know, no over-explaining)\n   - The key message or request\n   - Any relevant details or attachments referenced\n   - Keep under 150 words total\n\n4. Closing: Specific next step and deadline if applicable. Not just \"let me know.\"\n\n5. Sign-off: Appropriate for the relationship level\n\nAlso provide:\n- An alternative version with a slightly different tone in case my first instinct was off\n- One thing to never say in this type of email\n- If this is a sensitive situation: key phrases that de-escalate vs. phrases that make it worse"
  },
  {
    "title": "Startup Pitch Deck Script",
    "category": "Business",
    "description": "Describe your startup, market, and traction. Get a complete pitch deck script with talking points for each slide that investors want to hear.",
    "method": "Fill in your startup details. Use the script as speaker notes for each slide of your pitch deck.",
    "prompt": "Write the speaking script for a startup pitch deck that gets investor meetings.\n\nMy startup:\n- Name: [STARTUP NAME]\n- One-line description: [WHAT IT DOES IN ONE SENTENCE]\n- Stage: [PRE-SEED / SEED / SERIES A]\n- Industry: [YOUR MARKET]\n- Asking for: $[AMOUNT] in funding\n\nKey details:\n- Problem: [THE PAIN POINT YOU SOLVE]\n- Solution: [HOW YOUR PRODUCT SOLVES IT]\n- Target customer: [WHO PAYS FOR THIS]\n- Business model: [HOW YOU MAKE MONEY]\n- Traction so far: [REVENUE, USERS, GROWTH RATE, PARTNERSHIPS]\n- Team: [FOUNDERS AND THEIR RELEVANT EXPERIENCE]\n- Competition: [TOP 3 COMPETITORS AND WHY YOU ARE DIFFERENT]\n- Use of funds: [WHAT YOU WILL DO WITH THE INVESTMENT]\n\nWrite a script for each of these 10 slides:\n\n1. Title slide (your hook: why should they keep listening?)\n2. Problem (make them feel the pain)\n3. Solution (the aha moment)\n4. Market size (TAM, SAM, SOM with reasoning)\n5. Product (key features and demo flow)\n6. Traction (the proof it works)\n7. Business model (how money flows)\n8. Competition (2x2 matrix positioning)\n9. Team (why THIS team wins)\n10. The Ask (what you need and what they get)\n\nFor each slide:\n- Talking points (what to say, 60-90 seconds per slide)\n- One memorable line that sticks\n- Anticipated investor question and your prepared answer\n- What NOT to put on the slide itself (talk it, do not write it)\n\nTotal pitch should be under 10 minutes."
  },
  {
    "title": "Competitor Analysis Deep Dive",
    "category": "Business",
    "description": "Name your competitors and your product. Get a strategic analysis with positioning gaps, feature comparisons, and opportunities to differentiate.",
    "method": "List your competitors and what you know about them. Use the analysis to refine your positioning and strategy.",
    "prompt": "Conduct a thorough competitive analysis for my business.\n\nMy company/product: [WHAT YOU SELL AND WHO YOU SELL TO]\nMy top competitors:\n1. [COMPETITOR 1 NAME AND WHAT THEY DO]\n2. [COMPETITOR 2 NAME AND WHAT THEY DO]\n3. [COMPETITOR 3 NAME AND WHAT THEY DO]\n\nMy current pricing: [YOUR PRICE POINT]\nMy main differentiator: [WHAT YOU THINK MAKES YOU DIFFERENT]\n\nAnalyze:\n\n1. Feature comparison matrix:\n   - Table comparing key features across all competitors and me\n   - For each feature: who does it best and why\n   - Gaps: features they all have that I lack (urgent to address)\n   - Opportunities: features nobody offers yet that I could own\n\n2. Positioning analysis:\n   - How each competitor positions themselves (their messaging, tagline, target audience)\n   - Where there is white space in the market nobody is claiming\n   - A 2x2 positioning map with suggested axes relevant to my industry\n\n3. Pricing analysis:\n   - Compare pricing models (freemium, subscription, one-time, usage-based)\n   - Where am I on the price spectrum and is that the right position?\n   - Pricing strategy recommendations\n\n4. Strengths to attack: Where each competitor is weakest (based on reviews, common complaints)\n\n5. Threats to defend: Where I am most vulnerable\n\n6. Strategic recommendations: Top 5 actions I should take based on this analysis, prioritized by impact and effort\n\n7. Messaging angles: 3 marketing messages that highlight where I win vs. each competitor"
  },
  {
    "title": "Content Repurposing Engine",
    "category": "Content & SEO",
    "description": "Paste any long-form content. Get it repurposed into 10+ formats: social posts, email, video script, infographic outline, and thread.",
    "method": "Paste your blog post, podcast transcript, or article. Get multiple content pieces ready for different platforms.",
    "prompt": "Take this single piece of content and repurpose it into multiple formats for different platforms.\n\nOriginal content:\n[PASTE YOUR BLOG POST, ARTICLE, PODCAST TRANSCRIPT, OR VIDEO SCRIPT]\n\nRepurpose into:\n\n1. Twitter/X thread (8-12 tweets):\n   - First tweet must hook with a bold claim or surprising stat\n   - Each tweet should standalone but also flow as a narrative\n   - Last tweet should have a CTA\n\n2. LinkedIn post (long-form):\n   - Hook first line (triggers \"see more\" click)\n   - Story format with line breaks\n   - End with a question to drive comments\n\n3. Instagram carousel (8-10 slides):\n   - Slide 1: Hook headline\n   - Slides 2-8: Key points with one idea per slide\n   - Slide 9: Summary\n   - Slide 10: CTA (save, share, follow)\n   - Caption with relevant hashtags\n\n4. Email newsletter version (under 300 words):\n   - Subject line\n   - Personal anecdote opening\n   - 3 key takeaways\n   - Link to full content\n\n5. YouTube Shorts / TikTok script (60 seconds):\n   - Hook (first 3 seconds)\n   - Core message\n   - Surprising element or pattern interrupt\n   - CTA\n\n6. Infographic outline:\n   - Title\n   - 5-7 data points or key facts to visualize\n   - Suggested layout flow\n\n7. Podcast episode talking points:\n   - 3-5 discussion questions this content raises\n   - Personal stories to add\n   - Call-in question for the audience"
  },
  {
    "title": "Creative Story Starter",
    "category": "Creative",
    "description": "Choose a genre, mood, and setting. Get a compelling story opening with characters, conflict, and a hook that makes readers need to keep going.",
    "method": "Pick your genre and style preferences. Use the generated opening as a launching point for your story.",
    "prompt": "Write a compelling story opening that hooks the reader and sets up an irresistible narrative.\n\nGenre: [THRILLER / SCI-FI / ROMANCE / FANTASY / HORROR / LITERARY FICTION / MYSTERY]\nMood: [DARK / HOPEFUL / TENSE / WHIMSICAL / MELANCHOLIC / ADVENTUROUS]\nSetting: [TIME PERIOD AND LOCATION]\nPerspective: [FIRST PERSON / THIRD PERSON / UNRELIABLE NARRATOR]\nTarget audience: [YOUNG ADULT / ADULT / MIDDLE GRADE]\n\nProvide:\n\n1. The opening scene (500-700 words):\n   - Start in medias res (in the middle of action or a moment of change)\n   - Introduce the protagonist through their actions, not description\n   - Plant the central conflict within the first 3 paragraphs\n   - End with a micro-cliffhanger that makes the reader turn the page\n   - Show the character's voice and personality through dialogue or internal thought\n\n2. Character profile for the protagonist:\n   - Name, age, and one defining physical detail\n   - Their want (what they are pursuing) vs. their need (what they actually need)\n   - Their fatal flaw\n   - The lie they believe about themselves\n\n3. Story seed:\n   - The central conflict in one sentence\n   - Three possible plot directions this opening could lead to\n   - The thematic question the story explores (e.g., \"Can love survive betrayal?\")\n\n4. Craft notes:\n   - Why the opening works (which techniques were used)\n   - Common mistakes in this genre to avoid\n   - Suggested pacing for the next three scenes"
  },
  {
    "title": "Negotiation Prep Playbook",
    "category": "Sales",
    "description": "Describe the deal, your position, and the other party. Get a complete negotiation strategy with anchoring, concessions, and walk-away points.",
    "method": "Fill in the negotiation details. Review the strategy before your meeting and practice the key phrases.",
    "prompt": "Prepare me for a high-stakes negotiation. Make me the most prepared person in the room.\n\nWhat I am negotiating: [SALARY / CONTRACT / DEAL / PARTNERSHIP / PRICE]\nThe other party: [WHO THEY ARE AND WHAT THEY WANT]\nMy ideal outcome: [BEST CASE SCENARIO]\nMy minimum acceptable outcome: [WALK-AWAY POINT]\nMy leverage: [WHAT POWER DO I HAVE]\nTheir leverage: [WHAT POWER DO THEY HAVE]\nRelationship importance: [ONE-TIME DEAL / ONGOING RELATIONSHIP]\n\nCreate a negotiation playbook:\n\n1. Preparation framework:\n   - BATNA analysis (Best Alternative to Negotiated Agreement) for both sides\n   - ZOPA identification (Zone of Possible Agreement)\n   - Their likely priorities ranked by importance\n\n2. Opening strategy:\n   - Anchoring: What number or terms to open with and why\n   - How to frame my position so it seems reasonable\n   - First 3 sentences to set the tone\n\n3. Concession strategy:\n   - List of things I can concede that cost me little but have high perceived value to them\n   - Concessions to never make\n   - How to trade concessions (never give without getting)\n\n4. Objection responses:\n   - Top 5 things they will push back on and word-for-word responses\n   - Power phrases that shift leverage in my favor\n   - Questions that make them justify their position\n\n5. Closing techniques:\n   - 3 ways to close the deal when it is going well\n   - How to pause and regroup if it is going badly\n   - Walk-away script that preserves the relationship\n\n6. Body language and tone tips:\n   - Silence as a tool (when and how long)\n   - Phrases that create urgency without pressure\n   - How to stay calm when they get aggressive"
  },
  {
    "title": "Customer Discovery Interview Script",
    "category": "Business",
    "description": "Describe your product idea and target user. Get a complete customer interview script with open-ended questions, red/green flags, and analysis framework.",
    "method": "Fill in your product hypothesis and target customer. Use the script in real interviews before building your product.",
    "prompt": "Act as a customer development expert trained in the Mom Test methodology. I need to conduct customer discovery interviews to validate my startup idea before building.\n\nMy details:\n- Product idea: [DESCRIBE YOUR PRODUCT CONCEPT]\n- Problem hypothesis: [WHAT PROBLEM DO YOU THINK THIS SOLVES]\n- Target user: [WHO YOU THINK YOUR CUSTOMER IS, their role, company size, or demographic]\n- Stage: [I have nothing built / I have a prototype / I have an MVP with some users]\n- Number of interviews planned: [e.g., 15-20]\n\nCreate:\n\n1. A complete interview script with:\n   - Warm-up section (2-3 questions to build rapport and understand their context)\n   - Problem exploration questions (5-7 open-ended questions that uncover pain points WITHOUT mentioning your solution)\n   - Current solution questions (3-4 questions about how they currently handle this problem, what tools or workarounds they use)\n   - Impact questions (2-3 questions to understand how painful this problem really is, have they spent money on it, how much time does it waste)\n   - Solution reaction (ONLY at the end: 2-3 questions where you briefly describe your concept and gauge honest reaction)\n   - Closing (how to ask for referrals to other potential interviewees)\n\n2. For each question, include:\n   - Why you are asking it (what signal you are listening for)\n   - A follow-up probe if they give a vague answer\n   - A red flag answer that would invalidate your hypothesis\n   - A green flag answer that would support it\n\n3. Rules of engagement:\n   - What to never say in a customer interview (leading questions, pitching, asking \"would you use this?\")\n   - How to stay neutral and let them talk\n\n4. Post-interview analysis template:\n   - Scoring rubric (problem confirmed yes/no, willingness to pay, urgency level)\n   - How many green flag interviews you need before the hypothesis is validated\n   - Decision framework: when to proceed, when to pivot, when to kill the idea\n\nFollow the Mom Test principle: never ask people if they would use your product. Learn about their life, problems, and existing behavior."
  },
  {
    "title": "Unit Economics Calculator",
    "category": "Business",
    "description": "Input your business model and known metrics. Get a unit economics framework with CAC, LTV, payback period, and 3-year projection template.",
    "method": "Enter your revenue model and whatever metrics you have. The AI builds a financial framework showing what to track and what targets to hit.",
    "prompt": "Act as a startup CFO and financial modeling expert. Help me build a unit economics framework for my startup.\n\nMy business details:\n- Business model: [e.g., B2B SaaS subscription / e-commerce / marketplace / freemium to paid]\n- Average revenue per user/customer (ARPU): [e.g., $29/month or \"I do not know yet\"]\n- Current monthly revenue: [e.g., $5,000 MRR / $0, pre-revenue]\n- Customer acquisition channels: [e.g., paid ads / content marketing / sales team / organic]\n- Average cost to acquire a customer (CAC): [e.g., ~$50 per customer or \"I do not know yet\"]\n- Monthly churn rate: [e.g., 5% / \"I do not know yet\"]\n- Gross margin: [e.g., 80% / \"I do not know yet\"]\n- Team size and monthly burn rate: [e.g., 3 people, $15K/month]\n\nProvide:\n\n1. Unit economics breakdown:\n   - Customer Acquisition Cost (CAC) with breakdown by channel\n   - Lifetime Value (LTV) using the formula LTV = ARPU x Gross Margin / Churn Rate\n   - LTV:CAC ratio and what \"good\" looks like for my business type\n   - Payback period (months to recover CAC)\n   - MRR and annual run rate (ARR)\n   - If I do not have data yet, provide realistic benchmarks for my business type\n\n2. 3-year financial projection framework:\n   - Month-by-month for Year 1, quarterly for Years 2-3\n   - Revenue projections with 3 scenarios (conservative, base, optimistic)\n   - Cost structure: fixed vs. variable costs\n   - Cash flow projection and runway calculation\n\n3. Key metrics dashboard:\n   - The 10 most important financial metrics to track weekly/monthly\n   - For each: definition, formula, healthy range, and red flag thresholds\n\n4. Optimization levers:\n   - Rank the top 5 levers to improve unit economics\n   - For each lever, suggest a specific tactic\n\nPresent all calculations with clear formulas so I can plug in my own numbers."
  },
  {
    "title": "Freelance Contract Review Checklist",
    "category": "Freelancing",
    "description": "Specify your industry and project type. Get a detailed contract review checklist covering payment, scope, IP, termination, and red flags.",
    "method": "Use this before signing any client contract. Go through each checklist item and flag anything missing or concerning.",
    "prompt": "Create a detailed checklist for freelancers in [YOUR INDUSTRY, e.g., freelance writing / web development / design] to use when reviewing project contracts before signing.\n\nOrganize by section:\n\n1. Payment Terms: What to look for regarding rates, payment schedule, late payment penalties, kill fees, and acceptable payment methods. Include questions like: Is there a deposit required? What happens if the client disappears mid-project?\n\n2. Scope of Work: How to verify deliverables are clearly defined, revision limits are stated, and what constitutes \"completion.\" Include: Are milestones defined? Is there a sign-off process?\n\n3. Intellectual Property and Ownership: When rights transfer, licensing terms, whether you can use work in your portfolio. Include: Do I retain rights until final payment? Can I showcase this in my portfolio?\n\n4. Confidentiality and NDAs: What is reasonable vs. overly restrictive. Include: Does the NDA have an expiration date? Does it prevent me from working with competitors?\n\n5. Termination Conditions: Notice periods, what happens to partial work, final payment upon termination. Include: What is the kill fee? Who owns work completed before termination?\n\n6. Liability and Indemnification: Red flags to watch for. Include: Am I being asked to take on unreasonable liability? Is there a cap on damages?\n\n7. Timeline and Deadlines: Penalties for late delivery, force majeure clauses, what happens if the client causes delays.\n\nFor each section, include:\n- 3-5 specific questions to ask yourself when reading the contract\n- Green flags (good contract language)\n- Red flags (terms to push back on or negotiate)\n- A suggested revision for each red flag"
  },
  {
    "title": "Client Onboarding Email Sequence",
    "category": "Freelancing",
    "description": "Describe your service and project type. Get a complete 4-email onboarding sequence from welcome to kickoff, with questionnaire questions included.",
    "method": "Customize with your business details. Save as reusable templates in your email client for every new client.",
    "prompt": "Create a complete client onboarding email sequence for my freelance business.\n\nMy details:\n- My profession: [e.g., graphic designer / web developer / copywriter / consultant]\n- Project type: [e.g., brand identity package / website redesign / content strategy]\n- Typical project duration: [e.g., 2-4 weeks]\n- My communication preferences: [e.g., email + Slack, response within 24 hours, available Mon-Fri 9-5]\n\nWrite 4 emails:\n\nEmail 1: Welcome and Next Steps\n- Thank them for choosing me\n- Outline what happens next in the process\n- Set expectations for communication (preferred channels, response times, availability hours)\n- Mention the onboarding questionnaire they will receive next\n\nEmail 2: Project Kickoff Details\n- Confirm the project scope, deliverables, and timeline with specific milestones\n- Confirm payment schedule\n- Request any assets, brand guidelines, login credentials, or materials I need\n- Set the date for our kickoff call\n\nEmail 3: Onboarding Questionnaire\n- Generate 12-15 targeted questions specific to my profession and project type\n- Questions should cover: their brand, target audience, preferences, competitors, goals, inspiration, and constraints\n- Format as a numbered list they can reply to directly\n\nEmail 4: First Progress Update Template\n- What I have completed so far\n- What is coming next\n- Any decisions or input needed from them\n- Next milestone date\n\nKeep each email under 200 words. Include subject lines. Tone: professional but warm, organized but not robotic."
  },
  {
    "title": "Project Charter Generator",
    "category": "Project Management",
    "description": "Provide your project name, goals, and constraints. Get a one-page project charter with scope, OKRs, risks, governance, and timeline by phase.",
    "method": "Fill in the project details. Review with your sponsor and stakeholders before finalizing. Use as the single source of truth.",
    "prompt": "Create a one-page project charter for [PROJECT NAME] to be delivered by [TARGET DATE].\n\nProject description: [BRIEF DESCRIPTION, e.g., migrating the company CRM to a new platform]\nBudget: [AMOUNT OR RANGE]\nTeam size: [NUMBER]\nSponsor: [WHO IS FUNDING/APPROVING THIS]\n\nInclude these sections:\n\n1. Business Case: Problem statement, opportunity, and expected ROI with clearly stated assumptions\n\n2. Objectives and Key Results: 3-5 measurable OKRs using the SMART framework (Specific, Measurable, Achievable, Relevant, Time-bound)\n\n3. Scope: Explicitly state what IS in scope and what is OUT of scope. Be specific enough that there is no ambiguity.\n\n4. High-Level Deliverables: List each deliverable with acceptance criteria\n\n5. Constraints: Budget cap, compliance requirements, technology limitations, team availability\n\n6. Risks at Initiation: Top 5 risks with likelihood (High/Medium/Low), impact rating, and initial mitigation ideas\n\n7. Timeline by Phase:\n   - Initiation\n   - Planning\n   - Execution\n   - Monitoring and Control\n   - Close\n   Include estimated date ranges for each phase\n\n8. Governance: RACI matrix for key roles (Sponsor, PM, Tech Lead, Business Analyst), escalation path, and decision-making authority\n\n9. Open Questions: List items that need resolution before detailed planning begins\n\nFormat cleanly with headers and bullet points so it fits on one page when printed."
  },
  {
    "title": "Project Budget Estimator",
    "category": "Project Management",
    "description": "Enter your project type, team size, and duration. Get a detailed budget with labor, tech, contingency, and monthly cash flow projections.",
    "method": "Adjust the line items and rates to match your organization. Present the budget to your sponsor with contingency analysis included.",
    "prompt": "Create a detailed project budget estimate for a [PROJECT TYPE, e.g., customer-facing web application rebuild].\n\nParameters:\n- Project duration: [e.g., 6 months]\n- Team size: [e.g., 8 people across development, design, QA, and PM]\n- Key technologies/tools: [e.g., React, Node.js, AWS, Figma]\n- Location: [e.g., US-based team / mixed global / offshore]\n\nInclude these cost categories with line-item detail:\n\n1. Labor Costs: Broken down by role, hourly/monthly rate, and duration of involvement\n\n2. Technology and Infrastructure: Software licenses, cloud hosting, development tools, CI/CD pipeline costs\n\n3. Third-Party Services: APIs, integrations, external consultants\n\n4. Quality Assurance: Testing tools, device lab, accessibility audits\n\n5. Training and Change Management: Documentation, user training sessions\n\n6. Contingency Reserve: Calculate at 10-15% of total with justification for the percentage chosen\n\n7. Operational/Overhead: Communication tools, travel if applicable\n\nFor each category, provide:\n- Estimated cost (low / expected / high range)\n- Assumptions behind the estimate\n- Key cost drivers and risks\n\nInclude:\n- A budget summary table\n- Monthly cash flow projection\n- 3 cost optimization strategies that could reduce the total by 10-20% without compromising quality"
  },
  {
    "title": "Customer Service Training Scenarios",
    "category": "Customer Service",
    "description": "Describe your business type. Get 6 realistic support scenarios with customer messages, model responses, scoring rubrics, and common mistakes.",
    "method": "Use in team training sessions. Have reps attempt their response first, then compare with the model answer.",
    "prompt": "Create 6 realistic training scenarios for onboarding new customer service representatives at a [TYPE OF COMPANY, e.g., subscription meal kit delivery service / SaaS platform / e-commerce store].\n\nFor each scenario, provide:\n\n1. Scenario title (descriptive, e.g., \"The Frustrated Subscriber Who Received Damaged Items\")\n\n2. Customer profile: Name, how long they have been a customer, their subscription tier, any relevant history\n\n3. The customer's message: Write a realistic, detailed customer message (email or chat) that includes emotional language and specific complaints. Make some straightforward and others complex with multiple issues.\n\n4. Difficulty level: Easy / Medium / Hard\n\n5. Key challenges: What makes this scenario tricky (e.g., customer is partially at fault, policy is ambiguous, requires cross-department coordination)\n\n6. Model response: A gold-standard response that demonstrates best practices\n\n7. Scoring rubric: 5 criteria to evaluate the trainee's response (empathy shown, accuracy of information, resolution offered, tone, follow-up promised), each worth 1-5 points\n\n8. Common mistakes to avoid: 2-3 pitfalls inexperienced reps typically fall into with this type of scenario\n\nInclude a mix of channels: 3 email scenarios and 3 live chat scenarios. For chat scenarios, write the customer messages in shorter, more casual language."
  },
  {
    "title": "Customer Satisfaction Survey Builder",
    "category": "Customer Service",
    "description": "Share your product and customer touchpoints. Get a CSAT survey with follow-up emails for promoters, passives, and detractors, plus a tracking framework.",
    "method": "Implement the survey using your survey tool. Set up automated email sequences based on score ranges.",
    "prompt": "Design a customer satisfaction measurement program for [PRODUCT/SERVICE NAME], a [DESCRIPTION, e.g., B2B invoicing software].\n\nCreate:\n\n1. A CSAT survey (8-10 questions max) that:\n   - Opens with a single-number rating question (1-10 scale) with clear anchor labels\n   - Includes 3-4 specific experience questions (ease of use, support quality, value for money, likelihood to recommend)\n   - Includes 1-2 open-ended questions that generate useful qualitative data\n   - Ends with a question about willingness to provide a testimonial\n   - Takes under 3 minutes to complete\n\n2. Three follow-up email templates based on score ranges:\n   a) Promoters (9-10): Thank them, ask for a review/testimonial, offer referral incentive\n   b) Passives (7-8): Acknowledge feedback, ask one specific follow-up question about what would make them a 10\n   c) Detractors (1-6): Empathetic outreach, acknowledge dissatisfaction, offer a call with a senior team member\n\n   For each email: subject line, full body copy (under 150 words), and CTA\n\n3. Internal action playbook:\n   - How to triage detractor responses (response time targets, escalation rules)\n   - Monthly reporting template for tracking trends\n   - Quarterly improvement cycle based on survey data\n\nKeep survey questions concise. Make follow-up emails feel personal, not automated."
  },
  {
    "title": "Deal Revival for Stalled Leads",
    "category": "Sales",
    "description": "Describe a stalled deal that went silent. Get a 3-touch re-engagement sequence with value-add emails, a voicemail script, and dead-deal signals.",
    "method": "Use when a deal has gone silent for 2+ weeks. Execute the touches in sequence. Track which approach gets a response.",
    "prompt": "Help me revive a stalled deal that has gone silent.\n\nDeal details:\n- Prospect: [COMPANY NAME], [INDUSTRY]\n- Contact: [NAME], [TITLE]\n- Product/Service I sell: [WHAT YOU ARE SELLING]\n- Deal value: [APPROXIMATE VALUE]\n- Last interaction: [WHAT HAPPENED AND WHEN, e.g., \"They said they needed to discuss internally 3 weeks ago and went silent\"]\n- Previous objections: [LIST ANY, e.g., \"Concerned about implementation timeline\"]\n- Competitors mentioned: [IF ANY]\n\nCreate a 3-touch re-engagement sequence:\n\nTouch 1: Value-Add Email (send now)\n- Do not ask for a meeting. Share something genuinely useful (suggest a specific type of content or insight relevant to their industry)\n- Keep under 80 words\n- Full email text with subject line\n\nTouch 2: New Information Email (send 5 days later)\n- Introduce a new angle they have not considered (new feature, case study from their industry, relevant market data)\n- Soft CTA\n- Full email text with subject line\n\nTouch 3: Honest Breakup Email (send 7 days after Touch 2)\n- Respectful closing message that creates urgency through scarcity or a deadline\n- Give them an easy way to re-engage or close the door\n- Full email text with subject line\n\nAlso provide:\n- A 60-second voicemail script to leave between Touch 1 and Touch 2\n- 3 LinkedIn engagement tactics to stay visible between emails\n- Signals that the deal is truly dead vs. just delayed"
  },
  {
    "title": "Competitive Battle Card",
    "category": "Sales",
    "description": "Name your product and a key competitor. Get a one-page battle card with feature comparison, win/lose scenarios, landmine questions, and objection scripts.",
    "method": "Fill in what you know. Share with your sales team. Update monthly as competitors change their offerings.",
    "prompt": "Create a competitive battle card comparing my product to a key competitor.\n\nMy product: [YOUR PRODUCT NAME]\n- Key features: [LIST 3-5]\n- Pricing model: [e.g., per-user monthly subscription, $X/user/month]\n- Target customer: [IDEAL CUSTOMER PROFILE]\n- Key differentiators: [WHAT MAKES YOU UNIQUE]\n\nCompetitor: [COMPETITOR NAME]\n- Their key features (what I know): [LIST WHAT YOU KNOW]\n- Their pricing (what I know): [LIST WHAT YOU KNOW]\n- Their strengths (from customer feedback): [LIST WHAT YOU HAVE HEARD]\n\nGenerate:\n\n1. Quick comparison table: Feature-by-feature comparison with brief notes\n\n2. Where we win: 4-5 specific scenarios where our solution is clearly stronger, with talking points a rep can use in a live conversation\n\n3. Where they win: 2-3 areas where the competitor has an advantage, plus a \"neutralizing statement\" for each that acknowledges it while redirecting to our strengths\n\n4. Landmine questions: 5 questions our reps can ask the prospect that subtly expose the competitor's weaknesses without trash-talking\n\n5. Objection responses for each of these:\n   - \"[Competitor] is cheaper\"\n   - \"[Competitor] has feature X that you do not\"\n   - \"We have been using [Competitor] for years and it works fine\"\n   - \"[Competitor]'s support is better\"\n   Provide word-for-word responses for each.\n\n6. Customer proof points: 3 types of case studies or proof points to create to strengthen our position\n\nFormat: One page, scannable, designed for a rep to review in 5 minutes before a competitive call."
  },
  {
    "title": "Stress Management Protocol",
    "category": "Health & Fitness",
    "description": "Describe your stress triggers, daily routine, and lifestyle. Get a personalized stress reduction plan with daily practices, coping scripts, and habit changes.",
    "method": "Fill in your current situation honestly. Implement one change at a time over 2 weeks. Track which techniques work best for you.",
    "prompt": "Act as a wellness coach specializing in evidence-based stress management. Create a personalized stress reduction plan for me.\n\nMy situation:\n- Main sources of stress: [WORK DEADLINES / FINANCES / RELATIONSHIPS / HEALTH / ALL OF THE ABOVE]\n- Stress level right now (1-10): [NUMBER]\n- Physical symptoms: [e.g., tension headaches, jaw clenching, trouble sleeping, stomach issues, none]\n- Current coping methods: [e.g., scrolling phone, snacking, exercise, nothing]\n- Daily schedule: Wake at [TIME], work [HOURS], sleep at [TIME]\n- Exercise routine: [DESCRIBE OR \"NONE\"]\n- Time available for stress management: [MINUTES PER DAY]\n\nCreate a plan:\n\n1. Stress audit: Based on my information, identify which stressors I can control, which I can influence, and which I need to accept. This reframe alone reduces overwhelm.\n\n2. Daily micro-practices (5-10 minutes total):\n   - Morning: One grounding technique to start the day calm\n   - Midday: One reset technique for when stress peaks\n   - Evening: One wind-down practice to release the day\n   For each, give exact instructions, not just \"try meditation.\"\n\n3. Emergency stress protocol: A 3-step process I can use in under 2 minutes when I feel overwhelmed (specific breathing pattern, body scan, reframe question)\n\n4. Cognitive reframes: For each of my main stressors, provide a specific thought pattern replacement. Show the anxious thought and the reframed version side by side.\n\n5. Weekly stress prevention habits: 3 habits to build over the next month that reduce baseline stress (one physical, one social, one mental)\n\n6. Boundary scripts: For my #1 stressor, provide 2-3 scripts for setting boundaries with specific language I can use in real conversations\n\n7. Two-week implementation schedule: Which changes to make in week 1 vs. week 2 (not everything at once)\n\nNote: This is general wellness guidance. See a mental health professional for clinical anxiety or depression."
  },
  {
    "title": "Feynman Technique Learning Partner",
    "category": "Education",
    "description": "Name any complex topic. The AI guides you through explaining it simply, identifies your knowledge gaps, then helps you fill them and re-teach.",
    "method": "Enter the topic. The AI becomes an interactive partner that tests your understanding through simplification and teaching.",
    "prompt": "You are an expert cognitive science tutor. We are going to use the Feynman Technique together to help me deeply understand [TOPIC / CONCEPT, e.g., \"how neural networks learn\" / \"supply and demand\" / \"CRISPR gene editing\"].\n\nGuide me through these 4 steps interactively:\n\nStep 1: Teach It Back\nAsk me to explain [TOPIC] in my own words as if I am teaching it to a smart 12-year-old. No jargon allowed. I will type my explanation, and you will evaluate it.\n\nStep 2: Identify Gaps\nAfter I explain, identify specific gaps in my understanding:\n- What I got right and why it is correct\n- What I got wrong and what the correct understanding is\n- What I skipped over that is essential\n- Where I used jargon or vague language instead of true understanding\n\nStep 3: Simplify and Analogize\nFor each gap you identified, provide:\n- A simple, jargon-free explanation\n- A real-world analogy that makes the concept click\n- A test question I should be able to answer if I truly understand it\n\nStep 4: Re-Teach\nAsk me to explain the concept again, incorporating what I just learned. Evaluate my second attempt and tell me if I have achieved genuine understanding or if there are still gaps.\n\nRules:\n- Be patient but rigorous. Do not let me get away with surface-level understanding.\n- If I use a technical term, ask me to define it in plain language.\n- Celebrate genuine understanding when I demonstrate it.\n- At the end, give me a confidence score (1-10) and suggest what to study next.\n\nLet us begin. Start by asking me to explain [TOPIC] in my own words."
  },
  {
    "title": "Language Learning Conversation Partner",
    "category": "Education",
    "description": "Pick a language and your level. The AI becomes a patient conversation partner who corrects mistakes, teaches vocabulary in context, and adapts difficulty.",
    "method": "Specify your target language and level. Practice conversing. Type PAUSE to ask grammar questions in English, RESUME to continue.",
    "prompt": "You are a patient, encouraging language tutor. We are going to practice conversational [TARGET LANGUAGE, e.g., Spanish / French / Japanese / German].\n\nMy details:\n- Current level: [complete beginner / A1 / A2 / B1 / B2 / advanced]\n- Native language: [e.g., English]\n- Learning goals: [e.g., travel conversation / business language / pass an exam / general fluency]\n- Topics I want to talk about: [e.g., food / travel / technology / daily routines]\n\nRules:\n\n1. Speak to me primarily in [TARGET LANGUAGE]. Adjust complexity to my level:\n   - Beginners: Short, simple sentences. Introduce 2-3 new vocabulary words per message.\n   - Intermediate: Natural structures with some idioms. Challenge me slightly above my level.\n   - Advanced: Colloquial language, humor, and nuance as a native speaker would.\n\n2. After each of my messages, provide (in a clearly separated section):\n   - Correction: Fix any grammar, vocabulary, or syntax errors. Show incorrect vs. corrected side by side.\n   - Explanation: Briefly explain why it was wrong (the grammar rule) in English.\n   - Vocabulary: Highlight 1-2 new words from your message with pronunciation guide, definition, and example sentence.\n   - Cultural note (when relevant): How native speakers actually talk or cultural context.\n\n3. Every 5 messages, do a mini-review:\n   - List all new vocabulary from the last 5 exchanges\n   - Quiz me on 3 words from earlier in our conversation\n   - Suggest a grammar pattern to focus on based on my mistakes\n\n4. If I write PAUSE, switch to full English and let me ask any grammar question. When I write RESUME, switch back.\n\nLet us begin. Greet me in [TARGET LANGUAGE] and ask me a simple question about my day."
  },
  {
    "title": "Abandoned Cart Recovery Emails",
    "category": "Email Marketing",
    "description": "Enter your store type and average cart value. Get a 3-email abandoned cart sequence with urgency triggers, social proof, and a time-limited discount.",
    "method": "Send email 1 within 1 hour of abandonment, email 2 at 24 hours, email 3 at 48-72 hours. Customize with your brand voice.",
    "prompt": "Write a 3-part abandoned cart email recovery series for my e-commerce store.\n\nBrand details:\n- Store name: [YOUR STORE NAME]\n- Product category: [e.g., fashion, electronics, home goods, beauty]\n- Average cart value: [DOLLAR AMOUNT]\n- Brand voice: [e.g., playful and casual, luxury and refined, friendly and helpful]\n- Discount I can offer: [e.g., 10% off, free shipping, $15 off]\n- Customer segment: [e.g., first-time shoppers, returning customers]\n\nEmail 1: Gentle Reminder (sent 1 hour after abandonment)\n- Subject line + A/B variant\n- Preview text\n- Body: Empathetic, no pressure, remind them what they left behind\n- Include personalization fields: {{first_name}}, {{product_name}}, {{cart_link}}\n- CTA: Return to cart\n- Tone: Helpful, not pushy\n\nEmail 2: Social Proof and Benefits (sent 24 hours after abandonment)\n- Subject line + A/B variant\n- Preview text\n- Body: Include a customer review placeholder, highlight key product benefits, create mild urgency with stock levels\n- CTA: Complete your purchase\n\nEmail 3: Final Incentive (sent 48-72 hours after abandonment)\n- Subject line + A/B variant\n- Preview text\n- Body: Offer the discount, create real urgency with a time limit, address the #1 objection for this product category\n- Include {{discount_code}} personalization\n- CTA: Claim your discount\n\nFor each email, keep body copy under 120 words. After the series, suggest 3 metrics to track and benchmark conversion rates to aim for."
  },
  {
    "title": "Irregular Income Budget System",
    "category": "Personal Finance",
    "description": "Describe your freelance or variable income pattern. Get a priority-based budgeting system with expense tiers, buffer strategy, and surplus allocation rules.",
    "method": "Ideal for freelancers, gig workers, and commission-based earners. Be honest about your income range for accurate planning.",
    "prompt": "Create a budgeting system that works when my income changes every month.\n\nMy situation:\n- Income type: [freelancer / contractor / commission-based / seasonal / gig worker]\n- Monthly income range: $[LOW END] to $[HIGH END]\n- Average monthly income over the past 6 months: $[AMOUNT]\n- Essential monthly expenses (non-negotiable): $[TOTAL]\n  Breakdown: [LIST EACH: rent, utilities, insurance, food, minimum debt payments, etc.]\n- Flexible monthly expenses: $[TOTAL]\n  Breakdown: [LIST EACH: dining out, entertainment, shopping, etc.]\n- Current savings buffer: $[AMOUNT]\n- Outstanding debt: $[AMOUNT] at [X]% interest\n- Financial goals: [LIST 1-3 GOALS]\n\nProvide:\n\n1. Priority-based expense tiers:\n   - Tier 1 (Survival): Expenses I pay no matter what, even in my lowest income month\n   - Tier 2 (Stability): Expenses I pay when income meets my baseline\n   - Tier 3 (Growth): Savings and goals I fund when income exceeds average\n   - Tier 4 (Lifestyle): Wants I fund only in high-income months\n\n2. Income buffer strategy: How much to keep in a buffer account, how to build it, rules for when to draw from it vs. add to it\n\n3. Surplus allocation formula: When I earn above average, give me a percentage split (e.g., X% to buffer, Y% to debt, Z% to goals, W% to lifestyle)\n\n4. Low-income month protocol: Step-by-step instructions for when income drops below essential expenses\n\n5. Cash flow tracker: A simple system for tracking expected income, received payments, and upcoming expenses 30-60 days ahead\n\n6. Tax set-aside rule: What percentage of each payment to save for estimated taxes based on my income bracket"
  },
  {
    "title": "Subscription Expense Audit",
    "category": "Personal Finance",
    "description": "List all your recurring charges. Get a categorized audit showing annual costs, overlap analysis, cheaper alternatives, and a cancellation priority list.",
    "method": "Check your bank statements for the last 2-3 months and list every recurring charge. The AI reveals the true annual cost and finds savings.",
    "prompt": "Conduct a subscription and recurring expense audit. I want to reduce monthly costs without sacrificing quality of life.\n\nMy recurring expenses:\n1. [SERVICE NAME] - $[MONTHLY COST] - [WHAT I USE IT FOR]\n2. [SERVICE NAME] - $[MONTHLY COST] - [WHAT I USE IT FOR]\n3. [SERVICE NAME] - $[MONTHLY COST] - [WHAT I USE IT FOR]\n4. [SERVICE NAME] - $[MONTHLY COST] - [WHAT I USE IT FOR]\n5. [SERVICE NAME] - $[MONTHLY COST] - [WHAT I USE IT FOR]\n(List all: streaming, software, gym, insurance, phone plan, cloud storage, meal kits, etc.)\n\nMy priorities: [e.g., \"I work from home so good internet is essential\" / \"I barely watch TV but love music\" / \"Gym is important for my mental health\"]\n\nProvide:\n\n1. Annual cost overview: Table showing each subscription, monthly cost, annual cost, and cumulative total. The grand total is usually eye-opening.\n\n2. Necessity rating: Rate each as ESSENTIAL / NICE-TO-HAVE / QUESTIONABLE / CUT. Brief reason for each based on my stated usage and priorities.\n\n3. Overlap analysis: Identify subscriptions that duplicate functionality (multiple streaming services, multiple cloud storage plans, overlapping software).\n\n4. Money-saving alternatives: For each NICE-TO-HAVE or QUESTIONABLE item, suggest a free or cheaper alternative.\n\n5. Negotiation scripts: For essential services like internet, phone, or insurance, provide a 3-4 sentence script to call and negotiate a lower rate.\n\n6. Action plan: Prioritized list of cancellations and downgrades, estimated monthly savings, and projected annual savings.\n\n7. Quarterly review reminder: A system for reviewing subscriptions every 90 days to prevent subscription creep."
  },
  {
    "title": "Deep Research Agent",
    "category": "Agentic AI",
    "description": "Give a topic and get an AI agent that searches the web, cross-references sources, resolves contradictions, and produces a cited research brief.",
    "method": "Use this with ChatGPT Agent Mode, Claude with web access, or Perplexity Pro. The agent will autonomously search, read, and synthesize multiple sources.",
    "prompt": "You are a deep research agent. Your task is to conduct thorough, multi-source research on the following topic and deliver a comprehensive brief.\n\nTopic: [YOUR TOPIC OR QUESTION]\n\nResearch protocol:\n\n1. SEARCH PHASE: Search for at least 8-10 different sources on this topic. Prioritize recent sources (last 12 months). Include a mix of: academic papers, industry reports, expert blogs, news articles, and official documentation.\n\n2. READING PHASE: For each source, extract: key claims, supporting data, author credentials, publication date, and any cited references worth following.\n\n3. CROSS-REFERENCE PHASE: Compare claims across sources. Flag any contradictions. Note where multiple independent sources agree (high confidence) vs. where only one source makes a claim (low confidence).\n\n4. SYNTHESIS PHASE: Produce the research brief with these sections:\n   - Executive Summary (3-4 sentences)\n   - Key Findings (numbered, with confidence level: HIGH/MEDIUM/LOW)\n   - Contradictions & Debates (where experts disagree and why)\n   - Data Points (specific numbers, statistics, dates)\n   - Gaps (what the research couldn't answer or what needs more investigation)\n   - Sources (linked, with brief note on each source's credibility)\n\n5. FOLLOW-UP: Suggest 3 specific follow-up questions that would deepen understanding of this topic.\n\nBe relentless. Don't stop at surface-level results. Dig into the sources that sources cite. If a claim seems important but poorly supported, actively search for confirmation or contradiction."
  },
  {
    "title": "Competitive Intelligence Agent",
    "category": "Agentic AI",
    "description": "Name your competitors and let the AI agent crawl their websites, pricing pages, social accounts, and reviews to build a full competitive analysis.",
    "method": "Works best in ChatGPT Agent Mode or Claude with browsing. The agent will visit competitor sites, analyze their positioning, and build a comparison matrix.",
    "prompt": "You are a competitive intelligence agent. Conduct a thorough analysis of my competitors and deliver an actionable intelligence report.\n\nMy company: [YOUR COMPANY / PRODUCT NAME]\nWhat we do: [BRIEF DESCRIPTION]\nOur competitors: [LIST 3-5 COMPETITOR NAMES]\n\nFor each competitor, investigate and report on:\n\n1. PRODUCT ANALYSIS\n   - Visit their website and document their core product/service offerings\n   - Identify their pricing model and tiers (check their pricing page)\n   - Note key features they promote most prominently\n   - Document their tech stack if visible (check job postings, built-with tools)\n\n2. POSITIONING & MESSAGING\n   - What is their headline value proposition?\n   - Who are they targeting? (Read their case studies and testimonials)\n   - What language and tone do they use?\n   - What objections are they preemptively addressing?\n\n3. ONLINE PRESENCE\n   - Check their social media accounts: follower counts, posting frequency, engagement\n   - Look at recent blog posts: what topics are they covering?\n   - Search for customer reviews on G2, Capterra, Trustpilot, or Reddit\n   - Note any recent press mentions or partnerships\n\n4. STRENGTHS & WEAKNESSES\n   - Based on reviews: what do customers love? What do they complain about?\n   - What are they doing better than us?\n   - Where are they vulnerable?\n\nDeliver:\n- Comparison matrix (features, pricing, target market)\n- Positioning map (how each competitor positions relative to others)\n- Opportunity gaps (underserved needs no competitor is addressing well)\n- Threat assessment (which competitor is most dangerous and why)\n- 5 specific tactical recommendations for us"
  },
  {
    "title": "Autonomous Code Review Agent",
    "category": "Agentic AI",
    "description": "Paste your code and get an agent that reviews it like a senior engineer: checking for bugs, security holes, performance issues, and suggesting refactors.",
    "method": "Paste your code directly after the prompt. Works with any AI model. For large codebases, feed files one at a time and ask the agent to track findings across files.",
    "prompt": "You are an autonomous code review agent operating as a senior staff engineer with expertise in security, performance, and maintainability. Review the following code with the rigor of a production deployment gate.\n\nReview the code I provide and execute this protocol:\n\nPASS 1 - CORRECTNESS\n- Trace the logic path for normal inputs. Does it produce correct results?\n- Trace edge cases: empty inputs, null values, boundary values, extremely large inputs\n- Check error handling: are all failure modes caught? Are errors swallowed silently?\n- Verify async operations: race conditions, unhandled promises, deadlocks\n\nPASS 2 - SECURITY\n- Check for injection vulnerabilities (SQL, XSS, command injection, path traversal)\n- Verify input validation and sanitization\n- Check authentication and authorization logic\n- Look for sensitive data exposure (logging secrets, hardcoded credentials)\n- Check dependency usage for known vulnerability patterns\n\nPASS 3 - PERFORMANCE\n- Identify O(n^2) or worse algorithms that could be optimized\n- Check for unnecessary re-renders, re-computations, or redundant API calls\n- Look for memory leaks (unclosed connections, growing arrays, event listener buildup)\n- Evaluate database query efficiency (N+1 queries, missing indexes, full table scans)\n\nPASS 4 - MAINTAINABILITY\n- Is the code readable without comments? If not, where are comments needed?\n- Are there functions doing too many things that should be split?\n- Is there duplicated logic that should be abstracted?\n- Are naming conventions consistent and descriptive?\n\nFor each finding, provide:\n- SEVERITY: CRITICAL / HIGH / MEDIUM / LOW\n- LINE(S): Where the issue occurs\n- ISSUE: What's wrong\n- FIX: The specific code change to resolve it\n\nEnd with a summary: total findings by severity, overall code quality score (1-10), and the top 3 changes that would have the highest impact."
  },
  {
    "title": "Multi-Step Task Planner Agent",
    "category": "Agentic AI",
    "description": "Describe any complex goal and the AI breaks it into executable subtasks with dependencies, priorities, time estimates, and a ready-to-follow action plan.",
    "method": "Works in any AI. Describe your goal as specifically as possible. The more context you give about your constraints and resources, the more actionable the plan.",
    "prompt": "You are an autonomous task planning agent. Your job is to take a complex goal and decompose it into a structured, executable plan that someone could follow step-by-step without further guidance.\n\nMy goal: [DESCRIBE YOUR GOAL IN DETAIL]\nMy constraints: [TIME, BUDGET, SKILLS, TOOLS AVAILABLE]\nDeadline: [WHEN THIS NEEDS TO BE DONE]\n\nExecute this planning protocol:\n\n1. GOAL CLARIFICATION\n   - Restate the goal in specific, measurable terms\n   - Identify the definition of \"done\" (what does success look like?)\n   - List assumptions you're making and flag any that need verification\n\n2. DECOMPOSITION\n   - Break the goal into major phases\n   - Break each phase into specific tasks\n   - Break tasks into subtasks where any single subtask takes no more than 2 hours\n   - Each subtask must have a clear, verifiable output\n\n3. DEPENDENCY MAPPING\n   - Identify which tasks depend on other tasks completing first\n   - Identify which tasks can run in parallel\n   - Flag the critical path (the longest chain of dependent tasks that determines minimum completion time)\n\n4. PRIORITIZATION\n   - Rank tasks by: impact (what moves the needle most), risk (what could block everything), and effort\n   - Identify the top 3 tasks to start immediately\n   - Identify tasks that can be delegated or automated\n\n5. RISK ASSESSMENT\n   - List the top 5 things that could go wrong\n   - For each risk: likelihood, impact, and mitigation strategy\n   - Identify decision points where the plan might need to change\n\n6. EXECUTION PLAN\n   - Provide a day-by-day or week-by-week schedule\n   - Include checkpoints to evaluate progress\n   - Define \"abort criteria\" (when should I abandon this approach and pivot?)\n\nFormat the final plan as a numbered checklist with dependencies noted in brackets, e.g., [requires: task 3] so I can track progress by checking items off."
  },
  {
    "title": "Web Scraping Data Collector Agent",
    "category": "Agentic AI",
    "description": "Tell the agent what data you need and from where. It plans the scraping approach, visits pages, extracts structured data, and delivers a clean dataset.",
    "method": "Use with ChatGPT Agent Mode or any AI with browsing capability. The agent will navigate sites, extract data, and organize it into a structured format.",
    "prompt": "You are a data collection agent. Your task is to gather structured data from the web based on my requirements.\n\nWhat I need: [DESCRIBE THE DATA YOU WANT]\nSources to check: [LIST WEBSITES, DIRECTORIES, OR TYPES OF SOURCES]\nFormat needed: [TABLE / CSV / JSON / BULLET LIST]\nNumber of entries: [HOW MANY RESULTS YOU WANT]\n\nCollection protocol:\n\n1. PLANNING\n   - Identify the best sources for this data\n   - Determine what fields to extract from each source\n   - Plan the navigation path (which pages to visit, how to find the data)\n\n2. COLLECTION\n   - Visit each source systematically\n   - Extract all requested fields for each entry\n   - If data is spread across multiple pages, follow pagination or links\n   - Note the source URL for each data point\n\n3. CLEANING\n   - Standardize formatting across all entries (dates, currencies, units)\n   - Remove duplicates\n   - Flag entries with missing or suspicious data\n   - Normalize text (consistent capitalization, remove extra whitespace)\n\n4. VALIDATION\n   - Cross-reference key data points across sources where possible\n   - Flag any outliers or data that seems incorrect\n   - Note confidence level for each entry (VERIFIED / LIKELY / UNCONFIRMED)\n\n5. DELIVERY\n   - Present the clean dataset in the requested format\n   - Include a summary: total entries collected, sources used, any gaps\n   - Provide the methodology so the collection can be repeated later\n\nBe thorough. If a page requires scrolling or clicking through tabs to reveal data, do it. If the first source doesn't have enough data, find additional sources. Quality and completeness matter more than speed."
  },
  {
    "title": "Content Repurposing Agent",
    "category": "Agentic AI",
    "description": "Feed the agent one piece of content (blog post, video transcript, podcast) and it autonomously creates 10+ pieces across every platform format.",
    "method": "Paste or link your original content. Works best in ChatGPT Agent Mode or Claude. The agent transforms one piece into a full content suite.",
    "prompt": "You are a content repurposing agent. I will give you one piece of source content. Your job is to autonomously transform it into multiple pieces of content optimized for different platforms and formats.\n\nSource content:\n[PASTE YOUR BLOG POST, VIDEO TRANSCRIPT, ARTICLE, OR PODCAST TRANSCRIPT HERE]\n\nRepurposing protocol:\n\n1. ANALYSIS\n   - Read the source content completely\n   - Identify the core message, key arguments, supporting data, quotable lines, and stories/examples\n   - Rank the ideas by standalone value (which ideas work even without context?)\n\n2. CREATE THESE PIECES:\n\n   a) Twitter/X Thread (8-12 tweets)\n      - Strong hook tweet that works standalone\n      - One idea per tweet, building on the previous\n      - End with a clear takeaway and CTA\n\n   b) LinkedIn Post (150-200 words)\n      - Professional angle on the same topic\n      - Open with a bold statement or counterintuitive insight\n      - Use line breaks for readability\n\n   c) Instagram Carousel Script (8-10 slides)\n      - Slide 1: Hook headline\n      - Slides 2-8: One point per slide with minimal text\n      - Final slide: CTA\n      - Include caption with hashtags\n\n   d) Short-Form Video Script (30-60 seconds)\n      - Hook in first 3 seconds\n      - Quick delivery of one key insight\n      - Pattern interrupt midway\n      - Strong close with CTA\n\n   e) Email Newsletter Snippet (200-300 words)\n      - Compelling subject line (3 options)\n      - Personal tone, one core insight\n      - Link back to original content\n\n   f) Reddit Post\n      - Suitable for [RELEVANT SUBREDDIT]\n      - Community-appropriate tone (not promotional)\n      - Adds genuine value, invites discussion\n\n   g) Quote Graphics (5 text overlays)\n      - Pull 5 quotable lines from the content\n      - Format each as a standalone quote graphic caption\n\n   h) YouTube Community Post\n      - Poll or discussion starter based on the content's core question\n\n3. OPTIMIZATION\n   - Each piece must work standalone (no \"as I mentioned in my blog\" references)\n   - Match the native tone of each platform\n   - Include relevant hashtags where appropriate\n   - Vary the angle so someone who sees all pieces doesn't feel repetition"
  },
  {
    "title": "Meeting Notes to Action Items Agent",
    "category": "Agentic AI",
    "description": "Paste messy meeting notes or a transcript and the agent extracts decisions, action items, owners, deadlines, and open questions into a structured summary.",
    "method": "Paste your raw meeting notes or transcript. The messier the better. The agent will parse through everything and deliver a structured output.",
    "prompt": "You are a meeting intelligence agent. I will provide raw meeting notes or a transcript. Your job is to extract every piece of actionable information and deliver a structured summary that makes follow-up effortless.\n\nMeeting notes:\n[PASTE YOUR RAW NOTES OR TRANSCRIPT HERE]\n\nExtraction protocol:\n\n1. MEETING OVERVIEW\n   - Meeting purpose (inferred from context)\n   - Participants mentioned\n   - Date/time if mentioned\n   - Duration if estimable\n\n2. DECISIONS MADE\n   - List every decision that was agreed upon\n   - Note who made or approved each decision\n   - Flag any decisions that seemed tentative or conditional\n\n3. ACTION ITEMS\n   For each action item, extract:\n   - WHAT: The specific task\n   - WHO: The person responsible (if mentioned)\n   - WHEN: Deadline or timeframe (if mentioned)\n   - PRIORITY: Inferred urgency (HIGH / MEDIUM / LOW)\n   - DEPENDS ON: Any blockers or prerequisites\n   If the owner or deadline wasn't explicitly stated, flag it as [NEEDS ASSIGNMENT] or [NEEDS DEADLINE]\n\n4. KEY DISCUSSION POINTS\n   - Summarize the major topics discussed (2-3 sentences each)\n   - Note any disagreements or concerns raised\n   - Capture important context that doesn't fit into action items\n\n5. OPEN QUESTIONS\n   - List questions that were raised but not resolved\n   - Note who raised each question\n   - Suggest who should own finding the answer\n\n6. FOLLOW-UP NEEDED\n   - Information someone promised to share\n   - Topics deferred to future meetings\n   - External dependencies (waiting on vendors, other teams, etc.)\n\n7. NEXT MEETING\n   - Suggested agenda based on open items\n   - Recommended date/cadence if mentioned\n\nFormat the output so it can be directly pasted into a project management tool or shared via email without editing."
  },
  {
    "title": "Market Trend Analyzer Agent",
    "category": "Agentic AI",
    "description": "Name your industry and the AI agent scans current news, reports, social discussions, and data to identify emerging trends before they go mainstream.",
    "method": "Use with ChatGPT Agent Mode, Perplexity, or Claude with web access. The agent will search multiple sources and synthesize a trend report.",
    "prompt": "You are a market trend analysis agent. Your job is to identify emerging trends, shifts, and signals in a specific industry by searching and analyzing multiple sources.\n\nIndustry: [YOUR INDUSTRY]\nSpecific focus area: [OPTIONAL: narrow down to a sub-sector]\nTime horizon: [next 6 months / 1 year / 3 years]\n\nAnalysis protocol:\n\n1. SIGNAL DETECTION\n   - Search recent news articles (last 30-90 days) for recurring themes\n   - Check industry publications and analyst reports\n   - Scan Reddit, Twitter/X, and LinkedIn for emerging conversations\n   - Look at job postings in the industry (what roles are being created?)\n   - Check patent filings and startup funding announcements\n   - Review Google Trends for rising search terms in the space\n\n2. TREND IDENTIFICATION\n   For each trend found, provide:\n   - Trend name and one-line description\n   - Evidence: What signals point to this trend? (cite sources)\n   - Stage: EMERGING (early signals) / ACCELERATING (gaining momentum) / ESTABLISHED (widely recognized)\n   - Impact potential: How could this reshape the industry? (1-10 scale)\n   - Timeline: When will this become impossible to ignore?\n   - Winners & losers: Who benefits? Who gets disrupted?\n\n3. PATTERN ANALYSIS\n   - How do these trends connect to each other?\n   - What meta-trend do they point to?\n   - What happened in adjacent industries that might preview what's coming here?\n\n4. CONTRARIAN CHECK\n   - For each major trend, present the bear case (why it might not happen)\n   - Identify trends that most people are talking about but may be overhyped\n   - Identify trends nobody is talking about yet but should be\n\n5. ACTION BRIEF\n   - Top 3 trends to act on now\n   - Top 3 trends to monitor closely\n   - Specific actions a company in this space should take in the next 90 days\n   - Skills and capabilities to start building now"
  },
  {
    "title": "Automated Email Sequence Builder Agent",
    "category": "Agentic AI",
    "description": "Describe your product and audience. The agent builds a complete multi-email sequence with subject lines, body copy, CTAs, send timing, and A/B test variants.",
    "method": "Provide details about your product, audience, and the goal of the sequence (welcome, nurture, launch, re-engagement, etc.). The agent builds the full sequence.",
    "prompt": "You are an email marketing automation agent. Build a complete email sequence that I can load directly into my email platform.\n\nProduct/Service: [YOUR PRODUCT OR SERVICE]\nTarget audience: [WHO RECEIVES THESE EMAILS]\nSequence goal: [WELCOME / NURTURE / PRODUCT LAUNCH / RE-ENGAGEMENT / ONBOARDING / CART ABANDONMENT]\nBrand voice: [PROFESSIONAL / CASUAL / WITTY / DIRECT / LUXURIOUS]\nNumber of emails: [5-10 RECOMMENDED]\n\nFor each email in the sequence, provide:\n\n1. TIMING\n   - When to send (day X after trigger, specific day of week)\n   - Optimal send time\n   - Trigger event (what causes this email to send)\n\n2. SUBJECT LINE\n   - Primary subject line\n   - A/B variant subject line\n   - Preview text (the snippet shown after subject in inbox)\n\n3. EMAIL BODY\n   - Full email copy, formatted with headers, paragraphs, and white space\n   - Personalization tokens where appropriate: [FIRST_NAME], [COMPANY], etc.\n   - One clear CTA per email (button text + link description)\n\n4. STRATEGY NOTES\n   - Purpose of this email in the sequence\n   - Psychological principle being leveraged (curiosity, social proof, urgency, etc.)\n   - What success looks like (target open rate, click rate)\n   - Segmentation rules (who should NOT receive this email)\n\n5. CONDITIONAL LOGIC\n   - If they clicked the CTA in the previous email, what changes?\n   - If they haven't opened the last 2 emails, what should happen?\n   - At what point should non-engagers be removed or moved to a different sequence?\n\nAfter the full sequence, provide:\n- Sequence flow diagram (text-based)\n- KPIs to track for the overall sequence\n- When to review and optimize (after how many subscribers have completed it)\n- Common mistakes to avoid with this type of sequence"
  },
  {
    "title": "Bug Investigation Agent",
    "category": "Agentic AI",
    "description": "Describe a bug you're facing. The agent systematically investigates root cause by asking targeted questions, analyzing symptoms, and narrowing down the issue.",
    "method": "Describe the bug with as much detail as possible: what you expected, what happened instead, error messages, and what you've already tried.",
    "prompt": "You are a bug investigation agent. Your job is to systematically diagnose and identify the root cause of a software bug through structured analysis.\n\nBug report:\n- What should happen: [EXPECTED BEHAVIOR]\n- What actually happens: [ACTUAL BEHAVIOR]\n- Error message (if any): [PASTE ERROR]\n- When it started: [WHEN DID YOU FIRST NOTICE]\n- Frequency: [ALWAYS / SOMETIMES / RANDOM]\n- Environment: [BROWSER, OS, DEVICE, APP VERSION]\n- Steps to reproduce: [NUMBERED STEPS]\n- What I've already tried: [LIST ATTEMPTED FIXES]\n\nInvestigation protocol:\n\n1. SYMPTOM ANALYSIS\n   - Classify the bug type: crash, incorrect output, performance, UI glitch, data corruption, security, integration failure\n   - Identify what changed recently (code deploys, config changes, dependency updates, infrastructure changes)\n   - Determine scope: one user, some users, or all users? One environment or all?\n\n2. HYPOTHESIS GENERATION\n   - List 5-7 possible root causes ranked by likelihood\n   - For each hypothesis, describe what evidence would confirm or eliminate it\n   - Identify the fastest test to run for each hypothesis\n\n3. DIAGNOSTIC QUESTIONS\n   - Ask me 5-10 targeted questions that will help narrow down the cause\n   - Each question should be designed to eliminate at least one hypothesis\n   - Order questions from most discriminating to least\n\n4. INVESTIGATION PLAN\n   - Provide step-by-step debugging instructions I can follow\n   - Tell me exactly what logs to check and what to look for\n   - Suggest specific test cases that isolate the problem\n   - Recommend tools or commands to gather more diagnostic information\n\n5. AFTER DIAGNOSIS\n   Once we identify the cause, provide:\n   - The fix (specific code or configuration change)\n   - How to verify the fix works\n   - What to add to prevent this bug from recurring (tests, monitoring, validation)\n   - Related areas to check for similar issues"
  },
  {
    "title": "Personal Finance Advisor Agent",
    "category": "Agentic AI",
    "description": "Share your income, expenses, debts, and goals. The agent analyzes your full financial picture and builds a personalized month-by-month action plan.",
    "method": "Be as detailed as possible with your numbers. The agent acts as a financial planning advisor and builds a comprehensive strategy tailored to your situation.",
    "prompt": "You are a personal finance advisor agent. Analyze my complete financial situation and create a prioritized, month-by-month action plan to optimize my money.\n\nMy financial snapshot:\n- Monthly income (after tax): $[AMOUNT]\n- Other income sources: [LIST ANY: side hustle, investments, rental, etc.]\n- Monthly fixed expenses: $[AMOUNT] (Breakdown: rent/mortgage $X, utilities $X, insurance $X, subscriptions $X, car payment $X, minimum debt payments $X)\n- Monthly variable expenses: $[AMOUNT] (Breakdown: food $X, transport $X, entertainment $X, shopping $X)\n- Total debt: $[AMOUNT] (List each: [TYPE] at [INTEREST RATE] with $[BALANCE] and $[MINIMUM PAYMENT])\n- Savings: $[AMOUNT] (emergency fund: $X, investments: $X, retirement: $X)\n- Credit score: [IF KNOWN]\n- Financial goals: [LIST 1-5 GOALS WITH TIMEFRAMES]\n- Age: [YOUR AGE]\n- Risk tolerance: [CONSERVATIVE / MODERATE / AGGRESSIVE]\n\nAnalysis and planning protocol:\n\n1. FINANCIAL HEALTH ASSESSMENT\n   - Calculate my savings rate, debt-to-income ratio, and months of emergency expenses\n   - Grade my financial health: A through F with explanation\n   - Identify the single biggest financial risk I'm currently facing\n\n2. PRIORITY STACK\n   - Rank my financial priorities using this framework:\n     a) Immediate threats (high-interest debt, no emergency fund)\n     b) Employer match capture (free money on the table)\n     c) Debt elimination (ordered by optimal strategy: avalanche vs snowball, and explain why)\n     d) Savings acceleration\n     e) Investment optimization\n     f) Lifestyle upgrades (only after fundamentals are solid)\n\n3. MONTH-BY-MONTH PLAN\n   - Months 1-3: Quick wins and foundation setting\n   - Months 4-6: Building momentum\n   - Months 7-12: Acceleration phase\n   - Year 2-3: Wealth building phase\n   - For each month, specify: exact dollar amounts to allocate to each goal, which accounts to use, and what actions to take\n\n4. OPTIMIZATION TACTICS\n   - Specific ways to reduce expenses (with realistic dollar savings)\n   - Income increase strategies based on my situation\n   - Tax optimization moves available to me\n   - Account structure recommendation (which banks, which account types, why)\n\n5. AUTOMATION SETUP\n   - Exactly which transfers to automate, on what dates, for what amounts\n   - Which bills to set up on autopay\n   - How to structure accounts so saving happens without willpower"
  },
  {
    "title": "Product Launch Checklist Agent",
    "category": "Agentic AI",
    "description": "Describe your product and launch date. The agent builds a full go-to-market checklist covering pre-launch, launch day, and post-launch with nothing missed.",
    "method": "Provide your product details, target audience, launch date, and budget. The agent builds a comprehensive checklist you can execute day by day.",
    "prompt": "You are a product launch planning agent. Create a comprehensive, day-by-day launch checklist that covers every detail from pre-launch preparation through post-launch optimization.\n\nProduct: [PRODUCT NAME AND DESCRIPTION]\nLaunch date: [DATE]\nTarget audience: [WHO IS THIS FOR]\nBudget: [TOTAL LAUNCH BUDGET]\nTeam size: [JUST ME / SMALL TEAM / FULL TEAM]\nChannels available: [EMAIL LIST SIZE, SOCIAL FOLLOWERS, WEBSITE TRAFFIC, PAID AD BUDGET]\nPrevious launches: [FIRST LAUNCH / HAVE LAUNCHED BEFORE]\n\nBuild the complete launch plan:\n\n1. PRE-LAUNCH (4-6 weeks before)\n   Week-by-week checklist:\n   - Product readiness tasks (testing, QA, documentation)\n   - Marketing asset creation (landing page, emails, social content, ads)\n   - Audience warming activities (teasing, waitlist, early access)\n   - Technical setup (payment processing, analytics, email automation)\n   - Partnership and PR outreach\n   - Beta tester feedback incorporation\n\n2. LAUNCH WEEK (7 days before to launch day)\n   Day-by-day checklist:\n   - Final checks and preparations\n   - Team coordination and role assignments\n   - Content scheduling\n   - Email sequence activation\n   - Social media campaign execution\n   - Community engagement plan\n\n3. LAUNCH DAY\n   Hour-by-hour plan:\n   - Pre-launch final checks (6 AM)\n   - Launch announcement sequence\n   - Social media posting schedule\n   - Email blast timing\n   - Community engagement rotation\n   - Live monitoring dashboard (what metrics to watch)\n   - Rapid response protocol (for bugs, questions, negative feedback)\n\n4. POST-LAUNCH (days 2-14)\n   - Day-by-day follow-up actions\n   - Testimonial and review collection\n   - Content about early results\n   - Ad optimization based on initial data\n   - Customer feedback synthesis\n   - Iteration priorities\n\n5. MEASUREMENT\n   - KPIs to track by day, week, month\n   - What \"good\" looks like for each metric at this stage\n   - Decision framework: when to double down vs. pivot vs. pause\n\nFor each checklist item, include: the task, who does it, estimated time, and any tools or resources needed. Flag the items that are most commonly forgotten or underestimated."
  },
  {
    "title": "Resume Tailoring Agent",
    "category": "Agentic AI",
    "description": "Paste your resume and a job description. The agent analyzes the role, matches your experience to requirements, and rewrites your resume for maximum fit.",
    "method": "Paste both your current resume and the full job posting. The agent will analyze the job requirements and rewrite your resume to highlight the most relevant experience.",
    "prompt": "You are a resume optimization agent. Your job is to analyze a job description and tailor my resume to maximize my chances of getting an interview.\n\nMy current resume:\n[PASTE YOUR FULL RESUME]\n\nJob description:\n[PASTE THE FULL JOB POSTING]\n\nOptimization protocol:\n\n1. JOB ANALYSIS\n   - Extract every requirement: must-haves, nice-to-haves, and hidden requirements (inferred from context)\n   - Identify the top 5 things this hiring manager cares about most\n   - Note specific keywords, tools, and skills mentioned\n   - Determine the seniority level and what they expect at that level\n\n2. GAP ANALYSIS\n   - Map each job requirement to evidence in my resume\n   - Identify strong matches, partial matches, and gaps\n   - Rate my overall fit: STRONG / MODERATE / STRETCH\n   - For gaps, suggest how to address them (transferable skills, reframing)\n\n3. RESUME REWRITE\n   - Rewrite my professional summary to directly address this role\n   - Reorder and rewrite bullet points to lead with the most relevant experience\n   - Incorporate keywords from the job description naturally\n   - Quantify achievements wherever possible (if my resume lacks numbers, suggest what to measure)\n   - Ensure every bullet follows: [Action Verb] + [What I Did] + [Result/Impact]\n   - Remove or minimize experience that isn't relevant to this role\n\n4. ATS OPTIMIZATION\n   - Ensure keywords from the job description appear in my resume\n   - Use standard section headings that ATS systems recognize\n   - Flag any formatting that might break ATS parsing\n\n5. COVER LETTER DRAFT\n   - Write a concise cover letter (200-250 words) that:\n     - Opens with something specific about the company (not generic flattery)\n     - Connects my strongest experience to their biggest need\n     - Addresses the most likely concern they'd have about my candidacy\n     - Ends with a clear, confident close\n\n6. INTERVIEW PREP\n   - Predict the top 5 interview questions for this specific role\n   - Suggest STAR-format answers using examples from my resume\n   - Identify 3 smart questions I should ask them"
  },
  {
    "title": "Iterative Idea Validator Agent",
    "category": "Agentic AI",
    "description": "Pitch a business or product idea and the agent stress-tests it from every angle: market size, competition, unit economics, risks, and a go/no-go verdict.",
    "method": "Describe your idea in as much detail as possible. The more context you provide about your resources and market, the more useful the validation will be.",
    "prompt": "You are a business idea validation agent. Your job is to rigorously stress-test my idea and give me an honest, data-informed assessment of whether it's worth pursuing.\n\nMy idea: [DESCRIBE YOUR IDEA IN DETAIL]\nTarget customer: [WHO WOULD PAY FOR THIS]\nHow I'd make money: [REVENUE MODEL]\nMy resources: [BUDGET, SKILLS, TIME AVAILABLE, TEAM]\nTimeline: [WHEN I WANT TO LAUNCH]\n\nValidation protocol:\n\n1. PROBLEM VALIDATION\n   - Is this a real problem or an imagined one?\n   - How painful is this problem? (Vitamin vs. painkiller)\n   - How are people currently solving it? (Existing alternatives)\n   - Would people actually pay to solve this? (Willingness to pay signals)\n   - How large is the addressable market?\n\n2. SOLUTION VALIDATION\n   - Does my proposed solution actually solve the problem?\n   - Is it 10x better than current alternatives, or just marginally better?\n   - What's the simplest version I could test? (MVP definition)\n   - What are the critical assumptions that must be true for this to work?\n\n3. MARKET ANALYSIS\n   - Market size estimation (TAM, SAM, SOM)\n   - Growth trajectory of this market\n   - Key competitors (direct and indirect)\n   - What would a competitor need to crush me?\n   - Timing: Why now? What's changed that makes this viable?\n\n4. BUSINESS MODEL STRESS TEST\n   - Unit economics: What would customer acquisition cost (CAC) and lifetime value (LTV) likely look like?\n   - Pricing analysis: What could I charge? What are similar things priced at?\n   - Break-even analysis: How many customers/sales to cover costs?\n   - Scalability: Does this get easier or harder as it grows?\n\n5. RISK ASSESSMENT\n   - Top 5 reasons this could fail\n   - For each risk: likelihood, severity, and mitigation\n   - What's the \"kill zone\" (point of no return where I should stop if things aren't working)?\n   - Regulatory, legal, or technical risks?\n\n6. VERDICT\n   - GO / PROCEED WITH CAUTION / NO-GO\n   - Confidence level in this verdict\n   - If GO: The exact first 3 steps to take this week\n   - If PROCEED WITH CAUTION: What needs to be validated before committing\n   - If NO-GO: What adjacent ideas might work better"
  }
];

// Slug utility
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Build slug → index lookup
var PROMPTS_SLUG_INDEX = {};
for (var i = 0; i < PROMPTS_DATA.length; i++) {
  var slug = generateSlug(PROMPTS_DATA[i].title);
  // Handle duplicate slugs by appending index
  if (PROMPTS_SLUG_INDEX.hasOwnProperty(slug)) {
    slug = slug + '-' + i;
  }
  PROMPTS_SLUG_INDEX[slug] = i;
  PROMPTS_DATA[i]._slug = slug;
}
