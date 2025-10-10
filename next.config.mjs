/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    // Allow images from external domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vintoraofficial.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.vintoraofficial.com', // For subdomains
      }

    ],
}
};

export default nextConfig;
