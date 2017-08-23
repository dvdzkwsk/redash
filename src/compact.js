import _defn from './internal/_defn'
import filter from './filter'
import identity from './identity'

/**
 * @name compact
 * @signature
 * [a] -> [a]
 * String k, Any v => {k:v} -> {k:v}
 * @category Collection
 * @description
 * Removes all falsy values from a list. For objects, dissociates all
 * properties with falsy values.
 *
 * @example
 * compact([null, undefined, 0, true, false]) // => [true]
 * compact({ a: false, b: null, c: true })    // => { c: true }
 */
export default _defn(filter(identity))
