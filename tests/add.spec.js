var add = Redash.add

describe('(Function) add', function () {
  it('Should properly report its arity (is binary)', function () {
    add.should.have.length(2)
  })

  it('Should be curried', function () {
    add(5).should.be.a('function')
  })

  it('Should add two numbers', function () {
    add(1, 2).should.equal(3)
  })

  it('Should concatenate two strings', function () {
    add('hello')('goodbye').should.equal('hellogoodbye')
  })
})
