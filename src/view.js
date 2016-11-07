import _curry2 from './internal/_curry2'

/**
 * @name view
 * @signature Lens k -> {k:v} -> v
 * @since v0.11.0
 * @description
 * Returns the value at the focal point of a lens on a given object.
 * @see set
 * @see over
 *
 * @example
 * const nameLens = lensProp('name')
 * view(nameLens, { name: 'Dwight' })  // => 'Dwight'
 * view(nameLens, { name: 'Michael' }) // => 'Michael'
 */
export default _curry2(function view (lens, target) {
  return lens.get(target)
})
