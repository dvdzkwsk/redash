const argv       = require('yargs').argv;
const WATCH_MODE = !!argv.watch;
const IS_CI      = process.env.NODE_ENV === 'CI';

const config = {
  files : [
    'dist/daedalus.js',
    'tests/**/*.spec.js'
  ],
  preprocessors : {
    'dist/daedalus.js' : ['coverage']
  },
  singleRun  : !WATCH_MODE,
  frameworks : ['mocha', 'sinon-chai', 'chai'],
  reporters  : ['spec'],
  browsers   : ['PhantomJS'],
  coverageReporter : {
    reporters : [
      { type : 'text-summary' },
      { type : IS_CI ? 'lcov' : 'html', dir : 'coverage' }
    ]
  }
};

if (!WATCH_MODE) {
  config.reporters.push('coverage');
  if (IS_CI) {
    config.reporters.push('coveralls');
  }
}

module.exports = function (karma) {
  karma.set(config);
};