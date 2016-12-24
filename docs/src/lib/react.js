const r = require('react').createElement

/* eslint-disable */
forEach(tag => r[tag] = (...args) => r(tag, ...args),
        ['html', 'head', 'title', 'link', 'script', 'style', 'meta', 'body', 'div',
         'main', 'nav', 'article', 'section', 'p', 'span', 'ul', 'ol', 'li',
         'a', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre',
         'link', 'script', 'noscript', 'meta'])
/* eslint-enable */

module.exports = r
