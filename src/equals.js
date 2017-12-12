import _equals from './internal/_equals'

/**
 * @name equals
 * @category Relation
 * @since v0.7.0
 * @description
 * Performs a deep equality comparison between two values. This differs from `identical`,
 * which simply checks whether two values reference the same value.
 * @see identical
 *
 * @example
 * equals(5, 5) // => true
 * equals({ name: 'Bill' }, { name: 'Bill' }) // => true
 * equals({ name: 'Bill' }, { name: 'Bob' })  // => false
 */
export default _equals
