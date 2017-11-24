var mongoose=require("../config/db_config");



var replySchema=new mongoose.Schema({
	// 话题名称	
	content:String,
	
	uid:{
		type:"ObjectId",//通过session用户ID存进来
		ref:"conde_user"  
		//ref关联_上面的就是关联用户模型,
		//关联值类型一定是objectId,在关联数据模型里面一定要有这个ID
	},
	tid:{
		type:"ObjectId",//通过session用户ID存进来
		ref:"conde_topic"  
		//ref关联_上面的就是关联用户模型,
		//关联值类型一定是objectId,在关联数据模型里面一定要有这个ID
	},

})


var replyModel=mongoose.model("conde_reply",replySchema);



module.exports=replyModel;
