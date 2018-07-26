const express = require('express')
const serveStatic = require('serve-static')

const app = express()
const port = process.env.PORT || 8080

app.use(serveStatic(__dirname))
app.all('*', (_req, res) => res.sendFile(`${__dirname}/index.html`))
app.listen(port, () => console.log(`Listening on port ${port}…`))
