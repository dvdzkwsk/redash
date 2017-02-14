const test    = require('ava')
    , sinon   = require('sinon')
    , { map } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(map.length, 2)
})

test('is curried', (t) => {
  t.is(typeof map(() => {}), 'function')
})

test('returns a new array where each element has been transformed in place', (t) => {
  t.deepEqual(map(x => x * 2, [1, 2, 3, 4, 5]), [2, 4, 6, 8, 10])
})

test('provides a single argument (the element) to the transformer', (t) => {
  const spy = sinon.spy()

  map(spy, [1, 2, 3])
  t.deepEqual(spy.firstCall.args, [1])
  t.deepEqual(spy.secondCall.args, [2])
  t.deepEqual(spy.thirdCall.args, [3])
})

test('returns a new array even if the result is identical', (t) => {
  const arr = [1, 2, 3]
      , res = map(x => x, arr)

  t.deepEqual(arr, [1, 2, 3])
  t.deepEqual(res, [1, 2, 3])
  t.not(arr, res)
})
