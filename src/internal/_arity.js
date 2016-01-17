// Credit to Ramda for this idea for creating curried functions that
// properly re
// https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
/* eslint max-len:0 */
var _arity = function _arity (arity, fn) {
  switch (arity) {
    case 0: return function __arity_0__ () { return fn.apply(this, arguments) }
    case 1: return function __arity_1__ (a0) { return fn.apply(this, arguments) }
    case 2: return function __arity_2__ (a0, a1) { return fn.apply(this, arguments) }
    case 3: return function __arity_3__ (a0, a1, a2) { return fn.apply(this, arguments) }
    case 4: return function __arity_4__ (a0, a1, a2, a3) { return fn.apply(this, arguments) }
    case 5: return function __arity_5__ (a0, a1, a2, a3, a4) { return fn.apply(this, arguments) }
    case 6: return function __arity_6__ (a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments) }
    case 7: return function __arity_7__ (a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments) }
    case 8: return function __arity_8__ (a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments) }
    case 9: return function __arity_9__ (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments) }
    case 10: return function __arity_10__ (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments) }
    default: throw new Error('Arity must be less than or equal to 10.')
  }
}

export default _arity
