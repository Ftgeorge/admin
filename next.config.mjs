/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin/overview',
        permanent: true, // Use true for permanent redirect (308)
      },
    ]
  },
};

export default nextConfig; 