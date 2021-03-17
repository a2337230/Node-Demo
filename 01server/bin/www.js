// 引入http模块
const http = require('http')
// 自定义端口号
const PORT = 3000
// 引入处理函数
const serverHandle = require('./../app')
// 启用server
const server = http.createServer(serverHandle)
// 启动服务器
server.listen(PORT)
console.log('启动成功')