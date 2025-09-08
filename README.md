# @your-scope/hello-world-ts

Tiny TypeScript "hello world" library published on npm.

## Install

```bash
npm install @your-scope/hello-world-ts
```

## Usage

```ts
import hello from "@your-scope/hello-world-ts";

console.log(hello()); // "Hello, world!"
```

## Scripts

- `npm run build`: Build to `dist` (CJS + ESM + types)
- `npm test`: Placeholder test

## Release & Publish

This repo includes two GitHub Actions:

1. PR title check (`.github/workflows/pr-title.yml`) validates PR titles using Conventional Commits.
2. Publish flow (`.github/workflows/publish.yml`) publishes to npm on GitHub Release publish or push of a `vX.Y.Z` tag.

### Setup

1. Create an npm token with publish rights and add it as a repository secret named `NPM_TOKEN`.
2. Update `package.json` fields: `name`, `author`, `repository`, `bugs`, `homepage`.
3. Optionally, adjust Node version in the workflow.

### Trigger a publish

- Create and push a tag like `v0.1.0`, or
- Create a GitHub Release (Publish release), or
- Manually dispatch the workflow.

> The workflow builds with Node 20 and publishes with `--access public --provenance`.

