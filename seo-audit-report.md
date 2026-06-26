# RosaAI Website SEO Audit Report

**Audit Date:** June 26, 2026
**Site:** RosaAI (Next.js App Router)
**Target Keywords:** workflow automation Alberta, AI consulting Alberta, business automation Edmonton, AI implementation small business, n8n automation, website design Alberta

---

## Executive Summary

The RosaAI website has a solid foundation with good content, proper heading hierarchy, and keyword-relevant copy. However, it is **missing several critical SEO infrastructure elements** that are preventing it from being properly crawled, indexed, and ranked by search engines.

### Severity Overview

| Category | Severity | Status |
|----------|----------|--------|
| robots.txt | CRITICAL | Missing entirely |
| sitemap.xml | CRITICAL | Missing entirely |
| Open Graph / Twitter meta tags | CRITICAL | Missing on ALL pages |
| Structured data (JSON-LD) | CRITICAL | Missing entirely |
| Blog post metadata (per-page) | HIGH | No generateMetadata for blog posts |
| Canonical URLs | HIGH | Not configured |
| OG images | HIGH | No OG images exist |
| On-page keyword optimization | MEDIUM | Decent but can be improved |
| Internal linking | MEDIUM | Minimal cross-linking between pages |
| Image alt tags | LOW | Good coverage |
| Heading hierarchy | LOW | Well structured |

---

## 1. Crawlability & Indexation

### 1.1 robots.txt - CRITICAL

**Status:** MISSING

No `robots.txt` file exists at `public/robots.txt` or `src/app/robots.ts`. Search engines have no guidance on which pages to crawl.

**File to create:** `src/app/robots.ts`

**Recommendation:**
```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://rosaai.ca/sitemap.xml',
  }
}
```

### 1.2 sitemap.xml - CRITICAL

**Status:** MISSING

No `sitemap.xml` exists. Neither `public/sitemap.xml` nor `src/app/sitemap.ts` are present. Search engines cannot efficiently discover all pages.

**File to create:** `src/app/sitemap.ts`

**Recommendation:** Create a dynamic sitemap that includes all static pages and all blog posts with their lastModified dates.

### 1.3 Meta Tags - Basic

**Status:** PARTIAL

- `src/app/layout.tsx` (line 15-18): Root metadata has title and description -- GOOD
- `lang="en"` is set on `<html>` element (line 28) -- GOOD
- No `metadataBase` configured in layout.tsx -- ISSUE (needed for OG URLs to resolve correctly)

---

## 2. Technical SEO

### 2.1 next.config.ts

**File:** `/next.config.ts`

**Issues found:**
- [ ] No `images.remotePatterns` configured -- external images from svgl.app, cdn.simpleicons.org, cdn.brandfetch.io, upload.wikimedia.org are loaded in logo-cloud.tsx but may fail or be unoptimized
- [ ] No `trailingSlash` configuration (should be consistent)
- [ ] No custom headers for security (X-Frame-Options, etc.)
- [ ] No redirects configured

### 2.2 Canonical URLs - HIGH

**Status:** NOT CONFIGURED

No `metadataBase` is set in `src/app/layout.tsx`. Without this, Next.js cannot generate proper canonical URLs or fully-qualified Open Graph URLs.

**File:** `src/app/layout.tsx`, line 15
**Fix:** Add `metadataBase: new URL('https://rosaai.ca')` to the metadata export.

### 2.3 Structured Data (JSON-LD) - CRITICAL

**Status:** MISSING ENTIRELY

No structured data exists anywhere on the site. The site should have at minimum:

- **Organization schema** on the home page (business name, logo, social profiles, location)
- **LocalBusiness schema** (since RosaAI is Alberta-based)
- **Service schema** for each service offered
- **BlogPosting schema** on each blog post
- **BreadcrumbList schema** on pages with breadcrumbs
- **WebSite schema** with SearchAction

### 2.4 Page Speed Considerations

**Potential issues:**
- [ ] Logo cloud loads 12 external SVGs from third-party CDNs (`src/components/sections/logo-cloud.tsx`, lines 7-55) -- these are render-blocking network requests to external domains
- [ ] Multiple animation libraries (motion/react, various custom animations) add to JS bundle
- [ ] No `loading="lazy"` on non-critical images (logo-cloud images)
- [ ] `priority` is correctly set on the header logo (`src/components/layout/header.tsx`, line 59) -- GOOD

### 2.5 Favicon & App Icons

**Status:** PARTIAL

- `src/app/favicon.ico` exists -- GOOD
- No `apple-icon.png` for iOS devices -- MISSING
- No `icon.svg` or `icon.png` alternatives -- MISSING
- No `manifest.json` / `manifest.webmanifest` for PWA -- MISSING

---

## 3. On-Page SEO - Page by Page Analysis

### 3.1 Home Page (`/`)

**File:** `src/app/page.tsx` + section components

**Metadata (from layout.tsx):**
- Title: "RosaAI -- Workflow Automation, Website Design & AI Implementation" -- GOOD (includes primary keywords)
- Description: "Making AI clear, practical, and accessible. We help businesses automate workflows, build modern websites, and implement AI solutions that drive real results." -- DECENT (missing geographic keywords like "Alberta")

**Issues:**
- [ ] No page-level metadata export in `src/app/page.tsx` -- inherits from layout only
- [ ] Description missing "Alberta" or "Edmonton" geographic targeting
- [ ] Hero H1 (`src/components/sections/hero.tsx`, line 41): "Automate. Build. Grow." -- too generic, not keyword-rich. Should include "workflow automation" or "AI consulting"
- [ ] Hero subtext (line 58-61) mentions "workflow automation" and "AI implementation" -- GOOD
- [ ] Services section H2 (line 51): "Solutions that move your business forward" -- generic, no keywords
- [ ] Showcase section H2 (line 169): "Automations that deliver real results" -- includes "automations" -- DECENT
- [ ] About section H2 (line 29 of about.tsx): "Making AI clear, practical, and accessible" -- GOOD for brand but no geographic keywords
- [ ] No mention of "Edmonton" anywhere on the home page -- ISSUE for local SEO
- [ ] No mention of "n8n" on the home page (only in logo cloud alt text) -- ISSUE for target keyword

**Internal linking from home:**
- Links to `/automations` -- GOOD
- Links to `/blog` -- GOOD
- Links to `/contact` -- GOOD
- Links to `/privacy` and `/terms` in footer -- GOOD
- "Learn more" links on services point to `#contact` (anchor) not dedicated pages -- MISSED OPPORTUNITY

### 3.2 Automations Page (`/automations`)

**File:** `src/app/automations/page.tsx`

**Metadata:**
- Title: "Automations -- RosaAI" -- OK but should be more descriptive, e.g., "Workflow Automations | n8n & AI Automation Examples -- RosaAI"
- Description: "Explore the workflow automations we've built for our clients. From client onboarding to invoice processing and lead qualification." -- DECENT but missing geographic keywords

**Issues:**
- [ ] Title not keyword-optimized for target keywords (line 5)
- [ ] Description missing "Alberta" / geographic terms (line 7)
- [ ] H1 (`src/app/automations/automations-page.tsx`, line 214): "Workflows that work while you sleep" -- creative but not keyword-rich
- [ ] No mention of "n8n" in visible content (only in tags on first automation card)
- [ ] Page is entirely client-side rendered (`"use client"`) -- search engine bots may not execute JS properly. The automation content is hardcoded in the component, but the interactive tab UI means only one automation's details are visible at a time
- [ ] No structured data for the automation case studies
- [ ] Missing back-link or header/footer navigation (no Header/Footer components imported)
- [ ] No internal links to blog posts that discuss related topics

### 3.3 Blog Index Page (`/blog`)

**File:** `src/app/blog/page.tsx`

**Metadata:**
- Title: "Blog -- RosaAI" -- OK but could be more descriptive
- Description: "Insights on workflow automation, AI implementation, and practical technology for Alberta businesses." -- GOOD (includes "Alberta businesses")

**Issues:**
- [ ] Title could include keywords: "AI & Automation Blog for Alberta Businesses -- RosaAI"
- [ ] No header/footer components on this page (no navigation chrome)
- [ ] Good use of `Suspense` for loading state (line 115)

### 3.4 Blog Post Pages (`/blog/[slug]`)

**File:** `src/app/blog/[slug]/page.tsx`

**Critical Issue - No generateMetadata:**
- [ ] Blog posts have NO `generateMetadata` function -- they inherit the root layout metadata. Every blog post shows "RosaAI -- Workflow Automation, Website Design & AI Implementation" as its title instead of the post's actual title. This is a **CRITICAL SEO issue**.
- [ ] No per-post meta descriptions are generated
- [ ] No OG tags for blog posts (no OG image, no article type)
- [ ] `generateStaticParams` is correctly implemented for SSG (line 28-32) -- GOOD
- [ ] Breadcrumbs are present (line 62-68) -- GOOD for navigation but no BreadcrumbList schema
- [ ] No related posts or next/previous navigation -- MISSED OPPORTUNITY for internal linking
- [ ] No header/footer components on blog post pages
- [ ] Author images have good alt text using author name (line 104) -- GOOD

### 3.5 Contact Page (`/contact`)

**File:** `src/app/contact/page.tsx`

**Metadata:**
- Title: "Contact -- RosaAI" -- OK
- Description: "Get in touch with RosaAI. Book a discovery call or reach out to discuss how we can help automate your business." -- GOOD

**Issues:**
- [ ] No LocalBusiness structured data with address/phone
- [ ] Phone number on privacy page (587-804-2073) but not on contact page -- inconsistent
- [ ] Contact form has no `action` -- it just sets state to `submitted` (line 93). Form submissions are not actually sent anywhere -- this is a UX bug, not just SEO
- [ ] No Google Maps embed or address for local SEO
- [ ] Email shown is `crystel@rosaai.ca` (line 51) but elsewhere `crystel@rosaai.cloud` is used -- inconsistent domains
- [ ] No header/footer navigation (no Header/Footer imported)

### 3.6 Privacy Policy (`/privacy`)

**File:** `src/app/privacy/page.tsx`

**Metadata:**
- Title: "Privacy Policy -- RosaAI" -- OK
- Description: "Privacy Policy for RosaAI services." -- TOO SHORT/GENERIC

**Issues:**
- [ ] Description should be more descriptive for SEO
- [ ] No header/footer navigation
- [ ] Phone number displayed (587-804-2073) but not on contact page

### 3.7 Terms of Service (`/terms`)

**File:** `src/app/terms/page.tsx`

**Metadata:**
- Title: "Terms of Service -- RosaAI" -- OK
- Description: "Terms of Service for RosaAI services." -- TOO SHORT/GENERIC

**Issues:**
- [ ] Description should be more descriptive
- [ ] No header/footer navigation

---

## 4. Content Quality & Keyword Optimization

### 4.1 Target Keyword Usage Across Site

| Keyword | Home | Automations | Blog Index | Blog Posts | Contact |
|---------|------|-------------|------------|------------|---------|
| workflow automation | Yes (hero, services) | Yes (title, H1 area) | Yes (description) | Yes (blog 1) | Yes (form option) |
| Alberta | No | No | Yes (description) | No | Yes (location) |
| AI consulting | No | No | No | No | No |
| Edmonton | No | No | No | No | No |
| business automation | No | No | No | No | No |
| AI implementation | Yes (services) | No | Yes (description) | Yes (blog 2) | Yes (form option) |
| n8n automation | No (only logo alt) | No (only tag) | No | No | No |
| website design | Yes (services) | No | No | Yes (blog 3) | Yes (form option) |
| small business | No | No | No | Yes (blogs 1,2,3) | No |

**Key gaps:**
- [ ] "Alberta" is almost never used on the home page or automations page
- [ ] "Edmonton" is never mentioned anywhere on the site
- [ ] "AI consulting" is never used as a phrase
- [ ] "n8n" is barely visible (only in a tag chip and a logo alt)
- [ ] "business automation" is never used as a phrase

### 4.2 Content Depth

- **Home page:** Good depth with multiple sections, but all content is in client components (potential SSR issue for crawlers)
- **Automations page:** Rich content but client-rendered with interactive tabs. Only one automation detail visible at a time
- **Blog posts:** Good length (500-800 words each), well-structured with H2/H3 headings, practical advice
- **Contact page:** Appropriate for a contact page
- **Privacy/Terms:** Standard legal content

### 4.3 Internal Linking Analysis

**Strengths:**
- Footer links to main sections, automations, blog, contact, privacy, terms
- Blog posts link to `/contact` in their CTAs
- Showcase section links to `/automations`
- Breadcrumbs on automations, blog, and blog post pages

**Weaknesses:**
- [ ] Blog posts do not link to each other (no "related posts")
- [ ] Blog posts do not link to `/automations` page
- [ ] Automations page does not link to relevant blog posts
- [ ] No "previous/next post" navigation on blog posts
- [ ] Service cards on home page link to `#contact` anchor, not dedicated service pages
- [ ] No dedicated service landing pages exist (would help with keyword targeting)

---

## 5. Meta Tags - Comprehensive Check

### 5.1 Open Graph Tags - CRITICAL

**Status:** COMPLETELY MISSING on every page.

No page exports `openGraph` in its metadata. This means:
- Shared links on Facebook, LinkedIn, Twitter show no preview image or custom title
- Social sharing is severely hampered

**What's needed on every page:**
- `og:title`
- `og:description`
- `og:image` (1200x630px recommended)
- `og:url`
- `og:type` (website for home, article for blog posts)
- `og:site_name`

### 5.2 Twitter Card Tags - CRITICAL

**Status:** COMPLETELY MISSING

No Twitter card metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).

### 5.3 Per-Page Metadata Summary

| Page | Title | Description | OG | Twitter | Canonical |
|------|-------|-------------|-----|---------|-----------|
| `/` (layout) | Good | Decent (no geo) | MISSING | MISSING | MISSING |
| `/automations` | Weak | Decent (no geo) | MISSING | MISSING | MISSING |
| `/blog` | Weak | Good | MISSING | MISSING | MISSING |
| `/blog/[slug]` | BROKEN (no generateMetadata) | BROKEN | MISSING | MISSING | MISSING |
| `/contact` | OK | Good | MISSING | MISSING | MISSING |
| `/privacy` | OK | Too generic | MISSING | MISSING | MISSING |
| `/terms` | OK | Too generic | MISSING | MISSING | MISSING |

---

## 6. Blog SEO

### 6.1 MDX Frontmatter

All three blog posts have good frontmatter:
- `title` -- present and descriptive
- `description` -- present and keyword-relevant
- `date` -- present
- `tags` -- present
- `readTime` -- present
- `author` -- present (maps to author data)

**Missing from frontmatter:**
- [ ] No `thumbnail` / `image` field used (schema supports it but no posts use it)
- [ ] No `canonical` URL field
- [ ] No `keywords` field

### 6.2 Blog Post Structure

**Strengths:**
- Good heading hierarchy (H1 title, H2/H3 subheadings)
- Descriptive, keyword-rich content
- CTAs linking to `/contact` at the end of each post
- Proper date formatting
- Author attribution with photo

**Weaknesses:**
- [ ] No `generateMetadata` function in `src/app/blog/[slug]/page.tsx` -- blog posts do not get their own title/description in the `<head>` (CRITICAL)
- [ ] No OG image per post
- [ ] No article structured data (BlogPosting schema)
- [ ] No estimated read time in structured data
- [ ] No table of contents for longer posts
- [ ] No social sharing buttons
- [ ] No related posts section
- [ ] Only 3 blog posts -- thin content library

### 6.3 Blog Index

- Posts are sorted by date (newest first) -- GOOD
- Tag filtering works -- GOOD
- No pagination (not needed yet with 3 posts)

---

## 7. Missing Elements Summary

### Critical (Must Fix)

1. **robots.txt** -- Create `src/app/robots.ts`
2. **sitemap.xml** -- Create `src/app/sitemap.ts`
3. **Blog post metadata** -- Add `generateMetadata` to `src/app/blog/[slug]/page.tsx`
4. **metadataBase** -- Add to `src/app/layout.tsx`
5. **Open Graph tags** -- Add to every page's metadata export
6. **Twitter card tags** -- Add to every page's metadata export

### High Priority

7. **Structured data (JSON-LD)** -- Add Organization, LocalBusiness, Service, BlogPosting, BreadcrumbList schemas
8. **OG images** -- Create default OG image and per-page OG images (or use Next.js `opengraph-image.tsx` route)
9. **Canonical URLs** -- Configured automatically once metadataBase is set
10. **Geographic keywords** -- Add "Alberta", "Edmonton" to key pages

### Medium Priority

11. **Internal linking** -- Add related posts to blog, cross-link automations and blog
12. **Keyword optimization** -- Integrate target keywords more naturally into headings and content
13. **Navigation on sub-pages** -- Blog posts, privacy, terms pages lack Header/Footer
14. **Service landing pages** -- Create dedicated `/services/workflow-automation`, `/services/website-design`, `/services/ai-implementation` pages
15. **Remote image optimization** -- Configure `images.remotePatterns` in next.config.ts

### Low Priority

16. **Apple touch icon** -- Add `apple-icon.png`
17. **Web manifest** -- Add `manifest.webmanifest` for PWA support
18. **Social sharing on blog** -- Add share buttons
19. **Blog content volume** -- Publish more posts for topical authority
20. **404 page** -- Create custom `not-found.tsx` with proper messaging and links
21. **Security headers** -- Add via next.config.ts headers

---

## 8. Actionable Checklist (Priority Order)

This checklist is designed to be consumed sequentially. Items are ordered by impact.

### Phase 1: Critical Infrastructure (Week 1)

- [ ] **Add `metadataBase`** to `src/app/layout.tsx` metadata: `metadataBase: new URL('https://rosaai.ca')`
- [ ] **Create `src/app/robots.ts`** with standard allow rules and sitemap reference
- [ ] **Create `src/app/sitemap.ts`** covering all static routes and dynamic blog slugs
- [ ] **Add `generateMetadata`** to `src/app/blog/[slug]/page.tsx` using post title, description, tags, author, and date
- [ ] **Add Open Graph metadata** to root layout (`src/app/layout.tsx`): `openGraph: { siteName: 'RosaAI', type: 'website', locale: 'en_CA' }`
- [ ] **Add Twitter card metadata** to root layout: `twitter: { card: 'summary_large_image' }`
- [ ] **Add page-specific OG tags** to each page's metadata export (automations, blog, contact, privacy, terms)

### Phase 2: Structured Data & OG Images (Week 2)

- [ ] **Create default OG image** at `src/app/opengraph-image.png` (1200x630px) or use dynamic `opengraph-image.tsx`
- [ ] **Add Organization JSON-LD** to home page layout or page component
- [ ] **Add LocalBusiness JSON-LD** to home page (name, address: Alberta Canada, phone, email, services)
- [ ] **Add BreadcrumbList JSON-LD** to pages using breadcrumbs (automations, blog, blog posts)
- [ ] **Add BlogPosting JSON-LD** to `src/app/blog/[slug]/page.tsx`
- [ ] **Add Service JSON-LD** for each of the three services

### Phase 3: Content & Keyword Optimization (Week 3)

- [ ] **Update home page meta description** in `src/app/layout.tsx` to include "Alberta" -- e.g., "RosaAI helps Alberta businesses automate workflows, build modern websites, and implement practical AI solutions. Based in Alberta, Canada."
- [ ] **Update automations page title** in `src/app/automations/page.tsx` to "Workflow Automation Examples | n8n & AI Automations -- RosaAI"
- [ ] **Update automations page description** to include "Alberta businesses"
- [ ] **Update blog index title** in `src/app/blog/page.tsx` to include keywords
- [ ] **Add "Edmonton" and "Alberta"** mentions naturally to hero section or services section copy
- [ ] **Add "n8n"** mention to services or about section copy
- [ ] **Add "AI consulting"** as a phrase to the about section or services description
- [ ] **Update privacy/terms descriptions** to be more substantive

### Phase 4: Internal Linking & Navigation (Week 4)

- [ ] **Add Header and Footer** to blog post pages, automations page, contact page, privacy page, and terms page
- [ ] **Add related posts section** to blog post template (`src/app/blog/[slug]/page.tsx`)
- [ ] **Add blog post links** from automations page to relevant articles
- [ ] **Add automation page links** from relevant blog posts
- [ ] **Consider creating dedicated service pages** at `/services/workflow-automation`, `/services/website-design`, `/services/ai-implementation`

### Phase 5: Technical Polish (Week 5+)

- [ ] **Configure `images.remotePatterns`** in `next.config.ts` for external image domains
- [ ] **Add apple-icon.png** to `src/app/`
- [ ] **Create custom 404 page** at `src/app/not-found.tsx`
- [ ] **Add security headers** via next.config.ts
- [ ] **Audit Core Web Vitals** after deploying above changes
- [ ] **Set up Google Search Console** and submit sitemap
- [ ] **Set up Google Business Profile** for local SEO
- [ ] **Publish more blog content** targeting remaining keywords (aim for 2 posts/month minimum)

---

## 9. File Reference Index

| File | Key Issues |
|------|-----------|
| `src/app/layout.tsx` | No metadataBase, no OG tags, no Twitter tags, description lacks "Alberta" |
| `src/app/page.tsx` | No page-level metadata, no structured data |
| `src/app/automations/page.tsx` | Weak title, description lacks geo keywords |
| `src/app/automations/automations-page.tsx` | Entirely client-rendered, generic H1 |
| `src/app/blog/page.tsx` | Weak title |
| `src/app/blog/[slug]/page.tsx` | NO generateMetadata (critical), no structured data, no related posts |
| `src/app/contact/page.tsx` | No LocalBusiness schema, form doesn't actually submit |
| `src/app/contact/contact-page.tsx` | Email domain inconsistency (rosaai.ca vs rosaai.cloud) |
| `src/app/privacy/page.tsx` | Generic description |
| `src/app/terms/page.tsx` | Generic description |
| `src/app/robots.ts` | DOES NOT EXIST |
| `src/app/sitemap.ts` | DOES NOT EXIST |
| `next.config.ts` | No remotePatterns, no headers |
| `src/components/sections/hero.tsx` | H1 too generic for SEO |
| `src/components/sections/services.tsx` | H2 generic, no geo keywords |
| `src/components/layout/footer.tsx` | Service links use hash anchors, not real pages |
| `src/components/sections/logo-cloud.tsx` | External image loading from 5+ domains |
| `src/components/ui/breadcrumbs.tsx` | No BreadcrumbList JSON-LD schema |

---

*Report generated June 26, 2026. Audit based on source code review of the Next.js App Router codebase.*
