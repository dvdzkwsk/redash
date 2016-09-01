const test        = require('ava')
    , { compact } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(1, compact.length)
})

test('omits `null` from the result', (t) => {
  t.deepEqual([], compact([null]))
})

test('omits `undefined` from the result', (t) => {
  t.deepEqual([], compact([undefined]))
})

test('omits `void 0` from the result', (t) => {
  t.deepEqual([], compact([void 0]))
})

test('omits `0` (numerical) from the result', (t) => {
  t.deepEqual([], compact([0]))
})

test('omits empty strings from the result', (t) => {
  t.deepEqual([], compact(['']))
})

test('does not exclude truthy values', (t) => {
  const fn = () => {}

  t.deepEqual([{}, [], 'hello', 5, fn], compact([{}, [], 'hello', 5, fn]))
})

test('does not mutate the input list', (t) => {
  const arr = [null, 2, 3, undefined, 5]
      , cmp = compact(arr)

  t.deepEqual([null, 2, 3, undefined, 5], arr)
  t.deepEqual([2, 3, 5], cmp)
})

test('returns a new array even if no items are excluded', (t) => {
  const arr = [1, 2, 3, 4, 5]
      , cmp = compact(arr)

  t.not(cmp, arr)       // compare references
  t.deepEqual(cmp, arr) // compare values
})
