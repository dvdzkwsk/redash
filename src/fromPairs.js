/**
 * @name fromPairs
 * @signature [[k, v]] -> {k:v}
 * @since v0.7.0
 * @description
 * Builds an object out of a list of tuples containing key/value pairs. Note
 * that for duplicate keys, the last key/value pair will be used. If you wish
 * to merge a list of keys with a list of values, use `zip` or `zipObj`.
 * @see toPairs
 *
 * @example
 * fromPairs([['a', 1], ['b', 2]])           // => { a: 1, b: 2 }
 * fromPairs([['a', 1], ['b', 2], ['a', 3]]) // => { a: 3, b: 2 }
 */
export default function fromPairs (kvs) {
  var i   = 0
    , len = kvs.length
    , acc = {}

  for (; i < len; i++) {
    acc[kvs[i][0]] = kvs[i][1]
  }

  return acc
}
