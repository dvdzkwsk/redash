var toLower = Redash.toLower

describe('(Function) toLower', (t) => {
  test('uppercase a string', (t) => {
    toLower('A').should.equal('a')
    toLower('A LONG STRING').should.equal('a long string')
  })
})
