export default function _curry1 (fn) {
  return function __curried_unary__ (a0) {
    return arguments.length ? fn(a0) : __curried_unary__
  }
}
