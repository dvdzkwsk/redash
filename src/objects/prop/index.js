var curryN = require('../../curry/curry-n');

module.exports = curryN(2, function (prop, obj) {
  return obj[prop];
});
