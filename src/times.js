import _curry2 from './internal/_curry2'

/**
 * @name times
 * @signature (Number -> a) -> Number -> [a]
 * @since v0.5.0
 * @description
 * Calls a function N times with the index of each call as its argument.
 * Returns a list containing the result of each function call.
 * @see range
 *
 * @example
 * times(identity, 5) // => [0, 1, 2, 3, 4]
 */
export default _curry2(function times (fn, n) {
  var i  = 0
    , bs = []

  for (; i < n; i++) {
    bs.push(fn(i))
  }
  return bs
})
