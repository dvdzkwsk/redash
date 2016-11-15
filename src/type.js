import _toString from './internal/_toString'

/**
 * @name type
 * @signature a -> String
 * @since v0.13.0
 * @description
 * Returns the string representation of an argument. Note that this function
 * provides certain conveniences: `null` and `undefined` are both treated
 * as `Nil`, and promises return `Promise` rather than `Object`.
 *
 * @example
 * type(1)                 // => 'Number'
 * type('hello')           // => 'String'
 * type(true)              // => 'Boolean'
 * type({})                // => 'Object'
 * type([])                // => 'Array'
 * type(Promise.resolve()) // => 'Promise'
 * type(undefined)         // => 'Nil'
 * type(null)              // => 'Nil'
 */
export default function type (a) {
  if (a == null) return 'Nil'

  return _toString.call(a).slice(8, -1)
}
