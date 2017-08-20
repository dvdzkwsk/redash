const babelrc = require('@technologyadvice/genesis-core/src/babel/create-config')()
Object.assign(babelrc.presets[1][1], { modules: 'commonjs' })

require('babel-register')(babelrc)
