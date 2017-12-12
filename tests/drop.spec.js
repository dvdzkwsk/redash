const test     = require('ava')
    , { drop } = require('../dist/redash')

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
