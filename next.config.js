/** @type {import('next').NextConfig} */
const nextConfig = {
//   output: 'export',
  async redirects() {
      return [
          {
              source: '/',
              destination: '/home-2',
              permanent: true,
          },
          {
              source: '/old-page',
              destination: '/new-page',
              permanent: false,
          },
      ];
  },
}

module.exports = nextConfig;
