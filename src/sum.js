import add from './add'
import reduce from './reduce'

/**
 * sum : [Number] -> Number
 *
 * @since v0.10.0
 */
var sum = reduce(add, 0)

export default sum
