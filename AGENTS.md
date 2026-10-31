# Project rules

- Vite's HTML entry loads `src/main.tsx`, which imports the active stylesheet; do not add references to nonexistent standalone main.js or style.css files.
- Resolve public image URLs against the Vite app base and settle image loading on success, failure, or timeout so the loading overlay cannot block the page indefinitely.
- Both cinematic sections use the shared GSAP ScrollTrigger frame sequence hook with optimized CDN WebP pointers, bounded decoded-image caching and prioritized bounded loading; the loader only gates initial readiness, never owns canvas rendering.
- Keep the product catalog and integer-cent calculations separate from the showcase; its cart is session-only React state with no checkout or persistence, so storefront presentation changes do not affect cinematic behavior.
- Carousel arrows move by a measured card stride and refresh their boundaries on resize; the cart uses a native modal side panel with a shared session count and subtotal.