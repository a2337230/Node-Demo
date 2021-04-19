const Sequelize = require('sequelize')

const seq = new Sequelize('blog', 'blog', 'PAEcYiKCdpHXhtp3', {
  host: '43.128.12.129',
  dialect: 'mysql'
})

module.exports = seq

seq.authenticate().then(() => {
  console.log('ok')
}).catch(() => {
  console.log('err')
})