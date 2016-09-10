const test        = require('ava')
    , { flatten } = require('../dist/fp-standard')

test('flattens an array 1 level deep', (t) => {
  t.deepEqual(
    flatten([1, 2, [3], [4, 5, [6, [7, 8, 9]]]]),
    [1, 2, 3, 4, 5, [6, [7, 8, 9]]])
})
