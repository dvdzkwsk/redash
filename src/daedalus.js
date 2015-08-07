var assign = require('./utils/assign');

module.exports = exports = assign(
  {
    VERSION : '0.0.0'
  },
  require('./collections'),
  require('./functions'),
  require('./objects')
);
