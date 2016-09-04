const test     = require('ava')
    , { tail } = require('../dist/stdlib')

test('properly repots its arity (is unary)', (t) => {
  t.is(tail.length, 1)
})

test('returns all but the first item in an array', (t) => {
  t.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
})

test('returns an empty array if the provided array has 1 item', (t) => {
  t.deepEqual(tail([1]), [])
})

test('returns an empty array if the provided array has 0 items', (t) => {
  t.deepEqual(tail([]), [])
})
