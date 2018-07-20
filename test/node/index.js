import * as _koa from 'koa'
import * as _socket from 'socket.io'
import _helper from './lib/helper'
import _api from './lib/api'
var app = new _koa();
var a=new _api('aaa');
a.log();
_helper.character.test();
_helper.test();
console.log(_helper.awaitTest());
async function a(){
  var a=await _helper.awaitTest();
  console.log(a);
}
a()
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});


// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);