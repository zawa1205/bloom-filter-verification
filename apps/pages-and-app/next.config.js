/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/base",
  experimental: {
    // ここを false にすると Bloom Filter を使わないようにできる
    // clientRouterFilter: false,
  },

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
