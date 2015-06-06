module.exports = function vals (obj) {
  var keys = Object.keys(obj),
      len  = keys.length,
      vals = [];

  while (len--) {
    vals.push(obj[keys[len]]);
  }
  return vals;
};
