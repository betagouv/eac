const apiUrl = location.hostname === 'localhost'
  ? 'http://localhost:3000'
  : 'https://eac-api.herokuapp.com'

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
