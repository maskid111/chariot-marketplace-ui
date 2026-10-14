# Chariot Marketplace — premium ecommerce UI prototype

A responsive, frontend-only Next.js 15 + TypeScript + Tailwind CSS marketplace. The interface uses Lucide icons, shadcn-inspired reusable component styling, local mock data and browser state. There are **no backend services, APIs, authentication integrations, databases, or payment gateways**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Admin demo: http://localhost:3000/admin.

Run `npm run typecheck` and `npm run build` to verify the project after installing dependencies.

## Features

- Homepage with editorial hero, category tiles, featured items, sale offers, promotional cards and recently viewed items.
- Shop with category filters, price slider, search, sort and pagination; 30 seeded products in 8 categories.
- Product details with image gallery, variants, stock, quantity selection, specifications and related products.
- Persistent cart and wishlist, coupon discounts (`WELCOME10`, `CHARIOT15`), mock checkout and confirmation.
- Account demonstration: sign in, sign up, recovery, profile, addresses, orders and order details. **Never use a real password**.
- Admin demonstration: overview with illustrative revenue graph, products, categories, orders, customers, inventory, coupons, banners, review moderation, subscribers, contact messages and store settings.
- Information pages: About, Contact, FAQ, Shipping, Returns, Privacy, Terms and 404.
- Browser storage holds mock changes; resetting site storage restores seed data.

## Branding

`public/chariot-reference-logo.png` is the uploaded reference. The displayed replaceable text-based logo lives in `components/chrome.tsx` (`Logo` component). Primary colours are navy `#102b43`, gold `#b88b48`, and cream `#f8f6f1`.

## Notes

Product imagery uses static remote Unsplash image URLs. The app does not call an API, but an internet connection is required for those images to display. Replace these with local licensed images in `/public` before production.

The homepage and admin data are demonstrations. Sample orders and revenue charts are not live business data. The Privacy, Terms, Shipping and Returns content must be replaced with real reviewed policies before launch.

This workspace had no access to the npm registry during generation, so dependency installation and Next.js compilation must be run on a machine with npm registry access.
