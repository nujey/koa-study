const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">返回首页</a>'
}
const home = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<p>首页是main</p>'
}
 app.use(route.get('/', home))
 app.use(route.get('/about', about))

 app.listen(3030)
 