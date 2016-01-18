import _curry3 from './internal/_curry3'

var reduceRight = _curry3(function reduceRight (fn, y, xs) {
  var i = xs.length - 1

  for (; i >= 0; i--) {
    y = fn(y, xs[i], i)
  }
  return y
})

export default reduceRight