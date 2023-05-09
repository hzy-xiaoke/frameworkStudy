const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',

  plugins: [
    new HtmlWebpackPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
}