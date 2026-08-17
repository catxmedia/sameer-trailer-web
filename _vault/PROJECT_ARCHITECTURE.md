# SAMEER TRAILER - WEB ARCHITECTURE & TECHNICAL SYSTEM DOCUMENTATION

## 1. Project Structure

```
sameer-trailer-web/
├── _vault/                  # Secret offline backup vault (AI Memory, transcripts, specs)
│   ├── CHAT_MEMORY_CONTEXT.md
│   ├── CATALOGUE_SPECS_MASTER.md
│   ├── PROJECT_ARCHITECTURE.md
│   └── SYNC_SCRIPT.ps1
├── public/                  # Static web assets (PDF download, PNG trucks, icons, sitemap)
│   ├── trucks/              # 20 High-resolution vehicle PNGs
│   ├── catalogue_pages/     # 20 High-resolution PNG pages
│   ├── Sameer_Trailer_Catalogue.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          # React functional components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── ProductCatalog.jsx
│   │   ├── ProductModal.jsx
│   │   ├── ManufacturingTour.jsx
│   │   ├── WhySameer.jsx
│   │   ├── PayloadCalculator.jsx
│   │   ├── RfqBuilder.jsx
│   │   ├── ContactUnits.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingActions.jsx
│   ├── data/
│   │   ├── productsData.js
│   │   └── companyData.js
│   ├── styles/
│   │   └── index.css        # Master dark industrial design tokens & utilities
│   ├── App.jsx
│   └── main.jsx
├── index.html               # Master HTML with SEO & Schema.org JSON-LD markup
├── vercel.json              # Production routing & cache headers
├── vite.config.js
└── package.json
```

---

## 2. Production Commands

- **Local Dev Server:** `npm run dev`
- **Build Production Bundle:** `npm run build`
- **Deploy to Vercel:** `vercel --prod --yes`
- **Push to GitHub:** `git add . && git commit -m "..." && git push origin master`
