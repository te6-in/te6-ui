/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ladle/:path*",
        destination: "/ladle/index.html",
      },
    ];
  },
};

export default nextConfig;
