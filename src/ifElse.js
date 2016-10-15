import _curry3 from './internal/_curry3'

/**
 * @signature (a -> Boolean) -> (a -> *) -> (a -> *) -> (a -> *)
 * @since v0.12.0
 * @param {Function} cond
 * @param {Function} ifTrue
 * @param {Function} ifElse
 */
export default _curry3(function ifElse (cond, whenTrue, whenElse) {
  return function (x) {
    return cond(x) ? whenTrue(x) : whenElse(x)
  }
})
