/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mars.jpl.nasa.gov"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
