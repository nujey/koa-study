// // 基于koa-websocket实现的即时通讯
const Koa = require('koa')

const route = require('koa-route')

const websockify = require('koa-websocket')

const app = websockify(new Koa())

app.ws.use(route.all('/test', (ctx) => {
  ctx.websocket.send('我试着用node发送一条')
  let num = 1
  ctx.websocket.on('message', function(message) {
    const param = {
      id: num++,
      msg: message
    }
    ctx.websocket.send(JSON.stringify(param))
  })
}))

app.listen(9001)
