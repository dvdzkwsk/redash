/**
 * always : a -> * -> a
 *
 * @since v0.9.0
 */
export default function always (x) {
  return function () {
    return x
  }
}
