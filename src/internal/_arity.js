// Credit to Ramda for this idea for creating curried functions that
// properly report their arity via function.length.
// https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
export default function _arity (arity, fn) {
  switch (arity) {
    case 0: return function () { return fn.apply(this, arguments) }
    case 1: return function (a0) { return fn.apply(this, arguments) }
    case 2: return function (a0, a1) { return fn.apply(this, arguments) }
    case 3: return function (a0, a1, a2) { return fn.apply(this, arguments) }
    case 4: return function (a0, a1, a2, a3) { return fn.apply(this, arguments) }
    case 5: return function (a0, a1, a2, a3, a4) { return fn.apply(this, arguments) }
    case 6: return function (a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments) }
    default: throw new Error('Arity must be less than or equal to 6.')
  }
}
