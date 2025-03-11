/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Add localhost for development
    // Or use remotePatterns for more control:
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Strapi default port
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
