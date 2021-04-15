const mongoose = require('mongoose')

const url = 'mongodb://43.128.12.129:27017'
const dbName = 'myblog'

mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log('链接成功')
})

module.exports = mongoose