const test       = require('ava')
    , sinon      = require('sinon')
    , { reduce } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(reduce.length, 3)
})

test('is curried', (t) => {
  t.is(typeof reduce(() => {}, 0), 'function')
})

test('runs the accumulator function through the array from L -> R', (t) => {
  const spy = sinon.spy((acc, a) => acc + a)

  reduce(spy, 0, [1, 2, 3])
  t.deepEqual(spy.firstCall.args, [0, 1])
  t.deepEqual(spy.secondCall.args, [1, 2])
  t.deepEqual(spy.thirdCall.args, [3, 3])
})

test('returns the accumulated result', (t) => {
  t.is(reduce((acc, a) => acc + a, 0, [1, 2, 3]), 6)
})
