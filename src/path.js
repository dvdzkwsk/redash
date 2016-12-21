import _curry2 from './internal/_curry2'

/**
 * @name path
 * @signature String k => [k] -> {k:v} -> v
 * @since v0.17.0
 * @description
 * Returns the value at the given path in an object. If any prop in the series
 * does not exist, the function short circuits and returns `undefined`.
 *
 * @example
 * const getAge = path(['info', 'age'])
 *
 * getAge({ info: { age: 20 }}) // => 20
 * getAge({})                   // => undefined
 */
export default _curry2(function path (props, obj) {
  var i   = 0
    , val = obj

  if (val == null) {
    throw new TypeError(
      'The second argument to `path` must not be undefined or null.'
    )
  }

  while (i < props.length) {
    if (val == null) return val
    val = val[props[i]]
    i += 1
  }
  return val
})
