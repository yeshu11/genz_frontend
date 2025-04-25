import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["genz-backend.onrender.com", "genz-frontend.vercel.app"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { canvas: false };
    }
    return config;
  },
};

export default nextConfig;