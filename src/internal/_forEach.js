export default function _forEach (fn, xs) {
  var i = 0

  while (i < xs.length) {
    fn(xs[i])
    i++
  }
}
