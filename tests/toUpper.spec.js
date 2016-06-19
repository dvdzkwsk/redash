var toUpper = Redash.toUpper

describe('(Function) toUpper', function () {
  it('Should uppercase a string', function () {
    toUpper('a').should.equal('A')
    toUpper('a long string').should.equal('A LONG STRING')
  })
})
