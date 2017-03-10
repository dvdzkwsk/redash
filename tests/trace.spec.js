const test      = require('ava')
    , sinon     = require('sinon')
    , { trace } = require('../dist/halcyon')

test('properly reports its arity (is unary)', (t) => {
  t.is(trace.length, 1)
})

test('returns a unary function', (t) => {
  const traced = trace('hello')

  t.is(typeof traced, 'function')
  t.is(traced.length, 1)
})

test('logs the provided message along with the first received argument', (t) => {
  sinon.stub(console, 'log')

  const traced = trace('hello')
  traced(1)
  traced(2, 1)
  traced(3, 2, 1)

  t.deepEqual(console.log.firstCall.args, ['hello', 1])
  t.deepEqual(console.log.secondCall.args, ['hello', 2])
  t.deepEqual(console.log.thirdCall.args, ['hello', 3])

  console.log.restore()
})
