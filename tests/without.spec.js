const test        = require('ava')
    , { without } = require('../dist/redash')

test('excludes items from the second array that are present in the first array', (t) => {
  t.deepEqual(
    without([1, 2, 3], [5,  4, 3, 2, 1]),
    [5, 4])
})

test('returns a new list even if no items are excluded', (t) => {
  const arr = [1, 2, 3, 4]
      , res = without([], arr)

  t.deepEqual(res, [1, 2, 3, 4])
  t.not(res, arr)       // compare references
  t.deepEqual(arr, res) // compare values
})
