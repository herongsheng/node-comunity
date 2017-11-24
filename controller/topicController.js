var userModel=require("../model/userModel");
var topicModel=require("../model/topicModel");
var replyModel=require("../model/replyModel");

var topicController={};

topicController.create=function(req, res, next) {
 	res.render("home/topicCreate");
};
topicController.docreate=function(req, res, next) {
	console.log(req.body)
	// console.log(req.session.data) // 拿到当前登录用户信息
	// console.log(req.body);  拿到用户输入内容
 	// res.send("OK")
 	var con={
 		// 发表标题
 		topicname:req.body.title,
 		// 发表内容
 		content:req.body.content,
 		//谁登陆谁发表
 		uid:req.session.data._id
 	}
topicModel.create(con,function(err,info){
	// 拿到当前话题Id
	//存数据可以拿到话题在数据库里面的位置Id
	console.log(info);
		res.redirect("/topic/show/"+info._id);
})
// <a href="topic/show/"+"data._id"><=title></>
 
};
topicController.topicDetall=function(req,res){

	// 在这拿到url里面拼接的代表话题的id
	var topiccon={
		_id:req.params.val
	}
// populate关联查询
//ref关联_上面的就是关联用户模型,
//关联值类型一定是objectId,在关联数据模型里面一定要有这个ID
//查话题部分
	topicModel.findOne(topiccon).populate("uid",{uname:1,gold:1,desc:1}).exec(function(err,data){
		var replycon={
			tid:req.params.val
		}	
		replyModel.find(replycon).populate("uid",{uname:1,gold:1,desc:1}).exec(function(err,reply){
				res.render("home/topicDetall",{data:data,replydata:reply});

		})


	})
// 查询回复部分



}



topicController.reply=function(req, res, next) {
	// console.log(req.body);
	var con={
		content:req.body.content,
		tid:req.body.tid,
		uid:req.session.data._id
	}
	replyModel.create(con,function(err,data){
		 // res.send("OK");
		 if(err){console.log(err);return;}
		 // 插入成功重新跳转show topicDetall
		res.redirect("/topic/show/"+req.body.tid);
	})
	

};
module.exports=topicController;
