var fromPairs = Redash.fromPairs

describe('(Function) fromPairs', (t) => {
  test('properly report its arity (is unary)', (t) => {
    fromPairs.should.have.length(1)
  })

  test('return an object compromised of all the key value pairs', (t) => {
    fromPairs([['foo', 'bar'], ['baz', 'biz']])
      .should.deep.equal({
        foo: 'bar'
      , baz: 'biz'
      })
  })

  test('prefer the last key/value pair when duplicate keys exist', (t) => {
    fromPairs([['foo', 'bar'], ['foo', 'baz']])
      .should.deep.equal({
        foo: 'baz'
      })
  })

  test('return an empty object if no key value pairs are provided', (t) => {
    fromPairs([])
      .should.deep.equal({})
  })

  // NOTE: asserts that old bug does not exist, back when fromPairs was implemented
  // as a `reduce` and the curried accumulator was mutated.
  test('work properly for repeated invocations', (t) => {
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
