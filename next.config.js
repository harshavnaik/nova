/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: "",
  },
  compiler: {
    removeConsole: false,
  }
};

module.exports = nextConfig;
