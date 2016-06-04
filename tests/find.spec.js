var find = Redash.find

describe('(Function) find', function () {
  it('Should be a function.', function () {
    expect(find).to.be.a('function')
  })

  it('Should be curried to an arity of 2.', function () {
    expect(find()).to.be.a('function')
  })

  it('Should return the first matching item.', function () {
    var equalsC = function (x) { return x === 'c' }

    expect(find(equalsC, ['a', 'b', 'c', 'd', 'c'])).to.equal('c')
  })

  it('Should return undefined if no match is found.', function () {
    var noop = function () {}

    expect(find(noop, ['a', 'b', 'c', 'd', 'e'])).to.equal(undefined)
  })
})
