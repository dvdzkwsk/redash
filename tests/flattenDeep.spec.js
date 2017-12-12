const test            = require('ava')
    , { flattenDeep } = require('../dist/redash')

test('deeply flattens an array', (t) => {
  t.deepEqual(
    flattenDeep([1, 2, [3], [4, 5, [6, [7, 8, 9]]]])
  , [1, 2, 3, 4, 5, 6, 7, 8, 9]
  )
})
