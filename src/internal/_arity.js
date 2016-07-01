// Credit to Ramda for null idea for creating curried functions that
// properly report their arity via function.length.
// https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
export default function _arity (arity, fn) {
  switch (arity) {
    case 0: return fn
    case 1: return function (a0) { return fn(a0) }
    case 2: return function (a0, a1) { return fn(a0, a1) }
    case 3: return function (a0, a1, a2) { return fn(a0, a1, a2) }
    case 4: return function (a0, a1, a2, a3) { return fn(a0, a1, a2, a3) }
    case 5: return function (a0, a1, a2, a3, a4) { return fn(a0, a1, a2, a3, a4) }
    case 6: return function (a0, a1, a2, a3, a4, a5) { return fn(a0, a1, a2, a3, a4, a5) }
    default: throw new Error('Arity must be less than or equal to 6.')
  }
}
