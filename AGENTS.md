# hendrikharlichs

Personal website and blog built with SvelteKit, TypeScript, and SCSS. Deployed on Vercel with static site generation.

## Core Commands

- Install dependencies: `npm install`
- Dev server with hot-reload: `npm run dev -- --host --open`
- Type-check and lint: `npm run check`
- Lint with Prettier and ESLint: `npm run lint`
- Auto-format code: `npm run format`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Run end-to-end tests: `npm test`
- Run tests with UI: `npm run test:ui`
- Debug tests: `npm run test:debug`
- Create new blog post: `./create-post.sh 'Post Title'`

## Project Layout

```
├─ src/
│  ├─ routes/             → SvelteKit file-based routing
│  │  ├─ (main)/          → Main layout group (with Wireframe)
│  │  │  ├─ notes/        → Blog listing and detail pages
│  │  │  ├─ resume/       → CV/resume page
│  │  │  └─ imprint/      → Legal imprint
│  │  ├─ api/             → API endpoints (+server.ts files)
│  │  ├─ rss.xml/         → RSS feed generator
│  │  └─ og-image/        → OG image generator route
│  ├─ lib/
│  │  ├─ components/      → Reusable Svelte components
│  │  ├─ icons/           → SVG icon components
│  │  ├─ posts/           → Markdown blog posts (.md files)
│  │  ├─ data/            → Static data (jobs, metadata)
│  │  ├─ scss/            → Global styles and abstracts
│  │  ├─ types/           → TypeScript type definitions
│  │  ├─ utils/           → Helper functions
│  │  ├─ config.ts        → Site configuration
│  │  └─ store.ts         → Svelte stores
│  ├─ app.html            → HTML template
│  └─ app.d.ts            → TypeScript declarations
├─ static/                → Static assets (og images, favicon)
├─ create-post.sh         → Blog post template generator
└─ create-og-image.js     → OG image automation script
```

## Architecture Overview

**Framework**: SvelteKit with Vercel adapter for static site generation  
**Content**: Markdown posts with MDsveX, rehype plugins for heading links  
**Styling**: SCSS with global abstracts (mixins, breakpoints, colors, fonts)  
**Analytics**: Vercel Analytics and Speed Insights integrated

Blog posts are markdown files in `src/lib/posts/` with frontmatter (title, created, updated, summary, keywords, draft). The `getPosts.ts` utility dynamically imports posts, filters drafts, calculates reading time, and sorts by date.

Routes use SvelteKit's file-based routing. The `(main)` route group applies a shared layout with the `Wireframe` component (Header, Footer, BackToTop).

## Development Patterns & Constraints

### Coding Style

- **TypeScript**: Strict mode enabled, prefer interfaces for public APIs
- **Prettier**: Tabs for indentation, single quotes, no trailing commas, 80-char line limit
- **ESLint**: Extends recommended rules for TypeScript and Svelte
- **SCSS**: Use mixins from `src/lib/scss/abstracts/_mixins.scss` for media queries, colors, print styles
- **Components**: Keep logic in `<script>` section, styles scoped with `<style lang="scss">`

### File Naming

- Components: PascalCase (e.g., `HeaderLogo.svelte`, `PostPreview.svelte`)
- Utils: camelCase (e.g., `getPosts.ts`, `formatDate.ts`)
- Routes: kebab-case or SvelteKit conventions (e.g., `+page.svelte`, `+layout.ts`)
- Blog posts: `YYYY-MM-DD-slug.md` format

### Component Structure

1. `<script>` block with imports and logic
2. Markup
3. `<style lang="scss">` with scoped styles using mixins

### SCSS Patterns

- Import mixins via Vite config (globally available in components)
- Use `@include for(breakpoint)` for responsive design (phone-only, tablet-and-up, etc.)
- Use `@include no-print()` to hide elements when printing
- Use CSS custom properties defined with `@include define-color()` for theming

## Blog Post Workflow

1. Create post template: `./create-post.sh 'Your Post Title'`
   - Generates `src/lib/posts/YYYY-MM-DD-your-post-title.md` with frontmatter
   - Automatically generates OG image at `static/YYYY-MM-DD-your-post-title.png`
2. Edit markdown file with content
3. Set `draft: false` when ready to publish
4. Posts automatically appear in `/notes` listing (sorted by date)
5. Individual post routes are generated at `/notes/[slug]`

### Post Frontmatter

```yaml
---
title: Post Title
created: YYYY-MM-DD
updated: YYYY-MM-DD (optional)
summary: Brief description for meta tags and previews
keywords: seo, keywords (optional)
draft: false
---
```

## External Services

- **Vercel**: Hosting and deployment with automatic builds on push
- **Analytics**: `@vercel/analytics` and `@vercel/speed-insights` for performance tracking
- No external API dependencies or database

## Git Workflow

- Main branch: `main`
- Commit style: Simple descriptive messages (e.g., `feat: Update position at awork`, `chore: Run npm audit fix`)
- No specific branching strategy enforced (small personal project)

## Conventions & Patterns

### Data Management

- Static data in `src/lib/data/` (jobs.ts, meta.ts)
- Svelte stores in `src/lib/store.ts` for reactive state (currentPage, isMenuOpen)
- No backend or database—all content is static/build-time

### Component Guidelines

- Icons are individual Svelte components in `src/lib/icons/`
- Reusable UI components in `src/lib/components/`
- Use TypeScript for all components and utilities
- Export types from `src/lib/types/index.ts`

### Testing

- **End-to-end tests** with Playwright in `tests/` directory
  - `navigation.spec.ts` - Tests desktop navigation between pages
  - `mobile-navigation.spec.ts` - Tests mobile hamburger menu and navigation
  - `content.spec.ts` - Tests content rendering and SEO meta tags
- Tests run against production build (`npm run build && npm run preview`)
- Browsers: Chromium (desktop) and iPhone 12 (mobile)
- Verify builds with `npm run build` before deploying
- Check type-safety with `npm run check`

## OG Image Generation

The `create-og-image.js` script:

1. Builds the SvelteKit app
2. Starts a preview server
3. Uses Playwright to screenshot the `/og-image` route with query params
4. Saves images to `static/` folder
5. Generates images for all posts and a default `share.png`

Run automatically by `create-post.sh` or manually: `node create-og-image.js`

## Gotchas

- **SCSS mixins**: Imported globally via Vite config, but IDE may not recognize them—they work at build time
- **MDsveX**: Posts must have `.md` extension and valid frontmatter to be processed
- **OG images**: Require build + preview server, use Playwright (ensure dependencies installed)
- **Static site**: All routes pre-rendered at build time, no server-side logic available
- **Draft posts**: Filtered out by `getPosts()` utility—won't appear in production
