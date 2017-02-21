import _defn from './internal/_defn'

/**
 * @name lens
 * @signature (({k:v} -> v), (v, {k:v} -> {k:v})) -> Lens k
 * @since v0.11.0
 * @description
 * Creates a Lens that knows how to get and set a specific value on an object.
 * This lens can be used with `set`, `over`, and `view` in order to set,
 * transform, and get the value at the lens' focus, respectively.
 * If you want to create a lens focused on a specific property, you can use
 * the convenient `lensProp`.
 * @see lensProp
 * @example
 * const nameLens = lens(obj => obj.name, (value, obj) => assoc('name', value, obj))
 * // shorthand: lens(prop('name'), assoc('name'))
 *
 * view(nameLens, { name: 'Joe' })          // => Joe
 * set(nameLens, 'Bob', { name: 'Joe' })    // => Bob
 * over(nameLens, toUpper, { name: 'Joe' }) // => JOE
 */
export default _defn('lens', function (getter, setter) {
  return {
    get: getter
  , set: setter
  , toString: function () {
    return 'Lens'
  }
  }
})
