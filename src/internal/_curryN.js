import _slice from './_slice'
import _arity from './_arity'

/**
 * @description something
 * @param {Number} arity - the target arity
 * @param {Number} applied - the array of already-applied arguments
 * @param {Function} fn - the function to be called once all arguments are supplied
 * @returns {Function}
 */
function _curryN (arity, applied, fn) {
  return _arity(arity, function () {
    var newApplied = applied.concat(_slice.call(arguments))

    return newApplied.length >= arity
      ? fn.apply(null, newApplied)
      : _curryN(arity, newApplied, fn)
  })
}

export default _curryN