/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cipo_nginx',
      },
      {
        hostname: 'cipo_backend_server',
      },
      {
        protocol: 'http',
        hostname: 'cipo-site-server',
        pathname: '/news_images/**',
      },
      {
        protocol: 'https',
        hostname: 'cipo.kz',
        pathname: '/static/news_images/**',
      },
      {
        protocol: 'http',
        hostname: 'cipo-site-server',
        pathname: '/product_images/**',
      },
      {
        protocol: 'https',
        hostname: 'cipo.kz',
        pathname: '/static/product_images/**',
      },
      {
        protocol: 'http',
        hostname: 'cipo-site-server',
        pathname: '/store_images/**',
      },
      {
        protocol: 'https',
        hostname: 'cipo.kz',
        pathname: '/static/store_images/**',
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
