/*
* console控制台
* console模块提供了一个简单的调试控制台，类似于web浏览器的js控制台
* 该模块导出连个特定的组件，一个console类，一个全局的console实例，全局的console使用时不用调用require('console')
**/
//使用全局的console
console.log('hello world ')
console.error('hello error')
console.warn('hello warn')
//使用console类
const out = getStreamSomehow();//这里的两个方法没有定义，会报错
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);

myConsole.log('你好世界');
// 打印: '你好世界'到 out。
myConsole.log('你好%s', '世界');
// 打印: '你好世界'到 out。
myConsole.error(new Error('错误信息'));
// 打印: [Error: 错误信息]到 err。

const name = '描述';
myConsole.warn(`警告${name}`);
// 打印: '警告描述'到 err。