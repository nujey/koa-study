const Koa = require('koa')
const app = new Koa()

const one = (ctx, next) => {
  console.log('one  >>')
  next()
  console.log('<<  one')
}

const two = (ctx, next) => {
  console.log('two  >>')
  next()
  console.log('<<  two')
}

app.use(one)
app.use(two)

app.listen(3030)
