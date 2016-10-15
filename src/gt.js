import _curry2 from './internal/_curry2'

/**
 * @signature Number -> Number -> Boolean
 * @since v0.13.0
 */
export default _curry2(function gt (a, b) {
  return b > a
})
