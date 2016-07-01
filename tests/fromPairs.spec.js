var fromPairs = Redash.fromPairs

describe('(Function) fromPairs', function () {
  it('Should properly report its arity (is unary)', function () {
    fromPairs.should.have.length(1)
  })

  it('Should return an object compromised of all the key value pairs', function () {
    fromPairs([['foo', 'bar'], ['baz', 'biz']])
      .should.deep.equal({
        foo: 'bar'
      , baz: 'biz'
      })
  })

  it('Should prefer the last key/value pair when duplicate keys exist', function () {
    fromPairs([['foo', 'bar'], ['foo', 'baz']])
      .should.deep.equal({
        foo: 'baz'
      })
  })

  it('Should return an empty object if no key value pairs are provided', function () {
    fromPairs([])
      .should.deep.equal({})
  })

  // NOTE: asserts that old bug does not exist, back when fromPairs was implemented
  // as a `reduce` and the curried accumulator was mutated.
  it('Should work properly for repeated invocations', function () {
    fromPairs([['foo', 'bar']])
      .should.deep.equal({
        foo: 'bar'
      })

    fromPairs([['baz', 'biz']])
      .should.deep.equal({
        baz: 'biz'
      })
  })
})
