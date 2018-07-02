const fs = require('fs')
const http = require('http')
const index = fs.readFileSync('index.html')
const path = require('path')
const url = require('url')

const port = process.env.PORT || 8080


const server = http.createServer((req, res) => {
  const filename = path.join(process.cwd(), url.parse(req.url).pathname)
  fs.exists(filename, (exists) => {
    if(!exists) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      return res.end(index)
    }
    fs.readFile(filename, 'binary', (err, file) => {
      res.writeHead(200)
      res.write(file, 'binary')
      return res.end()
    })
  })
})

server.listen(port)

console.info(`Listening on port ${port}…`)
