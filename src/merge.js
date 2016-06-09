import _curry2 from './internal/_curry2'

/**
 * Merges all own properties of the first object into the second.
 *
 * @since v0.4.0
 */
var merge = _curry2(function merge (a, b) {
  var y = {}
    , prop

  for (prop in b) {
    if (b.hasOwnProperty(prop)) {
      y[prop] = b[prop]
    }
  }
  for (prop in a) {
    if (a.hasOwnProperty(prop)) {
      y[prop] = a[prop]
    }
  }
  return y
})

export default merge
