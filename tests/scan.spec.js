const test     = require('ava')
    , { scan } = require('../dist/stdlib')

test('properly reports its arity (is ternary)', (t) => {
  t.is(scan.length, 3)
})

test('is curried', (t) => {
  t.is(typeof scan(() => {}, 0), 'function')
})

test('return an array of all the accrued accumulator values', (t) => {
  t.deepEqual(scan((acc, a) => acc + a, 0, [1, 2, 3]), [0, 1, 3, 6])
})
