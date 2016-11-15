import _curry2 from './internal/_curry2'

/**
 * @name add
 * @signature Number -> Number -> Number
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
export default _curry2(function add (a, b) {
  return a + b
})
