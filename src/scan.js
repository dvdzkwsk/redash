import _curry3 from './internal/_curry3'
import _arrayEach from './internal/_arrayEach'

/**
 * scan : (b, a -> b) -> b -> [a] -> [b]
 *
 * @since v0.12.0
 */
export default _curry3(function scan (fn, acc, as) {
  var bs = [acc]

  _arrayEach(function (a) {
    acc = fn(acc, a)
    bs.push(acc)
  }, as)
  return bs
})
