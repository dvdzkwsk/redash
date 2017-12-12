import _eachOwn from './internal/_eachOwn'

/**
 * @name merge
 * @category Object
 * @since v0.4.0
 */
export default function merge (a, b) {
  var y = {}
    , f = function (k, v) {
      y[k] = v
    }

  _eachOwn(f, a)
  _eachOwn(f, b)
  return y
}
