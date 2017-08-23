const test  = require('ava')
    , sinon = require('sinon')
    , {
      filter
    , head
    , toUpper
    , transform
    } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(transform.length, 2)
})

test('is curried', (t) => {
  t.is(typeof transform({}), 'function')
})

test('shallowly transforms based on a spec', (t) => {
  const spec = {
    name: x => x.toUpperCase()
  , friends: () => []
  }
  t.deepEqual(transform(spec, {
    name: 'joe', friends: [1, 2, 3]
  }), {
    name: 'JOE'
  , friends: []
  })
})

test('only runs the transform if the property exists', (t) => {
  const spy = sinon.spy()

  transform({ foo: spy }, { name: 'joe' })
  t.is(spy.callCount, 0)

  transform({ name: spy }, { name: 'joe' })
  t.is(spy.callCount, 1)
})

test('passes through properties without a transform', (t) => {
  const spec = {
    name: x => x.toUpperCase()
  }
  t.deepEqual(transform(spec, {
    name: 'joe'
  , friends: [1, 2, 3]
  }), {
    name: 'JOE'
  , friends: [1, 2, 3]
  })
})

test('transforms recursively', (t) => {
  /* eslint-disable indent */
  const spec = {
    info: {
      things: head
    , data: {
        name: toUpper
      , nums: filter(x => (x >= 10))
      }
    }
  }

  t.deepEqual(transform(spec, {
    foo: 'bar'
  , info: {
      things: [1, 2, 3, 4]
    , bar: 'baz'
    , data: {
        name: 'joe'
      , nums: [7, 8, 9, 10, 11, 12]
      }
    }
  }), {
    foo: 'bar'
  , info: {
      things: 1
    , bar: 'baz'
    , data: {
        name: 'JOE'
      , nums: [10, 11, 12]
      }
    }
  })
  /* eslint-enable */
})

test('transforms undefined/null properties', (t) => {
  t.deepEqual(transform({
    foo: () => true
  }, {
    foo: null
  }), {
    foo: true
  })
})

test('transforms inherited properties', (t) => {
  function A () {}
  A.prototype.bar = () => {}
  const obj = new A()
  obj.foo = 'foo'

  t.deepEqual(transform({
    bar: () => 'BAR'
  , foo: () => 'FOO'
  }, obj), {
    bar: 'BAR'
  , foo: 'FOO'
  })
})

test('passes through the original value if transform is of an unknown type', (t) => {
  t.deepEqual(transform({ bar: 'baz' }, { bar: 'bar' }), { bar: 'bar' })
})
