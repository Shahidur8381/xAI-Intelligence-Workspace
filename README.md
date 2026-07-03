# Xai Intelligence Workspace

> **Transform Raw Data into Intelligence That Acts.**

Xai Intelligence Workspace is a premium AI-powered intelligence platform UI, converted from a Figma design to a production-grade Next.js application. It showcases a modern SaaS interface for a data intelligence platform that unifies raw data sources, applies foundation AI models, and delivers clear decisions — not dashboards you have to interpret.

---

## ✨ Features

- **Hero Section** — Animated particle network visualization with floating stat overlays and live metrics
- **Intelligence Flow** — Interactive 3-stage data pipeline with animated SVG data-packet flows
- **Dashboard Preview** — Full app shell with sidebar navigation, KPI cards, recharts area/bar charts, AI recommendation panel, and insights table
- **Sphere Section** — Orbital 3D-like knowledge graph visualization with particle spray and data chips
- **Global Design** — Deep dark theme, glassmorphic overlays, micro-animations throughout

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | [Motion (Framer Motion)](https://motion.dev/) · CSS `@keyframes` · SVG `animateMotion` |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Google Fonts — Inter · Outfit · JetBrains Mono |

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css          # Theme tokens + Tailwind + all keyframes
│   ├── layout.tsx           # Root layout — SEO metadata, fonts, dark mode
│   └── page.tsx             # Home page (assembles sections)
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Scroll-aware sticky navbar
│   │   └── footer.tsx       # Footer with API status panel
│   ├── sections/
│   │   ├── hero-section.tsx         # Full-screen hero + particle network
│   │   ├── intelligence-flow.tsx    # 3-stage pipeline section
│   │   ├── dashboard-preview.tsx    # App shell mockup
│   │   └── sphere-section.tsx       # Orbital knowledge graph
│   ├── dashboard/
│   │   ├── kpi-card.tsx      # KPI stat card with sparkline
│   │   ├── sparkline.tsx     # SVG sparkline chart
│   │   ├── sidebar-item.tsx  # Nav item with active state + badge
│   │   └── insights-table.tsx # Styled insights data table
│   ├── visualizations/
│   │   ├── particle-network.tsx  # SVG animated node graph
│   │   └── pipeline-viz.tsx      # SVG animated data pipeline
│   └── ui/
│       ├── btn.tsx           # Multi-variant button
│       ├── tag.tsx           # Color-coded badge
│       ├── section-label.tsx # Uppercase section label
│       └── status-pill.tsx   # API status indicator
├── lib/
│   ├── constants.ts  # Design tokens (BLUE, VIOLET, CYAN, EMERALD)
│   └── data.ts       # All static/mock data arrays
└── types/
    └── index.ts      # Shared TypeScript types
```

---

## 🎬 Animation Decisions

| Animation | Technique | Why |
|---|---|---|
| Hero entry + section reveals | `motion/react` — `initial`/`animate`/`whileInView` | Hardware-accelerated opacity & transform, `once: true` for perf |
| Flow card hover lift | `motion/react` — `whileHover: { y: -5 }` | Instant 60fps CSS transform with spring physics |
| Particle network edges pulsing | CSS `@keyframes edgeFade` on SVG `<line>` | Runs entirely on the compositor thread — no JS |
| Data packets traveling along paths | SVG `<animateMotion>` | Native SVG animation — no layout thrash |
| Orbital rings rotating | CSS `@keyframes orbitSpin` with `transform: rotateX(...) rotate()` | GPU-composited 3D perspective |
| Sphere inner glow | CSS `@keyframes pvPulse` on `opacity` + `transform: scale` | Composited, smooth on all devices |
| Sparkline gradient fade-in | Pure SVG `<linearGradient>` fill | Zero JS, rendered at parse time |
| Scroll-aware navbar | `window.scroll` event in `useEffect` | Minimal — only triggers a boolean state change |

---

## 🚀 How to Run

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Start

```bash
# Navigate to the Next.js project
cd xai-workspace

# Install dependencies (already done if you followed setup)
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design Reference

**Figma Design:**  
[xAI Figma Design — Node 1-893](https://www.figma.com/design/YTlgoOoA8naNgqCd2nnjcs/xAI-figma-design?node-id=1-893&t=uvVd8iRzwAvTrc6o-1)

**Live URL:**  
🔗 *Coming soon — deployment pending*

---

## 🎨 Color Tokens

| Token | Value | Usage |
|---|---|---|
| `BLUE` | `#4F7EFF` | Primary brand, links, active states |
| `VIOLET` | `#7C3AED` | Accent, AI/model highlights |
| `CYAN` | `#22D3EE` | Data stream accents |
| `EMERALD` | `#10B981` | Success, positive trends |

---

## 📄 License

MIT © 2024 Xai Technologies, Inc.
