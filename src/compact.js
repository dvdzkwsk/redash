import _defn from './internal/_defn'
import filter from './filter'
import identity from './identity'

/**
 * @name compact
 * @signature
 * [a] -> [a]
 * String k, Any v => {k:v} -> {k:v}
 * @description
 * Removes all falsy values from a list. For objects, dissociates all
 * properties with falsy values.
 *
 * @example
 * compact([null, undefined, true, false]) // => [true]
 * compact({ a: false, b: null, c: true }) // => { c: true }
 * compact(['', 0, {}, [], '0'])           // => [{}, [], '0']
 */
export default _defn('compact', filter(identity))
