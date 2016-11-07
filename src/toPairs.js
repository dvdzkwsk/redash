import _eachOwn from './internal/_eachOwn'

/**
 * @name toPairs
 * @signature {k:v} -> [[k, v]]
 * @since v0.7.0
 * @description
 * Converts all own enumerable keys in an object into an array of tuples, each
 * with the key and its value.
 *
 * @example
 * toPairs({ a: 'foo', b: 'bar' }) // => [['a', 'foo'], ['b', 'bar']]
 */
export default function toPairs (o) {
  var kvs = []

  _eachOwn(function (k, v) {
    kvs.push([k, v])
  }, o)
  return kvs
}
