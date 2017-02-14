const test     = require('ava')
    , { lens
      , view
      , assoc
      , prop } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(view.length, 2)
})

test('is curried', (t) => {
  t.is(typeof view(() => {}), 'function')
})

test('properly applies the lens getter to the target', (t) => {
  t.is(view(lens(prop('foo'), assoc('foo')), { foo: 'bar' }), 'bar')
})
