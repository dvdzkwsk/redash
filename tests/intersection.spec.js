const test             = require('ava')
    , { intersection } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(intersection.length, 2)
})

test('returns a unique set of values common to both lists', (t) => {
  t.deepEqual(
    intersection([1, 1, 2, 2, 3, 3, 4, 5, 6, 7], [0, 1, 2, 3]),
    [1, 2, 3])
})
