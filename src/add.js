import _defn from './internal/_defn'

/**
 * @name add
 * @signature Number -> Number -> Number
 * @namespace Math
 * @since v0.1.0
 * @description
 * Returns the sum of two numbers.
 * @see subtract
 *
 * @example
 * add(1, 2) // => 3
 *
 * const add5 = add(5)
 * add5(10) // => 15
 * add5(15) // => 20
 */
export default _defn('add', function (a, b) {
  return a + b
})
