/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  compiler: {
    styledComponents: true,
  },

  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
    CLOUDINARY_CLOUD_NAME: "booklit",
    CLOUDINARY_API_KEY: "753565283234368",
    CLOUDINARY_API_SECRET: "2ugKXwJqoA-rzBwA1qA7Hj94YR0",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
};

module.exports = nextConfig;
