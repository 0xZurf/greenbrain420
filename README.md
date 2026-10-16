# Green Brain

Multi-page marketing site. React 18, Vite 5, Tailwind 4, React Router 6.

## Run locally
    npm install
    npm run dev

## Deploy to Vercel
Standard Vite build. `vercel.json` rewrites all routes to `index.html` so BrowserRouter deep links work.
    npm run build

## Preview build (single HTML file)
    npm run build:single
Outputs `dist-single/index.html` with everything inlined and HashRouter enabled. Used for hosted previews only.

## Where things live
- `src/data/content.js`: all copy, nav, services, posts, products, scorecard values. Edit here first.
- `src/index.css`: design tokens (`@theme`), type scale, buttons, placeholders, marquee.
- `src/components/`: Nav, Footer, Logo, Scorecard, Placeholder, PageHeader.
- `src/pages/`: Home, About, Services, Shop, Blog, Contact, NotFound.
- `src/assets/`: logo art imported by the Logo component.
- `public/`: favicon and apple touch icon.

## Logo assets
Cut from the supplied 1080x1080 PNG, which shipped with an opaque white background and
the mark locked to the wordmark. Background was removed by flood-filling only the white
region connected to the image border, so the white keylines inside the letterforms survive.

- `logo-mark.png` (636x615) head and brain, transparent
- `logo-wordmark.png` (600x280) stacked GREEN BRAIN lettering, transparent
- `logo-lockup.png` (671x895) both together, transparent
- `favicon.png` / `apple-touch-icon.png` mark on a padded square

The wordmark ships as artwork rather than live web type, so the bubble face is an exact
brand match instead of an approximation. To swap it for real type later, add the font and
replace the `<img>` in `src/components/Logo.jsx`.

## Palette
Sampled from the logo file.

| Token | Value | Use |
| --- | --- | --- |
| `bg` | `#FBFAF6` | page |
| `surface` | `#F2EFE6` | cards, footer |
| `head` | `#14160F` | headings, black panel |
| `ink` | `#2A2D23` | body copy |
| `muted` | `#5F6358` | metadata |
| `kelly` | `#27BB36` | brand green, FILL only |
| `kelly-deep` | `#167A22` | green text and links |
| `lime` | `#AAD816` | decorative, text only on black |
| `cream` | `#F2EBDD` | text on black panels |

Contrast rules: kelly is 2.44:1 as text on the page, so it is never used for text on light.
It carries black text at 8.25:1 on buttons. kelly-deep is the text-safe green at 5.23:1.
Lime is 1.6:1 on light and only becomes a text color inside the black panel.

## Note on class naming
The black panel class is `.panel-ink`, not `.invert`. Tailwind ships an `invert` utility
that applies `filter: invert(100%)`, which silently inverted the whole section.
