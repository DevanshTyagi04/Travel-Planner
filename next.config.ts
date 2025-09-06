import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "6cmgcswrsz.ufs.sh",
      },
    ],
  },
   eslint: {
    // ✅ Skip ESLint checks during builds on Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
