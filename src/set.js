import _curry3 from './internal/_curry3'

/**
 * @param {Lens} lens
 * @param {*} value
 * @param {Object|*} target
 * @returns {*}
 */
export default _curry3(function set (lens, value, target) {
  return lens.set(value, target)
})
