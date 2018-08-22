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

async function schoolById(id) {
  if (id.includes(',')) {
    const [lng, lat] = id.split(',')
    const addresses = await request(`https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}&limit=1`)
    if (addresses.features) {
      const feature = addresses.features[0]
      return Promise.resolve({
        name: feature.properties.label, 
        city: feature.properties.city.toUpperCase(),
        postalCode: feature.properties.postcode,
        loc: {
          coordinates: feature.geometry.coordinates 
        }
      })
    }    
  } 
  return api(`/schools/${id}`)
}
