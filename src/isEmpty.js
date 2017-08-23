import _defn from './internal/_defn'
import _equals from './internal/_equals'
import empty from './empty'

/**
 * @name isEmpty
 * @signature a -> Boolean
 * @category Logic
 * @since v0.14.0
 * @description
 * Describes whether or not a value is empty. To determine "emptiness", the
 * value is compared against its type's empty representation. Dispatches to
 * the `empty` method on an object if it exists.
 *
 * @example
 * isEmpty('')        // => true
 * isEmpty([])        // => true
 * isEmpty({})        // => true
 * isEmpty(null)      // => true
 * isEmpty(undefined) // => true
 * isEmpty(0)         // => true
 * isEmpty(false)     // => true
 */
export default _defn(function isEmpty (a) {
  return !a || _equals(a, empty(a))
})
