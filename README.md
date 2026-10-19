# Movie Sentiment Analyzer - Frontend

A modern, neobrutalism-styled React frontend for the Movie Review Sentiment Analysis application. Built with Vite, TypeScript, and React Router, deployed on Netlify.

## Features

- 🎨 **Neobrutalism Design** - Bold, high-contrast UI with thick borders and offset shadows
- 📝 **Real-time Analysis** - Instant sentiment predictions via AWS Lambda + API Gateway
- 📊 **Confidence Scores** - See how confident the AI is about each prediction
- 📱 **Fully Responsive** - Works beautifully on mobile and desktop
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🚀 **Fast** - Vite-powered, optimized bundle, CDN deployment

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router DOM 6
- **Styling**: Custom CSS (Neobrutalism design system)
- **Deployment**: Netlify (via GitHub integration)
- **API**: AWS API Gateway HTTP API → Lambda (Container)

## Project Structure

```
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (Button, TextArea, Card, Badge)
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SentimentAnalyzer.tsx
│   │   ├── ResultCard.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Tutorial.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useSentimentAnalysis.ts
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── netlify.toml
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

This starts the development server at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env.local` file for local development:

```env
VITE_API_URL=https://2jgdfrrhxf.execute-api.ap-southeast-1.amazonaws.com
```

For production, set `VITE_API_URL` in Netlify dashboard under Site Settings → Environment Variables.

## API Integration

The frontend communicates with the backend via REST API:

- **Base URL**: `https://2jgdfrrhxf.execute-api.ap-southeast-1.amazonaws.com`
- **Endpoints**:
  - `GET /health` - Health check
  - `POST /predict` - Analyze sentiment

Request/Response format:
```typescript
// POST /predict
{ "review": "This movie was fantastic!" }

// Response
{ 
  "sentiment": "Positive", 
  "confidence": 0.87, 
  "model_type": "deep_learning" 
}
```

## Neobrutalism Design System

### Colors
- Background: `#ffffff` (primary), `#f5f5f5` (secondary)
- Text: `#1a1a1a` (primary), `#333333` (secondary), `#666666` (muted)
- Accents: `#000000` (primary), `#ff3333` (negative), `#00cc66` (positive), `#ffcc00` (warning)

### Components
- **Buttons**: 3px black borders, 4px offset shadows, uppercase text
- **Cards**: 3px borders, offset shadows, flat backgrounds
- **Inputs**: 3px borders, focus states with shadow offset
- **Badges**: Bold uppercase, thick borders, color-coded

### Typography
- Font: System UI stack (Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- Headings: Bold, uppercase, letter-spacing
- Body: Regular weight, good line-height

## Deployment to Netlify

### Option 1: GitHub Integration (Recommended)

1. Push this repository to GitHub
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select this repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20
6. Add environment variable:
   - `VITE_API_URL` = `https://2jgdfrrhxf.execute-api.ap-southeast-1.amazonaws.com`
7. Click "Deploy site"

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod --dir=dist
```

## Custom Domain (Optional)

1. In Netlify dashboard, go to Domain Settings
2. Add custom domain
3. Configure DNS records as instructed
4. Enable HTTPS (automatic with Let's Encrypt)

## Performance

- **Bundle Size**: ~150KB gzipped (vendor ~120KB, app ~30KB)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, CLS

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Focus management
- Color contrast ratios (WCAG AA)
- Keyboard navigation
- Screen reader support

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

MIT License - Feel free to use for learning or projects.

## Related

- [Backend Repository](../backend-sentiment/) - FastAPI + TensorFlow backend
- [Technical Documentation](../TECHNICAL_DOCUMENTATION.md) - Full system documentation