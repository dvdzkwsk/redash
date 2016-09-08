const test            = require('ava')
    , { flattenDeep } = require('../dist/stdlib')

test('properly reports its arity (is unary)', (t) => {
  t.is(flattenDeep.length, 1)
})

test('deeply flattens an array', (t) => {
  t.deepEqual(
    flattenDeep([1, 2, [3], [4, 5, [6, [7, 8, 9]]]])
  , [1, 2, 3, 4, 5, 6, 7, 8, 9]
  )
})
