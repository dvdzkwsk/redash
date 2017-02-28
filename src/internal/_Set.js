import _contains from './_contains'

function _Set () {
  this._items = {}
}

_Set.prototype.add = function (value) {
  var type = typeof value

  switch (type) {
    case 'boolean':
    case 'number':
    case 'string':
      if (!this._items[type]) {
        this._items[type] = {}
        this._items[type][value] = true
        return true
      }
      if (!this._items[type][value]) {
        this._items[type][value] = true
        return true
      }
      return false
    case 'undefined':
      if (!this._items.undefined) {
        this._items.undefined = true
        return true
      }
      return false
    case 'object':
      if (value == null) {
        if (!this._items.null) {
          this._items.null = true
          return true
        }
        return false
      }
      // intentionally fall through, since we only wanted to handle `null`
    default: // eslint-disable-line
      if (!this._items[type]) {
        this._items[type] = [value]
        return true
      }
      if (!_contains(value, this._items[type])) {
        this._items[type][this._items[type].length] = value
        return true
      }
      return false
  }
}

_Set.prototype.clear = function () {
  this._items = {}
}

export default _Set
