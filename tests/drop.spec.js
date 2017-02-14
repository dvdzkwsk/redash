const test     = require('ava')
    , { drop } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(drop.length, 2)
})

test('is curried', (t) => {
  t.is(typeof drop(5), 'function')
})

test('returns a new list with the first N items removed', (t) => {
  t.deepEqual(drop(2, [1, 2, 3, 4]), [3, 4])
})

test('returns an empty list if N exceeds the list length', (t) => {
  t.deepEqual(drop(100, [1, 2, 3, 4]), [])
})

test('returns a new list even if no items are removed', (t) => {
  const arr = [1, 2, 3, 4, 5]
      , res = drop(0, arr)

  t.deepEqual(arr, [1, 2, 3, 4, 5])
  t.not(res, arr)       // compare references
  t.deepEqual(res, arr) // compare values
})
