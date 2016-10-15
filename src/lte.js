import _curry2 from './internal/_curry2'

/**
 * @name lte
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 */
export default _curry2(function lte (a, b) {
  return b <= a
})
