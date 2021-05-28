const express    = require('express')
const router     = express.Router()

const AuthController   = require('../controllers/AuthControllers')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/user', AuthController.user)
router.post('/logout', AuthController.logout)

module.exports = router 