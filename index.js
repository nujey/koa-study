const Koa = require('koa')
const app = new Koa()

// const main = ctx => {
//   ctx.response.body = "hello CC";
// }

const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello world xml</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = {data: 'json hello world'};
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>html hello world</p>'
  } else {
    ctx.response.type = 'text'
    ctx.response.body = 'hello world text'
  }
}

app.use(main)

app.listen(3030)