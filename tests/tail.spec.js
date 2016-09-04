var tail = Redash.tail

describe('(Function) tail', (t) => {
  test('return all but the first item in a list.', (t) => {
    expect(tail([1, 2, 3, 4])).to.deep.equal([2, 3, 4])
  })

  test('return an empty list if the provided list has 1 item.', (t) => {
    const res = tail([1])

    expect(res).to.be.an('array')
    expect(res).to.have.length(0)
  })

  test('return an empty list if the provided list has 0 items.', (t) => {
    const res = tail([])

    expect(res).to.be.an('array')
    expect(res).to.have.length(0)
  })
})
