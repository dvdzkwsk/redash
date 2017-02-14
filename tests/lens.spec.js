const test    = require('ava')
  ,  { lens } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(lens.length, 2)
})

test('is curried', (t) => {
  t.is(typeof lens(() => {}), 'function')
})

test('returns an object with `get` and `set` properties matching the provided getter and setter', (t) => {
  const get    = () => {}
      , set    = () => {}
      , myLens = lens(get, set)

  t.is(myLens.get, get)
  t.is(myLens.set, set)
})
