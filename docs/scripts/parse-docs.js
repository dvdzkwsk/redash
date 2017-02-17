require('../../dist/installer')(global)
const fs    = require('fs')
    , exec  = require('shelljs').exec
    , path  = require('path')
    , pkg   = require('../../package.json')
    , local = path.resolve.bind(path, __dirname, '../../')

// readFile : String -> String
const readFile = file => fs.readFileSync(file, 'utf8')

// writeFile : String -> String -> WriteFile!
const writeFile = curry((path, content) => fs.writeFileSync(path, content, 'utf-8'))

// removeFile : String -> RemoveFile!
const removeFile = file => fs.unlinkSync(file)

// normalizeJSDoc : Object -> Object
const normalizeJSDoc = ({ name, description, examples, see, since, tags }) => ({
  name
, description
, since
, signature: tags && prop('value', find(propEq('title', 'signature'), tags))
, examples: examples || []
, see: see || []
})

// parseDocs : String -> Array<Doc>
// because JSDoc doesn't expose a Node API, we have to write a file to disk
// containing all of our docs and have its CLI parse that. We join all files
// together because running them independently is slow.
const parseDocs = pipe([tap(writeFile('/tmp/halcyon.js'))
                      , () => exec(local('node_modules/.bin/jsdoc') + ' -X /tmp/halcyon.js', { silent: true })
                      , tap(() => removeFile('/tmp/halcyon.js'))
                      , JSON.parse
                      , map(normalizeJSDoc)
                      , reject(where({ signature: isNil }))])

// main : [FileName] -> WriteFile!
pipe([
  filter(test(/\.js/))
, xs => xs.sort((a, b) => toLower(a).localeCompare(toLower(b)))
, map(pipe([prepend(local('src') + '/'), readFile]))
, join('\n')
, parseDocs
, api => ({ api, title: pkg.title, description: pkg.description, version: pkg.version })
, tap(pipe([x => JSON.stringify(x), writeFile(local('docs/.api_cache.json'))]))
])(fs.readdirSync(local('src')))
