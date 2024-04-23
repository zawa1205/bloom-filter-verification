/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/base",
  redirects() {
    return [
      {
        source: "/",
        destination: "/base",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
