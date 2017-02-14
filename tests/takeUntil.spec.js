const test          = require('ava')
    , sinon         = require('sinon')
    , { takeUntil } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(takeUntil.length, 2)
})

test('is curried', (t) => {
  t.is(typeof takeUntil(() => {}), 'function')
})

test('returns a new array containing all the items up until the predicate returned true', (t) => {
  t.deepEqual(takeUntil(x => x === 5, [1, 2, 3, 4, 5, 6, 7]), [1, 2, 3, 4])
})

test('short circuits', (t) => {
  const spy = sinon.spy(x => x === 5)

  takeUntil(spy, [1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.is(spy.callCount, 5)
})

test('return a new array even if it\'s identical to the input', (t) => {
  const arr = [1, 2, 3, 4]
      , res = takeUntil(() => false, [1, 2, 3, 4])

  t.deepEqual(arr, [1, 2, 3, 4])
  t.deepEqual(res, [1, 2, 3, 4])
  t.not(arr, res)
})

// asserts that the slice does not slice back onto a negative index
test('return an empty list if the first item passes the predicate', (t) => {
  t.deepEqual(takeUntil(() => true, [1, 2, 3, 4]), [])
})
