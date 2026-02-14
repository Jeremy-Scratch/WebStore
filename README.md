# WebStore

Small e-commerce demo frontend built with Vite + React + TypeScript.

## 🚀 Overview

This repository contains a frontend UI for a small web store showcasing components such as a navbar, hero/feature carousels, product/category cards, and a footer. The project is structured for clarity and component re-use.

## 🛠️ Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS

## ⚙️ Quick start

Prerequisites: Node.js (16+), npm or pnpm/yarn.

📋 Clone the repository:

```bash
git clone https://github.com/Jeremy-Scratch/WebStore.git
cd WebStore
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

If your `package.json` uses different script names, adjust the commands accordingly.

## ✨ Project structure

- `index.html` — app entry HTML
- `src/main.tsx` — React entry
- `src/App.tsx` — root component
- `src/assets/` — images and media
- `src/components/` — UI components (navbar, hero, carousels, footer, etc.)
- `src/hooks/` — custom hooks (carousel logic)
- `src/data/` — sample data objects (gamesObjects)
- `public/` — static assets

See `docs/Components.md` and `docs/Architecture.md` for details about components and architecture.

## 📋 Development notes

- Components are organized by feature (e.g., `carousel/feature`, `carousel/hero`).
- Use the `hooks/carouselLogic.tsx` hook to understand carousel behavior and state handling.

## Contributing

See `docs/CONTRIBUTING.md` for how to contribute, run linters, and run the development server.

## 📋 License

This project is licensed under the MIT License. See the LICENSE file for more details.
