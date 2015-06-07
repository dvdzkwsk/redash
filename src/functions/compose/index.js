var _slice = require('../../utils/slice');

module.exports = function compose () {
  var fns = _slice.apply(arguments),
      i   = fns.length - 1;

  return function composition () {
    var args   = _slice.apply(arguments),
        result = fns[i--].apply(undefined, args);

    for (; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
};
