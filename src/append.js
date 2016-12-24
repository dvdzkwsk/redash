import _concat from './internal/_concat'
import _curry2 from './internal/_curry2'

/**
 * @name append
 * @signature
 * a -> [a] -> [a]
 * String -> String -> String
 * @since v0.10.0
 * @description
 * Appends a single element to a list. If the argument in list position is a
 * string, string concatenation will be used instead.
 * @see prepend
 * @see concat
 *
 * @example
 * append(4, [1, 2, 3])      // => [1, 2, 3, 4]
 * append([4, 5], [1, 2, 3]) // => [1, 2, 3, [4, 5]]
 * append('bar', 'foo')      // => 'foobar'
 */
export default _curry2(function append (x, xs) {
  if (typeof xs === 'string') {
    return xs + x
  }
  return _concat.call(xs, [x])
})
