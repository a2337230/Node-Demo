const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '123',
      content: '324',
      createTime: new Date().now,
      author: 'zzzz'
    },
    {
      id: 1,
      title: '123',
      content: '324',
      createTime: new Date().now,
      author: 'zzzz'
    },
    {
      id: 1,
      title: '123',
      content: '324',
      createTime: new Date().now,
      author: 'zzzz'
    }
  ]
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

}
module.exports = {
  getList,
  getDetail,
  newblog
}