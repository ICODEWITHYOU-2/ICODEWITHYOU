import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 dev servers auto-generate AGENTS.md/CLAUDE.md on startup by
  // default — this project doesn't want that churn in the repo.
  agentRules: false,

  // Static export for Cloudflare Pages — nothing on this site needs a
  // server (the contact form posts client-side to Formspree), so it ships
  // as plain HTML/CSS/JS. Image optimization requires a server too, so it's
  // disabled here — next/image still handles responsive markup and lazy
  // loading, it just serves the original file instead of a resized one.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
