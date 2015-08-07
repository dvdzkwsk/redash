module.exports = function keysOwn (obj) {
  var own = [],
      prop;

  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      own.push(prop);
    }
  }

  return own;
};
