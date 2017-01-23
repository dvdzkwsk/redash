import _curry3 from './internal/_curry3'

/**
 * @name clamp
 * @signature Number -> Number -> Number -> Number
 * @since v0.18.0
 * @description
 * Restricts a value to a given range (inclusive).
 * @example
 * clamp(1, 10, 5)  // => 5
 * clamp(1, 10, -5) // => 1
 * clamp(1, 10, 15) // => 15
 */
export default _curry3(function clamp (lower, upper, value) {
  return value < lower ? lower :
         value > upper ? upper :
         value
})
