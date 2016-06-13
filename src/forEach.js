import _curry2 from './internal/_curry2'

/**
 * forEach : (a -> *) -> [a] -> undefined
 * @since v0.1.0
 */
export default _curry2(function forEach (fn, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    fn(xs[i])
  }
})
