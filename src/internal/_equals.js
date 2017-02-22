import typeOf from '../type'
import _iteratorToArray from './_iteratorToArray'
import _hasOwn from './_hasOwn'
import _identical from './_identical'

function _compareObjects (a, b) {
  var aKeys
    , keysIdx
    , key

  aKeys = Object.keys(a)
  if (aKeys.length !== Object.keys(b).length) return false

  // cheap check to confirm that objects share the same keys
  keysIdx = aKeys.length - 1
  while (keysIdx >= 0) {
    if (!_hasOwn.call(b, aKeys[keysIdx])) return false
    keysIdx -= 1
  }
  // compare values at each key
  keysIdx = aKeys.length - 1
  while (keysIdx >= 0) {
    key = aKeys[keysIdx]
    if (!_equals(a[key], b[key])) return false
    keysIdx -= 1
  }
  return true
}

export default function _equals (a, b) {
  var aEntries
    , bEntries

  if (_identical(a, b)) return true
  if (typeOf(a) !== typeOf(b)) return false

  // We now know that a and b are the same type. If they are primitives
  // or null or undefined, we return false because they were not
  // identical and there is no further comparison to make.
  if (!a || !b || typeof a !== 'object') return false
  switch (typeOf(a)) {
    case 'Array':
      if (a.length !== b.length) return false
      return _compareObjects(a, b)
    case 'Date':
      return a.valueOf() === b.valueOf()
    case 'Promise':
      return a === b
    case 'Map':
    case 'Set':
      aEntries = _iteratorToArray(a.entries())
      bEntries = _iteratorToArray(b.entries())
      return aEntries.length === bEntries.length && _equals(aEntries, bEntries)
    // All object types require a deep comparison
    default:
      return _compareObjects(a, b)
  }
}
