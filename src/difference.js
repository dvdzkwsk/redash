import _contains from './internal/_contains'
import _defn from './internal/_defn'
import _Set from './internal/_Set'

/**
 * @name difference
 * @signature [a] -> [a] -> [a]
 * @since v0.21.0
 * @description
 * Returns the _set_ of values contained in the first list but not the second.
 *
 * @example
 * difference([1, 2, 3, 4], [1, 2]) // => [3, 4]
 */
export default _defn('difference', function (as, bs) {
  var i   = 0
    , res = []
    , set = new _Set()

  for (; i < as.length; i++) {
    if (!_contains(as[i], bs) && set.add(as[i])) {
      res[res.length] = as[i]
    }
  }
  set.clear()
  return res
})
