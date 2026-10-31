# Project rules

- Vite's HTML entry loads `src/main.tsx`, which imports the active stylesheet; do not add references to nonexistent standalone main.js or style.css files.
- Resolve public image URLs against the Vite app base and settle image loading on success, failure, or timeout so the loading overlay cannot block the page indefinitely.
- Both cinematic sections use the shared GSAP ScrollTrigger frame sequence hook with optimized CDN WebP pointers, bounded decoded-image caching and prioritized bounded loading; the loader only gates initial readiness, never owns canvas rendering.