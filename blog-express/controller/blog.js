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
  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newblog = (blogData = {}) => {
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createtime = Date.now()
  if (title) {
    const sql = `insert into blogs(title,content,author,createtime) values('${title}','${content}', '${author}', ${createtime}); `
    return exec(sql).then(row => {
      return {
        id: row.insertId
      }
    })
  }
  
}
module.exports = {
  getList,
  getDetail,
  newblog
}