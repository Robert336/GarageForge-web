# GarageForge Business Blueprint

This document centralises key business context for GarageForge so that AI agents (design, content, and development) share the same mental model when building the marketing website. **Keep this file up-to-date — it is the single source of truth.**

## 1. Quick Reference
| Attribute | Value |
|-----------|-------|
| Location  | Schomberg, Ontario (serving Greater Toronto Area) |
| Core Service | On-demand 3D printing — custom prototypes, replacement parts, creative projects |
| Unique Value Proposition | Affordable, fast-turnaround local service with personal touch |
| Primary Website KPI | Secure **3 prototype orders per month** from startups within first quarter |
| Tone of Voice | Friendly, innovative, neighbourhood maker |
| Must-have Website Features | Portfolio gallery, STL upload quote calculator, transparent pricing table, mobile-friendly quote/contact forms |

## 2. Business Goals
- Showcase affordable custom prototypes as an alternative to mass production.
- Emphasise rapid turnaround for small runs and one-offs.
- Build trust through transparent pricing and personal service.
- SMART Objective: **Win at least 3 prototype orders per month** from local startups during the first 3 months post-launch.

## 3. Target Audience & Personas
### Primary Audience
Small local businesses (inventors, repair shops, startups) needing fast, affordable prototypes.

### Secondary Audience
Hobbyists & makers seeking single prints or small batches.

### Personas (Synopsis)
1. **Sarah – Startup Founder (28)**
   - Needs quick, low-cost prototypes.
   - Pain: High costs, shipping delays.
   - Site Needs: STL uploads, instant quotes.
2. **Mike – Local Mechanic (45)**
   - Needs custom replacement parts to reduce downtime.
   - Site Needs: Case studies, urgent request forms.
3. **Emily – Hobbyist Inventor (35)**
   - Wants affordable one-offs and minimal tech barriers.
   - Site Needs: Guides, transparent pricing.
4. **Alex – Local Business Owner (32)**
   - Interested in custom 3D signage/branding.
   - Site Needs: Branding gallery, quote calculator.
5. **Jordan – Educator (40)**
   - Requires STEM models on a budget.
   - Site Needs: Educational resources, bulk discounts.
6. **Taylor – Artist/Designer (29)**
   - Creates bespoke art pieces; values quality.
   - Site Needs: Design collaboration tools.
7. **Casey – Community Organizer (36)**
   - Needs event swag quickly.
   - Site Needs: Package options, quick proposals.

## 4. Offering & Pricing Model
- Project-based custom quotes for complex work.
- Automated quotes for STL uploads (based on build-time calculations).
- Transparent pricing to build trust.

## 5. Assets & Technical Specs
- High-quality photos of past prints and projects (for portfolio gallery).
- Technical specs (materials, build volume, resolutions) — *to be documented*.
- Visual branding currently under development.

## 6. Brand Identity
### Themes
Innovation from humble beginnings, reliability & craftsmanship, community focus.

### Color Palette
- Deep Indigo `#3A0CA3` – primary / headers / buttons
- Vibrant Orange `#F72585` – call-to-action highlights
- Cool Gray `#4C4C4C` – text & neutral backgrounds
- Soft White `#F5F5F5` – clean negative space
- Accent Green `#4CC9F0` – eco-friendly highlights

### Typography
- Headings: **Montserrat Bold**
- Body: **Open Sans Regular**

### Logo Concept
Intertwined “G” and “F” forming a stylised 3D-printed gear/filament spool — minimalist & scalable.

### Imagery
Blend real print photos with abstract 3D model graphics using warm lighting.

## 7. Website Requirements Derived from Business Context
- Responsive, mobile-first design with Lighthouse scores ≥ 90 (Accessibility & SEO).
- BEM-organised CSS with custom properties for easy theming.
- Pages: Home, About, Services, Portfolio, Contact (see `AGENTS.md` roadmap).
- Shared header & footer across all pages.
- Quote form supporting STL uploads + automated pricing.
- Performance budget: images ≤ 200 KB; lazy-load off-screen assets.
- WCAG 2.1 AA compliance: colour contrast ≥ 4.5:1, labelled forms, ARIA attributes where needed.
- GitHub Pages deployment with CI workflow.

## 8. Glossary
| Term | Definition |
|------|------------|
| **GTA** | Greater Toronto Area |
| **STL** | Standard Triangle Language — common 3D model file for printing |

---
*Keep this blueprint in sync with any changes to GarageForge’s services or strategy.*