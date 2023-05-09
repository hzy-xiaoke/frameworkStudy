const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './app.js',

  output: {
    clean: true,
    publicPath: '/'
  },

  devServer: {
    hot: true,
    liveReload: true,
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 3000,
    host: '0.0.0.0',

    headers: {
      'X-Access-Token': 'abc123'
    },

    proxy: {
      '/api': 'http://localhost:9000'
    },

    // https: true,
    // http2: true,

    historyApiFallback: true,
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
