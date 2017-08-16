import _defn from './internal/_defn'
import _mapList from './internal/_mapList'
import _mapObject from './internal/_mapObject'

/**
 * @name map
 * @signature
 * Functor f => (a -> b) -> f a -> f b
 * @category Collection
 * @since v0.1.0
 * @description
 * Applies a transformation function to all values in a functor. For lists,
 * this means producing a new list where each value has been transformed.
 * For objects, this produces a new object from all own properties of the
 * input, where each property's value has been transformed.
 *
 * @see mapi
 *
 * @example
 * map(x => x * 2, [1, 2, 3, 4, 5])      // => [2, 4, 6, 8, 10]
 * map(x => x * 2, { a: 1, b: 2, c: 3 }) // => { a: 2, b: 4, c: 6 }
 */
export default _defn('map', function (fn, functor) {
  if (Array.isArray(functor)) {
    return _mapList(fn, functor)
  }
  if (typeof functor.map === 'function') {
    return functor.map(fn)
  }
  return _mapObject(fn, functor)
})
