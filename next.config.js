/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website', // Replace with your GitHub repo name
  assetPrefix: '/website',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
