# Ryoji Kondo — Portfolio

Personal portfolio website of **Ryoji Kondo**, Full-Stack Software Developer based in Sydney.

**Live site:** https://dkon109.github.io/

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tooling
- Lightweight CSS transitions + `IntersectionObserver` for scroll reveals,
  count-up stats, and entrance animations (no animation library)
- [simple-icons](https://simpleicons.org/) — brand logos in the tech stack section
- [FormSubmit](https://formsubmit.co/) — serverless contact form delivery, with a
  `mailto:` fallback so a message is never silently lost
- GitHub Actions → GitHub Pages — CI/CD

The P4 logo in `public/icons/p4.svg` is the unmodified P4.org logo displayed on
[Wikipedia](https://en.wikipedia.org/wiki/P4_(programming_language)), sourced from
[Wikimedia Commons](https://commons.wikimedia.org/wiki/File:P4-logo.svg).

Other Networking assets are sourced from the official project sites, without
modifying the images:

- Mininet: [official site icon](https://mininet.org/favicon.png)
- Open vSwitch: [official logo](https://www.openvswitch.org/assets/vswitch.png)
- OpenFlow: [official logo](https://opennetworking.org/wp-content/uploads/2014/11/OpenFlow-Logo-Small.jpg)

SDN describes a networking approach rather than a single product; its chip uses
a generic network symbol rather than an organisation or certification logo.

## Implementation notes

**Live previews load on approach.** Each project card embeds the real deployed site
rather than a screenshot. Loading four external apps up front cost several seconds on
mobile, so the iframes are injected only once their card comes within 300px of the
viewport — opening the site makes zero external requests, and the styled shell holds
the layout so nothing shifts when a preview appears.

**The aurora blobs mount after load.** The hero's blurred gradient blobs are expensive
to rasterise on mobile GPUs, so they are mounted once the page has loaded and then
faded in, keeping that work off first paint. Offscreen sections are skipped with
`content-visibility`.

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
