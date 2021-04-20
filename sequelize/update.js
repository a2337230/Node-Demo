const { User } = require('./model')

!(async function () {
  const updateRes = await User.update({
    nickName: '李四1'
  }, {
    where: {
      userName: 'lisi'
    }
  })
})()