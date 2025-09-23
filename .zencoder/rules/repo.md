---
description: Repository Information Overview
alwaysApply: true
---

# Abanit Website Information

## Summary
Abanit is a Next.js-based website for a digital marketing agency that helps businesses succeed in the digital world through creativity and innovative strategies. The website is built with modern web technologies and features a responsive design with RTL (right-to-left) support for Persian language.

## Structure
- **src/app**: Next.js application routes and pages
- **src/components**: React components organized by UI elements and sections
- **src/lib**: Utility functions and shared code
- **src/styles**: CSS files for animations and optimizations
- **public**: Static assets including images and fonts

## Language & Runtime
**Language**: TypeScript
**Version**: ES2017 target with modern features
**Framework**: Next.js 15.4.6
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 19.1.0
- Next.js 15.4.6
- Framer Motion 12.23.12
- Radix UI components (accordion, dialog, etc.)
- Tailwind CSS 3.4.17
- next-themes for theme management
- Lucide React for icons

**Development Dependencies**:
- TypeScript 5.x
- ESLint 9.x
- PostCSS 8.5.6 with nesting plugin
- Tailwind plugins (animate, postcss)

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Main Files & Resources
**Entry Points**:
- src/app/layout.tsx: Root layout with theme provider and global components
- src/app/page.tsx: Main landing page with dynamically loaded sections
- src/components/sections/: Contains major website sections (Hero, Services, etc.)

**Configuration**:
- next.config.ts: Next.js configuration
- tailwind.config.js: Tailwind CSS theme and plugins
- tsconfig.json: TypeScript compiler options
- components.json: Component configuration

## Project Features
- RTL support for Persian language
- Dynamic component loading for performance optimization
- Responsive design with mobile-first approach
- Custom animations using Framer Motion
- Theme support with next-themes
- Performance optimizations with Vercel Speed Insights
- Custom UI components built with Radix UI primitives