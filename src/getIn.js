import _defn from './internal/_defn'
import get from './get'

/**
 * @name getIn
 * @signature String k => [k] -> {k:v} -> v
 * @since v0.20.0
 * @description
 * Returns the value at the given path in an object. If any prop in the series
 * does not exist, the function short circuits and returns `undefined`.
 *
 * @example
 * const getAge = getIn(['info', 'age'])
 *
 * getAge({ info: { age: 20 }}) // => 20
 * getAge({})                   // => undefined
 */
export default _defn('getIn', function (keys, target) {
  var i   = 0
    , val = target

  while (i < keys.length) {
    val = get(keys[i], val)
    i += 1
  }
  return val
})
