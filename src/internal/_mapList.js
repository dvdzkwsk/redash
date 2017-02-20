export default function _mapList (fn, xs) {
  var res = new Array(xs.length)
    , i   = 0

  for (; i < xs.length; i++) {
    res[i] = fn(xs[i])
  }
  return res
}
