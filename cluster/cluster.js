/*
* node在单个线程中运行单个实例。开发者为了使用现在的多核系统，有时候会用一串node。js进程去处理负载任务
* cluster模块允许简单容易的创建共享服务器端口的子进程
**/
const cluster = require('cluster');
const http = require('http')
const numCPUs = require('os').cpus().length;
if(cluster.isMaster) {
	console.log(`主进程 ${process.pid} 正在运行`);
	//衍生工作进程
	for(let i = 0;i< numCPUs; i++){
		cluster.fork();
	}
	cluster.on('exit',(worker,code,signal) => {
		console.log(`工作进程 ${worker.process.pid} 已退出`)
	})
}else{
	//工作进程可以共享任何TCP连接
	//在本例中，共享的是一个HTTP服务器
	http.createServer((req,res) => {
		res.writeHead(200);
		res.end('你好世界\n')
	}).listen(8000)

	console.log(`工作进程 ${process.pid} 已启动`)
}