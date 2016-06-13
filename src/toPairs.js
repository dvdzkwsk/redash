import _eachOwn from './internal/_eachOwn'

/**
 * toPairs : {k:v} -> [[k, v]]
 *
 * @since v0.7.0
 */
export default function toPairs (obj) {
  var ys = []

  _eachOwn(function (k) {
    ys.push([k, obj[k]])
  }, obj)
  return ys
}
