const test    = require('ava')
    , sinon   = require('sinon')
    , { tap } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(tap.length, 1)
})

test('returns a unary function', (t) => {
  const tapped = tap(() => {})

  t.is(typeof tapped, 'function')
  t.is(tapped.length, 1)
})

test('executes the supplied function but ignores the result and returns the original argument', (t) => {
  const spy = sinon.spy(() => 'hello')

  t.is(tap(spy)(1), 1)
  t.is(spy.callCount, 1)
  t.true(spy.calledWithExactly(1))
})
