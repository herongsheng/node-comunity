var express = require('express');
var router = express.Router();
var topicCtrl=require("../controller/topicController");
var userCheck=require("../config/userCheck");
/* GET home page. */

router.get('/create',userCheck,topicCtrl.create);
router.post('/docreate',userCheck,topicCtrl.docreate);
router.get('/show/:val',topicCtrl.topicDetall);
// 创建回复话题
router.post('/reply',userCheck,topicCtrl.reply);


module.exports = router;
