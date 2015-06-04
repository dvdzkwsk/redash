var slice = require('./slice');

// naive assignment
function assign (base, obj) {
  var prop;

  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      base[prop] = obj[prop];
    }
  }
  return base;
}

module.exports = function () {
  return slice.apply(arguments).reduce(assign);
};
