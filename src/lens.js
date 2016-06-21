import _curry2 from './internal/_curry2'

/**
 *
 * @param {Function} get
 * @param {Function} set
 * @returns {Function}
 */
export default _curry2(function lens (getter, setter) {
  return {
    get: getter,
    set: setter,
  }
})
