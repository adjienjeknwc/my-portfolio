/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This allows Next.js to serve images from your local folders without strict optimization blocks
    unoptimized: true, 
  },
  // If you are using the 'src' directory, Next.js usually finds it automatically.
};

module.exports = nextConfig;