var http = require("http");
var server = http.createServer(handle);
var mime = require("mime");
var fs = require("fs");


function serverStatic(res,filePath){
   fs.exists(filePath,function(exists) {
        if(exists){
            fs.readFile(filePath,function(err,data){
                if(err){
                    return;
                }
                res.writeHead(200,{"Content-Type":mime.lookup(filePath)});
                res.end(data);
            })
        }else{
            res.writeHead(404,{"Content-Type":"text/plain"})
            res.end("sorry,is not found")
        }
   });
}

function handle (req,res) {
	var filePath = "";
	if (req.url == "/") {
		filePath = __dirname + "/public/html/index.html";
	}else{
		filePath = __dirname + "/public" + req.url;
	}
	serverStatic(res,filePath);
}

server.listen(3000,function () {
	console.log("启动成功");
});
