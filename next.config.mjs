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
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        pathname: '**',
      },
      
    ],
  },
  // ниже настройка нужна для корректной работы winston
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

export default nextConfig;
