import _curry2 from './internal/_curry2'

/**
 * @name map
 * @signature (a -> b) -> [a] -> [b]
 * @since v0.1.0
 * @description
 * Applies a transformation function to all elements in a list, returning
 * a new list containing the results of those transformations.
 * @see mapIndexed
 *
 * @example
 * map(x => x * 2, [1, 2, 3, 4, 5]) // => [2, 4, 6, 8, 10]
 */
export default _curry2(function map (fn, as) {
  var bs = new Array(as.length)
    , i  = 0

  for (; i < as.length; i++) {
    bs[i] = fn(as[i])
  }
  return bs
})
