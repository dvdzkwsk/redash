const test       = require('ava')
    , sinon      = require('sinon')
    , { ifElse } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(ifElse.length, 3)
})

test('is curried', (t) => {
  t.is(typeof ifElse(() => {}), 'function')
  t.is(typeof ifElse(() => {}, () => {}), 'function')
})

test('returns a unary function', (t) => {
  const fn = ifElse(() => {}, () => {}, () => {})

  t.is(typeof fn, 'function')
  t.is(fn.length, 1)
})

test('calls the predicate with the supplied argument', (t) => {
  const cond = sinon.spy()
      , noop = () => {}

  ifElse(cond, noop, noop)('hello')
  t.true(cond.calledWithExactly('hello'))
})

test('only calls the `whenTrue` function when the predicate returns true', (t) => {
  const cond      = () => true
      , whenTrue  = sinon.spy()
      , whenFalse = sinon.spy()

  ifElse(cond, whenTrue, whenFalse)('hello')
  t.is(whenTrue.callCount, 1)
  t.true(whenTrue.calledWithExactly('hello'))
  t.is(whenFalse.callCount, 0)
})

test('only calls the `whenFalse` function when the predicate returns false', (t) => {
  const cond      = () => false
      , whenTrue  = sinon.spy()
      , whenFalse = sinon.spy()

  ifElse(cond, whenTrue, whenFalse)('hello')
  t.is(whenFalse.callCount, 1)
  t.true(whenFalse.calledWithExactly('hello'))
  t.is(whenTrue.callCount, 0)
})

test('returns the result of the matching function', (t) => {
  const whenTrue  = () => 'was-true'
      , whenFalse = () => 'was-false'

  t.is(ifElse(() => true, whenTrue, whenFalse)('hello'), 'was-true')
  t.is(ifElse(() => false, whenTrue, whenFalse)('hello'), 'was-false')
})
