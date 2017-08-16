import _defn from './internal/_defn'
import _identical from './internal/_identical'

/**
 * @name identical
 * @signature a -> a -> Boolean
 * @namespace Relation
 * @since v0.13.0
 * @description
 * Tests if two values are strictly identical. For objects, this tests that
 * they reference the same place in memory (think `===`). For deep comparisons,
 * use `equals`.
 *
 * @see equals
 *
 * @example
 * identical(5, 5) // => true
 *
 * // Objects are compared by reference, unlike `equals`.
 * const a = { id: 1 }
 * identical(a, a)                 // => true
 * identical({ id: 1 }, { id: 1 }) // => false
 */
export default _defn('identical', _identical)
