export default function _arity (arity, fn) {
  if (Object.getOwnPropertyDescriptor(fn, 'length').writable) {
    Object.defineProperty(fn, 'length', { value: arity })
    return fn
  }
  // Credit to Ramda for this idea for creating curried functions that
  // properly report their arity via function.length.
  // https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
  switch (arity) {
    case 0: return function () { return fn.apply(null, arguments) }
    case 1: return function (a0) { return fn.apply(null, arguments) }
    case 2: return function (a0, a1) { return fn.apply(null, arguments) }
    case 3: return function (a0, a1, a2) { return fn.apply(null, arguments) }
    case 4: return function (a0, a1, a2, a3) { return fn.apply(null, arguments) }
    case 5: return function (a0, a1, a2, a3, a4) { return fn.apply(null, arguments) }
    case 6: return function (a0, a1, a2, a3, a4, a5) { return fn.apply(null, arguments) }
    default: throw new Error('Function arity must be <= 6.')
  }
}
