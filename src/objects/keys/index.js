module.exports = function keys (obj) {
  var keys = [],
      prop;

  for (prop in obj) {
    keys.push(prop);
  }

  return keys;
};
