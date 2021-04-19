const mongoose = require('./../test2')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true, // 必传
    unique: true // 唯一
  },
  // username: String,
  password: String,
  realname: String
})

// Model 对应collection
const User = mongoose.model('user', UserSchema)

module.exports = User