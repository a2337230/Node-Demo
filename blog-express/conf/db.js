const env = process.env.NODE_ENV

// 配置
let MYSQL_CONF = {}
let REDIS_CONF = {}
if (env === 'dev') {
  MYSQL_CONF = {
    host: '43.128.12.129',
    user: 'ceshisql',
    password: '388Nrt4DT7a22SP2',
    database: 'ceshisql'
  }

  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}

module.exports = {
  MYSQL_CONF
}