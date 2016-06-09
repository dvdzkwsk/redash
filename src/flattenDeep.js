/**
 * @since v0.5.0
 */
var flattenDeep = function flattenDeep (xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
    , x

  for (; i < len; i++) {
    x  = Array.isArray(xs[i]) ? flattenDeep(xs[i]) : xs[i]
    ys = ys.concat(x)
  }

  return ys
}

export default flattenDeep
