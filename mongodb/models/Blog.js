const mongoose = require('./../test2')

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  author: String
})

const Blog = mongoose.model('blog', BlogSchema)

module.exports = Blog