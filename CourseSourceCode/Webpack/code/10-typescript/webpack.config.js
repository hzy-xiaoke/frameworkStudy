const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/app.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  }
}