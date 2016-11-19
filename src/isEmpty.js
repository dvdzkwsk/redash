import _equals from './internal/_equals'
import empty from './empty'

/**
 * @name isEmpty
 * @signature a -> Boolean
 * @since v0.14.0
 * @description
 * Returns whether or not a value is empty. To determine "emptiness", the value
 * is compared against the empty value for its type. Dispatches to the `empty`
 * method on an object if it exists.
 *
 * Note that this is different from checking whether or not a value is falsy.
 * Nil values (null and undefined) are not considered empty, nor is 0, since
 * the concept of "emptiness" is not intuitively applicable to a number.
 *
 * @example
 * isEmpty('')        // => true
 * isEmpty([])        // => true
 * isEmpty({})        // => true
 * isEmpty(null)      // => false
 * isEmpty(undefined) // => false
 * isEmpty(0)         // => false
 * isEmpty(false)     // => false
 */
export default function isEmpty (a) {
  if (a == null) return false
  return _equals(a, empty(a))
}
