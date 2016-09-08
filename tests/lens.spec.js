const test    = require('ava')
  ,  { lens } = require('../dist/stdlib')

test('properly reports its arity (is binary)', (t) => {
  t.is(lens.length, 2)
})

test('is curried', (t) => {
  t.is(typeof lens(() => {}), 'function')
})

test('returns an object with `get` and `set` properties matching the provided getter and setter', (t) => {
  const get = obj => obj.foo
      , set = (value, obj) => obj.foo = value

  t.deepEqual(lens(get, set), { get, set }) 
})

