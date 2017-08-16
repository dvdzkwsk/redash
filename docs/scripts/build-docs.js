const path = require('path')

require('@technologyadvice/genesis-core')(require('../genesis.config')).build({
  out: path.resolve(__dirname, '../dist'),
})
