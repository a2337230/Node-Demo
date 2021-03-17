const serverHandle = (req, res) => {
  // 设置返回JSON格式
  res.setHeader('Content-type', 'application/json')
  
  const resData = {
    name: 12,
    password: 'j543540310',
    cross: process.env.NODE_ENV // 获取当前运行环境
  }
  res.end(
    JSON.stringify(resData)
  )
}
module.exports = serverHandle