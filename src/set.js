import _curry3 from './internal/_curry3'

/**
 * set : Lens k -> v -> {k:v} -> {k:v}
 *
 * @param {Lens} lens
 * @param {*} value
 * @param {Object} target
 * @returns {Object}
 */
export default _curry3(function set (lens, value, target) {
  return lens.set(value, target)
})
