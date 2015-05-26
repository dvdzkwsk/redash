var path = require('path');

module.exports = function (config) {
  return config.set({
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'src/daedalus.unit.js'
    ],
    frameworks : ['chai', 'mocha'],
    preprocessors: {
      './src/**/*.js' : ['webpack']
    },
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    webpack : {
      devtool : 'inline-source-map',
      resolve : path.resolve(__dirname, 'src')
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
  });
};
