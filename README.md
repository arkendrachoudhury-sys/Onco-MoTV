# Onco-MoTV: Oncology Molecular Tracking & Visualization 🧬

**Onco-MoTV** is a high-performance oncology molecular tracking and visualization platform. It provides clinical decision support by bridging genomic variants with global epidemiological data, offering real-time insights for researchers and clinicians.

## ✨ Key Features

- **Global Prevalence Mapping:** Interactive visualization of oncology density across 15+ countries and 7 global regions.
- **Genomic Entity Explorer:** Explore 3500+ variants with real-time search and AI-enhanced intelligence.
- **Clinical Analytics:** Detailed metrics on regional survival rates, treatment costs, and screening awareness.
- **AI-Synthesized Insights:** Instant clinical snapshots for complex gene mutations (Zero-config fallback included for public viewing).
- **Precision UI:** Dark-mode optimized interface designed for high-density medical data visualization.

---

## 📸 Screenshots

> [!TIP]
> Upload your screenshots to the `/assets` folder and update these links to showcase your dashboard.

| Global Mapping Interface | Molecular Variant Explorer |
| :---: | :---: |
| ![Mapping](https://via.placeholder.com/600x400?text=Global+Mapping+Interface) | ![Variants](https://via.placeholder.com/600x400?text=Molecular+Variant+Explorer) |

---

## 🚀 Quick Start

### Build & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (Vercel/Netlify ready)
npm run build
```

## 🛠 Technical Architecture

- **React 18 & Vite** - Ultra-fast frontend state management and hot-reloading.
- **Tailwind CSS** - Utility-first styling for a surgical dark-mode aesthetic.
- **Framer Motion** - Fluid interaction design and state transitions.
- **Recharts & D3** - Scalable vector graphics for clinical data trends.
- **Gemini AI SDK** - Optional AI analysis layer with secure public fallback.

## 🌐 Public Viewing Mode
This application is configured to run without API keys for public demonstrations. If a `GEMINI_API_KEY` is not provided, the system automatically uses its local clinical knowledge base to provide consistent results for genomic exploration.

---

## 📄 License
This project is licensed under the Apache-2.0 License.
