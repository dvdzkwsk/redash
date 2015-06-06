module.exports = function valsOwn (obj) {
  var keys = Object.keys(obj),
      len  = keys.length,
      vals = [],
      prop;

  while (len--) {
    prop = keys[len];
    if (obj.hasOwnProperty(prop)) {
      vals.push(obj[prop]);
    }
  }
  return vals;
};
