const r = require('../lib/react')
const marked = require('marked')

const CodeExample = ({ children }) =>
  r.pre(null,
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
    r.p({ dangerouslySetInnerHTML: { __html: marked(description || '') } }),
    mapi((ex, i) => r(CodeExample, { key: i }, ex), examples))

const App = ({ functions }) =>
  r.div(null,
    r.nav(null,
    map(({ name }) => r.a({ key: name, href: `#${toLower(name)}` }, name), functions)),
    r.main({ className: 'main__content' },
      map((fn) => r(FunctionDoc, merge({ key: fn.name }, fn)), functions)))

module.exports = App
