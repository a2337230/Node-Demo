const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
  host: '43.128.12.129',
  user: 'ceshisql',
  password: '388Nrt4DT7a22SP2',
  database: 'ceshisql'
})

// 开始链接
con.connect()

// 执行sql
const sql = 'select * from users'
con.query(sql, (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})

// 关闭连接
con.end()