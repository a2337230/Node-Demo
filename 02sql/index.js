const mysql = require('mysql')

// 创建连接对象
const con = mysql.createConnection({
  host: '43.128.12.129',
  user: 'ceshisql',
  password: '388Nrt4DT7a22SP2',
  port: 3306,
  database: 'ceshisql'
})
con.connect()

const sql = 'select * from users;'
con.query(sql, (err, result) => {
  console.log(result)
  if (err) {
    console.log(err)
    return
  }
  console.log('成功', result)
})
// 关闭连接
con.end()
