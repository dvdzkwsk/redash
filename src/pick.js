import _curry2 from './internal/_curry2'

/**
 * @name pick
 * @signature String k ~> [k] -> {k:v} -> {k:v}
 * @since v0.15.0
 * @description
 * @see omit
 *
 * @example
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
