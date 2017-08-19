/** @jsx h */
import { h, Component } from 'preact'
import marked from 'marked'
import Prism from 'prismjs'

const pure = (WrappedComponent) => {
  return class PureComponent extends Component {
    shouldComponentUpdate () {
      return false
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}


const Example = ({ children }) => (
  <pre className='doc-card__example language-javascript'>
    <code
      dangerouslySetInnerHTML={{ __html: children }}
    />
  </pre>
)

const DocBlock = ({ name, signature, description, examples, since, see }) => {
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

export default pure(DocBlock)
