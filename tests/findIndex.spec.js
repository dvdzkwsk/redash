const test          = require('ava')
    , sinon         = require('sinon')
    , { findIndex } = require('../dist/redash')

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
