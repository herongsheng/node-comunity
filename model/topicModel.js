var mongoose=require("../config/db_config");
// console.log(mongoose);


//_id: mongodb.ObjectId(req.body.id);转objId
var topicSchema=new mongoose.Schema({
	// 话题名称	
	topicname:String,
	//谁登陆,谁发布
	uid:{
		type:"ObjectId",//通过session用户ID存进来
		ref:"conde_user"  
		//ref关联_上面的就是关联用户模型,
		//关联值类型一定是objectId,在关联数据模型里面一定要有这个ID
	},
	content:String,

})


var topicModel=mongoose.model("conde_topic",topicSchema);



module.exports=topicModel;
