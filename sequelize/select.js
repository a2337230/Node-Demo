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

  // 连表查询 依赖于Blog.belongsTo
  // const blogListWithUser = await Blog.findAndCountAll({
  //   order: [
  //     ['id', 'desc']
  //   ],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['userName', 'nickName'],
  //       where: {
  //         userName: 'lisi'
  //       }
  //     }
  //   ]
  // })

  // console.log(
  //   blogListWithUser.count,
  //   blogListWithUser.rows.map(blog => {
  //     const blogVal = blog.dataValues
  //     // const user = blogVal.user.dataValues
  //     blogVal.user = blogVal.user.dataValues
  //     return blogVal
  //   })
  // )

  // 连表查询 依赖于User.hasMany
  const userList = await User.findAndCountAll({
    attributes: ['userName', 'nickName'],
    include: [
      {
        model: Blog
      }
    ]
  })
  console.log(
    '用户连表',
    userList.count,
    userList.rows.map(user => {
      console.log(user)
      // const userVal = user.dataValues
      // userVal.blog = userVal.blog.dataValues
      // return userVal
    })
  )
})()