import filter from './filter'

/**
 * @name compact
 * @category Collection
 * @description
 * Removes all falsy values from a list. For objects, dissociates all
 * properties with falsy values.
 *
 * @example
 * compact([null, undefined, 0, true, false]) // => [true]
 * compact({ a: false, b: null, c: true })    // => { c: true }
 */
export default function compact (xs) {
  return filter(Boolean, xs)
}
