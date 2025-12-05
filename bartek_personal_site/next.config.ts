import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },


  // basePath: '/bartek_personal',
};

export default nextConfig;
