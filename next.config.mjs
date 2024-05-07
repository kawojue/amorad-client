/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
      images: {
        domains: ['d367kfshl4zefc.cloudfront.net'],
      }
};

export default nextConfig;
