/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ensures it's fully static
    basePath: '/portfolio_alex', // important for GitHub Pages
    images: {
      unoptimized: true, // disables next/image optimization (required for static exports)
    },
  };
  
  module.exports = nextConfig;
  