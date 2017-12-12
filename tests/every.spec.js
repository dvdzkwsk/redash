const test    = require('ava')
    , sinon   = require('sinon')
    , { every } = require('../dist/redash')

test('returns true if all items in the list pass the predicate', (t) => {
  t.true(every(x => x % 2 === 0, [2, 4, 6, 8, 10]))
})

test('return false if a single item does not pass the predicate', (t) => {
  t.false(every((x) => x % 2 === 0, [2, 3, 4, 6, 8, 10]))
})

test('short circuits', (t) => {
  const pred = sinon.spy((x) => x % 2 === 0)
  every(pred, [2, 4, 6, 7, 8, 10, 12])

  t.is(pred.callCount, 4)
})

test('return true for an empty list', (t) => {
  t.true(every(() => false, []))
})
