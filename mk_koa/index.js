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


router.get('/', ctx => {
    ctx.body = 'hello world'
})


router.get('/api', ctx => {
    ctx.body = 'this is api'
})


router.get('/user', ctx => {
        ctx.body = 'this is user page'
    })
    // app.use(async ctx => {
    //         ctx.body = 'hello world'
    //     }) // 3.应用
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000) //4.监听端口