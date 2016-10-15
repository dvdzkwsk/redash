import _curry2 from './internal/_curry2'
import _equals from './internal/_equals'

/**
 * @name equals
 * @signature a -> a -> Boolean
 * @since v0.7.0
 */
export default _curry2(_equals)
