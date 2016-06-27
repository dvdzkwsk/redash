import _concat from './internal/_concat'

/**
 * flattenDeep : [[a]] -> [a]
 *
 * @since v0.5.0
 */
export default function flattenDeep (xs) {
  var acc = []
    , i   = 0
    , len = xs.length
    , x

  for (; i < len; i++) {
    x = xs[i]
    if (Array.isArray(x)) {
      acc = _concat.call(acc, flattenDeep(x))
    } else {
      acc.push(x)
    }
  }
  return acc
}
