import _curry3 from './internal/_curry3'

/**
 * rangeBy : Number -> Number -> Number -> [Number]
 *
 * @since v0.7.0
 */
export default _curry3(function rangeBy (inc, start, end) {
  var ys = []
    , times
    , i

  // TODO: should (some of) these throw?
  if (
    inc === 0 ||
    inc > 0 && start > end ||
    inc < 0 && start < end
  ) {
    return []
  }

  times = Math.abs(Math.ceil((end - start) / inc))
  for (i = 0; i < times; i++) {
    ys.push(start + (inc * i))
  }
  return ys
})
