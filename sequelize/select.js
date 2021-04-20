const { Blog, User } = require('./model')

!(async function () {
  const zhangsan = await User.findOne({
    attributes: ['userName', 'nickName'],
    where: {
      userName: 'zhangsan'
    }
  })
  console.log(zhangsan.dataValues)

  const find = await Blog.findAll({
    where: {
      userId: 4
    },
    order: [
      ['id', 'desc']
    ]
  })
  console.log(find.map(blog => blog.dataValues))
  // 分页
  const blogPage = await Blog.findAll({
    limit: 2, // 限制查询条数
    offset: 0 // 跳过条数
  })

  // 查询总数
  const blogListCount = await Blog.findAndCountAll({
    limit: 2,
    offset: 0,
    order: [
      ['id', 'desc']
    ]
  })
  console.log(blogListCount.count, blogListCount.rows)

  // 连表查询
  const blogListWithUser = await Blog.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: User,
        attributes: ['userName', 'nickName'],
        where: {
          userName: 'lisi'
        }
      }
    ]
  })

  console.log(
    blogListWithUser.count,
    blogListWithUser.rows.map(blog => {
      const blogVal = blog.dataValues
      const user = blogVal.user.dataValues
      console.log(blogVal, user)
    })
  )
})()