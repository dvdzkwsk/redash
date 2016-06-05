import _curry2 from './internal/_curry2'

var merge = _curry2(function merge (a, b) {
  var y = {}
    , prop

  for (prop in a) {
    if (a.hasOwnProperty(prop)) {
      y[prop] = a[prop]
    }
  }
  for (prop in b) {
    if (b.hasOwnProperty(prop)) {
      y[prop] = b[prop]
    }
  }
  return y
})

export default merge
