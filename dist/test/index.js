"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _koa = require("koa");
const helper_1 = require("./lib/helper");
var app = new _koa();
helper_1.default.character.test();
helper_1.default.test();
console.log(helper_1.default.awaitTest());
async function a() {
    var a = await helper_1.default.awaitTest();
    console.log(a);
}
a();
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
app.use(async (ctx) => {
    ctx.body = 'Hello World';
});
app.listen(3000);
//# sourceMappingURL=index.js.map