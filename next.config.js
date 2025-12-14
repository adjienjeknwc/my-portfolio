/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the critical line: forces the output to be static HTML/CSS/JS
  output: 'export', 
  
  // This tells Next.js to use the current working directory for static files 
  // and is the most reliable way to deploy simple static sites on Vercel.
  distDir: 'out', // Changed from '.next' to 'out' for robustness
};

module.exports = nextConfig;