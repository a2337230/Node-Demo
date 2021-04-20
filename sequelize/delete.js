const { User, Blog } = require('./model')

!(async function() {
  const userRes = await User.destroy({
    where: {
      userName: 'lisi'
    }
  })
})()