const test         = require('ava')
    , { contains } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(contains.length, 2)
})

test('is curried', (t) => {
  t.is(typeof contains(5), 'function')
})

test('returns true if the value is found within the list', (t) => {
  t.true(contains(1, [1, 2, 3, 4]))
})

test('returns true if the value is not found within the list', (t) => {
  t.false(contains(5, [1, 2, 3, 4]))
})

test('performs deep equality comparisons', (t) => {
  t.true(contains({ id: 1 }, [{ id: 1 }, { id: 2 }]))
})

test('works for strings', (t) => {
  t.true(contains('bar', 'foobarbaz'))
  t.false(contains('bar', 'foobaz'))
})
