import _slice from './_slice'

export default function _shallowCloneList (xs) {
  return _slice.call(xs)
}
