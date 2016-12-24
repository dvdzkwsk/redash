const r = require('../lib/react')

const Script = ({ src, inject, content }) => inject
   ? r.script({ dangerouslySetInnerHTML: { __html: content } })
   : r.script({ src })

const Style = ({ href, inject, content }) => inject
  ? r.style({ dangerouslySetInnerHTML: { __html: content } })
  : r.link({ href, rel: 'stylesheet' })

const HTML = ({
  children,
  title,
  scripts = [],
  styles = [],
}) =>
  r.html({ className: 'no-js' },
    r.head(null,
      r.title(null, title),
      r.meta({ charSet: 'utf-8' }),
      r.meta({ name: 'viewport', content: 'width=device-width,initial-scale=1' }),
      mapi((s, i) => r(Style, merge(s, { key: i })), styles)),
    r.body({ className: 'markdown-body' },
      r.div({ id: 'root', dangerouslySetInnerHTML: { __html: children }}),
      mapi((s, i) => r(Script, merge(s, { key: i })), scripts)))

module.exports = HTML
