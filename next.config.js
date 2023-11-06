/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },{
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      },{
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },{
        protocol: 'https',
        hostname: 'cdn.shopify.com'
      },
      
    ],
  },
}

module.exports = nextConfig
