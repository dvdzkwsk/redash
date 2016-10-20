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
 * type({})                // => 'Object'
 * type([])                // => 'Array'
 * type(Promise.resolve()) // => 'Promise'
 * type(undefined)         // => 'Nil'
 * type(null)              // => 'Nil'
 */
export default function type (a) {
  var _type = a == null ? 'Nil' : _toString.call(a).slice(8, -1)

  if (_type !== 'Object') return _type
  return _type.constructor.name === 'Promise' ? 'Promise' : _type
}
