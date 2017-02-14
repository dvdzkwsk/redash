const test       = require('ava')
    , sinon      = require('sinon')
    , { curryN } = require('../dist/halcyon')

test('properly report its arity (is binary)', (t) => {
  t.is(curryN.length, 2)
})

test('is curried', (t) => {
  t.is(typeof curryN(2), 'function')
})

test('curries based off of the provided arity, regardless of function length', (t) => {
  const curr0 = curryN(0, (a, b, c) => {})
      , curr3 = curryN(3, () => {})

  t.not(typeof curr0(), 'function')

  t.is(typeof curr3(), 'function')
  t.is(typeof curr3(1), 'function')
  t.is(typeof curr3(1, 2), 'function')
  t.not(typeof curr3(1, 2, 3), 'function')
})

test('does not bind additional arguments on its first invocation', (t) => {
  const curried = curryN(3, (a, b, c) => a + b + c, 100, 100, 100)

  t.is(curried(1, 2, 3), 6)
})

test('only invokes the function once all arguments are supplied', (t) => {
  t.is(curryN(3, (a, b, c) => a + b + c)()()(1)()(2)()(3), 6)
})

test('correctly calls the wrapped function if curried as nullary', (t) => {
  const spy     = sinon.spy((a, b, c) => {})
      , curried = curryN(0, spy)

  curried()
  t.true(spy.calledOnce)
})

test('throws if the arity is > 6', (t) => {
  const fn = () => {}

  t.notThrows(() => curryN(0, fn))
  t.notThrows(() => curryN(1, fn))
  t.notThrows(() => curryN(2, fn))
  t.notThrows(() => curryN(3, fn))
  t.notThrows(() => curryN(4, fn))
  t.notThrows(() => curryN(5, fn))
  t.notThrows(() => curryN(6, fn))
  t.throws(() => curryN(7, fn))
})
