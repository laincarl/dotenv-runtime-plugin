const path = require("path");

const { validate } = require("schema-utils");

const { prependEntry } = require("./utils");
const schema = require("./options.json");

class DotEnvRuntimePlugin {
  constructor(options) {
    validate(/** @type {Schema} */ (schema), options, {
      name: "DotEnvRuntime Plugin",
      baseDataPath: "options",
    });
    this.options = {
      entry: options.entry,
      variableName: options.variableName,
    };
  }
  apply(compiler) {
    const { entry } = this.options;
    compiler.options.entry = prependEntry(compiler.options.entry, entry);
    compiler.options.module.rules.push({
      test: /\.env$/,
      loader: path.resolve(__dirname, "loader"),
      options: {
        variableName: this.options.variableName,
      },
    });
  }
}

module.exports = DotEnvRuntimePlugin;
