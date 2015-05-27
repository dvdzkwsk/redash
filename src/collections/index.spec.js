var collections = require('./index'),
    EXPECTED_FUNCTIONS = [
      'filter',
      'forEach',
      'map',
      'reduce',
      'reject'
    ];

describe('collections', function () {
  it('Should be an object.', function () {
    expect(collections).to.be.an.object;
  });

  EXPECTED_FUNCTIONS.forEach(function (fnName) {
    it('should have a method .' + fnName + '()', function () {
      expect(collections[fnName]).to.be.a.function;
    });
  });
});
