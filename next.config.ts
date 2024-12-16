import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "export",

  basePath: "/portfolio",
  assetPrefix: "/portfolio/",

  images: {
    unoptimized: true,
  },

};

module.exports = {
  webpack(config : NextConfig) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;