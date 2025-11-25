import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // force Turbopack to treat this directory as the workspace root
    root: __dirname,
  },
};

export default nextConfig;
