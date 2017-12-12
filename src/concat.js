import _isArray from './internal/_isArray'
import _shallowCloneList from './internal/_shallowCloneList'
import merge from './merge'

/**
 * @name concat
 * @category Collection
 * @since v0.7.0
 * @description
 * Concatenates two values together. Dispatches to the `concat` method of the
 * first argument.
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]) // => [1, 2, 3, 4, 5, 6]
 * concat([1, 2, 3], [])        // => [1, 2, 3]
 * concat('foo', 'bar')         // => 'foobar'
 */
export default function concat (target, toAppend) {
  var res, i

  if (_isArray(target)) {
    res = _shallowCloneList(target)
    for (i = 0; i < toAppend.length; i++) {
      res[res.length] = toAppend[i]
    }
    return res
  } else if (typeof target === 'object') {
    if (target.concat) return target.concat(toAppend)
    return merge(target, toAppend)
  } else if (typeof target === 'string') {
    return target + toAppend
  }
  throw new Error('Value of type "' + typeof target + '" does not implement `concat`')
}
