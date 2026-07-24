# AGENTS.md

This document provides guidelines for agentic coding assistants working in this repository.

## Build, Lint, and Test Commands

### Development

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm run start` - Start production server
- `npm run lint` - Run Oxlint
- `npm run format:check` - Verify Prettier formatting
- `npm run typecheck` - Run TypeScript without emitting files
- `npm run check` - Run formatting, lint, and type-check gates

### Testing

- No test framework is currently configured in this project.
- When adding tests, check with the user for their preferred framework (Jest, Vitest, etc.)

## Code Style Guidelines

### Imports

- Use `@/` alias for src directory imports (configured in tsconfig paths)
- Group imports: external libs first, then internal imports
- Example:
  ```tsx
  import { Badge } from '@/components/ui/badge';
  import { networks } from '@/data/networks';
  import Image from 'next/image';
  ```

### Formatting

- Prettier is configured with:
  - Single quotes: true
  - Trailing commas: none
  - Print width: 80 chars
  - Semicolons: required
  - Tab width: 2 spaces
  - Use tabs: false
- Always run `npm run check` before completing tasks
- Run `npm run build` when application or build configuration changes

### TypeScript

- Strict mode is enabled
- Use proper type annotations (no `any`)
- Define types in `src/data/types.ts` for shared types
- Use const assertions for enums: `const Enum = { ... } as const`
- Export types alongside values when appropriate

### Component Conventions

- Use functional components with hooks
- Default export for main components: `export default function ComponentName()`
- Named exports for utilities and sub-components
- Destructure props in function parameters
- Use `cn()` from `@/lib/utils` for className merging with tailwind-merge

### Naming Conventions

- Components: PascalCase (e.g., `AboutMe`, `ProjectCard`)
- Functions: camelCase (e.g., `formatMonthsToYears`, `useFetch`)
- Constants/Enums: PascalCase (e.g., `TechnologyLearningStatus`)
- Variables: camelCase
- Types: PascalCase (e.g., `Project`, `TechnologyDetails`)
- Files: PascalCase for components (e.g., `AboutMe.tsx`), camelCase for utilities

### Directory Structure

- `src/components/` - React components organized by feature
- `src/components/ui/` - Reusable UI components (shadcn/ui pattern)
- `src/data/` - Data files and TypeScript types
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/helpers/` - Helper functions (formatting, date utilities)
- `src/pages/` - Next.js pages
- `src/styles/` - Global styles

### Component Patterns

- Use class-variance-authority (cva) for component variants in UI components
- Example pattern from `src/components/ui/button.tsx`:
  ```tsx
  const buttonVariants = cva("base-classes", {
    variants: { variant: {...}, size: {...} },
    defaultVariants: { variant: "default", size: "default" }
  });
  ```
- For feature components, use Radix UI primitives with shadcn/ui wrappers

### Error Handling

- Use `onError` callbacks for image loading with fallbacks
- Example: `onError={(e) => { e.currentTarget.style.display = 'none'; }}`
- No extensive error handling patterns currently exist - keep error handling simple and inline

### Comments

- Use JSDoc comments for exported utility functions
- Keep inline comments minimal
- Comment complex business logic or algorithms

### Accessibility

- Add `aria-label` attributes to interactive elements without text content
- Use semantic HTML elements (section, header, main)
- Add `alt` attributes to images
- Include `rel="noopener noreferrer"` on external links

### Styling

- Use Tailwind CSS for all styling
- Use shadcn/ui components for common UI patterns
- Use `framer-motion` for animations
- Use `lucide-react` for icons

## Project Configuration

- Next.js 15 with the Pages Router (`src/pages/`)
- React 19.1.0
- TypeScript 5.9
- Tailwind CSS 4
- Oxlint for linting and Prettier for formatting

## Key Aliases (components.json)

- `@/components` → src/components
- `@/lib` → src/lib
- `@/ui` → src/components/ui
- `@/hooks` → src/hooks
