# React Component Library

A modern, modular React component library built with TypeScript, Tailwind CSS, and Vite. This package is published to GitHub Packages and uses Changesets for semantic versioning and automated release management.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Development](#development)
- [Component Publishing Workflow](#component-publishing-workflow)
- [Changesets Guide](#changesets-guide)
- [Release Process](#release-process)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Overview

This is a component library package (`@jb-7-jay/react-component`) that provides reusable React components. We use **Changesets** to manage versioning and releases following semantic versioning principles.

### Key Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Changesets** - Version management and changelog generation
- **Storybook** - Component documentation and testing

## Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build components
pnpm build

# View components in Storybook
pnpm storybook
```

## Development

### Project Structure

```
lib/
├── components/
│   ├── button/
│   ├── carousel/
│   ├── dropdown/
│   ├── text/
│   └── ...
├── index.ts          # Main export file
└── index.css         # Global styles
```

### Adding a New Component

1. Create a new folder under `lib/components/`
2. Build your component (e.g., `index.tsx`)
3. Export it from `lib/index.ts`
4. Create Storybook stories for documentation
5. Follow the Changesets workflow (see below)

## Component Publishing Workflow

This section outlines the step-by-step process for adding or modifying components and getting them published to the package.

### Step-by-Step Process

#### 1. **Create a Feature Branch**

```bash
git checkout -b feature/add-new-component
# or
git checkout -b feature/fix-button-component
```

#### 2. **Implement Your Changes**

Make your component changes or additions:

```bash
# Example: Add a new component
lib/components/new-component/
├── index.tsx
└── new-component.stories.tsx
```

#### 3. **Create a Changeset**

After implementing your changes, run the changeset command:

```bash
pnpm changeset
```

This will launch an interactive prompt where you'll:

- **Select affected packages** - Press space to select `@jb-7-jay/react-component`
- **Choose the type of change**:
  - `patch` - Bug fixes and minor improvements (v1.0.0 → v1.0.1)
  - `minor` - New features (v1.0.0 → v1.1.0)
  - `major` - Breaking changes (v1.0.0 → v2.0.0)
- **Provide a description** - Describe what changed (e.g., "[Ticket-123]: Add Button component with new hover states")

#### 4. **Changeset File Created**

A new markdown file will be created in `.changeset/` with a unique ID:

```
.changeset/
└── brave-lions-shine.md  # Unique ID
```

**Example changeset file:**

```markdown
---
"@jb-7-jay/react-component": minor
---

Add new Button component with enhanced styling and accessibility features
```

#### 5. **Commit Your Changes**

```bash
# Stage changes (including the changeset file)
git add .

# Commit your work
git commit -m "feat: add new button component"
```

#### 6. **Push to Remote**

```bash
git push origin feature/add-new-component
```

#### 7. **Create a Pull Request**

Create a pull request on GitHub with:

- Clear title describing the changes
- Reference to any related issues
- Description of the component and its features

The changeset file will be part of your PR for review.

#### 8. **Merge to Main**

Once approved and merged to `main`, the changeset is ready for release.

### Changeset Types Explained

| Type | Use Case | Example |
|------|----------|---------|
| **patch** | Bug fixes, small improvements, internal refactoring | Fixed button hover state, Updated icon size |
| **minor** | New features, new components, non-breaking additions | Added carousel component, New color variants |
| **major** | Breaking changes, API changes, significant rewrites | Changed component prop names, Removed deprecated features |

## Changesets Guide

### Understanding Changesets

Changesets are a way to manage versioning in monorepos or packages. Each changeset:

- Documents a single logical change
- Specifies which packages are affected
- Indicates the severity of the change (patch, minor, major)
- Includes a description for the changelog

### Common Changeset Commands

```bash
# Create a new changeset
pnpm changeset

# See status of unreleased changesets
pnpm changeset status

# Preview the version changes
pnpm changeset version

# Publish packages (usually done in CI/CD)
pnpm changeset publish
```

### Multiple Changes in One PR

If your PR includes multiple logical changes, you can create multiple changesets:

```bash
pnpm changeset
# Answer prompts for first change

pnpm changeset
# Answer prompts for second change
```

Both changeset files will be included in your PR.

### Viewing Changesets

```bash
# Check what's in the .changeset folder
ls -la .changeset/

# See what version would be released
pnpm changeset version --dry-run
```

## Release Process

### Automated Release (CI/CD)

When changesets are merged to `main`, the release process is:

1. **GitHub Action runs** - Detects changesets in `main`
2. **Version bump** - Updates `package.json` version based on changeset types
3. **Changelog updated** - Entries added to `CHANGELOG.md`
4. **Build & publish** - Package is built and published to GitHub Packages
5. **Git tag created** - Version tag pushed to repository

### Current Package

- **Name**: `@jb-7-jay/react-component`
- **Registry**: GitHub Packages
- **Current Version**: v4.3.0

### Configuration

Changeset configuration is in `.changeset/config.json`:

```json
{
  "changelog": ["@changesets/changelog-github", { "repo": "jb-7-jay/component-library" }],
  "commit": true,
  "baseBranch": "main",
  "access": "restricted"
}
```

## Tips & Best Practices

### ✅ Do

- ✅ Create a changeset for **every** meaningful change
- ✅ Use clear, descriptive changeset messages
- ✅ Choose the correct semver type (patch/minor/major)
- ✅ Test components before committing
- ✅ Update Storybook stories with new components
- ✅ Document breaking changes in major version changesets

### ❌ Don't

- ❌ Forget to create a changeset
- ❌ Commit multiple unrelated changes without separate changesets
- ❌ Manually edit changeset files in `.changeset/`
- ❌ Delete changeset files before merging to main
- ❌ Use major changes for minor improvements

## Troubleshooting

### "No changesets found"

Ensure you've run `pnpm changeset` and created files in `.changeset/`:

```bash
pnpm changeset status
```

### "Need to commit files"

Commit all changes including the changeset file:

```bash
git add .
git commit -m "feat: add component + changeset"
```

## Contributing

1. Create a feature branch from `main`
2. Make your component changes
3. Run `pnpm changeset` to document changes
4. Commit and push your branch
5. Create a pull request
6. Once merged to `main`, the release is automated

