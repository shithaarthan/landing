import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? '/landing/' : '',
  basePath: isProd ? '/landing' : '',
};

export default nextConfig;
