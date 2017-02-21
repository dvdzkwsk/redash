import _defn from './internal/_defn'
import _equals from './internal/_equals'

/**
 * @name equals
 * @signature a -> a -> Boolean
 * @since v0.7.0
 * @description
 * Deeply compares two values and returns a boolean indicating whether or
 * not they are equal.
 * @see identical
 *
 * @example
 * equals(5, 5) // => true
 * equals({ name: 'Bill' }, { name: 'Bill' }) // => true
 * equals({ name: 'Bill' }, { name: 'Bob' })  // => false
 *
 * const people = [{ name: 'Bill' }, { name: 'Bob' }]
 * reject(equals({ name: 'Bill' }), people) // => [{ name: 'Bob' }]
 */
export default _defn('equals', _equals)
