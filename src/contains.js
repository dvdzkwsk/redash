import _curry2 from './internal/_curry2'
import _contains from './internal/_contains'

/**
 * @name contains
 * @signature a -> [a] -> Boolean
 * @since v0.14.0
 * @description
 * Returns whether or not a list contains the target value. Performs a
 * deep equality comparison when looking up objects.
 *
 * @example
 * contains(1, [1, 2, 3, 4])                   // => true
 * contains(5, [1, 2, 3, 4])                   // => false
 * contains({ id: 1 }, [{ id: 1 }, { id: 2 }]) // => true
 */
export default _curry2(_contains)
