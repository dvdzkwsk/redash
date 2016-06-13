import _arrayEach from './internal/_arrayEach'
import _curry2 from './internal/_curry2'

/**
 * forEach : (a -> *) -> [a] -> undefined
 * @since v0.1.0
 */
export default _curry2(function forEach (fn, xs) {
  _arrayEach(function (x) {
    fn(x)
  }, xs)
})
