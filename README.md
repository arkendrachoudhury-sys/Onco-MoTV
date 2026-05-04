# Onco-MoTV: Oncology Molecular Tracking and Visualization

Onco-MoTV is a high-performance clinical decision support system designed for molecular oncology. It bridges the gap between genomic variant data and global epidemiological trends, providing clinicians and researchers with a unified interface for complex data synthesis and regional analysis.

## Overview

The platform integrates multi-omic data sources with real-time visualization to assist in the identification of actionable mutations and the understanding of cancer prevalence across diverse populations. Designed with a focus on high-density data clarity, Onco-MoTV offers a surgical approach to oncological analytics.

## Core Capabilities

### Global Epidemiology Mapping
*   **Geospatial Analytics:** Interactive density mapping across 15+ countries and 7 major global regions.
*   **Regional Metrics:** Country-specific prevalence data, survival rates, and clinical awareness statistics.

### Molecular Variant Explorer
*   **Genomic Intelligence:** Exploration of over 3,500 validated variants with high-speed indexing.
*   **AI-Enhanced Synthesis:** Integrated intelligence layer providing rapid clinical summaries for complex gene-variant combinations.

### Clinical Economic Analysis
*   **Treatment Cost Modeling:** Comparative analysis of regional costs for chemotherapy, radiation, and bone marrow transplants.
*   **Screening Efficiency:** Visualization of screening awareness vs. survival outcome correlations.

---

## Documentation and Visuals

### Screenshots
A collection of system interface captures can be found in the `/assets/screenshots` directory. These include:
- `global_dashboard.png`: Unified overview of cancer density and regional stats.
- `molecular_search.png`: Detailed view of the genomic variant explorer.
- `clinical_trends.png`: Comparative Cost vs. Survival analytics.

---

## Technical Stack

*   **Runtime:** React 18, Vite
*   **Interface:** Tailwind CSS (Optimized for low-light clinical environments)
*   **Animation:** Framer Motion (State-aware interaction design)
*   **Data Visualization:** D3.js, Recharts
*   **Intelligence:** Google Gemini API (with deterministic local fallback for public nodes)

---

## Installation and Deployment

### Development Environment
```bash
# Clone the repository and install dependencies
npm install

# Launch the development server
npm run dev
```

### Production Build
```bash
# Generate optimized production assets
npm run build
```

This project is configured for seamless deployment to Vercel or Netlify. For public demonstrations where API keys are unavailable, the system automatically transitions to a localized clinical knowledge base.

---

## License
Distributed under the Apache-2.0 License.
