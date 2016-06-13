import _hasOwn from './_hasOwn'

export default function _eachOwn (f, o) {
  for (var k in o) {
    if (_hasOwn.call(o, k)) {
      f(k, o[k])
    }
  }
}
