const fs = require('fs')
const http = require('http')
const index = fs.readFileSync('index.html')
const path = require('path')
const url = require('url')

const port = process.env.PORT || 8080


function servePage(response) {
  response.writeHead(200, {'Content-Type': 'text/html'})
  return response.end(index)
}


const server = http.createServer((req, res) => {
  const uri = url.parse(req.url).pathname
  const filename = path.join(process.cwd(), uri)
  if(!uri || uri === '/') {
    return servePage(res)
  }
  fs.exists(filename, (exists) => {
    if(!exists) {
      return servePage(res)
    }
    fs.readFile(filename, 'binary', (err, file) => {
      if(err) {
        console.error(err)
        return res.end(JSON.stringify(err))
      }
      res.writeHead(200)
      res.write(file, 'binary')
      return res.end()
    })
  })
})

server.listen(port)

console.info(`Listening on port ${port}…`)
