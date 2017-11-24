var userModel=require("../model/userModel");
// console.log(db);
var userController={};

userController.reg=function(req, res, next) {
  res.render("home/reg");
};
userController.doreg=function(req, res, next) {
		// console.log(req.body);
		var con={
			uname:req.body.uname
		}
		// 查询数据库是否有重名
		userModel.findOne(con,function(err,data){
			// console.log(data);
			// 有数据返回 obj true
			if(data){
				// console.log("用户名已经存在");
				// 加入 flash错误信息提示模块模块
				req.session.data=data;
				req.flash("errMsg","用户名已经存在");
				// 用户命名存在重新返回注册页面
				res.redirect("/users/reg");
				return;
			}else{
				// 如果没有数据返回null
				userModel.create(req.body,function(err,info){
					if(err){return;}
					// 注册完毕  跳转登陆
					res.redirect("/users/login");
				})

			}
		})
	
};
userController.login=function(req, res, next) {
  res.render("home/login");
};
userController.dologin=function(req, res, next) {
	// 获取用户登陆信息
	// console.log(req.body);
	//{ uname: '程咬金', upwd: '123456' }

	userModel.findOne(req.body,function(err,data){
		// console.log(data);
		// 没有数据差不到 返回 null
		if(!data){
			req.flash("errMsg","用户名或密码错误");
				// 用户命名存在重新返回注册页面
				res.redirect("/users/login");
				return;
		}else{
			// 把当前登录用数据挂在 session
			req.session.data=data;
			res.redirect("/");
			// res.send("OK");
		}
	})
};
userController.loginout=function(req, res, next) {
 	req.session.data=null;
 	res.redirect("/");
};
module.exports=userController;
