# Xabier Martinez - CV Website

A modern, responsive CV website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Features automatic PDF generation and deployment to Cloudflare Workers.

🌐 **Live Site**: [xmartinez.dev](https://xmartinez.dev)

## Features

- **Single Source of Truth**: All CV data managed in a single TypeScript file
- **Automatic PDF Generation**: PDF created during build using Playwright
- **Responsive Design**: Mobile-first design with print-optimized styles
- **Type-Safe**: Full TypeScript support with strict type checking
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Edge Deployment**: Deployed to Cloudflare Workers for global distribution
- **CI/CD**: Automated deployment on push to main branch

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS
- **Type Safety**: TypeScript with strict mode
- **PDF Generation**: [Playwright](https://playwright.dev) - Browser automation
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing
- **CI/CD**: GitHub Actions with automated deployment
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode

## Getting Started

### Prerequisites

- Node.js >= 22.14.0
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/x4b1/xmartinez.git
cd xmartinez

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:4321 in your browser
```

### Building

```bash
# Type check, build site, and generate PDF
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes type checking and PDF generation)
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - Run TypeScript type checking
- `npm run validate` - Run all checks (format, lint, type-check)
- `npm run generate-pdf` - Generate PDF from local server
- `npm run deploy` - Build and deploy to Cloudflare

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── publish.yaml      # CI/CD deployment pipeline
├── .vscode/                  # VS Code configuration
│   ├── extensions.json       # Recommended extensions
│   └── settings.json         # Editor settings
├── public/                   # Static assets
│   ├── xabier_martinez.pdf   # Generated CV PDF
│   └── avatar.jpg            # Profile image
├── scripts/
│   └── generate-pdf.js       # PDF generation script
├── src/
│   ├── components/
│   │   ├── cv/               # CV-specific components
│   │   │   ├── Experience.astro
│   │   │   ├── Header.astro
│   │   │   └── Projects.astro
│   │   └── Download.astro
│   ├── content/
│   │   └── _cv.ts            # CV data (single source of truth)
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML layout with meta tags
│   ├── pages/
│   │   └── index.astro       # Main CV page
│   ├── styles/
│   │   └── global.css        # Global styles
│   └── types/
│       └── cv.ts             # TypeScript type definitions
├── astro.config.mjs          # Astro configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── wrangler.jsonc            # Cloudflare Workers config
```

## Updating Your CV

All CV content is managed in a single file: `src/content/_cv.ts`

```typescript
// src/content/_cv.ts
export const info: CVInfo = {
  name: "Your Name",
  jobDescription: "Your Job Title",
  // ... update your information here
  experience: [
    {
      company: "Company Name",
      title: "Your Title",
      startDate: "Jan 2020",
      endDate: "Present",
      description: ["Achievement 1", "Achievement 2"],
      tags: ["Go", "AWS", "PostgreSQL"],
    },
  ],
  // ...
};
```

After updating, run `npm run build` to rebuild the site and regenerate the PDF.

## PDF Generation

The PDF is automatically generated during the build process using Playwright:

1. Build process starts the preview server
2. Playwright navigates to the site in headless mode
3. Page is prepared for printing (removes download button, adjusts styling)
4. PDF is generated and saved to `public/xabier_martinez.pdf`

### Print Preview (Development)

You can preview how the PDF will look without generating it:

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:4321/print-preview`
3. Or click the eye icon (👁️) in the top-right corner of the main page

The print preview page shows exactly how the PDF will be generated, allowing you to:

- See the exact A4 layout
- Make adjustments to your CV content
- Use browser print (Ctrl/Cmd + P) to save as PDF manually if needed

### Manual PDF Generation

```bash
# Start preview server in one terminal
npm run preview

# Generate PDF in another terminal
npm run generate-pdf
```

## Deployment

The site is automatically deployed to Cloudflare Workers when changes are pushed to the `main` branch.

### Manual Deployment

```bash
npm run deploy
```

### Environment Variables

Required secrets for GitHub Actions:

- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Workers deploy permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

## Code Quality

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Formatting

```bash
npm run format          # Format all files
npm run format:check    # Check formatting
```

### Validation

Run all checks before committing:

```bash
npm run validate
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Optimized for print (PDF generation)

## Performance

- Static site generation for fast loading
- Edge deployment via Cloudflare Workers
- Minimal JavaScript (Astro islands architecture)
- Optimized fonts and assets

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimized
- WCAG 2.1 Level AA compliant

## License

MIT License - feel free to use this project as a template for your own CV website.

## Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- PDF generation powered by [Playwright](https://playwright.dev)
- Deployed on [Cloudflare Workers](https://workers.cloudflare.com)

---

**Questions or suggestions?** Open an issue or submit a pull request!
