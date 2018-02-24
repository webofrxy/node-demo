/*
* child_process 子进程
* 子进程使用场景
*	计算密集型系统
*	前端构建工具利用多核 CPU 并行计算，提升构建效率,如webpack
*	进程管理工具，如：PM2 中部分功能
* 关于exec、spawn、fork
*     1.exec函数是对spawn的一种友好封装，增加Shell命令解析，可以直接嵌入复杂的命令
*     2.exec函数缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回
*     3.spawn在子线程开始执行后，就开始不断将数据从子进程返回给主进程（应用场景如“系统监控”）
*     4.spawn是不支持callback函数的，它通过流的方式发数据传给主进程，从而实现了多进程之间的数据交换
*     5.fork()是spawn()的特殊情景，用于派生Node进程。除了普通ChildProcess实例所具有的所有方法，所返回的对象还具有内建的通讯通道。
**/

const { spawn} = require('child_process')

const ls = spawn('cmd.exe',['/c',' npm'],{
	stdio:'inherit'
})

ls.stdout.on('data',(data) => {
	console.log(`输出：${data.toString}`);
})
ls.stderr.on('data',(data) => {
	console.log(`错误：${data}`)
})
ls.on('close',(code) => {
	console.log(`子进程退出码：${code}`)
})