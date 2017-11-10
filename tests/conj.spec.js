const test     = require('ava')
    , { conj } = require('../dist/redash')

test('treats the target as an array if it is nil', (t) => {
  t.deepEqual(conj(null), [])
})

test('appends all rest arguments if target is an array', (t) => {
  t.deepEqual(conj([1, 2, 3], 4, 5, 6), [1, 2, 3, 4, 5, 6])
})

test('does not flatten appended arrays', (t) => {
  t.deepEqual(conj([1], [2, 3], [4, 5, [6]]), [1, [2, 3], [4, 5, [6]]])
})

test('does not mutate the target array', (t) => {
  const target = [1, 2, 3]

  t.deepEqual(conj(target, 4, 5, 6), [1, 2, 3, 4, 5, 6])
  t.deepEqual(target, [1, 2, 3])
})

test('merges objects from left -> right when target is an object', (t) => {
  t.deepEqual(conj({ a: 1 }, { b: 2 }, { a: 3, c: 5 }), { a: 3, b: 2, c: 5 })
})

test('associates key/value pairs when the target is an object', (t) => {
  t.deepEqual(conj({}, ['a', 1], ['b', 2]), { a: 1, b: 2 })
})

test('does not mutate the target object', (t) => {
  const target = {}

  t.deepEqual(conj(target, { a: 1, b: 2, c: 3}), { a: 1, b: 2, c: 3 })
  t.deepEqual(target, {})
})
