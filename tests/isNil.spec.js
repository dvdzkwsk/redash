var isNil = Redash.isNil

describe('(Function) isNil', (t) => {
  test('properly report its arity (is unary)', (t) => {
    isNil.should.have.length(1)
  })

  test('return true for `undefined`', (t) => {
    isNil(undefined).should.equal(true)
  })

  test('return true for `null', (t) => {
    isNil(null).should.equal(true)
  })

  test('return true for `void 0', (t) => {
    isNil(void 0).should.equal(true)
  })

  test('return false for all truthy values', (t) => {
    isNil('hello').should.equal(false)
    isNil(true).should.equal(false)
    isNil({}).should.equal(false)
    isNil([]).should.equal(false)
    isNil(function () {}).should.equal(false)
  })
})
