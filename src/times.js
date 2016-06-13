import _curry2 from './internal/_curry2'

/**
 * times : (Number -> a) -> Number -> [a]
 *
 * @since v0.5.0
 */
export default _curry2(function times (fn, n) {
  var i  = 0
    , bs = []

  for (; i < n; i++) {
    bs.push(fn(i))
  }
  return bs
})
