import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Empty for local/Vercel; GitHub Pages builds under the repository subpath.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  poweredByHeader: false,
};

export default nextConfig;
