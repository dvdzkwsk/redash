/* eslint-disable no-undef, key-spacing, one-var */
require('../dist/installer')(global)
const fs      = require('fs')
    , exec    = require('shelljs').exec
    , pug     = require('pug')
    , path    = require('path')
    , package = require('../package.json')
    , local   = path.resolve.bind(path, __dirname, '../..')

// compileTemplate : Object -> String
const compileTemplate = pug.compileFile(local('docs/src/template.pug'))

// writeFile : String -> String -> WriteFile!
const writeFile = curry((path, content) => fs.writeFileSync(path, content, 'utf-8'))

// parseDocs : FilePath -> Doc
const parseDocs = pipe(filelocal => exec('jsdoc -X ' + filelocal, { silent: true })
                      , JSON.parse
                      , head
                      , doc => ({
                        name: doc.name
                      , signature: doc.tags && prop('value', find(propEq('title', 'signature'), doc.tags))
                      , description: doc.description
                      , examples: doc.examples || []
                      }))

// toHtml : [Doc] -> String
const toHtml = (docs) => compileTemplate({
  title: `${package.name} v${package.version} | ${package.description}`
, api: docs
})

// main : [FileName] -> WriteFile!
pipe(
  filter(test(/\.js/))
, xs => xs.sort((a, b) => toLower(a).localeCompare(toLower(b)))
, map(pipe(tap((file) => console.log('Generating docs for: ' + file + '...'))
         , prepend(local('src') + '/')
         , parseDocs))
, tap(writeFile(local('docs/dist/api.json')))
, tap(pipe(toHtml, writeFile(local('docs/dist/index.html'))))
)(fs.readdirSync(local('src')))
