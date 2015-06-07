var curryN = require('../../curry/curry-n');

module.exports = curryN(3, function propEq (prop, val, obj) {
  return obj[prop] === val;
});
