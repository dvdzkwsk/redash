;(function () {
  redash(window) // eslint-disable-line
  window.klipse_settings = {
    selector_eval_js: '.code-example',
  }

  function loadScript (src) {
    const script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
  }

  window.addEventListener('load', function () {
    loadScript('https://cdn.zuko.me/klipse.js')
  })
})()
