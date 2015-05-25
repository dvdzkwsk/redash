var path = require('path'),
    webpack = require('webpack'),
    resolve = path.resolve.bind(path, './');

module.exports = exports = {
  entry : {
    functional : resolve('index')
  },
  output : {
    path : resolve('dist'),
    filename : '[name].min.js'
  },
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
      output : {
        'comments'  : false
      },
      compress : {
        'unused'    : true,
        'dead_code' : true
      }
    }),
  ],
  module : {
    preLoaders: [{
      test : /\.js?$/,
      exclude : /node_modules/,
      loader : 'jshint'
    }]
  },
  jshint: {
    emitErrors : false,
    failOnHint : false,
    reporter   : require('jshint-loader-stylish')()
  }
};
