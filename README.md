# ATS-Friendly CV with Dynamic PDF Generation

A modern, ATS-optimized CV template with automated PDF generation. Built with vanilla HTML/CSS and optimized for both human readers and Applicant Tracking Systems.

## Features

- **ATS-Friendly Format**: Clean semantic HTML without decorative elements that confuse ATS parsers
- **Single-Page Optimized**: Compact layout designed to fit on one page
- **Dynamic PDF Generation**: Automatically calculates content height and generates custom-sized PDF (always 1 page)
- **Modern Design**: Professional typography using Calibri/Arial with clean visual hierarchy
- **Easy to Update**: Simple HTML structure for quick content updates
- **Automated Build**: Gulp-based minification and optimization pipeline

## Quick Start

```bash
npm install
npm run build
```

## Commands

| Command | Description |
| ------- | ----------- |
| `npm run gulp-clean` | Delete minified files from dist folder |
| `npm run gulp-page` | Minify HTML and output to dist |
| `npm run gulp-style` | Minify CSS and output to dist |
| `npm run pdf` | Generate PDF from minified HTML |
| `npm run build` | Run complete build pipeline (clean → minify → generate PDF) |

## Customization

1. Edit `index.html` to update your personal information
2. Modify `style.css` to adjust styling and spacing
3. Run `npm run build` to generate the updated PDF

## Output

- **Minified files**: `dist/index.html` and `dist/style.css`
- **PDF output**: `david-yappeter.pdf` (custom height based on content, always 1 page)

## How It Works

The PDF generator uses Puppeteer to:
1. Launch a headless browser
2. Load the minified HTML
3. Measure the actual content height
4. Generate a PDF with custom dimensions (800px width × dynamic height)
5. Ensures everything fits on exactly one page

## Tech Stack

- HTML5 & CSS3
- Gulp for build automation
- Puppeteer for dynamic PDF generation
- Express for local server during PDF generation

