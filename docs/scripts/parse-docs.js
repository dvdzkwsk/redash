require('../../dist/installer')(global)
const fs    = require('fs')
    , exec  = require('shelljs').exec
    , path  = require('path')
    , pkg   = require('../../package.json')
    , local = path.resolve.bind(path, __dirname, '../../')

// writeFile : String -> String -> WriteFile!
const writeFile = curry((path, content) => fs.writeFileSync(path, content, 'utf-8'))

// parseDocs : FilePath -> Doc
const parseDocs = pipe([file => exec(local('node_modules/.bin/jsdoc') + ' -X ' + file, { silent: true })
                      , JSON.parse
                      , head
                      , tap(x => console.log(x))
                      , doc => ({
                        name: doc.name
                      , signature: doc.tags && prop('value', find(propEq('title', 'signature'), doc.tags))
                      , since: doc.since
                      , see: doc.see || []
                      , description: doc.description
                      , examples: doc.examples || []
                      })])

// main : [FileName] -> WriteFile!
pipe([
  filter(test(/\.js/))
, xs => xs.sort((a, b) => toLower(a).localeCompare(toLower(b)))
, map(pipe([tap((file) => console.log('Generating docs for: ' + file + '...'))
          , prepend(local('src') + '/')
          , parseDocs]))
, api => ({ api, title: pkg.title, description: pkg.description, version: pkg.version })
, tap(pipe([x => JSON.stringify(x), writeFile(local('docs/.api_cache.json'))]))
])(fs.readdirSync(local('src')))
