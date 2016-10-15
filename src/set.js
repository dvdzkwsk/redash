import _curry3 from './internal/_curry3'

/**
 * @name set
 * @signature Lens k -> v -> {k:v} -> {k:v}
 * @since v0.11.0
 * @param {Lens} lens
 * @param {*} value
 * @param {Object} target
 * @returns {Object}
 */
export default _curry3(function set (lens, value, target) {
  return lens.set(value, target)
})
