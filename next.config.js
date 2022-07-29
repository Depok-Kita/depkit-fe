const withReactSvg = require("next-react-svg");
const path = require("path");
module.exports = withReactSvg({
  images: {
    domains: ["localhost"],
  },
  include: path.resolve(__dirname, "public/assets"),
  webpack(config, options) {
    return config;
  },
});