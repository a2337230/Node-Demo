const { getList, getDetail, newblog } = require('./../controller/blog')
const { SuccessModel, ErrorModel } = require('./../model/resModel')
const handleBlogRouter = (req, res) => {
  const method = req.method
  // const query = url.split('?')[1]

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || 0
    const result = getDetail(id)
    return result.then(row => {
      return new SuccessModel(row)
    })
    // return new SuccessModel(listData)
  }

  // 新建博客列表
  if (method === 'POST' && req.path === '/api/blog/new') {
    const result = newblog(req.body)
    if (result) {
      return result.then(data => {
        return new SuccessModel(data)
      })
    }
  }

  // 更新博客列表
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是更新博客的接口'
    }
  }

  // 删除博客列表
  if (method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleBlogRouter