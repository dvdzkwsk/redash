import _reverse from './internal/_reverse'

/**
 * reverse : [a] -> [a]
 *
 * @since v0.1.0
 */
var reverse = function reverse (xs) {
  return _reverse.call(xs.slice(0))
}

export default reverse
