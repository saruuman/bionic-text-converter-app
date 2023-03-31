/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  }    
}

module.exports = nextConfig
