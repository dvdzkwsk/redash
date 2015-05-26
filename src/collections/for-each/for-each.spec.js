var forEach = require('./for-each');

describe('.forEach()', function () {
  it('Should pass each element in a collection to the provided callback.', function () {
    var _xs = [1,2,3],
        _found = [];

    forEach(function (item) {
      _found.push(item);
    }, _xs);

    expect(_found).to.deep.equal(_xs);
  });

  it('Should provide the element index as the second argument in the callback.', function () {
    var _indexes = [];

    forEach(function (_, idx) {
      expect(idx).to.be.a.number;
      _indexes.push(idx);
    }, [true, true, true]);

    expect(_indexes).to.deep.equal([0, 1, 2]);
  });

  it('Should not call the callback if the collection is empty.', function () {
    var _called = false;

    forEach(function () {
      _called = true;
    }, []);

    expect(_called).to.equal(false);
  });

  it('Should throw if the provided collection is not an array.', function () {
    [{}, undefined, null, true, 1, "foo"]
      .forEach(function (collection) {
        expect(function () {
          forEach(function () {}, collection);
        }).to.throw;
      });
  });
});
