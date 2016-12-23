import _slice from './internal/_slice'
import map from './map'

/**
 * @name juxt
 * @signature [(x, y, z... -> a), (x, y, z... -> b), ...] -> (x, y, z...) -> [a, b, ...]
 * @description
 * Applies a set of arguments to a list of functions, returning a list that
 * contains the result of each function call in its corresponding position.
 *
 * @example
 * juxt([inc, dec, multiply(3)])(2) => [3, 1, 6]
 * juxt([add, divide, multiply])(2, 4) => [6, 2, 8]
 */
export default function juxt (fns) {
  return function () {
    var args = _slice.call(arguments)
    return map(function (fn) {
      return fn.apply(null, args)
    }, fns)
  }
}
