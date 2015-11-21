var add = Daedalus.add

describe('(Function) add', function () {
  it('Should be a function.', function () {
    expect(add).to.be.a('function')
  })
  
  it('Should be curried.', function () {
    expect(add()).to.be.a('function')
  })
  
  it('Should add two numbers.', function () {
    expect(add(1)(2)).to.equal(3)  
    expect(add(2, 2)).to.equal(4)  
  })
  
  it('Should concatenate two strings.', function () {
    expect(add('hello')('goodbye')).to.match(/hellogoodbye/)
    expect(add('hello')('adios')).to.match(/helloadios/)
  })
})