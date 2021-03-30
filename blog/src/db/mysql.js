const mysql = require('mysql')

const { MYSQL_CONF } = require('./../conf/db')

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF)
// 开始链接
con.connect()

// 关闭连接
con.end()