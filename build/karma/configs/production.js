const WEBPACK_CONFIG = require('../../webpack/make')('development');

export default {
  reporters : ['spec', 'coverage'],
  singleRun : true,
  coverageReporter: {
    type : 'html',
    dir  : 'dist/coverage/'
  },
  webpack : {
    module : {
      loaders: WEBPACK_CONFIG.module.loaders
    }
  }
};
