import _curry2 from './internal/_curry2'

/**
 * findLast : (a -> Boolean) -> [a] -> a | undefined
 *
 * @since v0.12.0
 */
export default _curry2(function findLast (pred, xs) {
  var i = xs.length - 1

  while (i >= 0) {
    if (pred(xs[i])) {
      return xs[i]
    }
    i--
  }
})
