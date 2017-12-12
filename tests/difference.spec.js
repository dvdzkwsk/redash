const test           = require('ava')
    , { difference } = require('../dist/redash')

test('returns all values contained in the first list but not the second', (t) => {
  t.deepEqual(
    difference([1, 2, 3, 4, 5], [1, 2])
  , [3, 4, 5])
})

test('returns an empty array if all values in the first list are contained in the second', (t) => {
  t.deepEqual(
    difference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
  , [])
})

test('compares objects by value', (t) => {
  t.deepEqual(
    difference([{ id: 1 }, { id: 2 }, { id: 3 }], [{ id: 1 }])
  , [{ id: 2 }, { id: 3 }])
})

test('returns a set (no duplicates)', (t) => {
  t.deepEqual(
    difference([1, 2, 3, 4, 4, 5, 5, 5], [1, 2])
  , [3, 4, 5])
})
