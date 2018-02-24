/*
* dns 是域名服务器
* dns模块包括两类函数：
* 第一类： 使用底层操作系统工具进行域名解析，且无需进行网络通信，这类函数只有一个：dns.lookup();
* 第二类： 连接到一个真实的dns服务器进行域名解析，而且始终使用网络进行dns进行查询，这类函数包括了除dns.lookup()之外的所有函数
**/

const dns = require('dns')
dns.lookup('www.baidu.com',(err,address,family) => {
	console.log('IP 地址: %j 地址族: IPv%s',address,family);//%j是占位符
})