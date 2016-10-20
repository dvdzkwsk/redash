/* eslint-disable no-undef, one-var */
require('../installer')(global)
const fs   = require('fs')
    , path = require('path')
    , exec = require('shelljs').exec
    , src  = path.resolve(__dirname, '../src')

// readDir : String -> [String]
const readDir = path => fs.readdirSync(path)

// writeFile : String -> String -> Nil
const writeFile = curry((path, content) => fs.writeFileSync(path, content, 'utf8'))

// parseDocs : String -> Doc
const parseDocs = raw => {
  const docs = head(JSON.parse(exec('jsdoc -X ' + raw, { silent: true })))
  return {
    name: docs.name
  , signature: prop('value', find(propEq('title', 'signature'), docs.tags))
  , description: docs.description
  , examples: docs.examples || []
  }
}

// genDocs : Doc -> String
const genDocs = ({ name, examples, description, signature }) => {
  let lines = [
    `## ${name}`
  , `\`${signature}\``
  ]

  if (description) {
    lines = concat(lines, [`\n${description}`])
  }

  if (examples.length) {
    lines = concat(lines, '\n' + join('\n\n', map(ex => '```js\n' + ex + '\n```', examples)))
  }

  return join('\n', lines)
}

pipe(
  filter(test(/\.js/)),
  map(pipe(tap((file) => console.log('Generating docs for: ' + file + '...')),
           of,
           prepend(src),
           join('/'),
           parseDocs,
           genDocs)),
  join('\n\n---\n\n'),
  writeFile(path.resolve(__dirname, 'docs.md'))
)(readDir(src))
