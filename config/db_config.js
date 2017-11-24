var mongoose=require("mongoose");

var Dburl="127.0.0.1",
dbPort="27017",
dbName="cnode";
// url=mongodb://127.0.0.1:27017/cnode
url="mongodb://"+Dburl+":"+dbPort+"/"+dbName;
// console.log(url);
mongoose.connect(url,function(err){
	if(err){
		console.log("链接数据库失败");
		return;
	}else{
		console.log("数据库连接成功");
	}
});
// console.log(mongoose);
module.exports=mongoose;