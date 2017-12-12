import _type from './internal/_type'

/**
 * @name type
 * @category Function
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
export default _type
