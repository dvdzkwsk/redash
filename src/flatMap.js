import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * flatMap : (a -> b | [b]) -> [a] -> [b]
 *
 * @since v0.1.0
 */
export default _curry2(function flatMap (fn, as) {
  var bs = []

  _arrayEach(function (a) {
    var x = fn(a)
    if (Array.isArray(x)) {
      _arrayEach(function (x_) {
        bs.push(x_)
      }, x)
    } else {
      bs.push(x)
    }
  }, as)

  return bs
})
