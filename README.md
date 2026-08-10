# Waerebo Lodge — Company Profile Website

Frontend-only company profile and booking website for **Waerebo Lodge**, a highland lodge and trekking basecamp located in Dintor, Manggarai, Flores, Indonesia — the gateway to the legendary Waerebo village.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, journeys, purpose, gallery, video, services, testimonials, contact |
| `/about` | About Us — story, offerings, history |
| `/trips` | Trekking programs — 1 Day / 2D1N / 3D2N / 4D3N, winding itinerary timeline |
| `/lodge` | Lodge rooms — featured room detail with gallery, facilities, reviews, more rooms |
| `/rooms/[slug]` | Individual room detail page (6 room types, statically generated) |
| `/restaurant` | Restaurant page — hero, gallery thumbnails, WhatsApp booking |
| `/transport` | Transport page — hero, gallery thumbnails, WhatsApp booking |
| `/faq` | FAQ — category tabs (Trip / Lodge / Restaurant / Transport) with Q&A list |

---

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router, Turbopack, full static export)
- **UI** — [React 19](https://react.dev), [TypeScript](https://www.typescriptlang.org)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com) with custom design tokens
- **Icons** — [react-icons](https://react-icons.github.io) (Ionicons 5)
- **Fonts** — Plus Jakarta Sans (body), Dancing Script (accent) via `next/font/google`
- **Images** — `next/image` with local `/public` assets

## Design Tokens

Custom colors defined in `app/globals.css` via `@theme inline`:

| Token | Hex | Usage |
|---|---|---|
| `lodge-green` | `#27392A` | Primary brand green |
| `lodge-mid` | `#5A7C61` | Mid-tone green |
| `lodge-green-light` | `#73B07C` | Accent green |
| `lodge-pale` | `#ABBAA8` | Muted green |
| `lodge-cream` | `#F0E3D3` | Warm cream |
| `lodge-warm` | `#FAF7F2` | Off-white background |
| `lodge-dark` | `#101313` | Near-black |
| `lodge-neutral` | `#8E9797` | Muted text |

---

## Project Structure

```
app/
├── page.tsx                  # Home
├── about/
├── trips/
│   ├── data.ts               # Trip programs data
│   └── _components/          # TripContent, BookingModal
├── lodge/
├── restaurant/
├── transport/
├── faq/
│   └── _components/          # FaqContent (category tabs)
└── rooms/
    ├── data.ts               # Rooms data
    └── [slug]/
        └── _components/      # RoomDetail

components/
├── layout/
│   ├── Navbar.tsx            # Transparent-over-hero, scroll-aware
│   └── Footer.tsx
└── sections/
    ├── HeroSection.tsx
    ├── JourneysSection.tsx
    ├── PurposeSection.tsx
    ├── GallerySection.tsx
    ├── VideoSection.tsx
    ├── ServicesSection.tsx
    ├── TestimonialsSection.tsx
    ├── ContactSection.tsx    # Shared on all pages
    └── ServiceShowcase.tsx   # Shared hero card for Restaurant & Transport

public/
├── logo.png
├── home/                     # Home section images
├── trip/                     # Trip images
└── Design/                   # Figma design references (not deployed)
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

All 16 routes prerender as static HTML at build time — no server or API required.

---

## Contact & Booking

All booking buttons open a **WhatsApp deep link** (`wa.me/6285339021145`) with a pre-filled message. No backend, database, or form submissions are involved.

- **WhatsApp** — +6285 339 021 145
- **Phone** — +6285 239 344 046
- **Email** — waerebolodge@gmail.com
- **Location** — Dintor, Manggarai, Flores, Indonesia
