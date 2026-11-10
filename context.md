# Project Context

## Overview

This project is a vacation rental platform UI with three views: home, catalog/search results, and room details. The requested stack is Next.js 16 App Router, React, TypeScript, and Tailwind CSS.

## Current State

- The App Router home, catalog, and dynamic room detail routes are implemented.
- Typed mock listings, live search/category filters, simulated loading, photo gallery controls, amenities, and guest counter are implemented.
- `npm run typecheck` and `npm run build` pass. Responsive appearance has not yet been visually checked in a browser.

## Scope

The required scope is a responsive UI with simulated listing and room data. The booking card includes guest controls and a CTA, but a booking backend is not part of the current requirements. The optional date-picker challenge should only be attempted after all required items are complete.

## Implementation Plan

### Phase 1: Scaffold and conventions

1. Set up Next.js 16 with the App Router, React, TypeScript, and Tailwind CSS.
2. Use Tailwind utility classes for all component styling; avoid CSS modules and custom component styles.
3. Keep pages as Server Components by default. Add `"use client"` only to components that need state, effects, or event handlers.
4. Build mobile-first for a 375px viewport and use the `md` breakpoint (768px) for desktop adjustments.

### Phase 2: Routes and shared structure

- `app/page.tsx`: Home view.
- `app/catalog/page.tsx`: Catalog/search results view.
- `app/rooms/[id]/page.tsx`: Room detail route. Await dynamic route params in the server page and pass the room ID to a client component.
- `app/layout.tsx`: Shared layout and site navigation.
- Use Next.js `<Link>` for all internal navigation. Each listing card links to `/rooms/[id]`; the detail view has a link back to `/catalog`.

### Phase 3: Types and mock data

- `types/listing.ts`: Define TypeScript types for `Listing`, `Category`, `Host`, `Amenity`, and `Photo`.
- `data/listings.ts`: Store typed mock listings and room data, including IDs, titles, locations, categories, nightly prices, ratings, review counts, host details, amenities, and placeholder photos.

### Phase 4: Home and catalog

Create each reusable component in its own file under `components/`:

- `SiteHeader.tsx`: Shared navbar and Next.js links.
- `ListingExplorer.tsx`: Shared client-side listing behavior used by home and catalog.
- `SearchBar.tsx`: Controlled search input; the typed value is held in `ListingExplorer` state and filters results immediately on every keystroke.
- `CategoryFilters.tsx`: Horizontal category row below the navbar. Track the active category in `ListingExplorer` and visually highlight the selected option.
- `ListingGrid.tsx`: One-column grid at mobile and desktop widths, following the explicit single-column requirement.
- `ListingCard.tsx`: Clickable listing with a photo placeholder, title, nightly price, and star rating.
- `LoadingIndicator.tsx`: Loading feedback while simulated data is unavailable.

On mount, `ListingExplorer` starts with an empty listing array and `loading` set to `true`. A `useEffect` simulates loading with `setTimeout`, then installs mock data and sets loading to `false`; clean up the timeout on unmount. Search case-insensitively and combine text and category filters.

### Phase 5: Room detail

- `RoomDetailClient.tsx`: Simulate loading room data by URL ID in `useEffect`; show loading until ready, clean up the timeout, and handle an unknown ID.
- `RoomGallery.tsx`: Hardcoded photo placeholders, current index in `useState`, and Previous/Next controls that cycle through photos.
- `RoomHeader.tsx`: Title, star rating, review count, and location.
- `HostInfo.tsx`: Avatar placeholder, host name, and years hosting.
- `AmenitiesGrid.tsx`: Grid of amenity icon-and-label pairs.
- `BookingCard.tsx`: Nightly price, guest counter in `useState` with minimum and maximum bounds, and a CTA button.

Use `lucide-react` for amenity icons. Keep every component under roughly 80 lines of JSX and logic; split responsibilities when needed. The date-picker/date-total challenge is deferred until all required work passes.

### Phase 6: Responsive polish and verification

Check layout at 375px and at 768px and wider. Verify touch targets, readable text, loading states, filtering, and navigation before considering the optional challenge.

## Verification Checklist

- [ ] Home, catalog, and `/rooms/[id]` routes render.
- [ ] Styling uses Tailwind utility classes; layouts are mobile-first at 375px and adjusted at 768px and above.
- [ ] Search state updates per keystroke and filters visible cards immediately.
- [ ] Category row appears below the navbar; active category is highlighted and filters listings.
- [ ] Listings start empty, show loading, and appear after the simulated delay.
- [ ] Each card shows a photo placeholder, title, price per night, and star rating.
- [ ] Cards navigate to room details with `<Link>`; no plain internal `<a href>` is used.
- [ ] Room data loads by URL ID, shows loading, and handles unknown IDs.
- [ ] Gallery controls cycle through placeholder photos.
- [ ] Room title, rating, reviews, location, host details, and amenity grid are present.
- [ ] Booking card has nightly price, bounded guest controls, and a CTA.
- [ ] Room details include a back link to the catalog.
- [ ] Components are `const` functional components, each in its own file, and stay near the 80-line limit.
- [ ] Optional check-in/check-out date fields and total-price calculation are attempted only after all required checks pass.
