const test       = require('ava')
    , sinon      = require('sinon')
    , { filter } = require('../dist/fp-standard')

test('properlys report its arity (is binary)', (t) => {
  t.is(filter.length, 2)
})

test('is curried', (t) => {
  t.is(typeof filter(() => {}), 'function')
})

test('includes only items where the predicate is true', (t) => {
  const even = x => x % 2 === 0

  t.deepEqual(filter(even, [1, 2, 3, 4, 5]), [2, 4])
  t.deepEqual(filter(even, [1, 3, 5, 7]), [])
})

test('returns a new array even if no items are excluded', (t) => {
  const evens    = [2, 4, 6, 8]
      , even     = x => x % 2 === 0
      , filtered = filter(even, evens)

  t.not(filtered, evens)       // compare references
  t.deepEqual(filtered, evens) // compare values
})

test('does not call the predicate for empty arrays', (t) => {
  const pred = sinon.spy()

  filter(pred, [])
  t.is(pred.callCount, 0)
})

test('returns a new array even if the supplied array is empty', (t) => {
  const xs  = []
      , filtered = filter(() => true, xs)

  t.not(filtered, xs)       // compare references
  t.deepEqual(filtered, xs) // compare values
})
