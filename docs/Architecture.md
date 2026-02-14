# Architecture & Folder Layout

This section describes the project's structure and data flow.

Top-level structure:

- `index.html` — HTML entry
- `src/` — application source
  - `main.tsx` — app bootstrap
  - `App.tsx` — root component and routing (if added)
  - `components/` — presentational and composite UI components
  - `hooks/` — reusable hooks, e.g. `carouselLogic.tsx`
  - `data/` — sample data used by components (e.g. `gamesObjects.tsx`)
  - `assets/` — images and media referenced by components

Data flow and state:

- Most UI components are presentational and receive data via props.
- The `carouselLogic` hook encapsulates carousel state and behavior (current index, autoplay, navigation). Use it where you need carousel behavior.
- `gamesObjects.tsx` contains sample objects used to populate carousels and lists; replace or extend with real data sources as needed.

Build & dev:

- Vite is used for development and production builds. The Vite dev server provides fast HMR during development.

Extending the project:

- To add a new component, create a file under `src/components/` and add types for props.
- For shared behavior across carousels, keep common controls in `src/components/carousel` and use `hooks/carouselLogic.tsx`.
