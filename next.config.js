/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/(js|ts)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgo: true,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
