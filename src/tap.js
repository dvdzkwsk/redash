/**
 * tap : (a -> *) -> a -> a
 *
 * @since v0.7.0
 */
export default function tap (fn) {
  return function (a) {
    fn(a)
    return a
  }
}
