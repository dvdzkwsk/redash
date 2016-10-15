import _curry2 from './internal/_curry2'

/**
 * @name gte
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 */
export default _curry2(function gte (a, b) {
  return b >= a
})
