const express = require('express')
const authMiddlware = require('../middlewares/auth.middleware')
const chatController = require('../controllers/chat.controller')
const router = express.Router()


router.post('/',authMiddlware.authUser,chatController.createChat)

module.exports = router