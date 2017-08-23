import _defn from './internal/_defn'
import chain from './chain'
import init from './init'

/**
 * @name interpose
 * @signature Any a => a -> [a] -> [a]
 * @category Collection
 * @since v0.21.0
 * @description
 * Interposes a value between all items in a list.
 *
 * @example
 * interpose('FOO', ['a', 'b', 'c']) // => ['a', 'FOO', 'b', 'FOO', 'c']
 */
export default _defn(function interpose (separator, xs) {
  return init(chain(function (x) {
    return [x, separator]
  }, xs))
})
