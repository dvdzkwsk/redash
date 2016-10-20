/**
 * @name compact
 * @signature [a] -> [a]
 * @description
 * Returns an array that excludes all falsy values from the original array.
 *
 * @example
 * compact([null, undefined, true, false]) // => [true]
 * compact(['', 0, {}, [], '0'])           // => [{}, [], '0']
 */
export default function compact (xs) {
  var i   = 0
    , len = xs.length
    , res = []

  for (; i < len; i++) {
    if (xs[i]) {
      res[res.length] = xs[i]
    }
  }
  return res
}
