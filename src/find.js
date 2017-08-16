import _defn from './internal/_defn'

/**
 * @name find
 * @signature (a -> Boolean) -> [a] -> a | undefined
 * @namespace Collection
 * @since v0.6.0
 * @description
 * Tests a predicate against a list, returning the first value that
 * matches that predicate. If no matching value is found, `undefined` is
 * returned.
 *
 * @example
 * find(isEven, [1, 3, 4, 6]) // => 4
 * find(isEven, [1, 3, 5, 7]) // => undefined
 * find(propEq('id', 2), [{ id: 1 }, { id : 2 }]) // => { id: 2 }
 */
export default _defn('find', function (pred, xs) {
  var i = 0

  for (; i < xs.length; i++) {
    if (pred(xs[i])) {
      return xs[i]
    }
  }
})
