# Contributing to Harmony Hub Frontend

First off, thank you for considering contributing to Harmony Hub Frontend! It's people like you that make this project better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible using our bug report template.

**To submit a bug report:**

1. Use the GitHub Issues page
2. Select the "Bug Report" template
3. Fill in all required sections
4. Include:
   - Clear description of the issue
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

1. Use a clear and descriptive title
2. Provide a detailed description of the proposed feature
3. Explain why this enhancement would be useful
4. Include mockups or examples if applicable

### Pull Requests

We actively welcome your pull requests! Here's how to submit one:

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Add tests** if you've added code that should be tested
4. **Ensure the test suite passes** (`npm test`)
5. **Ensure your code lints** (`npm run lint`)
6. **Format your code** (`npm run format`)
7. **Write a clear commit message** following our guidelines
8. **Submit the pull request** with a comprehensive description

#### Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Comments added to complex code sections
- [ ] Documentation updated (if needed)
- [ ] No new warnings generated
- [ ] Tests added/updated and all tests pass
- [ ] Changes don't break existing functionality

## Development Setup

### Prerequisites

- Node.js >= 16.x
- npm >= 7.x or yarn >= 1.22.x

### Setup Steps

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/harmony-hub-frontend.git
   cd harmony-hub-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Make your changes and test**

   ```bash
   npm test
   npm run lint
   npm run format
   ```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode checks
- Avoid using `any` type - use proper types or `unknown`
- Export types and interfaces when they might be reused

### React Components

- Use functional components with hooks
- Follow the React Hooks rules
- Keep components small and focused on a single responsibility
- Use meaningful component and prop names

### File Naming Conventions

- React components: `PascalCase.tsx` (e.g., `AudioPlayer.tsx`)
- Utilities/helpers: `camelCase.ts` (e.g., `formatTime.ts`)
- Redux slices: `camelCaseSlice.ts` (e.g., `audioSlice.ts`)
- Test files: `ComponentName.test.tsx` or `utilityName.test.ts`

### Code Style

We use ESLint and Prettier to maintain code quality and consistency:

- **Indentation:** 2 spaces
- **Quotes:** Single quotes for strings
- **Semicolons:** Required
- **Line length:** Max 100 characters
- **Trailing commas:** ES5 style

Run formatting before committing:

```bash
npm run format
npm run lint:fix
```

### Import Organization

Organize imports in the following order:

1. React and React-related imports
2. Third-party library imports
3. Local component imports
4. Local utility imports
5. Type imports
6. CSS imports

Example:

```typescript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'external-ui-library';
import AudioPlayer from './AudioPlayer';
import { formatTime } from '../utils/formatTime';
import type { AudioState } from '../types';
import './styles.css';
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Documentation only changes
- **style:** Code style changes (formatting, missing semicolons, etc.)
- **refactor:** Code change that neither fixes a bug nor adds a feature
- **perf:** Performance improvements
- **test:** Adding or updating tests
- **chore:** Changes to build process or auxiliary tools

### Examples

```
feat(audio): add volume fade in/out functionality

Implemented smooth volume transitions for better user experience.
Includes new volumeFade utility function and updated audio controls.

Closes #123
```

```
fix(studio): resolve audio playback timing issue

Fixed race condition in audio playback that caused timing inconsistencies.
```

```
docs(readme): update installation instructions

Added troubleshooting section for common setup issues.
```

## Testing Guidelines

### Writing Tests

- Write tests for all new features and bug fixes
- Aim for high code coverage (>80%)
- Test both happy paths and error cases
- Use descriptive test names that explain what is being tested

### Test Structure

```typescript
describe('ComponentName', () => {
  it('should render correctly with default props', () => {
    // Test implementation
  });

  it('should handle user interaction', () => {
    // Test implementation
  });

  it('should display error message when validation fails', () => {
    // Test implementation
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- AudioPlayer.test.tsx
```

## Questions?

Don't hesitate to ask questions! You can:

- Open an issue with the "question" label
- Reach out to the maintainers
- Check existing documentation and issues

## Recognition

Contributors will be recognized in our README and release notes. Thank you for making Harmony Hub Frontend better!

---

**Happy Contributing! 🎉**
