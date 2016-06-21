import _curry2 from './internal/_curry2'

/**
 * @param {Lens} lens
 * @param {Object|*} target
 * @returns {*}
 */
export default _curry2(function view (lens, target) {
  return lens.get(target)
})
