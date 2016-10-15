import _eachOwn from './internal/_eachOwn'

/**
 * @name toPairs
 * @signature {k:v} -> [[k, v]]
 * @since v0.7.0
 */
export default function toPairs (o) {
  var kvs = []

  _eachOwn(function (k, v) {
    kvs.push([k, v])
  }, o)
  return kvs
}
