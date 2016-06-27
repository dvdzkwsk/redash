import _curry2 from './internal/_curry2'

/**
 * findLast : (a -> Boolean) -> [a] -> a | undefined
 *
 * @since v0.12.0
 */
export default _curry2(function findLast (pred, xs) {
  var i   = 0
    , len = xs.length
    , x
    , res

  for (; i < len; i++) {
    x = xs[i]
    if (pred(x)) {
      res = x
    }
  }
  return res
})
