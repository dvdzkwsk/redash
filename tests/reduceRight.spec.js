const test            = require('ava')
    , sinon           = require('sinon')
    , { reduceRight } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(reduceRight.length, 3)
})

test('is curried', (t) => {
  t.is(typeof reduceRight(() => {}, 0), 'function')
})

test('runs the accumulator function through the array from R -> L', (t) => {
  const spy = sinon.spy((acc, a) => acc + a)

  reduceRight(spy, 0, [1, 2, 3])
  t.deepEqual(spy.firstCall.args, [0, 3])
  t.deepEqual(spy.secondCall.args, [3, 2])
  t.deepEqual(spy.thirdCall.args, [5, 1])
})

test('returns the accumulated result', (t) => {
  t.is(reduceRight((acc, a) => acc + a, 0, [1, 2, 3, 4]), 10)
})
