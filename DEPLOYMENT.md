# Sultec Website - Deployment Guide

## Vercel Deployment (Recommended)

### Quick Deploy
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Environment Variables (if needed)
Create a `.env.local` file in the root:
```
# Add any environment variables needed
```

### Preview & Production
- Preview deployments created automatically on every git push
- Production deploys from the main branch

---

## Alternative: Docker Deployment

Build image:
```bash
docker build -t sultec-website .
```

Run container:
```bash
docker run -p 3000:3000 sultec-website
```

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000`

---

## Project Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SORA font
- **Components**: React functional components
- **Build Time**: ~2-3 minutes
- **Bundle Size**: ~150KB (optimized)

---

## Key Files
- `/app/page.tsx` - Home page (all sections)
- `/sections/` - Page sections (Header, Hero, About, etc.)
- `/components/ui/` - Reusable UI components
- `/tailwind.config.ts` - Design tokens
- `/styles/globals.css` - Global styles

---

## Design System
✓ Colors: #FF6A00 (orange), #0D0D0D (bg), #111111 (surface)
✓ Font: SORA (weights 300-800)
✓ Layout: Responsive (mobile-first)
✓ Dark mode: Default (built-in)
