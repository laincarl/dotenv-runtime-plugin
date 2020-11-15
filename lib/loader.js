const dotenv = require("dotenv");

function loader(source) {
  return `window._env_ = ${JSON.stringify(dotenv.parse(source || ""))};`;
}

module.exports = loader;
