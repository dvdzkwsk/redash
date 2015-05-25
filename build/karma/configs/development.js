const WEBPACK_CONFIG = require('../../webpack/make')('development');

export default {
  webpack : {
    module : {
      loaders: WEBPACK_CONFIG.module.loaders
    }
  },
  singleRun : false
};
