const test      = require('ava')
    , { match } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(match.length, 2)
})

test('is curried', (t) => {
  t.is(typeof match(/foo/), 'function')
})

test('returns a list containing all matches', (t) => {
  t.deepEqual(
    match(/foo[a-z]+/g, 'foobar foo bazbiz foobop'),
    ['foobar', 'foobop'])
})

test('returns an empty list if there are no matches', (t) => {
  t.deepEqual(match(/foo[a-z]+/g, 'bippity boppity'), [])
})

test('throws if the argument in string position does not have a method `match`', (t) => {
  t.throws(() => match(/foo[a-z]+/g, null))
})
