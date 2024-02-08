/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '45.146.167.130',
        pathname: '/news_images/**',
      },
      {
        protocol: 'https',
        hostname: '45.146.167.130',
        pathname: '/product_images/**',
      },
    ],
  },
};

export default nextConfig;
