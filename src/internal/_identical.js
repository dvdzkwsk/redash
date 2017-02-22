// Conform to SameValueZero algorithm:
// http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
export default function _identical (a, b) {
  return a === b || (a !== a && b !== b) // eslint-disable-line
}
