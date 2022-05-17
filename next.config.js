/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['a0.muscache.com'],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/bookit'
  }
}

module.exports = nextConfig
