import _defn from './internal/_defn'

/**
 * @name view
 * @signature Lens k -> {k:v} -> v
 * @namespace Function
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
export default _defn('view', function (lens, target) {
  return lens.get(target)
})
