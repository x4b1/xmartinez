# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: engineering peers (backend/infra engineers, Go community) who judge craft and taste. Secondary: recruiters and hiring managers who need the CV, the PDF and a way to make contact fast. Peers first, recruiters served by a clear path.

## Product Purpose

Personal site of Xabier Martinez, Software Engineer (Go, backend, DevOps mindset, 10+ years, Basque Country). Success: a visitor understands who he is in seconds, opens the CV or PDF, sees his projects, and gets in touch.

## Positioning

A single engineer's site where the CV data is a single typed source of truth (src/content/_cv.ts), the A4 PDF is generated from the same page at build time, and the philosophy is KISS: no reinvention, nothing unnecessary.

## Operating Context

Astro + Tailwind v4, TypeScript strict, Playwright generates public/xabier_martinez.pdf from /cv at build, deployed to Cloudflare Workers at xmartinez.dev. Content lives in src/content/_cv.ts.

## Capabilities and Constraints

- Homepage must: open the CV / PDF, enable contact (email, LinkedIn, GitHub), show projects.
- Scope: whole site may be restructured (user decision). The /cv page must still print to a single A4 PDF.
- Blog is planned but not live; do not present it as existing.
- Languages: Spanish, English, Basque (site is in English).

## Evidence on Hand

Real: experience entries, one project (Messenger, github.com/x4b1/messenger), education, avatar (public/avatar.jpg), PDF. Absent: testimonials, metrics, blog posts, more projects. Do not fabricate.

## Product Principles

- Content is data: every page reads from _cv.ts.
- KISS: remove before adding.
- Peers first, recruiters never blocked.
- The PDF and the web CV never diverge.
