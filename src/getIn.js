import _defn from './internal/_defn'
import _get from './internal/_get'

/**
 * @name getIn
 * @signature String k => [k] -> {k:v} -> v
 * @category Object
 * @since v0.20.0
 * @description
 * Returns the value at the given path in an object. If any property in the path
 * does not exist, the function short circuits and returns `undefined`.
 *
 * @example
 * const getAge = getIn(['info', 'age'])
 *
 * getAge({ info: { age: 20 }}) // => 20
 * getAge({})                   // => undefined
 */
export default _defn(function getIn (keys, target) {
  var i   = 0
    , val = target

  while (i < keys.length) {
    val = _get(keys[i], val)
    i += 1
  }
  return val
})
