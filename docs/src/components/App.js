const r = require('../lib/react')
const marked = require('marked')

const CodeExample = ({ children }) =>
  r.pre({ className: 'language-javascript' },
    r.code(null, children))

const FunctionDoc = ({
  name,
  signature,
  description,
  examples,
  since,
  see,
}) =>
  r.div(null,
    r.h2({ id: toLower(name) }, name),
    mapi((sig, i) => r.p({ key: i }, null, r.code(null, sig)), signature.split('\n')),
    r.div({ dangerouslySetInnerHTML: { __html: marked(description || '') } }),
    mapi((ex, i) => r(CodeExample, { key: i }, ex), examples))

const App = ({ functions }) =>
  r.div(null,
    r.nav(null,
    map(({ name }) => r.a({ key: name, href: `#${toLower(name)}` }, name), functions)),
    r.main({ className: 'main__content' },
      map((fn) => r(FunctionDoc, merge({ key: fn.name }, fn)), functions)))

module.exports = App
