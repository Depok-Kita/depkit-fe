const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/assets"),
  images: {
    domains: ['api.depokkita.com','localhost'],
  },
  webpack(config, options) {
    return config;
  },
});
