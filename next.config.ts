import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    // Legacy Squarespace (yalemodelau.org, YMAU V) paths mapped to their closest successors.
    return [
      { source: "/about-committees", destination: "/committees", permanent: true },
      { source: "/committees-1", destination: "/committees", permanent: true },
      { source: "/conference", destination: "/programme", permanent: true },
      { source: "/conference-schedule-r", destination: "/programme", permanent: true },
      { source: "/donate", destination: "/sponsor", permanent: true },
      { source: "/executivereport", destination: "/recap", permanent: true },
      { source: "/mission", destination: "/about", permanent: true },
      { source: "/partners-1", destination: "/past-partners", permanent: true },
      { source: "/partners-2", destination: "/past-partners", permanent: true },
      { source: "/president", destination: "/secretary-general", permanent: true },
      { source: "/secretariat-1", destination: "/secretariat", permanent: true },
      { source: "/ymau-iv-recap-video", destination: "/recap", permanent: true },
      { source: "/ymau-v-ambassadors", destination: "/ambassadors", permanent: true },
      { source: "/application-preview", destination: "/registration", permanent: true },
      { source: "/mission-statement", destination: "/about", permanent: true },
      { source: "/cart", destination: "/", permanent: true },
    ];
  },
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
