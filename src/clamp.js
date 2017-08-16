import _defn from './internal/_defn'

/**
 * @name clamp
 * @signature Number -> Number -> Number -> Number
 * @category Relation
 * @since v0.18.0
 * @description
 * Restricts a value to a given range (inclusive).
 *
 * @example
 * clamp(1, 10, 5)  // => 5
 * clamp(1, 10, -5) // => 1
 * clamp(1, 10, 15) // => 10
 */
export default _defn('clamp', function (lower, upper, value) {
  return value < lower ? lower :
         value > upper ? upper :
         value
})
