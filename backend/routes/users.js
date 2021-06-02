const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')

// Get all users
router.get('/', async (req, res) => {
    try {
      const users = await User.find()
      res.send(users)
    } catch (error) {
      res.send({ message: error })
    }
})

module.exports = router