import chain from './chain'
import init from './init'

/**
 * @name interpose
 * @category Collection
 * @since v0.21.0
 * @description
 * Interposes a value between all items in a list.
 *
 * @example
 * interpose('FOO', ['a', 'b', 'c']) // => ['a', 'FOO', 'b', 'FOO', 'c']
 */
export default function interpose (separator, xs) {
  return init(chain(function (x) {
    return [x, separator]
  }, xs))
}
