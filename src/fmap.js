import _curry2 from './internal/_curry2'

/**
 * fmap : Functor f => (a -> b) -> f a -> f b
 *
 * @since v0.13.0
 * @param {Function} fn - transformation function
 * @param {Functor} functor - the functor to map over
 * @returns {Functor} the result of the functor transformation
 */
export default _curry2(function fmap (fn, functor) {
  if (functor.fmap) return functor.fmap(fn)
  if (functor.map) return functor.map(fn)

  // TODO(zuko): more descriptive error message
  throw new Error('The functor provided to fmap does not implement `map`.')
})
