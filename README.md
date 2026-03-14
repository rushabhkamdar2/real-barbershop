# Real Barbershop — React + Vite + Tailwind Website

A conversion-optimized website for Real Barbershop in Burtonsville, MD.

## Tech Stack
- **React 18** — Component-based UI
- **Vite** — Lightning-fast dev server & build tool
- **Tailwind CSS 3** — Utility-first styling

## Features
- EN/ES language toggle (auto-detects browser language)
- Scroll-triggered animations
- Mobile-responsive with floating CTA
- Google Maps embed with styled overlay
- JSON-LD structured data for local SEO
- Individual barber booking flows (Booksy integration)
- Today's hours auto-highlighted

## Quick Start

```bash
# 1. Navigate to project folder
cd real-barbershop

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser to http://localhost:5173
```

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy to Netlify, Vercel, or any static host.

## Project Structure

```
real-barbershop/
├── index.html              # Entry HTML with structured data / SEO
├── package.json
├── vite.config.js
├── tailwind.config.js      # Custom colors, fonts, animations
├── postcss.config.js
├── public/                 # Static assets
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component (assembles all sections)
    ├── index.css           # Tailwind imports + custom utilities
    ├── i18n.js             # EN/ES translations
    ├── hooks/
    │   └── useInView.js    # Scroll animation hook
    └── components/
        ├── LangContext.jsx  # Language provider (React Context)
        ├── LangToggle.jsx   # EN/ES toggle button
        ├── Navbar.jsx       # Fixed nav with mobile hamburger
        ├── Hero.jsx         # Hero section with CTAs & stats
        ├── Services.jsx     # Service cards grid
        ├── Barbers.jsx      # Barber profile cards
        ├── Reviews.jsx      # Horizontal scroll review carousel
        ├── Booking.jsx      # Booking section with Booksy links
        ├── MapSection.jsx   # Google Maps embed
        ├── Info.jsx         # Hours + location + amenities
        ├── Footer.jsx       # Footer
        ├── FloatingCTA.jsx  # Mobile sticky book button
        └── Divider.jsx      # Gold gradient divider line
```

## Customization Notes

- **Add real photos**: Replace the emoji placeholders in `Barbers.jsx` with `<img>` tags
- **Update Booksy links**: Edit URLs in `Barbers.jsx` and `Booking.jsx`
- **Add Square booking**: Add a third booking option in `Booking.jsx`
- **Google Maps API key**: Replace the key in `MapSection.jsx` with the shop's own key
- **Colors/branding**: Edit `tailwind.config.js` under `theme.extend.colors`
