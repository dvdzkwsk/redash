import _defn from './internal/_defn'
import _equals from './internal/_equals'
import empty from './empty'

/**
 * @name isEmpty
 * @signature a -> Boolean
 * @since v0.14.0
 * @description
 * Describes whether or not a value is empty. To determine "emptiness", the
 * value is compared against its type's empty representation. Dispatches to
 * the `empty` method on an object if it exists.
 *
 * Note that this is different from checking whether or not a value is falsy.
 * Nil values (null and undefined) are not considered empty, nor is 0, since
 * these are discrete values that cannot contain anything.
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
export default _defn('isEmpty', function (a) {
  if (a == null) return false
  return _equals(a, empty(a))
})
