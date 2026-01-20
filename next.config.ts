import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory (e.g. valid-user.github.io/repo-name), 
  // you would uncomment and set the basePath here:
  // basePath: "/repo-name",
};

export default nextConfig;
