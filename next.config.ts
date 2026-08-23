import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: process.env.GITHUB_PAGES === 'true',
  images: { unoptimized: true },
};

export default nextConfig;
