
const linebotKoaMiddleware = (bot) => {
  return async (ctx) => {
    if (bot.options.verify && !bot.verify(ctx.request.rawBody, ctx.headers['x-line-signature'])) {
      return ctx.status = 400
    }
    bot.parse(ctx.request.body)
    ctx.body = {}
  }
}

module.exports = linebotKoaMiddleware

