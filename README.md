# Personal Portfolio

Source for [jorgemgr.com](https://jorgemgr.com), Jorge García's software
engineering portfolio and resume. The site presents professional experience,
selected projects, technical skills, and a print-friendly resume.

## Technology

- Next.js 15 Pages Router and React 19
- TypeScript in strict mode
- Tailwind CSS 4 and shadcn-style UI primitives
- Framer Motion
- Vercel Analytics and optional Google Analytics
- Oxlint, Prettier, and GitHub Actions

## Requirements

- Node.js 24 LTS
- npm 11

The supported versions are declared in `.nvmrc` and `package.json`.

## Setup

Install the declared Node version and dependencies:

```bash
nvm use
npm ci
```

The site works without local environment variables. Google Analytics uses the
production measurement ID by default. To send local or preview traffic to a
different data stream, copy the example file and provide its measurement ID:

```bash
cp .env.example .env.local
```

Google Analytics measurement IDs are public identifiers. Never place API
secrets or other credentials in `NEXT_PUBLIC_*` variables.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command                | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Run the Turbopack development server.       |
| `npm run build`        | Create the production build and sitemap.    |
| `npm run start`        | Serve a completed production build.         |
| `npm run format`       | Format source and repository configuration. |
| `npm run format:check` | Verify formatting without changing files.   |
| `npm run lint`         | Run Oxlint.                                 |
| `npm run lint:fix`     | Apply safe Oxlint fixes.                    |
| `npm run typecheck`    | Run TypeScript without emitting files.      |
| `npm run check`        | Run formatting, lint, and TypeScript gates. |

No automated test runner is currently configured. Coordinate the framework
choice before adding the first test suite.

## Repository map

- `src/components/`: feature and reusable UI components.
- `src/data/`: portfolio, resume, project, and technology content.
- `src/helpers/`: date and display formatting helpers.
- `src/pages/`: Next.js routes and application setup.
- `src/styles/`: global Tailwind styles.
- `public/`: images, icons, and generated sitemap assets.

## Pull requests

Pull request titles follow Conventional Commits. CI validates formatting, lint,
TypeScript, and the production build. See [CONTRIBUTING.md](CONTRIBUTING.md)
before submitting changes.
