export default function _arrayEach (f, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (f(xs[i], i)) {
      return
    }
  }
}
