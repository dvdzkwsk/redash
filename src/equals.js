import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

/**
 * equals : a -> a -> Boolean
 *
 * TODO(zuko): allow comparing > 2 values?
 *
 * @since v0.7.0
 */
export default _curry2(_equals)
