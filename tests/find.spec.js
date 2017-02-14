const test     = require('ava')
    , sinon    = require('sinon')
    , { find } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(find.length, 2)
})

test('returns the first item where the predicate evaluates to true', (t) => {
  const pred = sinon.spy(x => x === 'c')
      , res  = find(pred, ['a', 'b', 'c', 'd', 'c'])

  t.is(res, 'c')
})

test('short circuits', (t) => {
  const pred = sinon.spy(x => x === 'c')

  find(pred, ['a', 'b', 'c', 'd', 'c'])
  t.is(pred.callCount, 3)
})

test('returns undefined if no match is found.', (t) => {
  const f = () => false

  t.is(find(f, ['a', 'b', 'c', 'd', 'e']), undefined)
})
