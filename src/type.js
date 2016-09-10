var _toString = Object.prototype.toString

export default function type (a) {
  var _type = a == null ? 'Nil' : _toString.call(a).slice(8, -1)

  if (_type !== 'Object') return _type
  return _type.constructor.name === 'Promise' ? 'Promise' : _type
}
