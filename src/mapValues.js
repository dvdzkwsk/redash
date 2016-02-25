import _curry2 from './internal/_curry2'

var mapValues = _curry2(function mapValues (fn, a) {
  var y = {}
    , prop

  for (prop in a) {
    if (a.hasOwnProperty(prop)) {
      y[prop] = fn(a[prop])
    }
  }
  return y
})

export default mapValues
