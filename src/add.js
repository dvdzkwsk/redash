import _curry2 from './internal/_curry2'

/**
 * @name add
 * @signature Number -> Number -> Number
 */
export default _curry2(function add (a, b) {
  return a + b
})
