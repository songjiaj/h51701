var express=require("express");//导入express库
var app=express();//创建一个express的实例
app.use(express.static('static'))//指定静态资源的目录
app.listen(8090,function(){
	console.log("连接成功")
})//设置监听的端口