import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages project site requires a basePath
  basePath: "/atv",
};

export default nextConfig;
