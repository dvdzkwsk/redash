var toUpper = Redash.toUpper

describe('(Function) toUpper', (t) => {
  test('uppercase a string', (t) => {
    toUpper('a').should.equal('A')
    toUpper('a long string').should.equal('A LONG STRING')
  })
})
