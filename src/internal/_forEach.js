export default function _forEach (fn, xs) {
  var i   = 0
    , len = xs.length

  while (i < len) {
    fn(xs[i])
    i++
  }
}
