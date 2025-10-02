/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт для reg.ru
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
