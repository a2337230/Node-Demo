const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 21!'
  })
})

router.get('/string', async (ctx, next) => {
  // ctx.body = 'koa2 string'
  ctx.body = {
    code: 200,
    data: 'koa2 string'
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
