const test     = require('ava')
    , { lens
      , view
      , assoc
      , get } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(view.length, 2)
})

test('is curried', (t) => {
  t.is(typeof view(() => {}), 'function')
})

test('properly applies the lens getter to the target', (t) => {
  t.is(view(lens(get('foo'), assoc('foo')), { foo: 'bar' }), 'bar')
})
