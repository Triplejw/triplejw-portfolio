# TripleJW Portfolio

Personal portfolio of **Joshua JJ Wonder** — an Edge AI and Full-Stack Developer turning research into practical products.

![TripleJW portfolio social preview](public/og.png)

## About

This single-page portfolio is designed for engineering hiring teams. It presents Joshua's work across edge AI, generative AI, computer vision, DSP, APIs, mobile development, and full-stack product engineering.

The flagship case study is **EduSync**, an IEEE AIMLA 2026-published, edge-deployed learning platform that combines a local quantized LLM, OCR, DSP-based engagement modelling, and vision analytics.

## Highlights

- Code-native `J³W / TRIPLEJW` identity system
- Responsive technical-editorial interface
- EduSync flagship research case study
- Selected AI, backend, and full-stack projects
- Research results and limitations presented transparently
- Downloadable résumé and direct contact links
- Dynamic Open Graph and X social metadata
- Accessible keyboard states and reduced-motion support

## Technology

- React 19
- Next.js 16
- TypeScript
- Vercel production deployment
- Optional vinext / Cloudflare Sites build
- CSS-driven responsive design and visual system

## Local development

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:3000` by default.

Create a production build with:

```bash
pnpm build
```

The original Sites-compatible build remains available through
`pnpm sites:build`.

## Project structure

```text
app/
  globals.css   # Complete visual system and responsive layout
  layout.tsx    # Metadata and social sharing configuration
  page.tsx      # Portfolio content and page structure
public/
  Joshua-JJ-Wonder-Resume.pdf
  triplejw-profile-v2.jpg
  og.png
```

## Links

- [Joshua JJ Wonder on LinkedIn](https://www.linkedin.com/in/joshuajjwonder)
- [TripleJW on GitHub](https://github.com/Triplejw)
- [EduSync](https://github.com/Triplejw/EduSync)
- [IEEE publication](https://doi.org/10.1109/AIMLA67915.2026.11522309)

## Author

Built for and maintained by **Joshua JJ Wonder / TripleJW**.
