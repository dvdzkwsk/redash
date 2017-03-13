import _shallowCloneObject from './_shallowCloneObject'
import _shallowCloneList from './_shallowCloneList'

export default function _shallowClone (value) {
  if (Array.isArray(value)) {
    return _shallowCloneList(value)
  } else if (typeof value === 'object' && value) {
    return _shallowCloneObject(value)
  }
  throw new TypeError(
    'Cannot shallow clone value of type: "' + typeof value + '".'
  )
}
