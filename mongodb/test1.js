const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'myblog'

MongoClient.connect(
  url,
  {
    useUnifiedTopology: true
  },
  (err, client) => {
    if (err) {
      console.log('错误')
      return
    }
    // console.log(client)

    const db = client.db(dbName)
    // 使用集合
    const users = db.collection('users')

    users.find({
      username: 'zhangsan'
    }).toArray((err, result) => {
      if (err) {
        return
      }
      console.log(result)
    })
  }
)
