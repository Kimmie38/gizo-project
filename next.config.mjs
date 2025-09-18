/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://kasuwa-gizo-backend-1.onrender.com/kasuwa/:path*',
      },
    ];
  },
};

export default nextConfig;
