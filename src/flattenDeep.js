/**
 * @name flattenDeep
 * @signature [[a]] -> [a]
 * @since v0.5.0
 * @description
 * Deeply flattens a list.
 *
 * @example
 * flattenDeep([1, 2, [3, [4, [5, 6, [7]]]]]) // => [1, 2, 3, 4, 5, 6, 7]
 */
export default function flattenDeep (xs) {
  var acc = []
    , i   = 0
    , len = xs.length
    , x
    , xi
    , xlen

  for (; i < len; i++) {
    x = xs[i]
    if (Array.isArray(x)) {
      x = flattenDeep(x)
      for (xi = 0, xlen = x.length; xi < xlen; xi++) {
        acc[acc.length] = x[xi]
      }
    } else {
      acc[acc.length] = x
    }
  }
  return acc
}
