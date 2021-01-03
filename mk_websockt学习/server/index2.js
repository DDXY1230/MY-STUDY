const WebSocket = require('ws')
const wss = new WebSocket.Server({
  noServer: true
})
const http = require('http')
const server = http.createServer()
const jwt = require('jsonwebtoken')

const timeInterval = 1000

let num = 0
let group = {}
wss.on('connection', function connection(ws) {
  ws.isAlive = true
  console.log('one client is connected')
  // 接收客户端发过来的消息
  ws.on('message', function (msg) {
    console.log('连接成功', msg)
    // ws.send(msg)
    // 往所有的客户端去广播消息
    const msgObj = JSON.parse(msg)
    if (msgObj.event === 'enter') {
      ws.userName = msgObj.message
      ws.roomId = msgObj.roomId
      if(typeof group[ws.roomId] === 'undefined'){
        group[ws.roomId] = 1
      }else {
        group[ws.roomId] ++
      }
      num++
    }
    // 进行鉴权
    if(msgObj.event === 'auth') {
      jwt.verify(msgObj.message, 'secret', (err,decode) => {
        if(err) {
          // 鉴权失败,websocket返回给前端错误信息
          console.log('auth error')
          return
        }else {
          // 鉴权成功
          console.log(decode)
          ws.isAuth = true
          return 
        }
      })
    }
    if(!ws.isAuth) {
      ws.send(JSON.stringify({event: 'noauth',message: '鉴权未通过,please auth again'}))
      return
    }
    // 心跳检测
    if(msgObj.event === 'heartbeat' && msgObj.message === 'pong'){
      ws.isAlive = true
      return
    }
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      // if(ws !== client && client.readyState === WebSocket.OPEN){
      if (client.readyState === WebSocket.OPEN && client.roomId === ws.roomId) {

        msgObj.userName = ws.userName
        // msgObj.num = wss.clients.size
        msgObj.num = group[ws.roomId]
        client.send(JSON.stringify(msgObj))
      }
    })
  })
  // 主动发送消息给客户端
  // ws.send('服务器发送给客户端消息')

  // 当有人断开离开聊天室的时候
  ws.on('close', function () {
    if (ws.userName) {
      group[ws.roomId] --
    }
    let msgObj = {}
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      // if(ws !== client && client.readyState === WebSocket.OPEN){
      if (client.readyState === WebSocket.OPEN && ws.roomId === client.roomId) {

        msgObj.userName = ws.userName
        // msgObj.num = wss.clients.size
        msgObj.num = group[ws.roomId]
        msgObj.event = 'out'
        client.send(JSON.stringify(msgObj))
      }
    })

  })
})
server.on('upgrade', function upgrade(request, socket, head) {
  console.log('TCL: upgrade -> request', request)
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request)
  })
})
server.listen(3000)


// 这个文件加入了鉴权,首先  npm install jsonwebtoken



setInterval(() => {
  wss.clients.forEach((ws) => {
    if(!ws.isAlive) {
      group[ws.roomId] --
      return ws.terminate()
    }
    // 主动发送心跳检测
    // 当客户端返回消息的时候,主动设置flag在线
    ws.isAlive = false
    ws.send(JSON.stringify({
      event: 'heartbeat',
      message: 'ping'
    }))
  })
}, timeInterval);