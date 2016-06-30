var compact = Redash.compact

describe('(Function) compact', function () {
  it('Should properly report its arity (is unary)', function () {
    compact
      .should.have.length(1)
  })

  describe('It should exclude items that are...', function () {
    it('`null`', function () {
      compact([null])
        .should.deep.equal([])
    })

    it('`undefined`', function () {
      compact([undefined])
        .should.deep.equal([])
    })

    it('`void 0`', function () {
      compact([void 0])
        .should.deep.equal([])
    })

    it('`0` (numerical)', function () {
      compact([0])
        .should.deep.equal([])
    })

    it('empty strings', function () {
      compact([''])
        .should.deep.equal([])
    })
  })

  it('Should not exclude truthy values', function () {
    var fn = function () {}

    compact([{}, [], 'hello', 5, fn])
      .should.deep.equal([{}, [], 'hello', 5, fn])
  })

  it('Should not mutate the input list', function () {
    var arr = [null, 2, 3, undefined, 5]
      , cmp = compact(arr)

    arr.should.deep.equal([null, 2, 3, undefined, 5])
    cmp.should.deep.equal([2, 3, 5])
  })

  it('Should not mutate the input list even if no items are excluded', function () {
    var arr = [1, 2, 3, 4, 5]
      , cmp = compact(arr)

    cmp.should.not.equal(arr)  // compare references
    cmp.should.deep.equal(arr) // compare values
  })
})
