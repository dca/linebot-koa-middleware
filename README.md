# linebot-koa-middleware

## usage 

```
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const linebot = require('linebot');
const linebotKoaMiddleware = require('linebot-koa-middleware');

const app = new Koa();
const linebotInstance = linebot({
  //...
});

//
app.use(bodyParser());

// call after body with linebot instance
app.use(linebotKoaMiddleware(linebotInstance));

app.listen(3000);

```
