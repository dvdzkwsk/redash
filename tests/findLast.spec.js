const test         = require('ava')
    , sinon        = require('sinon')
    , { findLast } = require('../dist/redash')

test('returns the last item in a list that matches the predicate', (t) => {
  const a = { id: 1 }
      , b = { id: 1 }
      , c = { id: 1 }

  t.is(findLast((x) => x.id === 1, [a, b, c]), c)
})

test('short circuits', (t) => {
  const spy = sinon.spy((x) => x === 1)

  findLast(spy, [1, 0, 0, 0, 0, 0, 1, 0, 0])
  t.is(spy.callCount, 3)
})
