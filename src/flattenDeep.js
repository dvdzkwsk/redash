/**
 * flattenDeep : [[a]] -> [a]
 *
 * @since v0.5.0
 */
export default function flattenDeep (xs) {
  var i   = 0
    , len = xs.length
    , ys  = []
    , x

  for (; i < len; i++) {
    x  = Array.isArray(xs[i]) ? flattenDeep(xs[i]) : xs[i]
    ys = ys.concat(x)
  }

  return ys
}
