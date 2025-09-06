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
};

export default nextConfig;
