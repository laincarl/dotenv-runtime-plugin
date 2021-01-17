# dotenv-runtime-plugin

一个可以使 dotenv 环境变量热更新的 webpack plugin

## 快速开始

先安装 `dotenv-runtime-plugin`:

使用 yarn

```console
yarn add dotenv-runtime-plugin
```

或者使用 npm

```console
npm install dotenv-runtime-plugin --save-dev
```

之后修改 `webpack` 配置. 例子:

**webpack.config.js**

```js
const DotEnvRuntimePlugin = require('dotenv-runtime-plugin');

module.exports = {
  ...
  plugins: [
    new DotEnvRuntimePlugin({
      // dotenv 文件路径
      entry: './.env'
    }),
  ]
  ...
};
```

启动 webpack 之后, dotenv 中的环境变量会定义在 window 上，默认变量名`_env_`

```js
console.log(window._env_);
```

## 选项

### `entry`

类型: `String`

### `variableName`

类型: `String`

支持类似`a.b`的形式,例如`process.env`
