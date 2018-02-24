/*
* fork是spawn的一种特殊形式，固定spawn node.js 进程，并且在主子进程间建立了通信通道，让主子进程
* 可以使用process模块基于事件进行通信(将counter从子进程发送的主进程)
**/
//parent.js
const { fork } = require('child_process')
const child = fork('fork-child.js')
child.on('message', (msg) => {
	console.log('message from child',msg)

})
child.send({hello:'world'})