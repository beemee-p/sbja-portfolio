/** @type {import('next').NextConfig} */
import * as path from "path";

const __dirname = path.resolve();

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    appDir: true,
    serverActions: true,
    mdxRs: true,
  },

  webpack(config, { isServer }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@api": path.resolve(__dirname, "src/app/api"),
      "@styles": path.resolve(__dirname, "src/app/styles"),
      "@components": path.resolve(__dirname, "src/components"),
      "@posts": path.resolve(__dirname, "src/posts"),
      "@lib": path.resolve(__dirname, "src/lib"),
    };

    return config;
  },
};

export default nextConfig;
