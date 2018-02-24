/*
* os 操作系统
* os 模块提供了一些操作系统相关的方法，可以获取操作系统相关的信息
**/
const os = require('os')
//cpu的字节序
console.log('cpu的字节序：'+os.endianness())//cpu的字节序：LE
//操作系统名称
console.log('操作系统名称：'+ os.type())//操作系统名称：Windows_NT
//操作系统类型
console.log('操作系统类型：'+ os.platform())//操作系统类型：win32
//系统内存总量
console.log('系统内存总量：'+ os.totalmem()+'bytes')//系统内存总量：7989821440bytes
//操作系统内存空闲量
console.log('操作系统内存空闲量：'+ os.freemem()+'bytes')//操作系统内存空闲量：4097490944bytes