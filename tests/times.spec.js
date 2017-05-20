const test      = require('ava')
    , sinon     = require('sinon')
    , { times } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(times.length, 2)
})

test('is curried', (t) => {
  t.is(typeof times(() => {}), 'function')
})

test('calls the provided function N times', (t) => {
  const spy = sinon.spy()

  times(spy, 5)
  t.is(spy.callCount, 5)
})

test('provide the call index as the only argument', (t) => {
  const spy = sinon.spy()

  times(spy, 3)
  t.deepEqual(spy.firstCall.args, [0])
  t.deepEqual(spy.secondCall.args, [1])
  t.deepEqual(spy.thirdCall.args, [2])
})

test('return an array of size N containing the results of each function application', (t) => {
  t.deepEqual(times(i => i % 2 === 0, 5), [true, false, true, false, true])
})
