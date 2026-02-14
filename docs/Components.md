# Components Reference

This document lists the main UI components in `src/components/` and their purpose.

- `banners.tsx` — small banner sections used for promotional content.
- `featureBlock.tsx` — layout block to highlight featured items or sections.
- `footer.tsx` — site footer and related links.
- `heroSection.tsx` — top-of-page hero area; often contains large visuals and calls-to-action.
- `navbar.tsx` — primary navigation bar for the site.
- `submenu.tsx` — dropdown/submenu used by the `navbar`.

Carousel-related components (`src/components/carousel`):

- `discountLabel.tsx` — small badge or label indicating discounts.
- `leftArrow.tsx`, `rightArrow.tsx` — arrow controls used by carousels.
- `thumbs.tsx` — thumbnail navigation for carousels.

Categories subfolder:

- `categories.tsx` — container for category cards.
- `categoryCard.tsx` — individual category display card.

Feature subfolder:

- `featureCard.tsx` — card used inside feature carousels.
- `featureCarousel.tsx` — carousel specifically for feature items.

Hero subfolder:

- `heroCard.tsx` — individual hero slide/card used in hero carousel.
- `heroCarousel.tsx` — carousel used in the hero section.

Usage notes:

- Components are React + TypeScript function components. Import them and include in JSX:

```tsx
import Navbar from './components/navbar';

function App(){
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCarousel />
    </div>
  )
}
```

- Props and exact APIs vary by component; inspect the component file for prop types and examples.
