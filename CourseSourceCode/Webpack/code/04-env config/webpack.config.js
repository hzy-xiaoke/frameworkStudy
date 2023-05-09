const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  return {
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
  
    output: {
      filename: 'scripts/[name].[contenthash].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
      assetModuleFilename: 'images/[contenthash][ext]',
      publicPath: 'http://localhost:8080/'
    },
  
    mode: env.production ? 'production' : 'development',
  
    devtool: 'inline-source-map',
  
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'app.html',
        inject: 'body'
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/[contenthash].css'
      }),
    ],
  
    devServer: {
      static: './dist'
    },
  
    module: {
      rules: [
        {
          test: /\.jpg$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[contenthash][ext]'
          }
        },
  
        {
          test: /\.svg$/,
          type: 'asset/inline'
        },
  
        {
          test: /\.txt$/,
          type: 'asset/source'
        },
  
        {
          test: /\.png$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024
            }
          }
        },
  
        {
          test: /\.(css|less)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
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
    },
  
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
  
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      },
    }
  }
}