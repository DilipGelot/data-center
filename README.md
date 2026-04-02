# 🏗️ Data Center — Interactive Isometric Facility Viewer

An interactive, isometric 3D-style data center facility viewer built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Click on any equipment to inspect live telemetry details in a slide-out sidebar while the rest of the facility gracefully dims.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss)

---

## ✨ Features

- **Isometric Layout** — CSS 3D transforms create a realistic facility floor plan with transparent containment walls.
- **17 Industrial Assets** — Gas Turbines, BESS, Switchgear, Transformers, Server Racks, Cooling Systems, and more, each rendered from high-quality `.webp` image assets.
- **Animated Power Flow Lines** — Color-coded SVG connection paths (yellow, blue, green) with animated dash offsets visualize power distribution across the facility.
- **Click-to-Inspect** — Click any equipment model to:
  - Highlight it with a gentle bounce animation.
  - Grayscale all other models for visual focus.
  - Scale and shift the entire facility map to make room for the details sidebar.
- **Details Sidebar** — A professional slide-in panel with a dark-blue header showing component-specific telemetry data (status, power output, efficiency, temperature).
- **Zoom, Pan & Pinch** — Powered by `react-zoom-pan-pinch` for smooth navigation across the facility.

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:

| Tool | Version |
|------|---------|
| **Node.js** | `>=18.0.0` |
| **npm** | `>=9.0.0` (ships with Node.js) |

> **Tip:** You can check your versions by running:
> ```bash
> node -v
> npm -v
> ```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:DilipGelot/data-center.git
cd data-center
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will start at **[http://localhost:3000](http://localhost:3000)**.

Open this URL in your browser to see the interactive facility viewer.

### 4. Build for Production (Optional)

```bash
npm run build
npm run start
```

This creates an optimized production build and serves it on `http://localhost:3000`.

---

## 📁 Project Structure

```
data-center/
├── public/
│   └── assets/                  # All equipment image assets (.webp)
│       ├── Gas-turbine.webp
│       ├── bess.webp
│       ├── mv-switchgear.webp
│       ├── server.webp
│       ├── hv-mv-transformer.webp
│       ├── dry-cooler.webp
│       └── ...                  # 21 image assets total
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Main entry point
│   │   └── globals.css          # Global styles & animations
│   │
│   └── components/
│       ├── Scene.tsx             # Main scene orchestrator
│       ├── IsometricZone.tsx     # 3D containment walls (CSS transforms)
│       ├── ConnectionLines.tsx   # SVG power flow paths & animations
│       ├── SelectionContext.tsx  # Global selection state (React Context)
│       ├── InteractiveModel.tsx  # Click-to-focus wrapper component
│       ├── Sidebar.tsx           # Slide-in details panel
│       ├── ModelLabel.tsx        # Floating label component
│       │
│       │   # ── Equipment Components ──
│       ├── UtilityPower.tsx
│       ├── HvMvTransformer.tsx
│       ├── DieselGenerator.tsx
│       ├── GasGenerator.tsx
│       ├── GasTurbine.tsx
│       ├── BatteryStorage.tsx
│       ├── MvSwitchgear.tsx
│       ├── MobilePower.tsx
│       ├── RentalPower.tsx
│       ├── CchpModule.tsx
│       ├── DistributionSwitchgear.tsx
│       ├── LvMvTransformer.tsx
│       ├── LoadBank.tsx
│       ├── DryCooler.tsx
│       ├── TemperatureControl.tsx
│       ├── CompressedAir.tsx
│       └── ServerCluster.tsx
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Architecture Overview

### Selection System

The interactive selection system uses a lightweight React Context pattern:

1. **`SelectionContext`** — Provides `selectedId` and `setSelectedId` globally.
2. **`InteractiveModel`** — A wrapper that reads the context; applies bounce animation to the selected model and `grayscale(100%)` to all others.
3. **`Scene`** — Dynamically scales the facility map down (`scale-75`) and shifts it left when a model is selected, making room for the sidebar.
4. **`Sidebar`** — Reads `selectedId` and renders component-specific telemetry data.

### Connection Lines

Power flow connections are rendered as SVG `<path>` elements with animated stroke dash arrays:

| Color | Route |
|-------|-------|
| 🟡 **Yellow** | Gas Turbine → MV Switchgear |
| 🔵 **Blue** | Cooling / Auxiliary circuits |
| 🟢 **Green** | Distribution Switchgear → Server Racks |

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot-reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.2.1 | React framework with App Router |
| `react` | 19.2.4 | UI library |
| `react-dom` | 19.2.4 | DOM rendering |
| `react-zoom-pan-pinch` | ^3.7.0 | Zoom, pan & pinch interactions |
| `tailwindcss` | ^4 | Utility-first CSS framework |
| `typescript` | ^5 | Type-safe JavaScript |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.
