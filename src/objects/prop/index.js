var curryN = require('../../functions/curry-n');

module.exports = curryN(2, function prop (prop, obj) {
  return obj[prop];
});
