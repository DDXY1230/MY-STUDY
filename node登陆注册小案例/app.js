const http = require('http')
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')
let user = {
    admin: '123'
}
http.createServer((req, res) => {
    console.log('8089端口启动了')
    let path, get, post
    if (req.method == 'GET') {
        let {
            pathname,
            query
        } = url.parse(req.url, true)
        path = pathname
        get = query
        complete()

    } else if (req.method == 'POST') {
        let arr = []
        req.on('data', buffer => {
            arr.push(buffer)
        })
        req.on('data', () => {
            post = querystring.parse(Buffer.concat(arr).toString())
            console.log('post', post)
            complete()

        })
    }

    function complete() {
        if (path == '/login') {
            let {
                username,
                password
            } = get
            // 拿到用户名和密码到数据库里面去判断
            if(!user[username]) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end(JSON.stringify({
                    err: 1,
                    msg: '用户名不存在'
                }))
            } else if (user[username] != password) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end(JSON.stringify({
                    err: 0,
                    msg: '密码错误'
                }))
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end(JSON.stringify({
                    msg: '密码正确'
                }))
            }
        } else if (path == '/reg') {
            let {
                username,
                password
            } = post
            if (user[username]) {
                res.end(JSON.stringify({
                    err: 1,
                    msg: '账户已经存在，不能竹醋'
                }))
            } else {
                res.end(JSON.stringify({
                    err: 0,
                    msg: '注册成功'
                }))
            }
        } else {
            fs.readFile(`./index.html`, (err, data) => {
                if (err) {
                    res.end('404')
                } else {
                    res.end(data)
                }
            })
        }
    }
}).listen(8089)