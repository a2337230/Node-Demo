const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('./../model/resModel')
const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if (method === 'POST' && req.path === '/api/user/login') {
    console.log(req.body, 123)
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        return new SuccessModel()
      }
      return ErrorModel('密码错误')
    })
    // if (result) {
    //   return new SuccessModel()
    // }
    // return ErrorModel('密码错误')
  }
}

module.exports = handleUserRouter