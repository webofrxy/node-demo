/*
*	assert.ifError(value) 
* 	如果value为真，则抛出value。可以用于测试回调函数的error参数
**/
const assert = require('assert')

assert.ifError(1)