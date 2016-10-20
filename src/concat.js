import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * @name concat
 * @signature [a] -> [a] -> [a]
 * @since v0.7.0
 * @description
 * Concatenates the second array onto the first.
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]) // => [1, 2, 3, 4, 5, 6]
 * concat([1, 2, 3], [])        // => [1, 2, 3]
 */
// TODO(zuko): support strings
// TODO(zuko): consider flipping argument order, breaking change
export default _curry2(function concat (as, bs) {
  return _concat.call(as, bs)
})
