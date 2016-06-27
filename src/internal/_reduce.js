export default function _reduce (fn, acc, as) {
  var i   = 0
    , len = as.length

  for (; i < len; i++) {
    acc = fn(acc, as[i])
  }
  return acc
}
