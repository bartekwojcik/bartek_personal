import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // GitHub Pages serves from a subdirectory if using username.github.io/repo-name
  // If deploying to custom domain or root (username.github.io), remove basePath
  // basePath: '/your-repo-name',
};

export default nextConfig;
