/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  nextConfig: nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dwarf.dk",
        port: "",
        pathname: "/comwell-cms-production/img/containers/main/**",
      },
    ],
  },
};

// module.exports = nextConfig
