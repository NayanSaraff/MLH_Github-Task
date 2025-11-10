# Portfolio Template

A simple, responsive, accessible portfolio website template built with semantic HTML, modern CSS, and lightweight JavaScript.

## Features

- Responsive layout (desktop/tablet/mobile)
- Accessible markup and keyboard focus states
- Mobile navigation toggle
- Light / dark theme toggle (persists in localStorage)
- Project filtering UI
- Contact form with basic validation (client-side only)
- Small, easy-to-customize codebase

## Files

- `index.html` — main page
- `assets/css/styles.css` — styles (variables for quick theming)
- `assets/js/main.js` — scripts for interactions

## Quick start

1. Clone or download the files.
2. Open `index.html` in your browser.

To use as a real site, replace placeholder images and project links with your own, and hook the contact form to a backend or a service (e.g. Formspree, Netlify Forms, or send email from a server).

## Customization tips

- Change colors in `:root` CSS variables at the top of `assets/css/styles.css`.
- Add more projects by duplicating a `.card` element in the `#projects-grid`.
- Replace the placeholder images with screenshots or exported images for each project.
- For production, optimize images and consider inlining critical CSS for performance.

## Accessibility

- All interactive controls have keyboard focus styles.
- Navigation and filters use ARIA attributes for better screen reader support.
- Ensure alt text on images is descriptive whenever you add real images.

## License

Use freely — attribution appreciated but not required.

Happy building!
