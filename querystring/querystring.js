/*
* querystring 模块提供了一些实用函数，用于解析和格式化URL查询字符串
**/
const querystring = require('querystring')

querystring.escape(str) => querystring.stringify() //配合使用
querystring.parse() => querystring.unescape(str) //配合使用

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// 返回 'foo:bar;baz:qux'