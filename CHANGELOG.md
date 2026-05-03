# Changelog

All notable changes to this project will be documented in this file.

## [1.0.10] - 2026-05-04

### Changed

- Published the professional README update with the npm package metadata.

## [1.0.9] - 2026-05-04

### Fixed

- Added npm registry verification after publish so the workflow fails if the package is not publicly visible.

## [1.0.8] - 2026-05-04

### Changed

- Renamed the npm package scope from `@rickyarians/ui-react-component-base` to `@coolbuilds/ui-react-component-base`.

## [1.0.7] - 2026-05-04

### Fixed

- Fixed npm publish automation so existing tags no longer silently skip unpublished package versions.
- Bumped the release version after `v1.0.6` was tagged locally/remotely but not published to npm.

## [1.0.6] - 2026-05-04

### Changed

- Updated design token generated theme changes from the Coolbuilds repository.
- Added unit test and coverage setup for helper utilities.
- Updated package repository metadata to point to the Coolbuilds GitHub repository.

### Fixed

- Improved CI setup for deterministic pnpm installs, push validation, pull request validation, and build verification.

## [1.0.5] - Previous release

- Published previous package release.
