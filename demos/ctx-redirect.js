const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const redirect = ctx => {
  ctx.response.redirect('/about')
  ctx.response.body = "<a href='/'>首页</a>";
}
const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = "<p>我是重定向的页面</p>"
}
app.use(route.get('/redirect', redirect))
app.use(route.get('/about', about))
app.listen(3030)