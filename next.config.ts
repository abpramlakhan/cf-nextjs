import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.abpweddings.com',
        port: '',
        pathname: '/documents/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
