var of = Redash.of

describe('(Function) of', (t) => {
  test('wrap the value in an array', (t) => {
    of('foo')
      .should.deep.equal(['foo'])
  })

  test('still wrap an array', (t) => {
    of(['foo', 'bar'])
      .should.deep.equal([ ['foo', 'bar'] ])
  })
})
