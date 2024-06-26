/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  // experimental: {
  //   reactRoot: true,
  //   edge: true,
  // },
};

module.exports = nextConfig;
