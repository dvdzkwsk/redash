import _curry2 from './internal/_curry2'

/**
 * @name identical
 * @signature a -> a -> Boolean
 * @since v0.13.0
 */
export default _curry2(function identical (a, b) {
  return a === b
})
