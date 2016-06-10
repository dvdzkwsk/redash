import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

/**
 * @since v0.7.0
 */
var equals = _curry2(function equals (a, b) {
  return _equals(a, b)
}, 'equals : a -> a -> Boolean')

export default equals
