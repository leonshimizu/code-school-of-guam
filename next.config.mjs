/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disable Next.js Image Optimization
  },
};

export default nextConfig;
