function userCheck(req,res,next){
	if(!req.session.data){
		res.redirect("/users/login");
		return;
	}
	next();
}


module.exports=userCheck;