# Tinty - Story-First Landing Page

A scroll-driven, cinematic story website for Tinty, built with Next.js, GSAP, and Lenis.

## Overview

This project implements a single-page, scroll-driven website that tells the Tinty product story through sequential animations. It features a sticky canvas area, smooth scroll physics, and responsive design with accessibility considerations.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with custom CSS variables
- **Animation**: GSAP with ScrollTrigger
- **Smooth Scrolling**: Lenis
- **UI Transitions**: Framer Motion
- **TypeScript**: For type safety

## Features

- Scroll-driven story scenes
- Prefers-reduced-motion support
- Responsive design (mobile fallbacks)
- Waitlist form with API endpoint
- SEO optimized with meta tags
- Accessibility features (keyboard navigation, semantic HTML)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is ready for deployment on Vercel or any platform supporting Next.js.

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## File Structure

```
/app
  /api/waitlist       # Waitlist API endpoint
  /components         # React components (scenes, forms, etc.)
  /lib                # Utility functions (GSAP timeline, hooks)
  /styles             # Global styles
...
```

## Customization

- **Colors**: Modify CSS variables in `app/globals.css`
- **Scenes**: Edit components in `app/components/`
- **Animations**: Update timeline in `app/lib/gsapTimeline.ts`
- **SEO**: Edit metadata in `app/layout.tsx`

## License

Private - Tinty Project
