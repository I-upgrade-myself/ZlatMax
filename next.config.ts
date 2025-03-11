import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["pum.in.ua", 'family.ua'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
