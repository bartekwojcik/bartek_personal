import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  // basePath: '/bartek_personal',
};

export default nextConfig;
