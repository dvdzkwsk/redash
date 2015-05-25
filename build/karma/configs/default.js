const path = require('path');
const WEBPACK_CONFIG = require('../../webpack/make')('development');
const APP_ENTRY = 'lib/spec.js';

export default {
  files : [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    APP_ENTRY
  ],
  frameworks : ['chai', 'mocha'],
  preprocessors: {
    'lib/**/*.js' : ['webpack']
  },
  reporters: ['spec'],
  browsers: ['PhantomJS'],
  webpack : {
    devtool : 'inline-source-map',
    resolve : WEBPACK_CONFIG.resolve,
    module  : {}
  },
  webpackMiddleware : {
    noInfo : true
  },
  plugins: [
    require('karma-webpack'),
    require('karma-mocha'),
    require('karma-chai'),
    require('karma-coverage'),
    require('karma-phantomjs-launcher'),
    require('karma-spec-reporter')
  ]
};
