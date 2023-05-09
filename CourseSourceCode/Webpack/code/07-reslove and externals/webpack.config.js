const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',

  entry: './app.js',

  output: {
    clean: true
  },

  devServer: {
    static: './dist'
  },

  plugins: [
    new HtmlWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },

    extensions: ['.json', '.js'],
  },

  externalsType: 'script',
  externals: {
    jquery: [
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js',
      '$'
    ]
  }
}