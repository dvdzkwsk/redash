var fs = require('fs');
var resolve = require('path').resolve;

module.exports = function (dir, opts) {
  opts = opts || {};
  opts.deep = opts.deep || false;

  return fs.readdirSync(dir).reduce(function (output, file) {
    var apiName = file
      .replace('.js', '')
      .split('-')
      .reduce(function (memo, segment) {
        return memo + segment[0].toUpperCase() + segment.slice(1);
      });

    if (opts.exclude.test(file)) {
      return output;
    }

    output[apiName] = require(resolve(dir, file));
    return output;
  }, {});
};
