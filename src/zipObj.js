import _curry2 from './internal/_curry2'

/**
 * zipObj : [k] -> [v] -> {k:v}
 *
 * @since v0.3.0
 */
export default _curry2(function zipObj (keys, vals) {
  var i   = 0
    , len = Math.min(keys.length, vals.length)
    , res = {}

  for (; i < len; i++) {
    res[keys[i]] = vals[i]
  }
  return res
})
