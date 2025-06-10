/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://www.figma.com; frame-src 'self' https://www.figma.com; child-src 'self' https://www.figma.com;",
          },
          // ...other headers...
        ],
      },
    ]
  },
}

export default nextConfig