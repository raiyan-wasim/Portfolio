# Design Guidelines: Raiyan Wasim Portfolio

## Design Approach: Reference-Based (Modern Tech Portfolio)

**Primary References:** Linear's typography and spacing, Vercel's clean layouts, Stripe's color sophistication

**Design Philosophy:** Sophisticated technical portfolio that balances professional credibility with visual passion. Clean, spacious layouts with intentional color accents that convey both technical expertise and forward-thinking innovation.

---

## Core Design Elements

### A. Color Palette

**Background Foundation:**
- Primary Background: Deep Navy `220 25% 12%` - rich, classy alternative to white
- Secondary Background: `220 20% 16%` - subtle elevation for cards/sections
- Tertiary Background: `220 18% 20%` - highest elevation for interactive elements

**Brand & Accent Colors:**
- Primary Brand: Electric Blue `210 100% 60%` - passionate, tech-forward (for CTAs, links, active states)
- Secondary Accent: Coral `15 85% 65%` - warm, passionate touch (for highlights, badges)
- Success/Learning: Teal `170 70% 55%` - for certifications, achievements

**Text Hierarchy:**
- Primary Text: `220 15% 95%` - high contrast for headings
- Secondary Text: `220 12% 75%` - body content
- Tertiary Text: `220 10% 60%` - metadata, labels

### B. Typography

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - headings, navigation, emphasis
- Secondary: 'JetBrains Mono' (Google Fonts) - code snippets, technical labels
- Body: 'Inter' with varied weights

**Scale:**
- Hero Name: text-6xl font-bold (72px)
- Section Headings: text-4xl font-semibold (36px)
- Subsections: text-2xl font-medium (24px)
- Body: text-base (16px)
- Metadata: text-sm (14px)

### C. Layout System

**Spacing Primitives:** Tailwind units 4, 8, 12, 16, 20, 24 (consistent rhythm)
- Section Padding: py-20 (desktop), py-12 (mobile)
- Card Padding: p-8
- Element Spacing: gap-8 for grids, space-y-4 for stacks
- Container Max-width: max-w-7xl mx-auto

**Grid Strategy:**
- Projects: 3-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Skills: 4-column grid for categories
- Single-column for About narrative (max-w-4xl for readability)

### D. Component Library

**Navigation Bar:**
- Sticky header with backdrop blur (backdrop-blur-xl bg-navy/80)
- Logo/Name left, nav links center, social icons right
- Links with underline-offset hover effect (transition-all duration-300)
- Active state: Electric Blue underline (border-b-2 border-electric-blue)

**Hero Section:**
- Split layout: Professional photo left (40%), content right (60%)
- Photo: Circular frame with Electric Blue ring border (ring-4 ring-electric-blue/50)
- Animated gradient subtitle using Electric Blue and Coral
- Dual CTA buttons: Primary (Electric Blue bg) + Secondary (outline with blur backdrop)

**Project Cards:**
- Elevated cards (bg-secondary-bg) with subtle hover lift (hover:translate-y-[-8px])
- Tech stack badges with Teal background
- "View Project" link with arrow icon in Electric Blue
- Card border: subtle border-l-4 with project-specific color accent

**Skill Categories:**
- Icon + label pairs (use Font Awesome for tech icons)
- Grouped by category with subtle dividers
- Hover state: scale-105 with Electric Blue glow effect

**Certification Badges:**
- Pill-shaped badges with Coral accent
- Include date and certifying organization
- Subtle shine effect on hover

**Contact Section:**
- Large social icon buttons (GitHub, LinkedIn, LeetCode, HackerRank)
- Icon hover: scale-110 with Electric Blue background fade-in
- Email as prominent CTA with copy functionality

### E. Interactions & Animations

**Navigation:**
- Smooth scroll to sections (scroll-behavior: smooth)
- Nav link hover: Electric Blue color transition + scale-105
- Mobile menu: slide-in from right with backdrop

**Cards & Elements:**
- Project cards: subtle lift on hover (transform translateY(-8px), shadow-xl)
- Skill items: gentle scale (1.05) with glow
- No complex scroll animations - focus on micro-interactions

**Page Load:**
- Hero fade-in (opacity 0 to 1, duration 800ms)
- Staggered section reveals (delay 100ms per section)

---

## Section Specifications

**1. Hero Section** (h-screen)
- Professional photo in circular frame with gradient ring
- Name in text-6xl with letter-spacing tracking-tight
- Animated role subtitle: "Cloud & AI/ML Engineer"
- Brief tagline about scalable systems passion
- Dual CTAs: "View Projects" + "Download Resume"

**2. About Section** (py-20)
- Education highlight with university logo placeholder
- 3-column flex: Education | Strengths | Passion
- Pull quote: Key achievement (Google Cloud Premium Milestone) in Coral accent

**3. Projects Showcase** (py-24)
- 3-column grid with project cards
- Each card: Title, description, tech stack badges, GitHub link
- Featured project (Drive-to-Chat RAG): larger card with extended description

**4. Technical Skills** (py-20, bg-secondary-bg)
- 4 categories in grid: Languages | Cloud | Dev Tools | Core Concepts
- Icon-label pairs with hover glow effects
- Visual hierarchy through icon sizing

**5. Certifications & Learning** (py-20)
- Split: Completed certifications left | Learning roadmap right
- Badge-style certificates with dates
- Progress indicators for ongoing learning (Azure, AI/ML)

**6. Contact/Footer** (py-16, bg-tertiary-bg)
- Large social icons in horizontal layout
- Email with copy functionality
- "Let's build something impactful" tagline
- Language proficiencies as subtle footer detail

---

## Images

**Professional Photo:**
- Placement: Hero section, left side (40% width on desktop)
- Treatment: Circular crop (w-64 h-64), Electric Blue ring border (ring-4), subtle shadow
- Background: Subtle radial gradient backdrop in navy tones

**No additional images needed** - portfolio relies on typography, color, and clean layouts to convey professionalism. Project cards use tech stack badges and icons instead of screenshots.

---

## Accessibility & Responsiveness

- High contrast ratios (4.5:1 minimum) maintained with navy background
- Focus states: Electric Blue outline (outline-2 outline-electric-blue)
- Mobile: Single column layouts, collapsible navigation
- Tablet: 2-column grids where appropriate
- Desktop: Full 3-4 column grids with generous spacing