# dotenv-runtime-plugin

This plugin allow you use dotenv variables in browser runtime.

## Getting Started

To begin, you'll need to install `dotenv-runtime-plugin`:

using yarn

```console
yarn add dotenv-runtime-plugin
```

or using npm

```console
npm install dotenv-runtime-plugin --save-dev
```

Then add the plugin to your `webpack` config. For example:

**webpack.config.js**

```js
const DotEnvRuntimePlugin = require('dotenv-runtime-plugin');

module.exports = {
  ...
  plugins: [
    new DotEnvRuntimePlugin({
      // your dotenv file path
      entry: './.env'
    }),
  ]
  ...
};
```

then in runtime, you are able to access variables

```js
console.log(window._env_);
```

## Options

### `entry`

Type: `String`
