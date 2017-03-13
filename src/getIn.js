import _defn from './internal/_defn'

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
export default _defn('getIn', function (props, obj) {
  var i   = 0
    , val = obj

  if (val == null) {
    throw new TypeError(
      'The second argument to `getIn` must not be undefined or null.'
    )
  }

  while (i < props.length) {
    if (val == null) return val
    val = val[props[i]]
    i += 1
  }
  return val
})
