import _curry3 from './internal/_curry3'

/**
 * rangeBy : Number -> Number -> Number -> [Number]
 *
 * @since v0.7.0
 */
export default _curry3(function rangeBy (inc, i, end) {
  var ys = []

  for (; i < end; i += inc) {
    ys.push(i)
  }
  return ys
})
