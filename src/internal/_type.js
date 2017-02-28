import _toString from './_toString'

export default function _type (x) {
  if (x == null) return 'Nil'

  return _toString.call(x).slice(8, -1)
}

