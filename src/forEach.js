import _curry2 from './internal/_curry2'
import _forEach from './internal/_forEach'

/**
 * @name forEach
 * @signature (a -> *) -> [a] -> undefined
 * @since v0.1.0
 * @description
 * Iterates through a list, calling the provided function with each value.
 * The result of the function call is ignored. If you wish to transform
 * each value in the list, use `map`.
 * @see map
 *
 * @example
 * const log = x => console.log(x)
 * const res = forEach(log, [1, 2, 3]) // => logs: 1, 2, 3
 * console.log(res)                    // => undefined
 */
export default _curry2(_forEach)
