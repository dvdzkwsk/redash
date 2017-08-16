import _defn from './internal/_defn'

/**
 * @name ifElse
 * @signature (a -> Boolean) -> (a -> *) -> (a -> *) -> (a -> *)
 * @namespace Logic
 * @since v0.12.0
 * @description
 * Creates a unary function that checks its argument against a predicate and,
 * based on that result, dispatches to either the `whenTrue` or `whenFalse`
 * function. For example, if the predicate is met, the `whenTrue` function
 * will be called and and its result returned; otherwise the `whenFalse`
 * function is called. If you wish to only handle the true condition, use
 * `when`.
 * @see when
 * @example
 * const myFunc = ifElse(isEven, inc, dec)
 * myFunc(2) // => 3
 * myFunc(4) // => 5
 * myFunc(7) // => 6
 */
export default _defn('ifElse', function (cond, whenTrue, whenElse) {
  return function (x) {
    return cond(x) ? whenTrue(x) : whenElse(x)
  }
})
