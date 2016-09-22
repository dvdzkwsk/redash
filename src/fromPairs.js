/**
 * fromPairs : [[k, v]] -> {k:v}
 *
 * @since v0.7.0
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
