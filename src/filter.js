import _curry2 from './internal/_curry2'

/**
 * @name filter
 * @signature (a -> Boolean) -> [a] -> [a]
 * @since v0.1.0
 */
export default _curry2(function filter (pred, as) {
  var i   = 0
    , len = as.length
    , res = []
    , a

  while (i < len) {
    a = as[i++]
    if (pred(a)) {
      res[res.length] = a
    }
  }
  return res
})
