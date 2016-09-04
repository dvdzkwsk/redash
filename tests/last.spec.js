var last = Redash.last

describe('(Function) last', (t) => {
  test('return the last item in an array.', (t) => {
    last([1, 2, 3]).should.equal(3)
    last([1]).should.equal(1)
  })

  test('return undefined for an empty array', (t) => {
    expect(last([])).to.equal(undefined)
  })
})
