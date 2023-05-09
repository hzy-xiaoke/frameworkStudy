const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const developmentConfig = require('./webpack.config.dev');
const productionConfig = require('./webpack.config.prod');

module.exports = (env) => {
  if (env.development) {
    return merge(commonConfig, developmentConfig);
  } else if (env.production) {
    return merge(commonConfig, productionConfig);
  } else {
    return new Error('No matching configuration!');
  }
}