# Jason Kraft — Personal Resume Site

A personal portfolio and resume site for Jason Kraft, Software Test Engineer based in Johannesburg, South Africa.

## Overview

A static, single-author site built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies. Designed to be fast, responsive, and easy to maintain.

## Pages

| Page | Description |
|---|---|
| `index.html` | Main resume — profile, experience, education, skills, certifications |
| `public/contact.html` | Contact form (Formspree integration pending) |
| `public/projects.html` | Personal and side projects |

## Features

- Responsive layout with mobile hamburger navigation
- Light / dark theme toggle with `localStorage` persistence
- Scroll-spy highlights the active section in the navbar
- Sections animate in on scroll via `IntersectionObserver`
- Downloadable CV linked directly from the navbar
- Certificate PDFs viewable inline
- Print-friendly stylesheet

## Project Structure

```
my-resume/
├── index.html          # Main resume page
├── style.css           # All styles (design tokens, components, responsive, print)
├── script.js           # Theme toggle, hamburger nav, scroll-spy, animations
├── assets/
│   └── images/         # Profile picture, cert badge, hobby images
├── public/
│   ├── contact.html    # Contact page
│   └── projects.html   # Projects page
└── docs/               # CV and certificate PDFs (not all files are committed — see .gitignore)
```

## Sensitive Files

The `docs/` folder contains PDFs that are intentionally excluded from version control via `.gitignore`. Only the CTFL certificate and software testing certificate are committed; the CV and personal documents are kept local only.

## Getting Started

No build step required. Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Deployment

The site is designed to be hosted on any static hosting platform (GitHub Pages, Netlify, Vercel, etc.).
