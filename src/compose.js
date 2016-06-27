import _reverse from './internal/_reverse'
import pipe from './pipe'

/**
 * compose : ((y -> z), ..., (g -> h), (a, b, ..., f -> g)) -> (a, b, ..., f -> z)
 *
 * @since v0.1.0
 */
export default function compose () {
  return pipe.apply(null, _reverse.call(arguments))
}
