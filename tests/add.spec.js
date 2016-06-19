var add = Redash.add

describe('(Function) add', function () {
  it('Should be a curried binary function', function () {
    expect(add()).to.be.a('function')
  })

  it('Should add two numbers', function () {
    add(1, 2).should.equal(3)
  })

  it('Should concatenate two strings', function () {
    add('hello')('goodbye').should.match(/hellogoodbye/)
  })
})
