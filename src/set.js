import _defn from './internal/_defn'

/**
 * @name set
 * @signature Lens k -> v -> {k:v} -> {k:v}
 * @since v0.11.0
 * @description
 * Applies a value to the target of a lens and returns the result of the lens'
 * setter.
 *
 * @example
 * const nameLens = lensProp('name')
 * const userA = { name: 'Joe' }
 * const userB = set(nameLens, 'Billy', userA)
 *
 * console.log(userA) // => { name: 'Joe' }
 * console.log(userB) // => { name: 'Billy' }
 */
export default _defn('set', function (lens, value, target) {
  return lens.set(value, target)
})
