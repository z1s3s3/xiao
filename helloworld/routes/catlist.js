let express = require('express')
let router = express.Router()
const userController = require('../Controller/userController')
router.get('/user/list', userController.userlist)
router.get('/user/del', userController.deleteUser)
router.get('/user/add', userController.addUser)
module.exports = router