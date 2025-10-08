/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my_portfolio',  // sesuaikan dengan nama repo
  images: {
    unoptimized: true,        // supaya export jalan lancar di GitHub Pages
  },
};

export default nextConfig;