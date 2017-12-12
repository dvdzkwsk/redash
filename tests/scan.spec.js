const test     = require('ava')
    , { scan } = require('../dist/redash')

test('return an array of all the accrued accumulator values', (t) => {
  t.deepEqual(scan((acc, a) => acc + a, 0, [1, 2, 3]), [0, 1, 3, 6])
})
