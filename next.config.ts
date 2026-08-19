import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generates 100% static HTML/JS/CSS for Vercel/GitHub Pages with zero server overhead
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};

export default nextConfig;
