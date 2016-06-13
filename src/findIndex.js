import _curry2 from './internal/_curry2'

/**
 * findIndex : (a -> Boolean) -> [a] -> Number
 *
 * @since v0.1.0
 */
var findIndex = _curry2(function findIndex (pred, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (pred(xs[i])) {
      return i
    }
  }
  return -1
})

export default findIndex
