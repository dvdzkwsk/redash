const test     = require('ava')
    , sinon    = require('sinon')
    , { flip } = require('../dist/fp-standard')

test('reverses the arguments before applying them to the original function', (t) => {
  const fn = sinon.spy((a0, a1, a2) => {})

  flip(fn)(1, 2, 3)
  t.true(fn.calledWithExactly(3, 2, 1))
})

test('returns a function of equal arity to the original', (t) => {
  t.is(flip(() => {}).length, 0)
  t.is(flip((a0) => {}).length, 1)
  t.is(flip((a0, a1) => {}).length, 2)
  t.is(flip((a0, a1, a2) => {}).length, 3)
  t.is(flip((a0, a1, a2, a3) => {}).length, 4)
  t.is(flip((a0, a1, a2, a3, a4) => {}).length, 5)
  t.is(flip((a0, a1, a2, a3, a4, a5) => {}).length, 6)
})
