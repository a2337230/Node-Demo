const { exec } = require('./../db/mysql')

const getList = (author, keyword) => {
  let sql = `select id,title,content,createtime,author from blogs where 1=1 `
  if (author) {
    sql+= `and author='${author}' `
  }
  if (keyword) {
    sql+= `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  return exec(sql)
}

const getDetail = (id) => {
  return {
    id: 1,
    title: '123',
    content: '324',
    createTime: new Date().now,
    author: 'zzzz'
  }
}

const newblog = (blogData = {}) => {
  return {
    id: 3
  }
}
module.exports = {
  getList,
  getDetail,
  newblog
}