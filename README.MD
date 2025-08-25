<p align="center">
  <a href="https://orflaxindia.com">
    <img src="docs/home.webp" alt="Orflax demo" width="900">
  </a><br/>
  <sub>Built in 24 hours. Deployed. Won INNOVORTEX 2024.</sub>
</p>

[![Winner](https://img.shields.io/badge/Hackathon%20Winner-INNOVORTEX%202024-8a2be2)](#)
[![Live](https://img.shields.io/badge/Live-orflaxindia.com-00b894)](https://orflaxindia.com)
[![Tech](https://img.shields.io/badge/React-18-blue)](#)

### Orflax Website (INNOVORTEX 2024 Winner)

Built in a single day by two developers for INNOVORTEX 2024 — we won, and the sponsors adopted it. The site is live at [orflaxindia.com](https://orflaxindia.com).

### Highlights
- **Winner & Production-ready**: Hackathon winner; deployed and used by the sponsor.
- **24‑hour rebuild**: From a static page to a full product experience in one sitting.
- **First hackathon**: Built during our first-ever hackathon.

### Key Features
- **Modern UI/UX**: Clean, responsive design with clear CTAs and a persistent navbar.
- **Product catalog**: Dedicated product pages, categories, images, and details.
- **Instant search**: Quick search bar with fuzzy matching and type‑ahead filtering.
- **Filtering & discovery**: Fast client‑side filtering and helpful shortcuts.
- **Quick actions**: Bottom‑right floating menu for high‑value actions.
- **Chatbot**: Embedded bot informed with company/product info for instant answers.
- **Company pages**: About, Board of Directors, FAQs, Contact, and more.
- **Bulk savings calculator**: Utility page to estimate savings at scale.

### Tech Stack
- **Frontend**: React 18 + TypeScript, Vite
- **Routing**: `react-router-dom`
- **Styling**: Tailwind CSS + SCSS
- **Motion & UX**: Framer Motion, React Spring, Font Awesome, React Icons
- **Chatbot**: `react-chatbotify` / `react-chatbot-kit`

### Project Structure (frontend)
```text
frontend/
  └─ src/
     ├─ assets/                 # Images, videos, brand assets
     ├─ data/                   # Product data and configuration
     ├─ components/
     │  ├─ layout/              # Header, Footer
     │  └─ ui/                  # Hero, Menu, Info, QuickSearch, Chatbot, etc.
     ├─ pages/
     │  ├─ Home/
     │  ├─ Products/            # Product listing, filters, product detail
     │  ├─ About/               # WhoWeAre, BoardOfDirectors, FAQs, etc.
     │  ├─ Contact/
     │  └─ BulkSavingsCalculator/
     ├─ services/               # api.ts
     ├─ hooks/                  # useFetch, useAuth
     ├─ styles/                 # Tailwind and global SCSS
     ├─ types/                  # TypeScript definitions
     └─ utils/                  # importImages.ts
```

### Getting Started
```bash
cd frontend
npm install
npm run dev
```
Open the dev server URL shown in the terminal (Vite default is `http://localhost:5173`).

### Production Build
```bash
cd frontend
npm run build
npm run preview
```

### License
This project is licensed under the terms of the license in `LICENSE`.

### Credits
Built by a two‑person team in 24 hours for INNOVORTEX 2024. 🚀


