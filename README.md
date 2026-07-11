# Ryoji Kondo — Portfolio

Personal portfolio website of **Ryoji Kondo**, Full-Stack Software Developer based in Sydney.

**Live site:** https://dkon109.github.io/

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tooling
- Lightweight CSS transitions + `IntersectionObserver` for scroll reveals,
  count-up stats, and entrance animations (no animation library)
- [simple-icons](https://simpleicons.org/) — brand logos in the tech stack section
- [Web3Forms](https://web3forms.com/) — serverless contact form delivery
- GitHub Actions → GitHub Pages — CI/CD

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Deployment

Every push to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site
and deploys the `dist/` output to GitHub Pages.
