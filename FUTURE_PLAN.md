# Future Plan

This document outlines the roadmap for the ACBM Slides Site project. The current version represents the completion of Phase 1.

## Phase 1: Foundation (Completed)

- [x] **Core Functionality**: Basic slide navigation (keyboard, touch, scroll).
- [x] **Documentation**: Full JSDoc coverage for all source files (`js/webslides.js`, `js/svg-icons.js`).
- [x] **Project Structure**: Organized file layout for HTML, CSS, and JS.
- [x] **Usage Guide**: Comprehensive README with setup and usage instructions.

## Phase 2: Enhancements (Proposed)

The following features and improvements are planned for the next phase:

### 1. Build System Integration
-   **Webpack/Rollup Setup**: Currently, `js/webslides.js` is a bundled file. We should integrate a build system to manage source files in a `src/` directory and compile them into `dist/`.
-   **Minification**: Automate minification of CSS and JS files for production.

### 2. Testing
-   **Unit Tests**: Add unit tests for core logic (e.g., `Slide`, `DOM` helpers) using Jest or Mocha.
-   **E2E Tests**: Implement end-to-end testing with Cypress or Playwright to verify navigation and interactions across browsers.

### 3. Feature Enhancements
-   **Themes**: Implement a theming system to easily switch between different visual styles.
-   **Presenter Mode**: Add a presenter view with speaker notes and timer.
-   **PDF Export**: Feature to export slides to PDF.

### 4. Code Quality
-   **Linting**: Set up ESLint and Prettier to enforce code style and catch errors.
-   **CI/CD**: Configure GitHub Actions for automated testing and deployment.

### 5. Accessibility
-   **A11y Audit**: Conduct an accessibility audit to ensure the slides are usable by everyone (ARIA labels, contrast checks).
