/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",       // example: placeholder images
      "res.cloudinary.com",  // example: Cloudinary
      "localhost",           // if you ever serve from local
    ],
    remotePatterns: [
      {
        protocol: "blob", // ✅ allow blob: previews (e.g., from file uploads)
        hostname: "**",
      },
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
