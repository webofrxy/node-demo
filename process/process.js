/*
* process 进程
* process 对象是一个全局变量，它提供当前node进程的相关信息，以及控制当前node的进程，因为是全局变量，所以不需要使用require();
* process 对象是一个EventEmitter的实例
* process 对象下有一系列的事件，包括
* 'beforeExit',
* 'exit' 进程结束事件,
* 'disconnect' IPC通道关闭事件,
* 'message'父子进程通信信息事件,
* 'rejectHandled'错误处理器事件,
* 'uncaughtException' 异常捕获事件
* 'warning' 进程警告事件 
**/
process.on('warning',(warning) => {
	console.warn(warning.name)//打印告警名称
	console.warn(warning.message)//打印告警信息
	console.warn(warning.stack)//打印堆栈信息
})