# God'sgift Chukwuonye — Portfolio (Vite + React Router)

## Local setup
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Stack
- Vite 7 + React 19
- react-router-dom 7 (BrowserRouter)
- Tailwind CSS 4
- Framer Motion

## Deploy
- Netlify / Cloudflare Pages: `public/_redirects` handles SPA fallback.
- Vercel: `vercel.json` handles SPA fallback.
- Build command: `npm run build` · Output: `dist/`
