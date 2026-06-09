# Smart India Movement

Landing site for **Smart India Movement (SIM)** — an umbrella of independent civic-tech initiatives focused on awareness, governance, education, and informed citizenship in India.

**Repository:** [github.com/piyush0077sh/Smart-India-Movement](https://github.com/piyush0077sh/Smart-India-Movement)  
**Live site:** [smart-india-movement.vercel.app](https://smart-india-movement.vercel.app)

## Stack

- [TanStack Start](https://tanstack.com/start) (SSR) + [TanStack Router](https://tanstack.com/router)
- React 19, TypeScript, Tailwind CSS 4, shadcn/ui

## Getting started

```bash
# Install dependencies (Bun preferred, npm also works)
bun install
# or: npm install

# Copy env template and set your production URL
cp .env.example .env

# Start dev server
bun dev
# or: npm run dev
```

## Environment variables

All public config uses the `VITE_` prefix (safe for client bundles). See [`.env.example`](.env.example).

| Variable            | Purpose                                |
| ------------------- | -------------------------------------- |
| `VITE_SITE_URL`     | Canonical site URL for SEO and sitemap |
| `VITE_KYL_URL`      | Know Your Leaders project link         |
| `VITE_KYC_URL`      | Know Your Constitution project link    |
| `VITE_GITHUB_URL`   | Footer GitHub link                     |
| `VITE_TWITTER_URL`  | Footer Twitter/X link                  |
| `VITE_LINKEDIN_URL` | Footer LinkedIn link                   |

Project and social links are hidden until their env vars are set — no placeholder `#` links.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Development server       |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | ESLint                   |
| `npm run format`  | Prettier                 |

## Project structure

```
src/
├── routes/
│   ├── __root.tsx      App shell
│   ├── index.tsx       Homepage
│   └── sitemap[.]xml.ts
├── lib/
│   └── site.ts         Site copy, projects, env-based URLs
└── components/ui/      shadcn/ui (for future pages)
```

## License

Made for the public good.
