/**
 * @name flatten
 * @signature [[a]] -> [a]
 * @since v0.1.0
 */
export default function flatten (xs) {
  var acc = []
    , i   = 0
    , len = xs.length
    , x
    , xi
    , xlen

  for (; i < len; i++) {
    x = xs[i]
    if (Array.isArray(x)) {
      for (xi = 0, xlen = x.length; xi < xlen; xi++) {
        acc.push(x[xi])
      }
    } else {
      acc.push(x)
    }
  }
  return acc
}
