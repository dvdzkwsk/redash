import _defn from './internal/_defn'

/**
 * @name flatten
 * @signature [[a]] -> [a]
 * @since v0.1.0
 * @description
 * Shallowly flattens a list (i.e. 1 level deep).
 * @see flattenDeep
 *
 * @example
 * flatten([1, 2, [3, 4]])   // => [1, 2, 3, 4]
 * flatten([1, 2, [3, [4]]]) // => [1, 2, 3, [4]]
 */
export default _defn('flatten', function (xs) {
  var acc = []
    , i   = 0
    , x
    , xi

  for (; i < xs.length; i++) {
    x = xs[i]
    if (Array.isArray(x)) {
      for (xi = 0; xi < x.length; xi++) {
        acc.push(x[xi])
      }
    } else {
      acc.push(x)
    }
  }
  return acc
})
