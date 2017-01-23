export default function filterList (pred, xs) {
  var i   = 0
    , len = xs.length
    , res = []

  while (i < len) {
    if (pred(xs[i])) {
      res[res.length] = xs[i]
    }
    i++
  }
  return res
}
