import _arrayEach from './internal/_arrayEach'
import _curry3 from './internal/_curry3'
import _reduce from './internal/_reduce'

/**
 * reduce : ((b, a) -> b) -> b -> [a]
 *
 * @since v0.1.0
 */
export default _curry3(_reduce)
