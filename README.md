# ACBM Slides Site

A simple, lightweight presentation framework based on WebSlides. This repository contains the source code for the ACBM slides website.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Documentation](#documentation)
- [Credits](#credits)

## Description

This project provides a slide deck using HTML, CSS, and JavaScript. It leverages the WebSlides library to create beautiful, responsive presentations that work in any modern browser.

## Features

- **Responsive Design**: Slides adapt to different screen sizes.
- **Keyboard Navigation**: Navigate through slides using arrow keys.
- **Touch Support**: Swipe gestures for mobile devices.
- **Plugins**: Includes plugins for zooming, hash navigation, and more.
- **SVG Icons**: Asynchronous loading of SVG icons.

## Project Structure

```
.
├── css/
│   ├── svg-icons.css   # Styles for SVG icons
│   └── webslides.css   # Core WebSlides styles
├── images/             # Directory for image assets
├── js/
│   ├── svg-icons.js    # Script to load and replace SVG icons
│   └── webslides.js    # Core WebSlides JavaScript library (bundled)
├── index.html          # Main HTML entry point for the presentation
├── README.md           # This file
└── _config.yml         # Configuration file (for Jekyll/GitHub Pages)
```

## Getting Started

### Prerequisites

*   A modern web browser (Chrome, Firefox, Safari, Edge).

### Installation

No installation is required. You can run the presentation directly from the file system or serve it using a local web server.

### Executing Program

1.  Clone or download the repository.
2.  Open `index.html` in your web browser.

## Usage

### Creating Slides

Slides are defined in `index.html` within `<section>` tags inside the `#webslides` container.

```html
<main role="main">
  <article id="webslides">

    <!-- Slide 1 -->
    <section>
      <h1>My First Slide</h1>
    </section>

    <!-- Slide 2 -->
    <section class="bg-primary">
      <h2>Another Slide</h2>
    </section>

  </article>
</main>
```

### Customizing

-   **Styles**: Edit `css/webslides.css` to change the look and feel.
-   **Scripts**: The core logic is in `js/webslides.js`. Note that this is a bundled file.

## Documentation

The codebase is fully documented with JSDoc comments.
-   `js/webslides.js`: Contains the main `WebSlides` class and its plugins (DOM, Slide, Scroll, Touch, etc.).
-   `js/svg-icons.js`: Handles fetching and injecting SVG sprites.

## Credits

Based on [WebSlides](https://github.com/webslides/webslides).
Credits to @jlantunez, @LuisSacristan, @Belelros.
