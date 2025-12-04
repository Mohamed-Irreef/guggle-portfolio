# Guggle Portfolio

A production-ready portfolio web app with a desktop-first Guggle-themed UI.

## Features

- Desktop-first responsive design
- Mobile/tablet fallback page
- SEO optimized
- Accessibility compliant
- Unit and integration tests
- CI/CD with GitHub Actions

## Setup

1. Clone the repo
2. `npm install`
3. `npm run dev` for development
4. `npm run build` for production build

## Scripts

- `npm run dev`: Start dev server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run test`: Run tests
- `npm run test:ui`: Run tests with UI

## Branding

To change brand from Guggle to something else:

1. Run `scripts/replace-brand.ps1` (edit the script for new name)
2. Update assets accordingly

## Deployment

Build the project and deploy the `dist` folder to static hosting like Netlify or Vercel.

For server deployment, deploy both client and server.

## License

See LICENSES.md for all third-party licenses.
