/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverExternalPackages: ['@prisma/client', 'prisma']
};

export default nextConfig;
