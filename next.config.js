/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
const withLess = require("next-less")

const nextConfig = withLess({
  experimental: {
    appDir: true,
  },
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
  lessOptions: {
    javascriptEnabled: true,
  },
})

module.exports = nextConfig
