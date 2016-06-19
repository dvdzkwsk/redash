var toLower = Redash.toLower

describe('(Function) toLower', function () {
  it('Should uppercase a string', function () {
    toLower('A').should.equal('a')
    toLower('A LONG STRING').should.equal('a long string')
  })
})
