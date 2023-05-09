const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      template: './index.html',
      excludeChunks: ['appOne', 'appTwo', 'lodash'],
    }),
    new HtmlWebpackPlugin({
      name: '应用1',
      title: '多页面应用-1',
      template: './main.html',
      inject: 'body',
      chunks: ['appOne', 'lodash'],
      filename: 'chanelOne/index.html',
    }),
    new HtmlWebpackPlugin({
      name: '应用2',
      title: '多页面应用-2',
      template: './main.html',
      inject: 'body',
      chunks: ['appTwo', 'lodash'],
      filename: 'chanelTwo/index.html',
    }),
  ],
  
  entry: {
    appOne: {
      import: './src/app.js',
      dependOn: 'lodash',
      filename: 'chanelOne/[name].js'
    },

    appTwo: {
      import: './src/app2.js',
      dependOn: 'lodash',
      filename: 'chanelTwo/[name].js'
    },

    lodash: {
      import: 'lodash',
      filename: 'common/[name].js'
    },
  },

}