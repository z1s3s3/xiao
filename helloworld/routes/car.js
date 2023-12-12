var express = require('express');
var router = express.Router();
const controller = require("../Controller/userController")
// 获取数据
router.get('/car', controller.list);

module.exports = router;