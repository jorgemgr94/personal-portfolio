# Contributing to Personal Portfolio

Keep changes focused on making the portfolio accurate, accessible, fast, and
easy to maintain.

## Prerequisites

- Node.js 24 LTS (use `.nvmrc`)
- npm 11
- GitHub CLI when publishing a pull request

Install the exact dependency tree from the lockfile:

```bash
nvm use
npm ci
```

The application does not require environment variables by default. Copy
`.env.example` to `.env.local` only when testing Google Analytics, and never
commit real configuration values.

### VS Code

Install the recommended workspace extensions when prompted. Shared settings use
Prettier on save, select the workspace TypeScript version, and match the
repository's two-space, 80-column, LF conventions. Run Oxlint through the npm
scripts or your preferred editor integration.

## Branches

Create branches from `main` with a short, conventional description:

```text
<type>/<description>
```

Examples:

- `feat/project-case-study`
- `fix/mobile-navigation-focus`
- `chore/update-dependencies`

Codex-created branches use the `codex/` prefix.

## Conventional Commits

Commit messages and pull request titles use:

```text
<type>(<optional-scope>): <imperative description>
```

Allowed types are `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
`build`, `ci`, `chore`, and `revert`.

Examples:

```text
feat(projects): add architecture case study
fix(nav): preserve focus when closing the mobile menu
docs: clarify local setup
ci: add production build gate
```

## Development rules

- Keep visitor-facing copy in English unless the product direction changes.
- Keep résumé and portfolio facts in `src/data/`, not embedded in components.
- Use semantic HTML and label icon-only interactive controls.
- Provide useful alternative text for images.
- Preserve keyboard navigation, visible focus, and responsive layouts.
- Add `rel="noopener noreferrer"` to external links opened in a new tab.
- Prefer Server Components where the router permits; load client-side and
  third-party code only when interaction requires it.
- Use direct imports and `next/dynamic` for optional heavy browser features.
- Keep shared TypeScript types in `src/data/types.ts` and avoid `any`.

## Tests and quality checks

No automated test framework is configured. Before introducing the first suite,
agree on the runner and scope with the maintainer. Changes should still include
appropriate manual verification and any existing automated checks.

Run before opening a pull request:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## Pull requests

Keep a pull request independently deployable and focused on one outcome.
Complete the repository template, including:

- the problem and intended outcome;
- explicit scope and exclusions;
- commands and manual scenarios actually validated;
- accessibility, responsive, performance, and privacy impact;
- a rollout or forward-fix plan;
- screenshots or recordings for visual changes.

Avoid mixing unrelated formatting, architecture, dependencies, and product
changes. Update documentation in the same pull request as the behavior it
describes.

## Security and privacy

Do not include credentials, tokens, private personal data, production analytics
payloads, or sensitive logs in commits, issues, screenshots, or pull request
descriptions. Report suspected vulnerabilities through GitHub Security
Advisories instead of a public issue.
