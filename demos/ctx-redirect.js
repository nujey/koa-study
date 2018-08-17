const Koa = require('koa')
const app = new Koa()
// 引入路由模块
const route = require('koa-route')
// 引入文件模块
const fs = require('fs')

const redirect = ctx => {
  ctx.response.redirect('/about')
  ctx.response.body = "<a href='/'>首页</a>";
}

const about = ctx => {
  console.log(ctx)
  ctx.response.type = 'html'
  ctx.response.body = "<p>我是重定向的页面</p><a href='/templateHtml'>点击回到首页</a>"
}

const templateHtml = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream("./demos/test.html")
}
app.use(route.get('/redirect', redirect))
app.use(route.get('/about', about))
app.use(route.get("/templateHtml", templateHtml))

app.listen(3030)