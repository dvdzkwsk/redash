/**
 * @name pick
 * @category Object
 * @since v0.15.0
 * @description
 * Returns an object that only has the listed keys from the target object.
 *
 * @see omit
 *
 * @example
 * pick(['a', 'b'], { a: 1, b: 2, c: 3 }) // => { a: 1, b: 2 }
 */
export default function pick (keys, obj) {
  var i   = 0
    , res = {}

  while (i < keys.length) {
    res[keys[i]] = obj[keys[i]]
    i++
  }
  return res
}
