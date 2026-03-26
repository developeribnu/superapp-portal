# Ibnu's Superapp Ecosystem Portal

A stunning master portal gateway built with Next.js 15 that serves as the central hub for all 16 superapps in the ecosystem.

## 🚀 Features

- **Beautiful Dark Theme**: Modern, sleek dark interface with animated gradients
- **16 Superapps**: Comprehensive ecosystem spanning 4 main categories
- **Search & Filter**: Real-time search and category filtering
- **Responsive Design**: Fully responsive grid layout optimized for all devices
- **Animated UI**: Smooth framer-motion animations and transitions
- **Stats Dashboard**: Overview of total routes, sub-projects, and files
- **Category Breakdown**: Detailed view of each superapp category

## 📊 Superapp Categories

### Knowledge (7 apps)
- **Finance & Investment**: Crypto, economics, investment banking, Polymarket (6 subs, 86 routes)
- **Tech & AI**: LLM AI, cybersecurity, infrastructure, distributed systems (8 subs, 42 routes)
- **Sales & Business**: Business strategies, sales, side hustles (3 subs, 122 routes)
- **Leadership & Management**: Consulting, negotiation, management (4 subs, 41 routes)
- **Otomotif**: Cars and motorcycles (2 subs, 29 routes)
- **Lifestyle**: Gadgets, health, gardening, engineering (4 subs, 38 routes)
- **Workplace Skills**: HR, productivity (2 subs, 39 routes)

### Content (3 apps)
- **Hukum & Politik**: Legal matters, politics (3 subs, 4 routes)
- **Media & Content**: Social media, film, video AI (4 subs, 14 routes)
- **Content Tools**: PDF, PowerPoint, YouTube summarizer (3 subs, 34 routes)

### Tools (5 apps)
- **Automation**: Bot automation, n8n, web automation (9 subs, 74 routes)
- **Data Scraper**: API collection, PDF extraction, eBay scraper (4 subs, 5 routes)
- **Productivity Apps**: Dashboard monitor, Trello, task management (6 subs, 28 routes)
- **AI Tools**: Claude management, Kimi, book summarizer (3 subs, 18 routes)
- **GitHub Tools**: Repository management, achievements (3 subs, 13 routes)

### Fun (1 app)
- **Games**: Interactive games, CoC, Travian (3 subs, 4 routes)

## 📈 Overall Stats

- **Total Superapps**: 16
- **Total Routes**: 591
- **Total Sub-projects**: 70
- **Total Files**: 2155

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **React**: 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Language**: TypeScript

## 📦 Project Structure

```
superapp-portal/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Main dashboard page
│       └── globals.css         # Global styles with Tailwind
├── public/                      # Static assets
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config (static export)
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.mjs          # PostCSS configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portal.

## ✨ Key Features Explained

### Search & Filter
- Real-time search across app names and descriptions
- Filter by 4 main categories: All, Knowledge, Content, Tools, Fun
- Results update instantly with smooth animations

### Superapp Cards
- Hover animations with elevation and icon rotation
- Color-coded by category for quick identification
- Display sub-project count and route count
- Category badge on each card

### Responsive Grid
- Adapts from 1 column on mobile to 4 columns on 4K displays
- Smooth layout animations when filtering
- Touch-friendly spacing and interactions

### Visual Polish
- Animated background elements with opacity pulses
- Gradient text for headings
- Smooth transitions and hover effects
- Professional color palette

## 🎨 Customization

### Colors

Modify category colors in `tailwind.config.ts`:
```ts
colors: {
  'category-knowledge': '#3B82F6',  // Blue
  'category-content': '#A855F7',    // Purple
  'category-tools': '#10B981',      // Green
  'category-fun': '#F59E0B',        // Amber
}
```

### Animations

Adjust animation speeds in `src/app/page.tsx`:
```ts
transition={{ duration: 0.6 }}  // Change duration
whileHover={{ scale: 1.05 }}    // Customize hover effects
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Static Export

This project uses Next.js static export (`output: export`) for easy deployment as static files. Perfect for:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## 📄 License

Built by Ibnu - Part of the Superapp Ecosystem

## 🤝 Contributing

This is the master portal for the Ibnu Superapp Ecosystem. Each superapp is a separate project that can be customized independently.

---

**Ready to explore all 16 superapps? Start with the portal and navigate to any superapp to dive deeper!**
