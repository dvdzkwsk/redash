var concat = Redash.concat

describe('(Function) concat', function () {
  it('Should properly report its arity (is binary)', function () {
    concat.should.have.length(2)
  })

  it('Should be curried', function () {
    concat([1, 2, 3]).should.be.a('function')
  })

  it('Should concatenate the second list onto the first', function () {
    concat([1, 2, 3], [4, 5, 6])
      .should.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it('Should work if the first list is empty', function () {
    concat([], [1, 2, 3])
      .should.deep.equal([1, 2, 3])
  })

  it('Should work if the second list is empty', function () {
    concat([1, 2, 3], [])
      .should.deep.equal([1, 2, 3])
  })

  it('Should work if both lists are empty', function () {
    concat([], [])
      .should.deep.equal([])
  })

  it('Should always return a new list', function () {
    var as = [1, 2, 3]
      , bs = []
      , res

    res = concat(as, bs)
    as.should.deep.equal([1, 2, 3])
    res.should.not.equal(as)  // compare references
    res.should.deep.equal(as) // compare values

    res = concat(bs, bs)
    bs.should.deep.equal([])
    res.should.not.equal(bs)  // compare references
    res.should.deep.equal(bs) // compare values
  })
})
