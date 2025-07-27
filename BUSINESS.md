# GarageForge Business Blueprint

This document centralises key business context for GarageForge so that AI agents (design, content, and development) share the same mental model when building the marketing website. **Keep this file up-to-date — it is the single source of truth.**

## 1. Quick Reference
| Attribute | Value |
|-----------|-------|
| Location  | Schomberg, Ontario (serving Greater Toronto Area) |
| Core Service | On-demand 3D printing — custom prototypes, replacement parts, creative projects, custom signs |
| Unique Value Proposition | Affordable, fast-turnaround local service with personal touch |
| Tone of Voice | Friendly, innovative, neighbourhood maker |


## 2. Business Goals
- Showcase affordable custom prototypes as an alternative to mass production.
- Build trust through personal service, and showcasing past projects.

## 3. Target Audience & Personas
### Primary Audience
Small local businesses (inventors, repair shops, startups) needing fast, affordable prototypes.

### Secondary Audience
Hobbyists & makers seeking single prints or small batches.

### Personas (Synopsis)
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

## 5. Assets & Technical Specs
- High-quality photos of past prints and projects (for portfolio gallery).
- Technical specs (materials, build volume, resolutions) — *to be documented*.
- Visual branding currently under development.

## 6. Brand Identity
### Themes
Innovation from humble beginnings, reliability & craftsmanship, community focus.

### Color Palette
- Dark Text:  #000000 - Usually dark text
- Primary Orange:  #FF9500 - Logo's primary color
- Secondary Blue: #3A72FF - Bright secondary color for visual interest
- Dark-neutral: #323232 - Text and dark backgrounds
- Accent: #4CF07D - Accent color to be used conservatively

### Typography
- Headings: **Montserrat Bold**
- Body: **Montserrat**

### Imagery
Blend real print photos with abstract 3D model graphics using warm lighting.

## 7. Website Requirements Derived from Business Context
- Responsive, mobile-first design with Lighthouse scores ≥ 90 (Accessibility & SEO).
- BEM-organised CSS with custom properties for easy theming.
- Pages: Home, (see `AGENTS.md` roadmap).
- Shared header & footer across all pages.
- Quote form supporting STL uploads + automated pricing.
- Performance budget: images ≤ 200 KB; lazy-load off-screen assets.
- WCAG 2.1 AA compliance: colour contrast ≥ 4.5:1, labelled forms, ARIA attributes where needed.


## 8. Glossary
| Term | Definition |
|------|------------|
| **GTA** | Greater Toronto Area |
| **STL** | Standard Triangle Language — common 3D model file for printing |

---
*Keep this blueprint in sync with any changes to GarageForge’s services or strategy.*