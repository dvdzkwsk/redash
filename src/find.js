import _curry2 from './internal/_curry2'

/**
 * @name find
 * @signature (a -> Boolean) -> [a] -> a | undefined
 * @since v0.6.0
 * @description
 * Tests a predicate against an array, returning the first value that
 * matches that predicate. If no matching value is found, `undefined` is
 * returned.
 *
 * @example
 * find(isEven, [1, 3, 4, 6]) // => 4
 * find(propEq('id', 2), [{ id: 1 }, { id : 2 }]) // => { id: 2 }
 * find(isEven, [1, 3, 5, 7]) // => undefined
 */
export default _curry2(function find (pred, xs) {
  var i   = 0
    , len = xs.length
    , x

  for (; i < len; i++) {
    x = xs[i]
    if (pred(x)) {
      return x
    }
  }
})
