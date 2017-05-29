import _iteratorToArray from './_iteratorToArray'
import _hasOwn from './_hasOwn'
import _identical from './_identical'
import _toString from './_toString'

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
  var aType = _toString.call(a)
    , bType = _toString.call(b)
    , aEntries
    , bEntries

  if (_identical(a, b)) return true
  if (aType !== bType) return false

  // We now know that a and b are the same type. Now, check if that
  // type is either Nil (undefined or null) or a primitive. If so,
  // then if they were equal they should have been identical. Because
  // we already performed an exact identity comparison (and it failed),
  // there is no further comparison to be made, so we can short circuit.
  if (!a || !b || typeof a !== 'object') return false

  // A and B are of a complex object type, so we have to perform a deep
  // comparison based on the subclass.
  switch (aType.slice(8, -1)) {
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
    default:
      return _compareObjects(a, b)
  }
}
