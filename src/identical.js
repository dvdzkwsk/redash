import _curry2 from './internal/_curry2'

/**
 * @name identical
 * @signature a -> a -> Boolean
 * @since v0.13.0
 * @description
 * Checks whether two values are strictly identical. For objects, this test
 * asserts that they reference the same place in memory. For deep comparisons
 * use `equals`.
 * @see equals
 *
 * @example
 * identical(5, 5) // => true
 *
 * const a = { id: 1 }
 * identical(a, { id: 1 }) // => false
 * identical(a, a) // => true
 */
export default _curry2(function identical (a, b) {
  return a === b
})
