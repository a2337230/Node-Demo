const http = require('http')

const server = http.createServer((req, res) => {
  res.end(
    JSON.stringify(querystring.parse(req.url.split('?')[1]))
  )
})
server.listen(8000)