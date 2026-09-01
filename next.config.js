/** @type {import('next').NextConfig} */
const nextConfig = {
  // apple-app-site-association has no file extension, so static serving needs an
  // explicit content-type or some clients/CDNs won't accept it as valid JSON.
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
    ];
  },
};

module.exports = nextConfig;
