export default function filterList (pred, xs) {
  var i   = 0
    , res = []

  while (i < xs.length) {
    if (pred(xs[i])) {
      res[res.length] = xs[i]
    }
    i++
  }
  return res
}
