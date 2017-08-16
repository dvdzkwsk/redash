import _defn from './internal/_defn'

/**
 * @name mapi
 * @signature ((a, Integer) -> b) -> [a] -> [b]
 * @since v0.16.0
 * @description
 * Same as [map](#map), but supplies an additional `index` argument to the
 * transformation function.
 * @see map
 *
 * @example
 * const xform = (x, i) => isOdd(i) ? x * 2 : x
 * mapi(xform, [1, 2, 3, 4, 5]) // => [2, 2, 6, 4, 5]
 */
export default _defn('mapi', function (fn, as) {
  var bs = new Array(as.length)
    , i  = 0

  for (; i < as.length; i++) {
    bs[i] = fn(as[i], i)
  }
  return bs
})
