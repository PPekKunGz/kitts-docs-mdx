import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
    domains: ["*"],
  }
};

const withMDX = createMDX({
  configPath: "./src/lib/source.config.ts"
});

export default withMDX(nextConfig);
