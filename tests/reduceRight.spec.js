var reduceRight = Redash.reduceRight

describe('(Function) reduceRight', (t) => {
  test('be a function.', (t) => {
    expect(reduceRight).to.be.a('function')
  })

  test('have an alias "foldr".', (t) => {
    expect(reduceRight).to.equal(Redash.foldr)
  })

  test('be curried to an arity of 3.', (t) => {
    expect(reduceRight()).to.be.a('function')
    expect(reduceRight()()).to.be.a('function')
  })

  test('pass the accumulator result through the list from R -> L.', (t) => {
    var _calls = []
      , spy = function (acc, x) {
        _calls.push([acc, x])
        return acc + x
      }

    reduceRight(spy, 0, [1, 2, 3])
    expect(_calls[0]).to.deep.equal([0, 3])
    expect(_calls[1]).to.deep.equal([3, 2])
    expect(_calls[2]).to.deep.equal([5, 1])
  })

  test('provide arguments of (accumulator, item, index).', (t) => {
    var _calls = []
      , spy = function (acc, x) {
        _calls.push([acc, x])
        return acc + x
      }

    reduceRight(spy, 0, [1, 2, 3])
    expect(_calls[0]).to.deep.equal([0, 3])
    expect(_calls[1]).to.deep.equal([3, 2])
    expect(_calls[2]).to.deep.equal([5, 1])
  })

  test('return the accumulated result.', (t) => {
    var res = reduceRight(function (acc, x) { return acc + x }, 0, [1, 2, 3])

    expect(res).to.equal(6)
  })
})
