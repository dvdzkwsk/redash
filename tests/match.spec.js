const test      = require('ava')
    , { match } = require('../dist/redash')

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
