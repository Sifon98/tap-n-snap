const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  // image: {
  //   type: Buffer,
  //   required: true
  // },
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: Array
})

module.exports = mongoose.model('Posts', PostSchema)
