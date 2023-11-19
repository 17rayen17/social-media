/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
