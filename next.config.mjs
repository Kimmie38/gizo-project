/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",     
      "res.cloudinary.com",  
      "localhost",           
      "kasuwa-gizo-backend-1.onrender.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://kasuwa-gizo-backend-1.onrender.com/kasuwa/:path*",
      },
    ];
  },
};

export default nextConfig;
