import _curry2 from './internal/_curry2'
import _reduce from './internal/_reduce'

/**
 * @name groupBy
 * @signature
 * String k, Any v => (v -> k) -> [v] -> {k:v}
 * @since v0.18.0
 * @description
 * Creates an object from a list of values where the values are grouped
 * together as a list based on the key returned from the grouping function.
 *
 * @example
 * groupBy(
 *   x => x.age <= 12 ? 'child' : x.age < 18 ? 'teenager' : 'adult',
 *   [{ age: 5 }, { age: 7 }, { age: 21 }, { age: 15 }, { age: 2 }]
 * )
 * // =>
 * // {
 * //   child    : [{ age: 5 }, { age: 7 }, { age: 2 }]
 * // , teenager : [{ age: 15 }]
 * // , adult    : [{ age: 21 }]
 * // }
 */
export default _curry2(function groupBy (fn, xs) {
  return _reduce(function (acc, x) {
    var key = fn(x)
    acc[key] = (acc[key] || []).concat(x)
    return acc
  }, {}, xs)
})
