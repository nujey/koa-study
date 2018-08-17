const Koa = require('koa')
const app = new Koa()

const main = (ctx) => {
  console.log(1111)
  ctx.response.type = "html"
  ctx.response.body = "<p>我就是一个不起眼的小标签</p>"
}

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next()
}


app.use(main)

app.use(logger)

app.listen(3030)