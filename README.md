# Hospital Clinic - Marketing Website

A polished, production-ready marketing website for a hospital's internal medical clinic. Built with Vite, React 18, TypeScript, and Tailwind CSS.

## 🏥 Features

- **Modern Design System** - Deep navy primary color (#1e3a5f) with warm gold accents (#d4a574)
- **Mobile-First Responsive** - Fully optimized for all screen sizes with sticky mobile CTA
- **WhatsApp Integration** - Direct booking via WhatsApp with pre-filled message templates
- **Smooth Animations** - Scroll-reveal animations and smooth transitions throughout
- **Accessible** - Semantic HTML, proper ARIA labels, and keyboard navigation support
- **SEO Optimized** - Proper meta tags and semantic structure

## 📦 Tech Stack

- **Framework:** Vite + React 18
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with custom design tokens
- **Icons:** Lucide React
- **Fonts:** Merriweather (headings) + Inter (body)

## 🎨 Design System

### Colors
- **Primary:** #1e3a5f (deep navy)
- **Secondary:** #2c5282 (medium blue)
- **Accent:** #d4a574 (warm gold)
- **Success:** #059669 (WhatsApp green)
- **Surface:** #f8f9fb (soft grey-blue)
- **Text Primary:** #1a202c
- **Text Muted:** #64748b

### Typography
- **Headings:** Merriweather, 700 weight
- **Body:** Inter, 400-600 weight
- **Scale:** Fluid responsive sizing (text-5xl → text-7xl on hero)

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Fixed navigation with mobile menu
│   ├── HeroSection.tsx # Hero with CTA and hours card
│   ├── ServicesSection.tsx
│   ├── HowToBookSection.tsx
│   ├── AboutSection.tsx
│   ├── PatientInfoSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── MobileCTA.tsx   # Sticky mobile booking button
│   └── index.ts        # Component exports
├── lib/
│   └── siteContent.ts  # All site copy and data (typed)
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles + Tailwind
```

## 🎯 Page Sections

1. **Hero** - Compelling headline with WhatsApp CTA and clinic hours card
2. **Services** - 5 medical services in a responsive grid
3. **How to Book** - 3-step appointment process
4. **About** - Hospital affiliation and credentials
5. **Patient Info** - Insurance, location, and preparation details
6. **Contact** - WhatsApp CTA, phone, location, and hours

## 🔧 Customization

All site content is centralized in `src/lib/siteContent.ts`. Update this file to change:
- Copy and messaging
- Contact information
- Services offered
- Hours of operation
- WhatsApp link

Design tokens are defined in:
- `tailwind.config.js` - Color palette
- `src/index.css` - CSS custom properties and global styles

## ✨ Key Features

### WhatsApp Integration
Pre-filled message template for easy booking:
```
Hello, I'd like to book an appointment.

Name: 
Preferred date/time: 
Reason for visit: 
```

### Mobile Experience
- Responsive hamburger menu
- Sticky bottom CTA bar (appears on scroll)
- Touch-optimized tap targets
- Fast loading and smooth scrolling

### Accessibility
- Semantic HTML5 elements
- ARIA labels on icon-only buttons
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Focus visible states

### Performance
- Optimized images (Unsplash CDN)
- No unnecessary dependencies
- Lazy-loaded scroll animations
- Fast Vite build process

## 📝 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - Built with MonstarX template

---

**Ready to deploy to Vercel, Netlify, or any static hosting platform.**
