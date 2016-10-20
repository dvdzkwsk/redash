import _concat from './internal/_concat'
import _curry2 from './internal/_curry2'

/**
 * @name append
 * @signature a -> [a] -> [a]
 * @since v0.10.0
 * @description
 * Appends a single element to an array.
 * @see prepend
 * @see concat
 *
 * @example
 * append(4, [1, 2, 3]) // => [1, 2, 3, 4]
 */
export default _curry2(function append (x, xs) {
  return _concat.call(xs, x)
})
