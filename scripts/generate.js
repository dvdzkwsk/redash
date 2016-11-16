/* eslint-disable no-undef, one-var */
require('../dist/installer')(global)
const fs   = require('fs')
    , path = require('path')
    , exec = require('shelljs').exec
    , src  = path.resolve(__dirname, '../src')

// writeFile : String -> String -> Nil
const writeFile = curry((path, content) => fs.writeFileSync(path, content, 'utf8'))

// parseDocs : String -> Doc
const parseDocs = pipe(content => exec('jsdoc -X ' + content, { silent: true })
                      , JSON.parse
                      , head
                      , doc => ({
                        name: doc.name
                      , signature: doc.tags ? prop('value', find(propEq('title', 'signature'), doc.tags)) : ''
                      , description: doc.description
                      , examples: doc.examples || []
                      }))

// formatExamples : [String] -> String
const formatExamples = pipe(map(ex => '```js\n' + ex + '\n```')
                          , join('\n\n'))

// formatDocs : Doc -> String
const formatDocs = doc => {
  const lines = ['## ' + doc.name, '`' + doc.signature + '`']

  if (doc.description) lines.push(['\n' + doc.description])
  if (doc.examples.length) lines.push('\n' + formatExamples(doc.examples))
  return join('\n', lines)
}

// generate : [FilePath] -> String
const generate = pipe(map(pipe(tap((file) => console.log('Generating docs for: ' + file + '...'))
                              , prepend(src + '/')
                              , parseDocs
                              , formatDocs))
                    , join('\n\n---\n\n'))

// main : [FilePath] -> WriteFile!
pipe(
  filter(test(/\.js/))
, generate
, writeFile(path.resolve(__dirname, 'docs.md'))
)(fs.readdirSync(src))
