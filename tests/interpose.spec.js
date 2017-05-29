const test          = require('ava')
    , { interpose } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(interpose.length, 2)
})

test('is curried', (t) => {
  t.is(typeof interpose('foo'), 'function')
})

test('interposes the separator between each element', (t) => {
  t.deepEqual(
    interpose('FOO', ['a', 'b', 'c', 'd', 'e'])
  , ['a', 'FOO', 'b', 'FOO', 'c', 'FOO', 'd', 'FOO', 'e']
  )
})

test('does not flatten the separator if it is an array', (t) => {
  t.deepEqual(
    interpose(['F', 'O', 'O'], ['a', 'b', 'c'])
  , ['a', ['F', 'O', 'O'], 'b', ['F', 'O', 'O'], 'c']
  )
})
