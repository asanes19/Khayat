# Organizational Chart — Learning Project

A small React practice project that renders a collapsible, multi-level organizational
chart. It was built to learn how to model hierarchical data and drive a tree
visualization from it, and it is published here as a read-only learning artifact.

> **All data shown in this project is fictional.** Division names, city names and
> company names are invented placeholders written for practice. Nothing in this
> repository represents a real organization, its structure, its subsidiaries, its
> ownership or its staff. This is **not** an official product of any company, and it
> is not affiliated with or endorsed by any company.

## Chart concepts practiced

- **Hierarchical data modelling** — a nested `division → city → company` structure held
  as plain JavaScript data, kept separate from the components that render it.
- **Recursive/compositional tree rendering** — each level is its own component
  (`DivisionNode`, `CityNode`) so the tree is composed rather than drawn by one
  monolithic component.
- **Single-source expand/collapse state** — one `{ division, city }` state object in the
  parent decides which branch is open, instead of each node tracking its own state.
  Selecting a division resets the city selection so only one path is ever expanded.
- **Derived labels** — node counts (e.g. `City A1 (3)`) are computed from the data at
  render time rather than stored alongside it.
- **Shared style tokens** — active/inactive node styling is centralised in
  `nodeStyles.js` so every level of the tree stays visually consistent.

## Tech stack

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/) (dev server and build)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [react-organizational-chart](https://www.npmjs.com/package/react-organizational-chart)
  for the tree/connector layout
- ESLint 9 (flat config)

## Setup

Requires Node.js 20.19+ (or 22.12+), the versions supported by Vite 7.

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run lint    # run ESLint
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## Structure

```
src/
  App.jsx                     page layout
  components/
    Header.jsx                top bar
    AboutUs.jsx               static placeholder copy and images
    Chart/
      MainChart.jsx           chart root, holds expand/collapse state
      DivisionNode.jsx        first level
      CityNode.jsx            second level, renders company leaves
      DummyData.js            the fictional dataset
      nodeStyles.js           shared node style tokens
```

## Limitations

This is a learning exercise, not a finished application. Known gaps:

- The dataset is a hardcoded file. There is no backend, no API and no persistence.
- The chart is read-only — nodes cannot be added, edited, reordered or searched.
- Only one division and one city can be expanded at a time; this is a deliberate
  simplification, not a general-purpose org-chart behaviour.
- No routing, no state management library, no authentication. The "Hi, User!" text in
  the header is static placeholder text, not a real session.
- Not responsive — the layout is designed for a wide desktop viewport, and a wide tree
  will overflow horizontally on smaller screens.
- No tests, no accessibility audit, and no internationalization.
- The two portrait images in the About section are hotlinked from an external URL, so
  they will not render offline or if that URL stops resolving.
- The tree is rendered in full for the expanded branch with no virtualization, so it is
  not intended for very large datasets.

## Status

Archived. This repository is kept as a public reference for the techniques above and
is not maintained, not accepting contributions, and not intended for production use.
