/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'media.graphcms.com'],
  },
  async headers() {
    return [
      {
        source: "/piyo/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://d3vinfe0vsz3c9.cloudfront.net" },
          { key: "Access-Control-Allow-Methods", value: "GET,HEAD,OPTIONS,PUT,POST,PATCH,DELETE" },
          { key: "Access-Control-Allow-Headers", value: "*" }
        ]
      }
    ]
  }
}
