/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cipo-site-server',
        pathname: '/news_images/**',
      },
      {
        protocol: 'https',
        hostname: '5.35.80.46',
        pathname: '/news_images/**',
      },
      {
        protocol: 'http',
        hostname: 'cipo-site-server',
        pathname: '/product_images/**',
      },
      {
        protocol: 'https',
        hostname: '5.35.80.46',
        pathname: '/product_images/**',
      },
      {
        protocol: 'http',
        hostname: 'cipo-site-server',
        pathname: '/store_images/**',
      },
      {
        protocol: 'https',
        hostname: '5.35.80.46',
        pathname: '/store_images/**',
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
