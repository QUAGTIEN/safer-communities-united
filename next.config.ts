import type { NextConfig } from "next";

// Server build for Vercel (S7, D-020): no static export, so the forms can gain server route handlers.
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  poweredByHeader: false,
};

export default nextConfig;
