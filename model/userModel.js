var mongoose=require("../config/db_config");
// console.log(mongoose);

var userSchema=new mongoose.Schema({
	// 账号
	uname:{
		type:String,
		unique:true
	},
	// 用户名是字符串类型,并且是唯一
	// 密码
	upwd:String,
	//个性签名
	desc:{
		type:String,
		default:""     //views data.desc?data.desc:"这个家伙很懒"
	},
	//用户头像
	userpic:{
		type:String,
		default:""
	},
	gold:{
		type:Number,
		default:10
	}
})

// var userModel=mongoose.model("集合",userSchema用户骨架);
// .. 建立数据模型
var userModel=mongoose.model("conde_user",userSchema);


// 测试完成
// userModel.create({uname:"Msea"},function(err,info){
// 		if(err){console.log(err+"插入失败");return;}
// 		})
// 暴露 用户数据模型

module.exports=userModel;
