/*
* path 路径模块
* path 路径模块提供了一些工具函数用来处理文件和目录的路径
* path 模块的默认操作会根据node所在的操作路径的不同而变化
* 要想在任何操作系统上处理windows文件路径时获取一致的结果，可以使用path.win32
**/
//path.basename()
const path = require('path')
const path1 = path.basename('f://note/mystore/node-demo/os/os.js','.js')
console.log(path1)