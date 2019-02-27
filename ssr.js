/**
 * Created by shikuan on 2019/2/27.
 */

const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Router = require('koa-router');
const static = require('koa-static')
let home = new Router()
/**
 * 处理链接
 * @param {*要进行服务器渲染的文件名默认是build文件夹下的文件} fileName
 */
function handleLink(fileName, req, defineParams) {
    let obj = {};
    console.log(fileName);
    fileName = fileName.indexOf('.') !== -1 ? fileName.split('.')[0] : fileName;

    try {
        obj.script = `<script src="/dist/${fileName}.js"></script>`;
    } catch (error) {
        console.error(new Error(error));
    }
    //服务器渲染
    const dom = require(path.join(process.cwd(),`/build/${fileName}.js`)).default;
    let element = React.createElement(dom(req, defineParams));
    obj.html = ReactDOMServer.renderToString(element);

    return obj;
}


/**
 * 处理响应
 *
 * **/
home.get('/page1',(ctx) => {
    let obj = handleLink('page1', ctx.req, {});
    ctx.body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>SSR服务器渲染</title>
        </head>
        
        <body>
          <div id='app'>
             ${obj.html}
          </div>
        </body>
        ${obj.script}
        </html>
    `
})

app.use(static(
    path.join( __dirname,  '/')
))

app.use(home.routes())
    .use(home.allowedMethods());



app.listen(3000, () => {
    console.log("服务器已启动，请访问http://127.0.0.1:3000")
});
