const test     = require('ava')
    , sinon    = require('sinon')
    , { fmap } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(fmap.length, 2)
})

test('is curried', (t) => {
  t.is(typeof fmap(() => {}), 'function')
})

test('dispatches to `fmap` if present', (t) => {
  const spy = sinon.spy()
      , fn  = () => {}

  fmap(fn, { fmap: spy })
  t.true(spy.calledOnce)
  t.true(spy.calledWithExactly(fn))
})

test('dispatches to `map` if present', (t) => {
  const spy = sinon.spy()
      , fn  = () => {}

  fmap(fn, { map: spy })
  t.true(spy.calledOnce)
  t.true(spy.calledWithExactly(fn))
})

test('prefers dispatching to fmap', (t) => {
  const fmap = sinon.spy()
      , map  = sinon.spy()
      , fn   = () => {}

  fmap(fn, { fmap: fn, map: fn })
  t.true(fmap.calledOnce)
  t.false(map.called)
})

test('throws if the functor does not have `fmap` or `map` methods', (t) => {
  t.throws(() => fmap(() => {}, {}))
})
