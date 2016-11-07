import _curry3 from './internal/_curry3'

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
export default _curry3(function set (lens, value, target) {
  return lens.set(value, target)
})
