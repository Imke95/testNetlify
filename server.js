const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');

const port = 3000;

console.log("Hello World");

const app = new Koa();
app.use(serve(path.resolve('.')));

module.exports = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});