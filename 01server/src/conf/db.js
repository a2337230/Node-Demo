const env = process.env.NODE_ENV // 环境变量

// 配置
let MYSQL_CONF = {}

if (env === 'dev') {
  MYSQL_CONF = {
    host: '43.128.12.129',
    user: 'ceshisql',
    password: '388Nrt4DT7a22SP2',
    port: 3306,
    database: 'ceshisql'
  }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: '43.128.12.129',
    user: 'ceshisql',
    password: '388Nrt4DT7a22SP2',
    port: 3306,
    database: 'ceshisql'
  }
}
module.exports = {
  MYSQL_CONF
}