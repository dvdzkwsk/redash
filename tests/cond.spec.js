const test     = require('ava')
    , sinon    = require('sinon')
    , { cond } = require('../dist/redash')

test('properly report its arity (is binary)', (t) => {
  t.is(cond.length, 2)
})

test('is curried', (t) => {
  t.is(typeof cond([]), 'function')
})

test('calls the matched function when its predicate is true', (t) => {
  const pred = () => true
      , spy  = sinon.spy()

  cond([[pred, spy]])('HELLO')
  t.true(spy.calledOnce)
  t.true(spy.calledWithExactly('HELLO'))
})

test('returns the value of the handler function when its predicate is true', (t) => {
  const pred = () => true
      , val  = () => 'FOOBAR'

  t.is(cond([[pred, val]])('HELLO'), 'FOOBAR')
})

test('treats each predicate and handler as unary', (t) => {
  const pred = sinon.spy(() => true)
      , val  = sinon.spy()

  cond([[pred, val]])('a', 'b', 'c')
  t.true(pred.calledWithExactly('a'))
  t.true(val.calledWithExactly('a'))
})

test('treats truthy values from the predicates as true', (t) => {
  const pred = () => []
      , fn   = sinon.spy()

  cond([[pred, fn]])(5)
  t.true(fn.calledOnce)
})

test('short circuits when a true condition is reached', (t) => {
  const pred = () => true
      , fn   = sinon.spy()

  cond([[pred, fn], [pred, fn]])(5)
  t.true(fn.calledOnce)
})

test('returns `undefined` when conditions is empty', (t) => {
  t.is(undefined, cond([], null))
})

test('returns `undefined` when no condition is matched', (t) => {
  t.is(undefined, cond([
    [() => false, () => 'foo']
  , [() => false, () => 'bar']], null))
})
