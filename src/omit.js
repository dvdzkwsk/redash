import _defn from './internal/_defn'

/**
 * @name omit
 * @signature String k, Any v => [k] -> {k:v} -> {k:v}
 * @category Object
 * @since v0.14.0
 * @description
 * @see pick
 *
 * @example
 * omit(['a', 'b'], { a: 1, b: 2, c: 3, d: 4 }) // => { c: 3, d: 4 }
 */
export default _defn(function omit (keys, a) {
  var res = {}
    , prop
    , discard
    , i

  for (prop in a) {
    discard = false
    for (i = 0; i < keys.length; i++) {
      if (keys[i] === prop) {
        discard = true
        break
      }
    }
    if (!discard) {
      res[prop] = a[prop]
    }
  }
  return res
})
