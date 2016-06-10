/**
 * @since v0.1.0
 */
var flatten = function flatten (xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
    , x
    , _i

  for (; i < len; i++) {
    x = xs[i]
    if (Array.isArray(x)) {
      for (_i = 0; _i < x.length; _i++) {
        ys.push(x[_i])
      }
    } else {
      ys.push(x)
    }
  }

  return ys
}
flatten.toString = function toString () {
  return 'flatten : [[a]] -> [a]'
}

export default flatten