import React from 'react'
import DocBlock from './DocBlock'

const Navbar = () =>
  <nav className='navbar navbar-light sticky-top bg-primary' style={{ color: '#fff' }}>
    <a className='navbar-brand mr-auto'>
      Redash
    </a>
  </nav>

const scrollToTarget = (e) => {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute('href'))
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = target.getBoundingClientRect()

  window.scroll(0, elemRect.top - bodyRect.top - 75)
}

const TableOfContents = ({ functions }) => (
  <div className='toc'>
    <form className='toc__search d-flex align-items-center'>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
      />
    </form>
    <nav>
      <ul className='toc__items'>
        {map(({ name }) => (
          <li className='toc__item' key={name}>
            <a className='toc__link' href={`#${toLower(name)}`} onClick={scrollToTarget}>
              {name}
            </a>
          </li>
        ), functions)}
      </ul>
    </nav>
  </div>
)

class App extends React.Component {
  render () {
    const { api } = this.props

    return (
      <div>
        <Navbar />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2 toc-wrapper'>
              <TableOfContents functions={api} />
            </div>
            <div className='col-10'>
              {map(fn => (
                <DocBlock key={fn.name} {...fn} />
              ), api)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
