/**学习koa笔记:
 * npm init -y  生成一个默认的配置文件package.json
 * npm install --save koa 安装koa
 * 
 * 查看npm的源地址: npm config list
 * npm set registry https://registry.npmjs.org/
苹果用户查看自己本机的IP:  打开终端输入:ifconfig     我的ip是  172.20.3.144
 * 
 */
const Koa = require('koa') //1.引入koa框架
const app = new Koa() // 2.实例化
const Router = require('koa-router')
const router = new Router()
const json = require('koa-json')
router.prefix('/lxm')
// const cors = require('@koa/cors')
// const koaBody = require('')
// app.use(json({}));
//http://localhost:3000/lxm/api?name=aimee&age=18&pretty 使用以下参数的话地址栏传pretty就可以格式化
app.use(json({ pretty: false, param: 'pretty' }));
// 在控制它如果遇到一长串的json不好看,可以JSON.stringify(a,null,2),将a对象格式化成比较好阅读的格式

router.get('/', ctx => {
    ctx.body = 'hello world'
})


router.get('/api', ctx => {
    ctx.body = 'this is api'
    const params = ctx.request.query
    console.log('params', params)
    ctx.body = {
        name: params.name,
        age: params.age
    }
})


router.get('/user', ctx => {
        ctx.body = 'this is user page'
    })
    // app.use(async ctx => {
    //         ctx.body = 'hello world'
    //     }) // 3.应用
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000) //4.监听端口