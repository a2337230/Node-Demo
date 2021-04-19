const { Blog, User } = require('./model')

!(async function() {
  const zhangsan = await User.create({
    userName: 'lisi',
    password: '123',
    nickName: 'lisi'
  })
  console.log(zhangsan.dataValues.id)

  const blog1 = await Blog.create({
    title: '标题1',
    content: '内容1',
    userId: zhangsan.dataValues.id
  })
})()