/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'picsum.photos'],
    unoptimized: true
  },
  // 禁用图片优化和静态导出以解决水合问题
  output: 'export',
  distDir: 'dist'
}

module.exports = nextConfig 