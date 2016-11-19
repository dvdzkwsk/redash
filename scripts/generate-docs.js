/* eslint-disable no-undef, key-spacing, one-var */
require('../dist/installer')(global)
const fs     = require('fs')
    , path   = require('path')
    , exec   = require('shelljs').exec
    , src    = path.resolve(__dirname, '../src')
    , unless = curry((pred, fn) => when(complement(pred), fn))

const format = {
  h2        : str => '## ' + str
, codeBlock : str => '```js\n' + str + '\n```'
, codeLine  : str => '`' + str + '`'
}

// writeFile : String -> String -> Nil
const writeFile = curry((path, content) => fs.writeFileSync(path, content, 'utf8'))

// parseDocs : FilePath -> Doc
const parseDocs = pipe(filepath => exec('jsdoc -X ' + filepath, { silent: true })
                      , JSON.parse
                      , head
                      , doc => ({
                        name: doc.name
                      , signature: doc.tags ? prop('value', find(propEq('title', 'signature'), doc.tags)) : ''
                      , description: doc.description
                      , examples: doc.examples || []
                      }))

// formatExamples : [String] -> String
const formatExamples = pipe(map(format.codeBlock), join('\n\n'))

// formatDocs : Doc -> String
const formatDocs = pipe(juxt([pipe(prop('name'), format.h2)
                            , pipe(prop('signature'), format.codeLine)
                            , pipe(prop('description'), unless(isNil, prepend('\n')))
                            , pipe(prop('examples'), unless(isEmpty, pipe(formatExamples, prepend('\n'))))
                            ])
                      , compact
                      , reduce(concat, [])
                      , join('\n'))

// main : [FileName] -> WriteFile!
pipe(
  filter(test(/\.js/))
, map(pipe(tap((file) => console.log('Generating docs for: ' + file + '...'))
         , prepend(src + '/')
         , parseDocs
         , formatDocs))
, join('\n\n---\n\n')
, writeFile(path.resolve(__dirname, '../docs/api.md'))
)(fs.readdirSync(src))
