/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For `next export` to work correctly:
  output: 'export',
  trailingSlash: true, // Optional: Adds trailing slashes to the URLs.
};

export default nextConfig;
