import _slice from './_slice'
import _arity from './_arity'
import _nameFunc from './_nameFunc'
import _createFnName from './_createFnName'

/**
 * @description
 * Curries a function to the specified arity. Receives a list of arguments
 * to treat as as already-supplied (meaning they count toward fulfilling
 * the target arity). The resulting function will combine the existing
 * arguments with those from the latest call, and if the resulting length
 * is greater than or equal to the target arity, the original function will
 * be called with those arguments. If the number of arguments is still
 * smaller than the required amount, the function will be curried again.
 */
export default function _curryN (arity, args, fn) {
  var fnWrapper = _arity(arity, function () {
    var nextArgs  = args
      , nextArity = arity - arguments.length
      , i

    if (arguments.length) {
      nextArgs = _slice.call(nextArgs)
      for (i = 0; i < arguments.length; i++) {
        nextArgs[nextArgs.length] = arguments[i]
      }
    }

    return nextArity <= 0
      ? fn.apply(null, nextArgs)
      : _curryN(nextArity, nextArgs, fn)
  })
  _nameFunc(_createFnName(fn.displayName || fn.name, args), fnWrapper)
  return fnWrapper
}
