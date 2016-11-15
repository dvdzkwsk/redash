const test     = require('ava')
    , { prop } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(prop.length, 2)
})

test('is curried', (t) => {
  t.is(typeof prop('foo'), 'function')
})

test('returns the requested property off of the object', (t) => {
  t.is(prop('foo', { foo: 'bar' }), 'bar')
})

test('returns undefined when the property is not defined', (t) => {
  t.is(prop('foo', {}), undefined)
})
