const dotenv = require("dotenv");
const loaderUtils = require("loader-utils");

function loader(source) {
  const options = loaderUtils.getOptions(this);
  const variableName = options.variableName || "_env_";
  return `
    var paths = '${variableName}'.split('.').slice(0, -1);
    paths.reduce((result, path) => {
      if (!result[path]) {
        result[path] = {};
      }
      return result[path];
    }, window);
    window.${variableName} = ${JSON.stringify(dotenv.parse(source || ""))};
    `;
}

module.exports = loader;
