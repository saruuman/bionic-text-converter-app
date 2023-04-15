/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
// const withLess = require("next-less")

const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    // reactStrictMode: true,
    styledComponents: true,
  },
}

module.exports = nextConfig
