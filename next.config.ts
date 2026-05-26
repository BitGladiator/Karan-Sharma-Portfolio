import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add Unsplash as an allowed domain
  },
};

module.exports = nextConfig;

export default nextConfig;
