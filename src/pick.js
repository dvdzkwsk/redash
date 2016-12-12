import _curry2 from './internal/_curry2'

/**
 * @name pick
 * @signature String k, Any v => [k] -> {k:v} -> {k:v}
 * @since v0.15.0
 * @description
 * Creates a new object that contains only the requested keys from the target
 * object. This is the reverse of `omit`.
 * @see omit
 *
 * @example
 * pick(['first', 'last'], { first: 'Michael', last: 'Scott', age: 35 })
 * // => { first: 'Michael', last: 'Scott' }
 */
export default _curry2(function pick (keys, obj) {
  var i   = 0
    , len = keys.length
    , res = {}

  while (i < len) {
    res[keys[i]] = obj[keys[i]]
    i++
  }
  return res
})
