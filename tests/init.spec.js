const test     = require('ava')
    , { init } = require('../dist/halcyon')

test('properly reports its arity (is unary)', (t) => {
  t.is(init.length, 1)
})

test('returns all but the last element in a list', (t) => {
  t.deepEqual(init([1, 2, 3, 4, 5]), [1, 2, 3, 4])
})

test('returns an empty list if the input list only has only element', (t) => {
  t.deepEqual(init([1]), [])
})

test('returns an empty list if the input list is empty', (t) => {
  t.deepEqual(init([]), [])
})

test('does not mutate the input list', (t) => {
  const source = [1, 2, 3, 4, 5]
  t.deepEqual(source, [1, 2, 3, 4, 5])
})
