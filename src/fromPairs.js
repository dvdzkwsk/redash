import reduce from './reduce'

/**
 * fromPairs : [[k, v]] -> {k:v}
 *
 * @since v0.7.0
 */
export default reduce(function fromPairs (acc, x) {
  acc[x[0]] = x[1]
  return acc
}, {})
