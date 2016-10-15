import _curry2 from './internal/_curry2'

/**
 * @name subtract
 * @signature Number -> Number -> Number
 * @since v0.13.0
 */
export default _curry2(function subtract (a, b) {
  return b - a
})
