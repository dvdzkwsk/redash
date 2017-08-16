import React from 'react'
import DocBlock from './DocBlock'

const Navbar = () =>
  <nav className='navbar navbar-light sticky-top bg-primary' style={{ color: '#fff' }}>
    <a className='navbar-brand mr-auto'>
      <span className='r'>Re</span>
      dash
    </a>
  </nav>

const scrollToTarget = (e) => {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute('href'))
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = target.getBoundingClientRect()

  window.scroll(0, elemRect.top - bodyRect.top - 75)
}

const TableOfContents = ({ functions, search, onSearchChange }) => (
  <div className='toc'>
    <form className='toc__search d-flex align-items-center'>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
        onChange={onSearchChange}
        value={search}
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
  state = {
    search: '',
  }

  _onSearchChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render () {
    const { api } = this.props
    const { search } = this.state

    let functions = api
    const normalizedSearch = search.trim().toLowerCase()
    if (normalizedSearch) {
      functions = filter((fn) => {
        return fn.name.includes(normalizedSearch)
      }, functions)
    }

    return (
      <div style={{ height: '100%' }}>
        <Navbar />
        <div className='container-fluid'>
          <div className='row' style={{ height: '100%' }}>
            <div className='col-2 toc-wrapper'>
              <TableOfContents functions={functions} search={search} onSearchChange={this._onSearchChange} />
            </div>
            <div className='col-10'>
              <main>
                {map(fn => (
                  <DocBlock key={fn.name} {...fn} />
                ), functions)}
              </main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
