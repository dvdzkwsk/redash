import _curry2 from './internal/_curry2'
import _eachOwn from './internal/_eachOwn'

/**
 * merge : {k:v} -> {k:v} -> {k:v}
 *
 * Merges all own properties of the first object into the second.
 *
 * @since v0.4.0
 */
export default _curry2(function merge (a, b) {
  var y = {}
    , f = function (k, v) {
      y[k] = v
    }

  _eachOwn(f, b)
  _eachOwn(f, a)
  return y
})
