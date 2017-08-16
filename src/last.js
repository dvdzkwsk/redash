import _defn from './internal/_defn'

/**
 * @name last
 * @signature [a] -> a
 * @category Collection
 * @since v0.1.0
 * @description
 * Returns the last value in a list. If the list is empty, returns `undefined`.
 * @see head
 * @see init
 * @see tail
 *
 * @example
 * last([1, 2, 3, 4]) // => 4
 */
export default _defn('last', function (xs) {
  return xs[xs.length - 1]
})
