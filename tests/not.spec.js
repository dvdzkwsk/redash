var not = Redash.not

describe('(Function) not', (t) => {
  test('properly report its arity (is unary)', (t) => {
    not.should.have.length(1)
  })

  test('invert the provided value (true -> false, false -> true)', (t) => {
    not(true).should.equal(false)
    not(false).should.equal(true)
  })

  test('handle truthy values', (t) => {
    not([]).should.equal(false)
    not({}).should.equal(false)
  })

  test('handle falsy values', (t) => {
    not(0).should.equal(true)
    not('').should.equal(true)
    not(null).should.equal(true)
    not(undefined).should.equal(true)
  })

  test('handle `void`', (t) => {
    not(void 0).should.equal(true)
  })

  describe('If the received argument is a function...', (t) => {
    test('return a function', (t) => {
      not(function () {}).should.be.a('function')
    })

    describe('The returned function...', (t) => {
      test('have the same arity as the original', (t) => {
        not(function () {}).should.have.length(0)
        not(function (a0) {}).should.have.length(1)
        not(function (a0, a1) {}).should.have.length(2)
        not(function (a0, a1, a2) {}).should.have.length(3)
        not(function (a0, a1, a2, a3) {}).should.have.length(4)
        not(function (a0, a1, a2, a3, a4) {}).should.have.length(5)
      })

      test('be curried', (t) => {
        var fn = not(function (a0, a1, a2) {})

        fn(1).should.be.a('function')
        fn(1, 2).should.be.a('function')
        fn(1, 2, 3).should.not.be.a('function')
      })

      test('return the boolean complement of the original return value', (t) => {
        not(function () { return false })().should.equal(true)
        not(function () { return true })().should.equal(false)
      })

      test('properly cast truthy/falsy values', (t) => {
        not(function () { return '' })().should.equal(true)
        not(function () { return null })().should.equal(true)
        not(function () { return 0 })().should.equal(true)
        not(function () { return undefined })().should.equal(true)

        not(function () { return true })().should.equal(false)
        not(function () { return {} })().should.equal(false)
        not(function () { return [] })().should.equal(false)
        not(function () { return 'hello' })().should.equal(false)
      })
    })
  })
})
