# clari-portfolio

Personal portfolio for Clarissa Celestino — front-end developer, San Francisco Bay Area.

Built with [Nuxt 4](https://nuxt.com) and Vue 3, prerendered to static files.

## Requirements

Node 22.19 or newer. The repo pins a version in `.nvmrc`:

```bash
nvm use
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run generate   # static site in .output/public
npm run preview    # preview the build locally
npm run typecheck  # vue-tsc
```

`npm run generate` produces a fully static site, so it can be deployed to any
static host (Netlify, Vercel, AWS Amplify, GitHub Pages).

## Structure

```
app/
  assets/css/main.css   design tokens + all component styles
  components/           SiteHeader, SiteFooter, WorkCard, WorkGallery, TypedText, …
  data/projects.ts      project + email content, typed
  layouts/default.vue
  pages/                index, about, projects, emails
public/assets/          images and resume PDFs
```

Project and email content lives in `app/data/projects.ts` — add an entry there
and it shows up in the grid and the filters automatically.
