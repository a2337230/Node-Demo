const seq = require('./seq')

require('./model')

seq.sync({ force: true }).then(() => {
  console.log('同步成功')
  process.exit()
})