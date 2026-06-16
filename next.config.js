/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/webapp-v1',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
