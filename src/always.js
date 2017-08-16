import _defn from './internal/_defn'

/**
 * @name always
 * @signature a -> Any -> a
 * @category Function
 * @since v0.9.0
 * @description
 * Takes a single argument and returns a function that always returns that
 * argument.
 *
 * @example
 * const alwaysTrue = always(true) // => function
 * alwaysTrue()         // => true
 * alwaysTrue(false)    // => true
 * times(alwaysTrue, 5) // => [true, true, true, true, true]
 */
export default _defn('always', function (x) {
  return function () {
    return x
  }
})
