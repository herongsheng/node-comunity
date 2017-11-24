var express = require('express');
var router = express.Router();
var userCtrl=require("../controller/userController");


// 接users后面的分之
// 注册
router.get('/reg',userCtrl.reg);
//提交注册
router.post('/doreg',userCtrl.doreg);
router.get('/login',userCtrl.login);
router.post('/dologin',userCtrl.dologin);
router.get('/loginout',userCtrl.loginout);

module.exports = router;
