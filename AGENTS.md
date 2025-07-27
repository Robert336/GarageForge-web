# AGENTS.md - GarageForge Web

## Overview
A static marketing website for GarageForge, a small business offering custom metalwork services. The site will be built **primarily with HTML5 and CSS3**. JavaScript should only be introduced when a feature truly requires client-side interactivity (e.g. a mobile-nav toggle or basic form validation). No heavy frameworks are planned.

## Key Goals
1. Clean, semantic markup that boosts SEO and accessibility.
2. Responsive, mobile-first design that looks great on all common breakpoints.
3. Fast page loads (lightweight assets, optimized images, minimal JS).
4. Easy deployment

## Deliverables
- Multi-page site (Home, About, Services, Portfolio, Contact).
- Shared header/footer navigation.
- CSS organized with BEM naming and custom properties (CSS variables) for easy theming.
- WCAG AA accessibility compliance (alt text, ARIA labels, color contrast).
- Optional: Vanilla JS enhancements (mobile nav, smooth scroll, form validation) placed in `src/js/`.

## Recommended Directory Structure
```
/ (repo root)
├── src/              # Source files served in development
│   ├── index.html
│   ├── css/
│   │   ├── base.css   # Reset + root variables
│   │   ├── layout.css # Grid/Flex layouts & utility classes
│   │   └── pages/     # Page-specific styles (one file per page)
│   └── js/            # Only if absolutely necessary
│       └── main.js
├── assets/
│   ├── images/
│   └── favicon/
├── dist/              # Optional: minified build output
├── .github/
│   └── workflows/gh-pages.yml  # CI deploy to GitHub Pages
└── docs/              # Specs, wireframes, Lighthouse reports
```

## Local Development & Build Commands
This project can be served statically without a build step, but an npm script helps consistency:

```jsonc
// package.json (placeholder)
{
  "scripts": {
    "start": "npx serve src -l 3000",    // Simple dev server
    "lint:html": "html-validate \"src/**/*.html\"",
    "lint:css": "stylelint \"src/css/**/*.css\"",
    "build": "cp -R src dist"             // Replace with a bundler/minifier only if needed
  }
}
```

## Coding Guidelines
1. **HTML**
   - Use semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - All images must have descriptive `alt` text.
   - Form fields must include explicit `<label>` elements.
2. **CSS**
   - Two-space indentation.
   - Adopt **BEM** class naming (`block__element--modifier`).
   - Leverage CSS Custom Properties in `:root` for colors, fonts, spacing.
   - Prefer Flexbox and Grid over legacy layout techniques.
3. **JavaScript (rarely used)**
   - Place scripts at the end of `<body>` or use `defer`.
   - Keep ES6+ syntax.
   - No external dependencies unless approved.
4. **Accessibility & SEO**
   - Must score 90+ in Lighthouse accessibility and SEO audits.
   - Color contrast ratio ≥ 4.5:1 for normal text.
   - Provide meta description and relevant Open Graph tags on each page.
5. **Performance**
   - Optimize and compress images (≤ 200 KB each).
   - Use `loading="lazy"` on off-screen images.
   - Minify CSS (build step) before deployment if size exceeds 50 KB.

## Workflow for Agentic Coding Tools
1. **Tasks** should be granular and self-contained (e.g. "Implement Services page layout").
2. **Branch Naming**: `feature/<slug>` or `fix/<slug>`.
3. **Commit Messages**: Follow conventional commit format with industry standards:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting/styling changes
   - `refactor:` for code restructuring
   - `test:` for adding tests
   - Include detailed body explaining what was implemented
   - **REQUIRED**: Always commit changes immediately after completing a task
4. **Pull Requests** must include:
   - Screenshot or GIF of the change.
   - Lighthouse report (if visual/key page).
   - Accessibility checklist confirmation.
5. **Validation** steps for every PR:
   - `npm run lint:html && npm run lint:css` pass.
   - No broken links (use `linkinator`).
   - View on mobile (Chrome dev tools) and one desktop width ≥ 1024 px.

## Deployment


## Roadmap
1. **Scaffold** directory structure & basic files (index.html, base.css).
2. **Header & Footer** components across all pages.
4. **Responsive Tuning** & **Accessibility Audit**.
5. **Performance Optimization** (image compression, minify CSS).
6. **Launch** on GitHub Pages & announce.

## References
- MDN Web Docs (HTML/CSS/JS)
- WCAG 2.1 Guidelines
- Google Lighthouse & PageSpeed Insights