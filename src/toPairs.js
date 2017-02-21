import _defn from './internal/_defn'
import _eachOwn from './internal/_eachOwn'

/**
 * @name toPairs
 * @signature String k, Any v => {k:v} -> [[k, v]]
 * @since v0.7.0
 * @description
 * Converts all own enumerable keys in an object into a list of [key, value] pairs.
 * If you have a list of these pairs and wish to conver them back into an object,
 * use `fromPairs`.
 * @see fromPairs
 *
 * @example
 * toPairs({ a: 'foo', b: 'bar' }) // => [['a', 'foo'], ['b', 'bar']]
 */
export default _defn('toPairs', function toPairs (o) {
  var kvs = []

  _eachOwn(function (k, v) {
    kvs.push([k, v])
  }, o)
  return kvs
})
