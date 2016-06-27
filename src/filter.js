import _curry2 from './internal/_curry2'

/**
 * filter : (a -> Boolean) -> [a] -> [a]
 *
 * @since v0.1.0
 */
export default _curry2(function filter (pred, as) {
  var i   = 0
    , len = as.length
    , res = []
    , a

  for (; i < len; i++) {
    a = as[i]
    if (pred(a)) {
      res.push(a)
    }
  }
  return res
})
