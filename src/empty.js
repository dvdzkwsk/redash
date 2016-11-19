import type from './type'

/**
 * @name empty
 * @signature a -> a
 * @since v0.14.0
 * @description
 * Returns the empty representation of a value. Dispatches to the `empty`
 * method on objects or their constructors if it exists. If the value's
 * type does not have an applicable empty representation, undefined is
 * returned.
 *
 * @example
 * empty([1, 2, 3, 4])            // => []
 * empty({ foo: 'bar '})          // => {}
 * empty('hello!')                // => ''
 * empty(0)                       // => undefined
 * empty(false)                   // => undefined
 * empty({ empty: () => 'FOO!' }) // => 'FOO!'
 */
export default function empty (a) {
  if (a == null) return void 0
  if (typeof a.empty === 'function') return a.empty()
  if (a.constructor && typeof a.constructor.empty === 'function') {
    return a.constructor.empty()
  }

  switch (type(a)) {
    case 'Array':
      return []
    case 'String':
      return ''
    case 'Object':
      return {}
    default:
      return void 0
  }
}
