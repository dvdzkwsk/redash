import _curry2 from './internal/_curry2'

/**
 * @name lt
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 */
export default _curry2(function lt (a, b) {
  return b < a
})
