import rangeBy from './rangeBy'

/**
 * @since v0.7.0
 */
var range = rangeBy(1)
range.toString = function toString () {
  return 'range : Number -> [Number]'
}

export default range
