

## TİLAVER İNŞAAT — Premium Construction Company Website

### Design Direction
- **Palette**: Deep charcoal (#1A1A1A), rich gold (#C9A96E), off-white (#F5F5F0), warm gray (#2A2A2A)
- **Typography**: Inter (headings, bold/black weight) + Inter (body, light/regular) — clean, architectural feel
- **Motion**: Framer Motion throughout — scroll-triggered fade-ups, parallax layers, staggered reveals, smooth hover scales
- **Vibe**: Apple-meets-luxury-real-estate. Cinematic, spacious, confident.

### Pages & Structure

#### Homepage (Single-page with sections)

1. **Hero Section** — Fullscreen dark background with subtle animated gradient/particle effect. Large "Geleceği İnŞa Ediyoruz" headline with gold accent. Subtitle + two CTAs ("Projelerimizi Keşfet" / "Teklif Al"). Scroll indicator animation.

2. **About / Trust Section** — Split layout with strong storytelling paragraph on one side, animated counter stats on the other (150+ Projects, 25+ Years, 500K+ m² built). Gold accent line dividers.

3. **Projects Showcase** — Filterable grid (Tamamlanan / Devam Eden). Each card: image with dark overlay on hover, project name, location, status badge. Cards link to individual project detail pages.

4. **Why Choose Us** — 4-column icon grid with gold icons: Mühendislik Mükemmelliği, Zamanında Teslimat, Şeffaf Süreç, Kaliteli Malzeme. Each with scroll-triggered stagger animation.

5. **Process Timeline** — Horizontal animated timeline: Planlama → Tasarım → İnşaat → Teslimat. Each step reveals on scroll with connecting gold line animation.

6. **Testimonials** — Carousel with client quotes, names, company names. Partner logos row below.

7. **CTA / Contact Section** — "Projenizi birlikte hayata geçirelim" headline. Contact form (name, email, phone, message) + WhatsApp floating button. Dark background with gold accents.

8. **Footer** — Company info, address, phone, email, social media icons. Clean corporate layout.

#### Project Detail Page
- Hero image, project title, location, status, area, completion date
- Image gallery
- Project description
- Back to projects link

### Components to Build
- Navbar (transparent → solid on scroll, mobile hamburger menu)
- Hero with animated background
- AnimatedCounter component for stats
- ProjectCard component
- ProjectDetail page
- Timeline component
- TestimonialCarousel
- ContactForm
- WhatsApp floating button
- Footer
- ScrollReveal wrapper (Framer Motion intersection observer animations)

### Technical Notes
- React + Vite + Tailwind CSS + Framer Motion
- React Router for project detail pages
- Fully responsive, mobile-first
- Project data stored in a TypeScript data file (CMS-ready structure)
- Smooth scroll behavior
- SEO-friendly semantic HTML

