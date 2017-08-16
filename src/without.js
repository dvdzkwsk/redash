import _defn from './internal/_defn'
import _contains from './internal/_contains'

/**
 * @name without
 * @signature [a] -> [a] -> [a]
 * @category Collection
 * @since v0.7.0
 * @description
 * Excludes all elements of the first list from the second list.
 *
 * @example
 * without([1, 2], [1, 2, 3, 4, 2, 1, 7]) // => [3, 4, 7]
 */
export default _defn('without', function (as, bs) {
  var i   = 0
    , res = []

  while (i < bs.length) {
    if (!_contains(bs[i], as)) {
      res[res.length] = bs[i]
    }
    i++
  }
  return res
})
