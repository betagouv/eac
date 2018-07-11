const apiUrl = localStorage.getItem('apiUrl') || 'https://eac-api.herokuapp.com'

const includeJs = require([
  '/vendors/js/riot+compiler.min.js',
  '/vendors/js/page.js',
  '/vendors/js/leaflet.js',
  '/vendors/js/awesomplete.min.js',
])

requireTags([
  '/tags/app.tag.html',
  '/tags/pages/search.tag.html',
  '/tags/pages/actor.tag.html',
  '/tags/pages/actor-edit.tag.html',
  '/tags/partials/search-filters.tag.html',
  '/tags/partials/actor-card.tag.html',
  '/tags/partials/actors-map.tag.html',
  '/tags/partials/color-tag.tag.html',
  '/tags/partials/search-form.tag.html',
  '/tags/partials/select-school.tag.html',
])


includeJs.then(() => riot.mount('*'))

function request (url, options = {}) {
  const params = Object.assign(options, {
    mode: 'cors',
  })
  return fetch(url, params)
    .then(r => r.json())
    .catch(console.error.bind(console))
}

function api (uri, options) {
  return request(`${apiUrl}${uri}`, options)
}

function urlParams(queryString = location.search) {
  const keyValues = queryString.startsWith('&') ? queryString.slice(1) : queryString
  return new Map(keyValues.split('&').map(kv => kv.split('=')))
}

function normalizeString (str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function require(sources, type = 'text/javascript') {
  return new Promise((resolve) => {
    let loadedCount = 0
    sources.forEach(src => {
      const script = document.createElement('script')
      script.onload = () => {
        loadedCount++
        if(loadedCount === sources.length) {
          resolve()
        }
      }
      script.src = src
      script.type = type
      document.head.appendChild(script)
    })
  })
}
function requireTags(sources) {
  return require(sources, 'riot/tag')
}
