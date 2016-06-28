var append = Redash.append

describe('(Function) append', function () {
  it('Should properly report its arity (is binary)', function () {
    append.should.have.length(2)
  })

  it('Should be curried', function () {
    append(1).should.be.a('function')
  })

  it('Should concatenate the first argument onto the end of the list', function () {
    append(5, [1, 2, 3, 4]).should.deep.equal([1, 2, 3, 4, 5])
  })

  it('Should work if the list is an empty array', function () {
    append(5, []).should.deep.equal([5])
  })

  it('Should not mutate the list', function () {
    var arr = [1, 2, 3, 4]
      , res = append(5, arr)

    arr.should.deep.equal([1, 2, 3, 4])
    res.should.deep.equal([1, 2, 3, 4, 5])
  })
})
