import _defn from './internal/_defn'

/**
 * @name last
 * @signature [a] -> a
 * @since v0.1.0
 * @description
 * Returns the last element in a list. If the list is empty, `undefined` is
 * returned.
 * @see head
 * @see tail
 *
 * @example
 * last([1, 2, 3, 4]) // => 4
 */
export default _defn('last', function (xs) {
  return xs[xs.length - 1]
})
