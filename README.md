# Xai Intelligence Workspace

> **Transform Raw Data into Intelligence That Acts.**

Xai Intelligence Workspace is a premium AI-powered intelligence platform interface built to demonstrate modern frontend engineering, interaction design, and product thinking. It showcases a contemporary SaaS experience where raw data is transformed into actionable intelligence through purposeful motion, clear information hierarchy, and reusable UI architecture.

---

## ✨ Features

- **Hero Section** — Animated particle network visualization with floating stat overlays and live metrics
- **Intelligence Flow** — Interactive 3-stage data pipeline with animated SVG data-packet flows
- **Dashboard Preview** — Full app shell with sidebar navigation, KPI cards, Recharts area/bar charts, AI recommendation panel, and insights table
- **Sphere Section** — Orbital knowledge graph visualization with particle spray and floating data chips
- **Global Design** — Deep dark theme, glassmorphic overlays, and purposeful micro-interactions throughout

---

## 🎯 Design Philosophy

The interface follows a calm, enterprise-focused visual language inspired by modern SaaS products. Every section is designed to communicate the product narrative through clarity, purposeful motion, and reusable UI architecture rather than excessive visual effects.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | [Motion (Framer Motion)](https://motion.dev/) · GSAP (ScrollTrigger) · CSS `@keyframes` · SVG `animateMotion` |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Google Fonts — Inter · Outfit · JetBrains Mono |

---

## 📁 Folder Structure

```text
src/
├── app/
│   ├── globals.css          # Global styles, theme tokens, animations
│   ├── layout.tsx           # Root layout — SEO metadata, fonts, dark mode
│   └── page.tsx             # Home page (assembles sections)
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Scroll-aware sticky navbar
│   │   └── footer.tsx       # Footer with API status panel
│   ├── sections/
│   │   ├── hero-section.tsx         # Full-screen hero + particle network
│   │   ├── intelligence-flow.tsx    # Interactive 3-stage AI pipeline
│   │   ├── dashboard-preview.tsx    # Intelligence dashboard preview
│   │   └── sphere-section.tsx       # Orbital knowledge graph
│   ├── dashboard/
│   │   ├── kpi-card.tsx
│   │   ├── sparkline.tsx
│   │   ├── sidebar-item.tsx
│   │   └── insights-table.tsx
│   ├── visualizations/
│   │   ├── particle-network.tsx
│   │   └── pipeline-viz.tsx
│   └── ui/
│       ├── btn.tsx
│       ├── tag.tsx
│       ├── section-label.tsx
│       └── status-pill.tsx
├── lib/
│   ├── constants.ts
│   └── data.ts
└── types/
    └── index.ts
```

---

## 🎬 Animation Decisions

| Animation | Technique | Why |
|---|---|---|
| Hero entry + section reveals | `motion/react` — `initial` / `animate` / `whileInView` | Hardware-accelerated opacity & transform with staggered transitions |
| Flow card hover lift | `motion/react` — `whileHover: { y: -5 }` | Smooth spring-based interaction with GPU transforms |
| Scroll-driven section reveals | GSAP + ScrollTrigger | Timeline-based animations synchronized with scroll position |
| Particle network edges pulsing | CSS `@keyframes` on SVG `<line>` | Lightweight compositor-thread animation with no JavaScript overhead |
| Data packets traveling along paths | SVG `<animateMotion>` | Native SVG animation with zero layout thrashing |
| Orbital rings rotating | CSS `@keyframes` with `transform` | GPU-composited continuous animation |
| Sphere inner glow | CSS animation on `opacity` + `transform` | Lightweight ambient breathing effect |
| Dashboard reveal | GSAP stagger timeline | Progressive introduction of dashboard components |
| Scroll-aware navbar | `window.scroll` + React state | Minimal state updates for responsive navigation |

**Performance goals**

- GPU-accelerated transforms wherever possible
- Minimal layout reflow
- Smooth 60 FPS interactions on modern desktop browsers
- Respect for reduced-motion preferences

---

## 🚀 How to Run

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Start

```bash
# Navigate to the project
cd xai-workspace

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design Reference

**Figma Design**  
https://www.figma.com/design/YTlgoOoA8naNgqCd2nnjcs/xAI-figma-design?node-id=1-893&t=uvVd8iRzwAvTrc6o-1

**Live Demo**  
_To be updated after deployment._

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `BLUE` | `#4F7EFF` | Primary brand, links, active states |
| `VIOLET` | `#7C3AED` | AI highlights and accents |
| `CYAN` | `#22D3EE` | Data stream accents |
| `EMERALD` | `#10B981` | Success indicators and positive trends |

---

## 📄 License

This project was created as part of a frontend engineering assessment.