import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * map : (a -> b) -> [a] -> [b]
 *
 * @description
 * Applies a transformation to every item in an array, returning a new
 * array of the same size where each item has been transformed.
 *
 * @when
 * You should use this function when you wish to apply a common transformation
 * to every item in an array. For example, if you have an array of objects
 * and want a new array containing only a certain property from each object.
 *
 * @since v0.1.0
 * @example
 * _.map((a) => a + 5, [1,2,3,4,5]) // [6,7,8,9,10]
 *
 * @example
 * _.map((a) => a.id, [{ id: 1 }, { id: 2 }, { id: 3 }]) // [1,2,3]
 *
 * @example
 * const add5 = _.add(5)
 * const mapAdd5 = _.map(add5)
 * mapAdd5([1,2,3,4]) // [6,7,8,9]
 */
export default _curry2(function map (fn, xs) {
  var ys = new Array(xs.length)

  _arrayEach(function (x, i) {
    ys[i] = fn(x)
  }, xs)
  return ys
})
