/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем экспериментальные настройки, которые могут мешать
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Оптимизация для reg.ru
  output: "standalone",
  trailingSlash: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
