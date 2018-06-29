require('/tags/app.tag.html', 'riot/tag')
require('/vendors/js/riot+compiler.min.js')
require('/vendors/js/leaflet.js')


function loaded(src) {
  riot.mount('*')
}


function require(src, type = 'text/javascript') {
  const script = document.createElement('script')
  script.onload = loaded
  script.src = src
  script.type = type
  document.head.appendChild(script)
}
