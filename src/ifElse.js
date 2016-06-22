import _curry3 from './internal/_curry3'

/**
 * ifElse : (a -> Boolean) -> (a -> *) -> (a -> *) -> (a -> *)
 *
 * TODO: Should this curry the returned function to `cond` arity?
 *
 * @param {Function} cond
 * @param {Function} ifTrue
 * @param {Function} ifElse
 */
export default _curry3(function ifElse (cond, whenTrue, whenElse) {
  return function (x) {
    return cond(x) ? whenTrue(x) : whenElse(x)
  }
})
