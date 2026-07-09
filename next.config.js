/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All avatar layer assets are served locally from /public, no remote domains needed.
    unoptimized: true
  }
};

module.exports = nextConfig;
