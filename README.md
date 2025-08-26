# GatorEx - UF Student Marketplace

A production-ready Next.js 14 application for the University of Florida student marketplace.

## Features

- **Next.js 14** with static export capability
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design system
- **Radix UI** components for accessibility
- **Lucide React** icons
- **Responsive design** optimized for all devices
- **SEO optimized** with proper meta tags
- **Production ready** with ESLint configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create an optimized static export in the `out` directory.

### Export Static Site

```bash
npm run export
# or
yarn export
# or
pnpm export
```

## Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.tsx          # App component
│   ├── _document.tsx     # Document component
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   └── figma/       # Figma-specific components
│   └── styles/          # CSS files
├── public/              # Static assets
└── ...config files
```

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in
- **Linting**: ESLint

## Deployment

This app is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

The `next.config.js` is already configured for static export with `output: 'export'`.

## License

This project is private and proprietary.