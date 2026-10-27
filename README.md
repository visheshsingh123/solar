# Solara — solar business demo

A responsive solar company concept with a savings calculator, filterable project gallery, FAQ, quote form, and floating solar assistant.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci --cache /tmp/solar-npm-cache
npm run dev -- --port 3000
```

## Production

```sh
npm run build
npm run preview -- --port 3000
```

The build output is `dist/`, suitable for static hosting. Fonts and AI-generated solar imagery are bundled locally.

## Demo boundaries

Solara is a fictional brand. Project imagery and commercial claims are illustrative. Savings assume an 80% reduction in the monthly bill, an ₹8/unit tariff, and about 125 kWh monthly generation per kW; a site survey is needed for real sizing. No subsidy or financial result is guaranteed.

The assistant uses local, preset replies, not a live AI model. The quote form validates input and shows a demo acknowledgement without storing or transmitting personal details. A production launch needs a secure lead handling backend, a server-side AI integration if desired, real company details, verified project content, and applicable legal policies. Never put API keys in browser code.

Reference websites could not be inspected because their domains were blocked by this environment's network policy; this is an original design.

## GitHub Pages

Pages can serve the `main` branch at `/ (root)` directly. The root `index.html`, `assets/`, and `images/` are committed production output; `.nojekyll` keeps it static. Application sources are in `site/` and original imagery in `public/`.

After editing source files, run `npm run build` and commit both the source changes and refreshed root output. Vite uses relative asset URLs so the site works at `/solar/` and other subpaths. Do not edit the generated root HTML or assets by hand.
