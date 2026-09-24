# 📸 Adasah — Photography Blog

<div align="center">

  <img src="public/favicon.svg" alt="Adasah Logo" width="90" height="90" style="border-radius: 20px;" />

  <h3>A modern, responsive photography blog platform sharing professional tips, gear reviews, and creative insights.</h3>

  <p align="center">
    <a href="https://elslmawy.github.io/adasa-photography-blog/">
      <img src="https://img.shields.io/badge/🌐_Live_Demo-View_Live_Site-f97316?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" height="40" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/React_Router-v7.1-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="React Router 7" />
  </p>

</div>

---

## 🌟 Overview

**Adasah (عدسة)** is a premium, feature-rich photography blog built with React 19, Vite 8, and Tailwind CSS v4. It delivers a fast, immersive single-page application (SPA) experience with a sleek dark aesthetic, warm amber gradients, smooth animations, and full Arabic RTL typography.

---

## 🚀 Live Demo

Experience the live application hosted on GitHub Pages:

👉 **[https://elslmawy.github.io/adasa-photography-blog/](https://elslmawy.github.io/adasa-photography-blog/)**

---

## ✨ Key Features

- 🎨 **Dark Glassmorphism UI**: Sleek dark theme (`#0a0a0a`) with glowing ambient blobs, warm amber/orange accents, and smooth micro-interactions.
- 🔍 **Real-Time Search & Filtering**: Instant search across 28 articles with multi-category filters (Lighting, Portraits, Landscapes, Techniques, Gear).
- 🔀 **Grid & List View Toggle**: Seamlessly switch between a modern card grid view and an expansive horizontal list layout.
- 📑 **Rich Article Reader**:
  - Full-width hero cover with reading time and author credentials.
  - Sticky interactive Table of Contents (TOC) with smooth scrolling.
  - Social media sharing (X/Twitter, LinkedIn, WhatsApp) and one-click link copying.
  - Curated "Related Articles" recommendation section.
- 🔢 **Dynamic Pagination**: Clean pagination system with 6 articles per page and smart ellipsis navigation.
- 📱 **100% Responsive Design**: Optimized across mobile, tablet, and desktop screens with an animated mobile drawer navigation.
- ⚡ **Lightning Fast Performance**: Zero-lag routing powered by React Router with instant client-side transitions.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI component library |
| **[Vite 8](https://vitejs.dev/)** | High-performance build tool and dev server |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Modern utility-first styling engine |
| **[React Router 7](https://reactrouter.com/)** | Client-side routing and navigation (`HashRouter`) |
| **[Tajawal Font](https://fonts.google.com/specimen/Tajawal)** | Clean Arabic typography |
| **[Font Awesome 6](https://fontawesome.com/)** | Comprehensive vector icon set |
| **[gh-pages](https://github.com/tschaub/gh-pages)** | Automated deployment pipeline to GitHub Pages |

---

## 📂 Project Structure

```bash
week-1-react/
├── public/                  # Static assets & favicon
├── src/
│   ├── assets/              # Local image assets
│   ├── components/          # Reusable UI components
│   │   ├── BlogCard.jsx     # Article cards (Grid, Featured, and List views)
│   │   ├── CategoryCard.jsx # Topic category card
│   │   ├── Footer.jsx       # Global footer with newsletter & social links
│   │   ├── Layout.jsx       # App shell layout & auto-scroll on route change
│   │   └── Navbar.jsx       # Sticky header & responsive mobile navigation
│   ├── data/                # Static blog data
│   │   ├── posts.json       # Database containing 28 blog articles
│   │   └── siteData.js      # Central site configuration & category data
│   ├── pages/               # Route pages
│   │   ├── HomePage.jsx     # Landing page with hero, featured posts & stats
│   │   ├── BlogPage.jsx     # Blog archive with search, filters & pagination
│   │   ├── BlogDetailsPage.jsx # Article reader with sidebar TOC & sharing
│   │   ├── AboutPage.jsx    # About us, mission, values & author team
│   │   ├── PrivacyPage.jsx  # Privacy policy page
│   │   ├── TermsPage.jsx    # Terms of service page
│   │   └── NotFoundPage.jsx # 404 error page with quick links
│   ├── App.jsx              # Client router configuration
│   ├── index.css            # Design tokens, custom utilities & Tailwind setup
│   └── main.jsx             # React entry point
├── vite.config.js           # Vite configuration & base path
└── package.json             # Dependencies and project scripts
```

---

## 💻 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Elslmawy/adasa-photography-blog.git
cd adasa-photography-blog
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at: `http://localhost:5173/`

### 4. Build for Production
```bash
npm run build
```

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```
