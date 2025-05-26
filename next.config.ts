import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonacular.com',
        pathname: '/**',
      },
    ],
  },
  env: {
    SPOON_API_KEY: process.env.NEXT_PUBLIC_SPOON_API_KEY,
  },
}

export default nextConfig
