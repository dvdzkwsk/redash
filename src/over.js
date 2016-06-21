import _curry3 from './internal/_curry3'

/**
 * @param {Lens} lens
 * @param {Function} fn
 * @param {Object|*} target
 * @returns {*}
 */
export default _curry3(function over (lens, fn, target) {
  return set(lens, fn(lens.get(target)), target)
})
