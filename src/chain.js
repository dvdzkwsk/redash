import _defn from './internal/_defn'

/**
 * @name chain
 * @signature (a -> [b]) -> [a] -> [b]
 * @namespace Collection
 * @since v0.1.0
 * @description
 * Maps over a list and concatenates the results as it goes; this is also
 * known as `flatMap`, and is generally equivalent to:
 * `_.flatten(_.map(yourFn, yourList))`, but performed in a single step.
 *
 * @example
 * chain(x => [x, x * 2], [1, 2, 3, 4]) // => [1, 2, 2, 4, 3, 6, 4, 8]
 */
export default _defn('chain', function (fn, xs) {
  var i   = 0
    , res  = []
    , x
    , xi

  for (; i < xs.length; i++) {
    x = fn(xs[i])
    if (Array.isArray(x)) {
      for (xi = 0; xi < x.length; xi++) {
        res[res.length] = x[xi]
      }
    } else {
      res[res.length] = x
    }
  }

  return res
})
