import _defn from './internal/_defn'
import _equals from './internal/_equals'

/**
 * @name equals
 * @signature a -> a -> Boolean
 * @category Relation
 * @since v0.7.0
 * @description
 * Returns whether or not two values are equal by performing a deep comparison.
 * @see identical
 *
 * @example
 * equals(5, 5) // => true
 * equals({ name: 'Bill' }, { name: 'Bill' }) // => true
 * equals({ name: 'Bill' }, { name: 'Bob' })  // => false
 */
export default _defn(_equals)
