/*
*	assert 断言
* 	assert(value),value如果是true，则返回value；value 如果为false，则抛出异常提示
**/

const assert = require('assert')
assert(1) 	//ok
assert(false,'msg')
assert(false)	//AssertiononError: false == true
// console.log(assert)