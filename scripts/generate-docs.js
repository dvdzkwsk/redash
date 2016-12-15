/* eslint-disable no-undef, key-spacing, one-var */
require('../dist/installer')(global)
const fs     = require('fs')
    , path   = require('path')
    , exec   = require('shelljs').exec
    , marked = require('marked')
    , src    = path.resolve(__dirname, '../src')

const format = {
  h2        : str => '## ' + str
, codeBlock : str => '```js\n' + str + '\n```'
, codeLine  : str => '`' + str + '`'
}

// writeFile : String -> String -> WriteFile!
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

// toMarkdown : Doc -> String
const toMarkdown = pipe(juxt([pipe(prop('name'), format.h2)
                            , pipe(prop('signature'), format.codeLine)
                            , pipe(prop('description'), unless(isNil, prepend('\n')))
                            , pipe(prop('examples'), unless(isEmpty, pipe(formatExamples, prepend('\n'))))
                            ])
                      , compact
                      , flatten
                      , join('\n'))

// genNav : [Doc] -> Html
const genNav = pipe(map(pipe(prop('name')
                           , fn => `<a href="#${toLower(fn)}">${fn}</a>`))
                  , join(''))

// toHtml : [Doc] -> Html
const toHtml = docs => `
  <!doctype html>
  <html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.4.1/github-markdown.min.css">
    <style>
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }
      nav {
        position: fixed;
        top: 0;
        left: 0;
        padding: 0;
      }
      .nav-content {
        height: 100vh;
        padding: 1em 4em 0 2em;
        overflow-y: auto;
      }
      .nav-content a {
        display: block;
      }
    </style>
  </head>
  <body class="markdown-body">
    <nav>
      <div class="nav-content">
        ${genNav(docs)}
      </div>
    </nav>
    <article class="code-javascript">
      ${marked(join('\n', map(toMarkdown, docs)))}
    </article>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism-twilight.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js"></script>
  </body>
  </html>`

// main : [FileName] -> WriteFile!
pipe(
  filter(test(/\.js/))
, xs => xs.sort((a, b) => toLower(a).localeCompare(toLower(b)))
, map(pipe(tap((file) => console.log('Generating docs for: ' + file + '...'))
         , prepend(src + '/')
         , parseDocs))
, tap(writeFile(path.resolve(__dirname, '../docs/api.md')))
, toHtml
, tap(pipe(writeFile(path.resolve(__dirname, '../docs/api.html'))))
)(fs.readdirSync(src))
