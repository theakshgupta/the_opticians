import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wix.com",
      },
    ],
    domains: ["static.wixstatic.com"],
  },
};

export default nextConfig;
