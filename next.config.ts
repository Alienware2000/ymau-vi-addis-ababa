import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    formats: ["image/webp"],
    qualities: [75, 90],
    minimumCacheTTL: 2_678_400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2048, 2560, 2880, 3840],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
