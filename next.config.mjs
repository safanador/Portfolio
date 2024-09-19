/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            // You can add these as well
            // port: '',
            // pathname: 'arifscloud/image/upload/**',
          },
        ],
      },
};

export default nextConfig;
