import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

/**
 * equals : a -> a -> Boolean
 *
 * @since v0.7.0
 */
export default _curry2(function equals (a, b) {
  return _equals(a, b)
})
