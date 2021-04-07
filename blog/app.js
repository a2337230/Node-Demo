const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
// const SESSION_DATA = {}
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}
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
  // 解析cookie
  req.cookie = {}
  const cookieStr = req.headers.cookie || ''
  cookieStr.split(';').forEach(item => {
    if (item) {
      const arr = item.split('=')
      const key = arr[0]
      const val = arr[1]
      req.cookie[key] = val
    }
  })
  // 解析session
  // const userId = req.cookie.userId
  // if (userId) {
  //   if (SESSION_DATA[userId]) {
  //     req.session = SESSION_DATA[userId]
  //   } else {
  //     SESSION_DATA[userId] = {}
  //     req.session = SESSION_DATA[userId]
  //   }
  // }
  // 处理 post data
  getPostData(req).then(postData => {
    req.body = postData
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        if (blogData) {
          res.end(
            JSON.stringify(blogData)
          )
          
        }
        return
      })
    }
  })
  // 处理路由
  const blogData = handleBlogRouter(req, res)
  const userData = handleUserRouter(req, res)
  if (blogData) {
    blogData.then(blog => {
      console.log(blog, 45645)
      res.end(
        JSON.stringify(blog)
      )
    })
    return
  }

  if (userData) {
    userData.then(user => {
      res.end(
        JSON.stringify(user)
      )
    })
    return
  }
}

module.exports = serverHandle