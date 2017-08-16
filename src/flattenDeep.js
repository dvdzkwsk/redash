import _defn from './internal/_defn'

/**
 * @name flattenDeep
 * @signature [[a]] -> [a]
 * @category Collection
 * @since v0.5.0
 * @description
 * Deeply flattens a list.
 *
 * @example
 * flattenDeep([1, 2, [3, [4, [5, 6, [7]]]]]) // => [1, 2, 3, 4, 5, 6, 7]
 */
export default _defn('flattenDeep', function flattenDeep (xs) {
  var acc = []
    , i   = 0
    , x
    , xi

  for (; i < xs.length; i++) {
    x = xs[i]
    if (Array.isArray(x)) {
      x = flattenDeep(x)
      for (xi = 0; xi < x.length; xi++) {
        acc[acc.length] = x[xi]
      }
    } else {
      acc[acc.length] = x
    }
  }
  return acc
})
