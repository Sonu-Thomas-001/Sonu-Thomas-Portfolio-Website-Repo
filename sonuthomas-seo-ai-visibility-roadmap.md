# SEO & AI Visibility Roadmap — sonuthomas.me
*A phased plan to fix indexing, build authority, and get cited by AI answer engines (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews)*

---

## Where you stand today (recap)

- Title, meta description, OG tags, robots meta are all set up correctly
- No sitemap.xml found; the site does not appear in Google for `site:sonuthomas.me`, your name, or an exact-match domain search — it's likely **not indexed at all**
- The page appears to be fully client-rendered, so crawlers may get little more than an empty shell on first load
- `meta-keywords` is dead weight (ignored by all major engines)
- Title tag has a double-encoded `&amp;` bug

Two different problems to solve here: **classic SEO** (get found by Google/Bing) and **GEO/AEO — Generative/Answer Engine Optimization** (get cited inside ChatGPT, Claude, Perplexity, Gemini answers). They overlap but aren't identical, and the plan below treats both.

One honest caveat up front: GEO/AEO is a genuinely new, still-forming field in 2026. Nobody — no tool, no agency — can guarantee an LLM will cite you. The tactics below are the ones with real evidence behind them, ranked by how much they actually move the needle, not by hype.

---

## Phase 1 (Weeks 1–2): Technical Foundation — fix visibility at the root

This is the highest-leverage phase. None of the content/GEO work below matters if the site isn't crawlable or indexed.

1. **Verify in Google Search Console and Bing Webmaster Tools.** Check the "Page Indexing" report — this tells you definitively why you're not showing up (not indexed, crawl error, redirect issue, etc.) rather than guessing.
2. **Generate and submit sitemap.xml** listing every real URL on the site.
3. **Resolve the rendering issue.** If the site is built with React/Vue/similar and rendered fully client-side, migrate to server-side rendering or static pre-rendering (Next.js/Astro static export, Vite SSG, or a prerender service). This is the single biggest fix for both Google indexing *and* AI crawler visibility — most AI crawlers do not execute JavaScript at all.
4. **Fix technical hygiene:**
   - Fix the `&amp;` double-encoding in the title tag
   - Add a self-referencing canonical tag on every page
   - Confirm `www` vs non-`www` and `http` vs `https` all redirect to one canonical version
   - Run PageSpeed Insights / Core Web Vitals and fix anything red
   - Confirm mobile usability

5. **Decide your AI-crawler policy in robots.txt.** By default most AI bots follow `User-agent: *`, but explicit rules give you control. Common bots to consider by name: `GPTBot` (OpenAI), `ClaudeBot` (Anthropic), `PerplexityBot`, `Google-Extended` (Google's AI training signal, separate from regular Googlebot), `CCBot` (Common Crawl — feeds many LLMs' training sets), `Bytespider`, `Amazonbot`, `Applebot-Extended`. If your goal is maximum visibility in AI answers, the general guidance is: **don't block them** — every blocked crawler is a surface where you can never be cited. If you have proprietary content you don't want used for model training, that's a legitimate reason to block specific bots — it's a real trade-off, not a default "just allow everything."

---

## Phase 2 (Weeks 2–4): Structured data & entity signals

This is what turns "a person exists on the internet" into "a machine-readable entity."

1. **Add JSON-LD structured data** — `Person` schema (name, jobTitle, url, sameAs links to your GitHub/LinkedIn/X/etc.), plus `ProfilePage` and `WebSite` schema on the homepage. This gives both Google and AI systems an unambiguous, structured fact-sheet about who you are.
2. **Consistency across every profile** — same name spelling, same title/role phrasing, same links — on LinkedIn, GitHub, X, any dev directories. Entity resolution (how a search/AI system decides several mentions refer to the same person) leans heavily on consistency.
3. **Add an llms.txt file** at `sonuthomas.me/llms.txt` — a plain Markdown file that gives AI systems a curated map of your key pages (homepage, projects, blog posts) with one-line descriptions of what each contains.
   - Honest caveat: as of 2026, no major AI provider has committed to crawling llms.txt on a fixed schedule the way Google crawls sitemap.xml. Treat it as **hygiene, not strategy** — it costs ten minutes, has no downside, but domain authority and content quality matter more.

```
# llms.txt example structure
# Sonu Thomas

> AI Engineer building intelligent systems, LLM-powered
> tools, and full-stack applications.

## Pages
- [Home](https://www.sonuthomas.me/): Overview, background, contact
- [Projects](https://www.sonuthomas.me/projects): Case studies of AI/ML and full-stack work
- [Blog](https://www.sonuthomas.me/blog): Technical writing on AI engineering

## Optional
- [Resume](https://www.sonuthomas.me/resume.pdf)
```

---

## Phase 3 (Weeks 3–8): Content built to be *cited*, not just read

GEO research (this traces back to a 2024 Princeton study that coined the term) consistently finds AI engines favor content that is specific, well-structured, and quotable over generic marketing copy. Practical implications for a portfolio site:

- **Write case studies, not just a project list.** For each project: what problem, what you specifically built, what stack, what the measurable outcome was. Specific numbers and specific technical decisions are what get pulled into an AI-generated answer — generic descriptions don't.
- **Structure for extraction:** clear H2/H3 headers, short self-contained paragraphs, a one-line summary near the top of longer posts, and FAQ-style sections where it fits naturally ("How did you approach X?"). LLMs retrieve and cite chunks of a page, not the whole page — each section should make sense read in isolation.
- **Publish where the crawl density is already high.** A brand-new personal domain has near-zero authority right now. Mirror your best technical writing to dev.to, Medium, or Hashnode (with a canonical link back to your site) — these domains get crawled and cited far more reliably today than an unindexed personal site will for a while.
- **Keep your GitHub active and well-documented.** Pinned repos with clear READMEs are a real, frequently-cited surface for AI coding/engineering questions — arguably as important as your portfolio site itself for an AI-engineer profile.

---

## Phase 4 (Weeks 4–12): Authority & third-party signals

Both classic SEO and GEO ultimately depend on **being talked about elsewhere**, not just what's on your own domain.

- Get your site listed anywhere legitimate: alumni/company bio pages, developer directories, portfolio showcases
- Answer real questions on Stack Overflow / relevant subreddits / technical Discord-adjacent forums where you can naturally reference your work — these are heavily represented in AI training and retrieval corpora
- Guest posts or interviews on established AI/dev blogs, linking back to sonuthomas.me
- Keep LinkedIn active — it's a major entity-resolution and citation source for "who is this person" queries

**Priority order if you can only do a few things:** domain authority/trust signals (backlinks, being mentioned elsewhere) matter most, then well-structured page content, then schema markup, then meta-tag clarity — llms.txt is real but the smallest lever of the five.

---

## Phase 5 (Ongoing): Measurement

- **Google Search Console:** indexing coverage, impressions, which queries you're appearing for
- **Manual AI visibility checks:** periodically ask ChatGPT, Claude, Perplexity, and Gemini things like "who is Sonu Thomas AI engineer" and note whether/how you're described — there's no reliable automated tracker for this yet at the individual level, so manual spot-checks are the honest method
- **Analytics referrers:** watch for traffic from `chat.openai.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com` — this is how you'll see AI-driven visits once they start
- **Revisit llms.txt and schema quarterly**, or whenever you publish something significant

---

## First five actions this week — Implementation Status
1. [x] **Fix technical hygiene & SEO cleanup** *(Completed)*
   - Title tag verified and cleaned; eliminated all JSX double-encoding issues.
   - Dropped dead-weight `meta-keywords` tag across all pages.
   - Added self-referencing `<link rel="canonical">` to `index.html` and dynamic `SEO.tsx` component.
   - Modernized `robots.txt` with explicit allowances for AI answer engines (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Applebot-Extended`, `Amazonbot`, `Bytespider`).
2. [x] **Resolve the rendering / crawler visibility issue** *(Completed)*
   - Implemented automated static pre-rendering pipeline in `scripts/prerender.js` hooked directly to `npm run build`.
   - Pre-renders static HTML files with route-specific metadata, canonical tags, and rich semantic content (`h1`, `h2`, case studies, credentials) for all 11 routes into `dist/`.
   - AI bots and search engine crawlers without JavaScript execution now receive 100% crawlable, indexable content on first HTTP fetch.
3. [x] **Generate and configure complete sitemap.xml** *(Completed)*
   - Updated `sitemap.xml` listing all 11 valid routes (core portfolio, local landing pages, and legal pages) with updated ISO timestamps and accurate priorities.
4. [x] **Add Person, ProfilePage & WebSite JSON-LD Schema** *(Completed)*
   - Implemented Schema.org `@graph` combining `WebSite`, `ProfilePage`, and detailed `Person` entities with `sameAs`, `knowsAbout`, education at IIT Guwahati, and role at HCLTech.
5. [x] **Deploy llms.txt & llms-full.txt for GEO / AI Citation** *(Completed)*
   - Created standard `public/llms.txt` and comprehensive dossier `public/llms-full.txt` featuring structured project case studies, system architectures, and canonical entity details.
6. [x] **Google Search Console: verified** *(Completed)* / [ ] **Bing Webmaster Tools: pending**
   - Google Search Console ownership confirmed via DNS domain verification (covers all subdomains/protocols — no HTML meta tag needed).
   - Bing Webmaster Tools not yet verified. Open [Bing Webmaster Tools](https://www.bing.com/webmasters), add property `https://www.sonuthomas.me/`, and paste the verification code into `index.html`:
     ```html
     <meta name="msvalidate.01" content="YOUR_CODE_HERE" />
     ```
   - Submit sitemap URL to both consoles: `https://www.sonuthomas.me/sitemap.xml`.
   - Request indexing for the homepage `https://www.sonuthomas.me/` in GSC.
7. [x] **Technical audit follow-up: performance & structured-data fixes** *(Completed 2026-09-12)*
   - Migrated Tailwind from the production CDN JIT script (`cdn.tailwindcss.com`) to a real build-time PostCSS pipeline (`tailwind.config.js` + `postcss.config.js` + `index.css`) — removes a render-blocking runtime compiler from every page load, a direct Core Web Vitals win.
   - Fixed `scripts/prerender.js` to inject a route-correct `WebPage`/`ProfilePage` JSON-LD node per page instead of shipping the homepage's graph on every prerendered route.
   - Fixed inconsistent `Person.sameAs` between the static graph and `SEO.tsx`'s dynamic graph (was missing the canonical website link in one of the two).
   - Removed the dead, never-rendered `keywords` prop from `SEO.tsx`.
   - Corrected `sitemap.xml` `<lastmod>` dates to each page's actual last-modified date (previously identical/fabricated across all 11 URLs).
   - Fixed stale placeholder project names in the pre-hydration crawler fallback in `index.html` (was naming projects that don't exist; now references real flagship projects).
   - **Found, not fixed:** `components/FAQ.tsx` has real FAQ content but is not imported/rendered on any page — it's dead code, and adding `FAQPage` schema for it is moot until it's actually wired into a page. Flagged as a product decision, not a technical fix.
