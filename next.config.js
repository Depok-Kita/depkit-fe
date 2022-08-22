const withReactSvg = require("next-react-svg");
const path = require("path");

const ContentSecurityPolicy = `
  frame-ancestors ${process.env.NEXT_PUBLIC_API_STRAPI} http://localhost:1337;
`

// replace csp new line with space
const parseCsp = (csp) => csp.replace(/\s{2,}/g, ' ').trim()

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/assets"),
  webpack(config, options) {
    return config;
  },
  images: {
    domains: ['localhost']
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors localhost:*;`
          },
        ],
      },
    ]
  },
});
