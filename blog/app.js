const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const serverHandle = (req, res) => {
  // 环境配置
  const env = process.env.NODE_ENV
  // 设置返回格式
  res.setHeader('Content-type', 'application/json')
  // 获取path
  const url = req.url
  req.path = url.split('?')[0]

  // 解析query
  req.query = querystring.parse(url.split('?')[1])
  // 处理路由
  const blogData = handleBlogRouter(req, res)
  const userData = handleUserRouter(req, res)
  if (blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return
  }

  if (userData) {
    res.end(
      JSON.stringify(userData)
    )
    return
  }
}

module.exports = serverHandle