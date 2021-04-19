// 创建模型
const Sequelize = require('sequelize')

const seq = require('./seq')

const User = seq.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING
  }
})

const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
// 外键关联 方法1
Blog.belongsTo(User, {
  foreignKey: 'userId'
})
// 外键关联 方法2
User.hasMany(Blog, {
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}