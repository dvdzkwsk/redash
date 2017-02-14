const test          = require('ava')
    , sinon         = require('sinon')
    , { findIndex } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(findIndex.length, 2)
})

test('is curried', (t) => {
  t.is(typeof findIndex(() => {}), 'function')
})

test('return the index of the first matching item.', (t) => {
  t.is(findIndex(x => x === 'c', ['a', 'b', 'c', 'd', 'c']), 2)
})

test('short circuits', (t) => {
  const pred = sinon.spy(x => x === 'c')

  findIndex(pred, ['a', 'b', 'c', 'd', 'c'])
  t.is(pred.callCount, 3)
})

test('returns -1 if no match is found.', (t) => {
  t.is(findIndex(() => false, ['a', 'b', 'c', 'd', 'e']), -1)
})
