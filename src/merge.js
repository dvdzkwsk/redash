import _defn from './internal/_defn'
import _eachOwn from './internal/_eachOwn'

/**
 * @name merge
 * @signature {k:v} -> {k:v} -> {k:v}
 * @category Object
 * @since v0.4.0
 */
export default _defn(function merge (a, b) {
  var y = {}
    , f = function (k, v) {
      y[k] = v
    }

  _eachOwn(f, a)
  _eachOwn(f, b)
  return y
})
