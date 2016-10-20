import _curry3 from './internal/_curry3'

/**
 * @name rangeBy
 * @signature Number -> Number -> Number -> [Number]
 * @since v0.7.0
 * @description
 * Returns containing all numbers between at an initial value (inclusive)
 * and an end value (exclusive), where each subsequent value has been
 * incremented by the provided step.
 * @see range
 *
 * @example
 * rangeBy(4, 0, 17) // => [0, 4, 8, 12, 16]
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
