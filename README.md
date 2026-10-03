# ApexBuild Developments

MERN monorepo foundation + frontend design system and public layout.

```
.
├── client/   React + Vite (JavaScript) + Tailwind CSS
└── server/   Node.js + Express
```

## Requirements

- Node.js 20+ (built and tested on v22)
- npm 10+

## Install

```bash
cd client && npm install
cd ../server && npm install
```

## Run the backend

```bash
cd server
npm run dev      # restarts automatically on file changes
npm start        # plain node, no auto-restart
```

Runs on http://localhost:5000

## Run the frontend

```bash
cd client
npm run dev
```

Runs on http://localhost:5173

## Test the health endpoint

```bash
curl http://localhost:5000/api/health
```

```json
{ "message": "API is running" }
```

The Vite dev server proxies `/api` to the backend, so this works too while both
are running:

```bash
curl http://localhost:5173/api/health
```

`client/src/lib/api.js` is the fetch wrapper that later phases will use. The
temporary "Backend status" card that called this endpoint has been removed from
the home page.

## Frontend conventions

Homepage sections live in `client/src/components/home/`, each in its own folder
named after the section, with the section component, any reusable pieces and a
`*.data.js` file for content. Run `ls` on that folder for the current list.

Shared pieces stay in `client/src/components/ui/` (Button, Container,
SectionHeading) and `client/src/components/layout/` (Navbar, Footer,
PublicLayout). Editable content lives in `client/src/config/site.js`.

## Routes

`/` · `/about` · `/services` · `/projects` · `/team` · `/contact`

All routes render inside `PublicLayout`. Pages other than the home page are
temporary placeholders.

## Images

Static images live in `client/public/images/` and are referenced by path, so the
browser loads them from the site root with no build step and no import changes.

The hero currently uses `client/public/images/hero-placeholder.svg`, a
placeholder that marks itself with a "PLACEHOLDER IMAGE" caption. To use a real
photograph, drop the file into `client/public/images/` and update one entry in
`client/src/config/site.js`:

```js
export const heroImage = {
  src: '/images/hero-construction.jpg',
  alt: 'Describe the photograph for screen readers',
  width: 1600,
  height: 2000,
}
```

The hero renders it with `object-cover`, so any 4:5 or taller source crops
cleanly at every breakpoint. Keep `width`/`height` accurate to avoid layout
shift. `aboutImage` and `ctaImage` in the same file follow the identical shape.
The CTA image is decorative, so it is referenced with an empty `alt` in the
component; its `alt` in `site.js` only documents what the picture shows.

## Icons

Icons come from `lucide-react` (tree-shakeable, no icon font, no hand-written
SVG). Import the icon where it is used, or from a small local icon module when
one set is reused:

```jsx
import { MapPin } from 'lucide-react'

<MapPin className="h-4 w-4 text-ink-400" strokeWidth={1.5} aria-hidden="true" focusable="false" />
```

Conventions used across the project:

- `strokeWidth={1.5}` to match the thin architectural line weight. The lucide
  default is `2`, which reads heavier than the rest of the design.
- Decorative icons get `aria-hidden="true"` and `focusable="false"`.
- Icons inherit colour with `currentColor`, so size and colour are set with
  Tailwind classes on the icon itself.
- Icon → key mapping lives in `ServiceIcon.jsx` (services) and directly in
  `BenefitItem.jsx` (why choose us). Data files store the key as a string, so
  they stay free of JSX.

The blueprint-style files in `client/public/images/*-placeholder.svg` are
photographic placeholders, not icons, and are referenced with `<img>`.

## Placeholder content

Some content is demonstration data for this portfolio project and must be
replaced before any real launch:

- `companyStats` in `client/src/config/site.js` — fictional figures
  (10+ years, 50+ projects, 30+ professionals, 8 locations). They are stored in
  one array and rendered by `CompanyStats.jsx`, so edit that array only.
- `site.email`, `site.phone`, `site.address` — placeholders
- `socialLinks` — labels only, no URLs yet
- `public/images/*-placeholder.svg` — placeholder artwork
- `services.data.js` — the four service cards (Building Construction, Property
  Development, Renovation & Remodeling, Project Management). Edit that array to
  add, remove or reword cards. Every `href` currently points at the
  `/services` placeholder route, so each card link leads somewhere real before
  those pages are built.
- `projects.data.js` — the three featured demo projects (Oakview Residences,
  Apex Business Centre, Greenfield Villas). **These are fictional
  demonstration projects, not real ApexBuild commissions**, and the images are
  blueprint-style placeholders. Edit the array to add, remove or reword
  projects. Every `href` points at the `/projects` placeholder route until the
  project details route exists.

## Why choose us section

The section is a two-column split: label, heading and supporting text on the
left, four benefits as a divided list on the right. It deliberately does not
repeat the Services card grid.

- `benefits.data.js` holds `id`, `index`, `title`, `description` and an icon
  key. The statements are fictional and intentionally qualitative — no awards,
  certifications, licences or figures.
- `BenefitItem` renders a single row: icon block, `h3` title, description and
  the index. The parent `<ul>` owns list semantics, so the row itself is a
  plain `<div>` to keep `ul > li` valid.
- Benefits are not links. There is no CTA in this section yet.

Layout: one column on mobile, a two-column benefit grid from `sm`, and a
5/7 split from `lg`. Paragraph measure is capped (`max-w-2xl` left column,
`max-w-lg` descriptions) so text never stretches on very large screens.

## Closing CTA section

The last homepage section. Dark `ink-950` to bookend the dark Hero, with the
wide `cta-placeholder.svg` behind a gradient overlay. Content is centred in a
`max-w-3xl` block so text never stretches.

- The background image is decorative: `alt=""` plus `aria-hidden="true"`. The
  heading and copy carry the meaning on their own.
- Readability is protected by the overlay (`ink-950/85` → `/90` → full), not by
  the image. The brightest background pixel behind the text still gives roughly
  14:1 against the heading colour.
- The two actions are declared in an `actions` array inside the component, so
  label, route and `Button` variant sit together. They reuse the existing
  `onDark` and `outlineOnDark` variants already used by the Hero — no new
  button component.

`/contact` and `/projects` are currently route stubs, so the buttons navigate
correctly but land on placeholder pages until those pages are built.

## Featured project cards

`ProjectCard` takes a single `project` object and nothing else, so the section
can switch from local data to an API response without touching the card:

```jsx
<ProjectCard project={project} />
```

The data shape it expects is `id`, `title`, `category`, `location`, `year`,
`href`, `featured` and `image` (`src`, `alt`, `width`, `height`). Keep those
field names in sync with whatever the projects endpoint returns. `featured`
selects the large card; the card is otherwise identical for every project.

| state    | effect                                                          |
| -------- | --------------------------------------------------------------- |
| hover    | image zooms to 1.04, dark overlay fades in, bronze hairline sweeps across the bottom, arrow slides |
| focus    | 2px bronze ring plus lift around the card, title turns bronze    |
| reduced  | transitions and reveal collapse, content still appears          |

The heading link carries an `after:absolute after:inset-0` overlay so the whole
card is one click target while the accessible name stays just the project
title; category, location and year are deliberately outside the link so screen
reader users are not forced through them. Images use `object-cover` with
intrinsic `width`/`height`, so the layout reserves space before load. Hover
rules are emitted inside `@media (hover:hover)`, so touch devices never get
stuck in a hovered state.

## Scroll reveal

`useRevealOnScroll()` returns `[ref, revealed]`. Attach `ref` to the section and
swap `opacity-0 translate-y-4` for `animate-rise` (or `animate-reveal` for an
image) once `revealed` is true:

```jsx
const [ref, revealed] = useRevealOnScroll()

<div ref={ref} className={revealed ? 'animate-rise' : 'opacity-0 translate-y-4'}>
```

It uses `IntersectionObserver`, reveals once, then disconnects. When
`IntersectionObserver` is unavailable it starts revealed, so content is never
trapped at `opacity: 0`. `prefers-reduced-motion` collapses the animation.

## Services cards

`ServiceCard` is the pattern to copy for later card grids. The heading link
carries an `after:absolute after:inset-0` overlay, so the whole card is one
click target while the accessible name stays just the service title. The
overlay only works because the card is `relative`.

| state    | effect                                                    |
| -------- | --------------------------------------------------------- |
| hover    | border → bronze, icon block → bronze/white, lift, shadow  |
| focus    | `:focus-within` gives keyboard users the same border cue  |
| reduced  | transitions collapse, content still appears               |

Hover rules are emitted inside `@media (hover:hover)`, so touch devices never
get stuck in a hovered state. Cards sit in a 1-column grid on mobile and
2 columns from `sm` up, and each card reveals with a short stagger
(`index * 90ms`) using `useRevealOnScroll()`.

## Container widths

`Container` accepts a `size` and grows with the viewport instead of using one
fixed width. Tokens live in `client/src/index.css`.

| size      | mobile            | ≥1280px      | ≥1536px     |
| --------- | ----------------- | ------------ | ----------- |
| `narrow`  | fluid, 46rem cap | 46rem        | 46rem       |
| `default` | fluid             | 80rem (1280) | 90rem (1440)|
| `wide`    | fluid             | 90rem (1440) | 100rem(1600)|

## Environment

`client/.env.example` lists the frontend variables. Copy it to `client/.env` to
override them locally:

```
VITE_API_URL=/api
```

Only variables prefixed with `VITE_` reach the browser, so never put a secret in
them.

`server/.env.example` lists the server variables:

```
PORT=5000
```

## Scripts

| Folder   | Command           | Purpose                              |
| -------- | ----------------- | ------------------------------------ |
| `client` | `npm run dev`     | Dev server on port 5173              |
| `client` | `npm run build`   | Production build into `client/dist`  |
| `client` | `npm run preview` | Serve the production build locally   |
| `client` | `npm run lint`    | Lint with oxlint                     |
| `server` | `npm run dev`     | Start with auto-restart              |
| `server` | `npm start`       | Start normally                       |
