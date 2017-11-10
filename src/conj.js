import _slice from './internal/_slice'
import _isArray from './internal/_isArray'
import _shallowCloneObject from './internal/_shallowCloneObject'
import concat from './concat'

/**
 * @name conj
 * @category Object
 * @since v0.24.0
 * @description Conjoins one or more values to a target collection.
 * @example
 * conj([1, 2, 3], 4, 5, 6) // => [1, 2, 3, 4, 5, 6]
 * conj({ a: 0 }, { b: 2, c: 3}, { a: 0 }) // => { a: 1, b: 2, c: 3 }
 *
 * // `conj` does not flatten appended arrays:
 * conj([1, 2, 3], [4, 5, 6]) // => [1, 2, 3, [4, 5, 6]]
 *
 * // you can provide [key, value] tuples to be conjoined to an object:
 * conj({}, ['a', 1], ['b', 2]) // => { a: 1, b: 2 }
 */
export default function conj (target) {
  var args = _slice.call(arguments, 1)
    , arg
    , i
    , res

  target = target || []

  // Array target
  if (_isArray(target)) {
    return concat(target, args)
  }

  // Object target
  if (typeof target === 'object') {
    res = _shallowCloneObject(target)
    for (i = 0; i < args.length; i++) {
      arg = args[i]
      if (_isArray(arg)) {
        // [key, value] tuple
        if (arg.length !== 2) {
          throw new TypeError(
            'Invalid pair provided to `conj`, tuple must contain exactly 2 values [key, value]'
          )
        }
        res[arg[0]] = arg[1]
        continue
      } else if (typeof arg === 'object' && arg) {
        res = concat(res, arg)
      } else {
        throw new TypeError(
          'Cannot `conj` value of type "' + typeof arg + '" to target object.'
        )
      }
    }
    return res
  }

  // Unknown target
  throw new TypeError('Cannot apply type "' + typeof target + '" to conj')
}
