module.exports = function keysOwn (obj) {
  var keys = Object.keys(obj),
      len  = keys.length,
      own  = [],
      prop;

  while (len--) {
    prop = keys[len];
    if (obj.hasOwnProperty(prop)) {
      own.push(prop);
    }
  }

  return own;
};
