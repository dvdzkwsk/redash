import _curry2 from './internal/_curry2'
import _eachOwn from './internal/_eachOwn'

/**
 * @name merge
 * @signature {k:v} -> {k:v} -> {k:v}
 * @since v0.4.0
 */
export default _curry2(function merge (a, b) {
  var y = {}
    , f = function (k, v) {
      y[k] = v
    }

  _eachOwn(f, a)
  _eachOwn(f, b)
  return y
})
