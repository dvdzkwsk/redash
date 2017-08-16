import React from 'react'
import marked from 'marked'
import Prism from 'prismjs'

const Example = ({ children }) => (
  <pre className='doc-card__example language-javascript'>
    <code
      dangerouslySetInnerHTML={{ __html: children }}
    />
  </pre>
)

class DocBlock extends React.PureComponent {
  render () {
    const { name, signature, description, examples, since, see } = this.props
    const id = toLower(name)
    return (
      <div className='doc-card'>
        <h3 id={id} className='mt-0 h2'>
          {name}
          {' '}
          <small className='text-muted' style={{ fontSize: '0.5em' }}>
            {since}
          </small>
        </h3>
        <div
          className='markdown-body'
          dangerouslySetInnerHTML={{ __html: marked(description || '') }}
        />
        {!isEmpty(see) && (
          <h4 className='lead mt-3 font-weight-normal'>
            Related:
            {' '}
            {map(fn => (
              <a
                key={fn}
                href={`#${toLower(fn)}`}
                className='doc-card__related-link'
              >
                {fn}
              </a>
            ), see)}
          </h4>
        )}
        <hr />
        {mapi((example, i) => (
          <Example key={i}>
            {Prism.highlight(example, Prism.languages.javascript)}
          </Example>
        ), examples)}
      </div>
    )
  }
}

export default DocBlock
