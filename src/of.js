import _defn from './internal/_defn'

/**
 * @name of
 * @signature a -> [a]
 * @since v0.7.0
 * @description
 * Unary function that returns the argument wrapped in an array.
 *
 * @example
 * of(1)   // => [1]
 * of([1]) // => [[1]]
 */
export default _defn('of', function (x) {
  return [x]
})
