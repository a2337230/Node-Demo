const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res) => {
  let method = req.method
  let url = req.url
  let path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  // 设置返回格式
  res.setHeader('Content-type', 'application/json')

})

server.listen(8000)