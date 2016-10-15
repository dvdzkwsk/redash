/**
 * @signature [a] -> [a]
 */
export default function compact (xs) {
  var i   = 0
    , len = xs.length
    , res = []

  for (; i < len; i++) {
    if (xs[i]) {
      res[res.length] = xs[i]
    }
  }
  return res
}
