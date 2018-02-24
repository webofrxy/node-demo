/*
* 大多数node.js的核心API都是采用异步事件驱动架构，其中某些类型的对象会周期性的触发命名事件来调用函数对象（监听器）
**/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发了一个事件！');
});
myEmitter.emit('event');