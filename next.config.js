/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    // domains: ["localhost","i.ibb.co"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      }
      // {
      //   protocol: 'https',
      //   hostname: 'i.ibb.co',
       
      // },
    ],
  },  
  env: {
    PUBLIC_API_URL: process.env.PUBLIC_API_URL,
  }
};

module.exports = nextConfig;
