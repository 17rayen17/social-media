/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.memegen.link'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.memegen.link",
      },
    ],
  },
};

module.exports = {
  reactStrictMode: false,
}

module.exports = nextConfig
