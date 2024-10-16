/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable output as static files if you plan to use static export (optional)
  output: 'export',

  // Other configurations you may need for your app
  reactStrictMode: true,

  // Optionally, you can define custom headers and redirects
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
