import _arrayEach from './internal/_arrayEach'

/**
 * fromPairs : [[k, v]] -> {k:v}
 *
 * @since v0.7.0
 */
export default function fromPairs (xs) {
  var y = {}

  _arrayEach(function (x) {
    y[x[0]] = x[1]
  }, xs)
  return y
}
