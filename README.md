# Mudit Bhuraria — Portfolio

A production-ready personal portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Opens at http://localhost:5173
```

### Build for production

```bash
npm run build
# Output goes to /dist — deploy this folder
```

---

## 📝 Replacing Placeholder Content

All placeholder content lives in **one file**: [`src/data/index.ts`](./src/data/index.ts)

Open it and follow the `// TODO:` comments:

| What to update | Location |
|---|---|
| Social links (GitHub, LinkedIn, etc.) | `SOCIAL_LINKS` array |
| Hero taglines (typing animation) | `HERO_TAGLINES` array |
| Value statement | `HERO_VALUE_STATEMENT` |
| Resume PDF link | `RESUME_URL` |
| Bio text | `ABOUT_BIO` |
| Stats (projects, years, etc.) | `ABOUT_STATS` |
| Skills list | `SKILLS` |
| Projects | `PROJECTS` array |
| Experience & Education | `TIMELINE_ENTRIES` |
| EmailJS credentials | `EMAILJS_CONFIG` |
| Contact email | `CONTACT_EMAIL` |

### Adding your photo

1. Place your photo at `public/photo.jpg` (or `.png`)
2. Open [`src/sections/About.tsx`](./src/sections/About.tsx)
3. Find the comment `{/* TODO: Replace with your photo */}` and replace the placeholder div with:

```tsx
<img
  src="/photo.jpg"
  alt="Mudit Bhuraria"
  className="w-full h-full object-cover"
/>
```

### Adding your resume

Place your resume PDF at `public/resume.pdf`. The "Download Resume" button in the hero will automatically link to it.

### Adding project screenshots

Place images in `public/projects/` and reference them in `src/data/index.ts` under each project's `image` field:

```ts
image: '/projects/your-project.png',
```

### Updating meta tags (SEO)

Edit [`index.html`](./index.html) to update:
- `<title>` — page title
- `<meta name="description">` — meta description
- `og:url`, `og:image` — Open Graph tags
- `twitter:creator` — Twitter handle

---

## 📧 Setting Up the Contact Form (EmailJS)

1. Sign up at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month)
2. Create an **Email Service** (connect your Gmail/Outlook)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Paste them into `src/data/index.ts`:

```ts
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',
  TEMPLATE_ID: 'template_xxxxxxx',
  PUBLIC_KEY: 'your_public_key_here',
};
```

---

## 🌐 Deployment

### Vercel (recommended — free, zero config)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) and it auto-deploys on every push.

### Netlify

```bash
npm run build
# Drag and drop the /dist folder at netlify.com/drop
```

Or connect your GitHub repo and set build command to `npm run build` and publish directory to `dist`.

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🗂️ Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── BrandIcons.tsx    # SVG brand icons (GitHub, LinkedIn, X)
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── SkillBadge.tsx
│   ├── StatCard.tsx
│   └── TimelineItem.tsx
├── data/
│   └── index.ts     # ← ALL placeholder content lives here
├── hooks/
│   ├── useActiveSection.ts  # IntersectionObserver for nav
│   ├── useScrollY.ts        # Scroll position for navbar
│   └── useTypewriter.ts     # Typewriter animation
├── sections/        # Full-page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── types/
│   └── index.ts     # TypeScript interfaces
├── utils/
│   └── animations.ts  # Shared Framer Motion constants
├── App.tsx          # Root component
├── index.css        # Global CSS design system + tokens
└── main.tsx         # Entry point
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI & type safety |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Page & scroll animations |
| Lucide React | UI iconography |
| @emailjs/browser | Contact form (no backend) |
| @fontsource/inter | Body font (self-hosted) |
| @fontsource/jetbrains-mono | Monospace/code font (self-hosted) |

---

## 🎨 Design System

Colors are defined as CSS custom properties in `src/index.css`:

- `--cyan: #00f0ff` — primary accent (CTAs, active states)
- `--violet: #a855f7` — secondary accent (tags, education)
- `--bg-base: #0a0a0f` — page background
- `--bg-surface: #111118` — card background
- `--bg-elevated: #16161f` — elevated elements

---

Built with ❤️ by [Antigravity](https://antigravity.ai)
