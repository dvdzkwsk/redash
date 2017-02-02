export default function _reduce (fn, acc, xs) {
  var i = 0

  for (; i < xs.length; i++) {
    acc = fn(acc, xs[i])
  }
  return acc
}
