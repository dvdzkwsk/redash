var curryN = require('../../functions/curry-n');

module.exports = curryN(3, function propEq (prop, val, obj) {
  return obj[prop] === val;
});
