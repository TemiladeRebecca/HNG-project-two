/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.timbu.cloud',
        port: '',
        pathname: '/images/**',
      },
    ],
  },

  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_ORGANIZATION_ID: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
    NEXT_PUBLIC_APPID: process.env.NEXT_PUBLIC_APPID,
    NEXT_PUBLIC_APIKEY: process.env.NEXT_PUBLIC_APIKEY,
    NEXT_PUBLIC_API_TIMBU_URL: process.env.NEXT_PUBLIC_API_TIMBU_URL,
  },

};

export default nextConfig;
