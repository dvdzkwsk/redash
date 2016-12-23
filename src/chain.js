import _curry2 from './internal/_curry2'

/**
 * @name chain
 * @signature (a -> [b]) -> [a] -> [b]
 * @since v0.1.0
 * @description
 * Maps over a list and concatenates the results as it goes; this is also
 * known as `flatMap`, and is generally equivalent to:
 * `_.flatten(_.map(yourFn, yourList))`.
 *
 * Note that this does not currently dispatch to the `chain` method on
 * the argument in list position.
 * @example
 * chain(x => [x, x * 2], [1, 2, 3, 4]) // => [1, 2, 2, 4, 3, 6, 4, 8]
 */
export default _curry2(function chain (fn, xs) {
  var i   = 0
    , len = xs.length
    , bs  = []
    , _i
    , b

  for (; i < len; i++) {
    b = fn(xs[i])
    if (Array.isArray(b)) {
      for (_i = 0; _i < b.length; _i++) {
        bs.push(b[_i])
      }
    } else {
      bs.push(b)
    }
  }

  return bs
})
