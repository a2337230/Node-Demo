const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  res.end(
    JSON.stringify(querystring.parse(req.url.split('?')[1]))
  )
})

server.listen(8000)