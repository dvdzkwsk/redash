import _curry2 from './internal/_curry2'

/**
 * view : Lens k -> {k:v} -> v
 *
 * @param {Lens} lens
 * @param {Object} target
 * @returns {*}
 */
export default _curry2(function view (lens, target) {
  return lens.get(target)
})
