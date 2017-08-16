import _defn from './internal/_defn'

/**
 * @name length
 * @signature [a] -> Number
 * @namespace Collection
 * @since v0.13.0
 * @description
 * Returns the length of a list.
 *
 * @example
 * length([1, 2, 3, 4, 5]) // => 5
 */
export default _defn('length', function (xs) {
  return xs.length
})
