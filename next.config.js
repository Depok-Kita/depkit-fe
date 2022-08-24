const withReactSvg = require("next-react-svg");
const path = require("path");

const apiUrl = new URL(process.env.NEXT_PUBLIC_API_STRAPI)

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/assets"),
  webpack(config, options) {
    return config;
  },
  images: {
    domains: [apiUrl.host, "localhost", "api.depokkita.com"]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors 'self' https://api.depokkita.com;`
          },
        ],
      },
    ]
  },
});
