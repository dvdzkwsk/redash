import _arraySlice from './_arraySlice'
import _arity from './_arity'

/**
 * @description
 * Curries a function to the specified arity. Receives an array of arguments
 * to treat as as already-supplied (meaning they count toward fulfilling
 * the target arity). The resulting function will combine the existing
 * arguments with those from the latest call, and if the resulting length
 * is greater than or equal to the target arity, the original function will
 * be called with those arguments. If the number of arguments is still
 * smaller than the required amount, the function will be curried again.
 *
 * @param {Number} arity - the target arity
 * @param {Number} applied - the array of already-applied arguments
 * @param {Function} fn - the function to be called once all arguments are supplied
 * @returns {Function}
 */
var _curryN = function _curryN (arity, applied, fn) {
  return _arity(arity, function () {
    var newApplied = applied
      , i

    if (arguments.length) {
      newApplied = _arraySlice.call(applied)
      for (i = 0; i < arguments.length; i++) {
        newApplied.push(arguments[i])
      }
    }

    return newApplied.length >= arity
      ? fn.apply(this, newApplied)
      : _curryN(arity, newApplied, fn)
  })
}

export default _curryN
