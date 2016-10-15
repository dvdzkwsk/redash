import _curry2 from './internal/_curry2'

/**
 * @name view
 * @signature Lens k -> {k:v} -> v
 * @since v0.11.0
 * @param {Lens} lens
 * @param {Object} target
 * @returns {*}
 */
export default _curry2(function view (lens, target) {
  return lens.get(target)
})
