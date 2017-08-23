import _defn from './internal/_defn'

/**
 * @name rangeBy
 * @signature Number -> Number -> Number -> [Number]
 * @category Collection
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
export default _defn('rangeBy', function (step, start, end) {
  var res = []
    , length
    , i

  if (
    step === 0 ||
    start === end ||
    (step > 0 && start > end) ||
    (step < 0 && start < end)
  ) {
    return []
  }
  length = Math.abs(Math.ceil((end - start) / step))
  for (i = 0; i < length; i++) {
    res[res.length] = start + (step * i)
  }
  return res
})
