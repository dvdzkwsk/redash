import _concat from './internal/_concat'

/**
 * @name append
 * @category Collection
 * @since v0.10.0
 * @description
 * Appends a single value to the end of a list. If the argument in list position
 * is a string, string concatenation will be performed.
 *
 * @see prepend
 * @see concat
 *
 * @example
 * append(4, [1, 2, 3])      // => [1, 2, 3, 4]
 * append([4, 5], [1, 2, 3]) // => [1, 2, 3, [4, 5]]
 * append('bar', 'foo')      // => 'foobar'
 */
export default function append (x, xs) {
  if (typeof xs === 'string') {
    return xs + x
  }
  return _concat.call(xs, [x])
}
