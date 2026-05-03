# React UI Component Base

A React Native UI component base package for Coolbuilds projects. The package exposes reusable UI primitives and a centralized theme layer so product teams can keep visual decisions consistent across applications.

> Package name: `@coolbuilds/ui-react-component-base`

## Features

- React Native component primitives.
- Shared theme provider and `useTheme` hook.
- TypeScript declarations generated at build time.
- CommonJS and ESM build outputs.
- Test and coverage workflow with Vitest.
- Automated npm release workflow from `main`.

## Installation

```bash
npm install @coolbuilds/ui-react-component-base
```

Peer dependencies:

```bash
npm install react react-native
```

Supported peer ranges:

- `react >=18`
- `react-native >=0.70`

## Usage

Wrap your application with `ThemeProvider`, then import components from the package.

```tsx
import React from 'react';
import {View} from 'react-native';
import {
  Button,
  ThemeProvider,
  useTheme,
} from '@coolbuilds/ui-react-component-base';

function ExampleScreen() {
  const theme = useTheme();

  return (
    <View style={{backgroundColor: theme.colors.white}}>
      <Button title="Continue" />
    </View>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <ExampleScreen />
    </ThemeProvider>
  );
}
```

## API

### `ThemeProvider`

Provides the package theme through React context.

```tsx
<ThemeProvider>
  {children}
</ThemeProvider>
```

### `useTheme`

Returns the current theme object.

```tsx
const theme = useTheme();
```

Current theme shape:

```ts
{
  colors: {
    abubutek: string;
    black: string;
    blue: string;
    charcoal: string;
    coffebean: string;
    coklat: string;
    darkcyan: string;
    dustylavender: string;
    eletricrose: string;
    grey: string;
    greynew: string;
    pineteal: string;
    purple: string;
    skyaqua: string;
    springgreen: string;
    tropicalTeal: string;
    twilightindigo: string;
    white: string;
    yellow: string;
  };
  language: {
    enHalo: string;
    idHalo: string;
  };
}
```

### `Button`

A basic React Native button component.

```tsx
<Button title="Continue" />
```

Props:

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Text rendered inside the button. |

## Development

Install dependencies:

```bash
npm install --registry=https://registry.npmjs.org/
```

Run tests:

```bash
npm test
```

Build the package:

```bash
npm run build
```

Build output is generated in `dist/`:

- `dist/index.js` for ESM consumers.
- `dist/index.cjs` for CommonJS consumers.
- `dist/index.d.ts` and `dist/index.d.cts` for TypeScript consumers.

## Project Structure

```text
components/          React Native UI components
theme/               Theme object, provider, and hook
helper/              Internal helper utilities and tests
dist/                Generated package output
.github/workflows/   CI and npm publish automation
```

## Release Flow

Releases are intended to go through pull requests into `main`.

1. Bump the version in `package.json`.
2. Sync `package-lock.json`.
3. Update `CHANGELOG.md`.
4. Open a pull request to `main`.
5. Wait for the `CI` workflow to pass.
6. Merge the pull request.

After merge, the `Publish to npm` workflow runs automatically. It reads the version from `package.json`, creates the matching `vX.Y.Z` Git tag, publishes the package, and verifies that the package is visible on the npm registry.

## Repository

GitHub: https://github.com/coolbuilds/React-UI-Component-Base

## License

No license has been declared yet.
