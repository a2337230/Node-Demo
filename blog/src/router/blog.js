const { getList, getDetail, newblog } = require('./../controller/blog')
const { SuccessModel, ErrorModel } = require('./../model/resModel')
const handleBlogRouter = (req, res) => {
  const method = req.method
  // const query = url.split('?')[1]

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id || 0
    const listData = getDetail(id)
    return new SuccessModel(listData)
  }

  // 新建博客列表
  if (method === 'POST' && req.path === '/api/blog/new') {
    return new SuccessModel(req.body)
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