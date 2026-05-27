import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], 
  },
  eslint: {
    // Ignore ESLint errors during production builds since Aceternity UI boilerplate
    // has many pre-existing lint issues.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

