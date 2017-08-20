const enableSmartLinks = () => {
  document.addEventListener('click', (e) => {
    const href = e.target.getAttribute('href')
    if (!href || href.length === 1 || href[0] !== '#') return

    e.preventDefault()
    const target = document.querySelector(href)
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = target.getBoundingClientRect()

    window.scroll(0, elemRect.top - bodyRect.top - 75)
  })
}

const enableSearch = () => {
  const $search = document.querySelector('.toc__search')
  const $navItems = [...document.querySelectorAll('.toc__item')]
  const $docCards = [...document.querySelectorAll('.doc-card')]

  $search.addEventListener('input', (e) => {
    const search = e.target.value.trim().toLowerCase()
    const matchesSearch = (node) => {
      node.style.display = node.getAttribute('data-name').includes(search)
        ? 'block'
        : 'none'
    }

    $navItems.forEach(matchesSearch)
    $docCards.forEach(matchesSearch)
  })
}

;(function init () {
  enableSmartLinks()
  enableSearch()
})()
