import _curry2 from './internal/_curry2'
import _concat from './internal/_concat'

/**
 * @since v0.7.0
 */
var concat = _curry2(function concat (as, bs) {
  return _concat.call(as, bs)
}, 'concat : [a] -> [a] -> [a]')

export default concat