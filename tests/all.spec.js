const test    = require('ava')
    , sinon   = require('sinon')
    , { all } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(all.length, 2)
})

test('is curried', (t) => {
  t.is(typeof all(() => {}), 'function')
})

test('returns true if all items in the list pass the predicate', (t) => {
  t.true(all(x => x % 2 === 0, [2, 4, 6, 8, 10]))
})

test('return false if a single item does not pass the predicate', (t) => {
  t.false(all((x) => x % 2 === 0, [2, 3, 4, 6, 8, 10]))
})

test('short circuits', (t) => {
  const pred = sinon.spy((x) => x % 2 === 0)
  all(pred, [2, 4, 6, 7, 8, 10, 12])

  t.is(pred.callCount, 4)
})

test('return true for an empty list', (t) => {
  t.true(all(() => false, []))
})
