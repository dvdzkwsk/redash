import _arrayEach from './internal/_arrayEach'
import _arrayEachShortCircuitable from './internal/_arrayEachShortCircuitable'
import _curry2 from './internal/_curry2'

/**
 * without : [a] -> [a] -> [a]
 *
 * @since v0.7.0
 */
export default _curry2(function without (as, bs) {
  var ys = []

  _arrayEach(function (b) {
    var discard = false

    _arrayEachShortCircuitable(function (a) {
      if (b === a) {
        return (discard = true)
      }
    }, as)
    if (!discard) {
      ys.push(b)
    }
  }, bs)

  return ys
})
