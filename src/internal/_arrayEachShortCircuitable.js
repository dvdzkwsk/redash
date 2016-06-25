export default function _arrayEachShortCircuitable (f, xs) {
  var i   = 0
    , len = xs.length

  for (; i < len; i++) {
    if (f(xs[i], i)) {
      return
    }
  }
}
