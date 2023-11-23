/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.SOCIOPS_ADMIN_API_URL,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sociops-backend-production.up.railway.app",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
