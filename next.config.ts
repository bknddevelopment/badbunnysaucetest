import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/badbunnysaucetest",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
