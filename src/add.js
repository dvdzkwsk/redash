import _curry2 from './internal/_curry2'

/**
 * add : Number -> Number -> Number
 *
 * @description
 * Returns the sum of two numbers.
 *
 * @when
 * You should use this function when you wish to add two numbers together.
 *
 * @example
 * _.add(5)(2) // 7
 *
 * @example
 * const add3 = _.add(3)
 * add3(5) // 8
 */
var add = _curry2(function add (a, b) {
  return a + b
})

export default add
